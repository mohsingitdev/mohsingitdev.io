import os
import subprocess
import numpy as np
from PIL import Image

def assemble_hero_video_and_poster():
    src_dir = r"C:\Users\mohsi\Research\mohsingitdev.io\public\assets\hero\_src"
    output_mp4 = r"C:\Users\mohsi\Research\mohsingitdev.io\public\assets\hero\higgsfield-hero.mp4"
    output_poster = r"C:\Users\mohsi\Research\mohsingitdev.io\public\assets\hero\higgsfield-hero-poster.webp"
    ffmpeg_exe = r"C:\Users\mohsi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.13_qbz5n2kfra8p0\LocalCache\local-packages\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg.exe"
    
    # Verify input frames
    frame_names = ["frame_00.png", "frame_01.png", "frame_02.png", "frame_03.png"]
    frames_pil = []
    for fn in frame_names:
        fp = os.path.join(src_dir, fn)
        if not os.path.exists(fp):
            raise FileNotFoundError(f"Missing required frame: {fp}")
        img = Image.open(fp).convert("RGB")
        img = img.resize((1920, 1080), Image.Resampling.LANCZOS)
        frames_pil.append(img)
    
    print("All 4 source frames loaded successfully at 1920x1080.")
    
    # 6.0 seconds at 24 fps = 144 frames
    total_frames = 144
    fps = 24
    
    # Temporary directory for rendered frames
    temp_frames_dir = os.path.join(src_dir, "temp_render_frames")
    os.makedirs(temp_frames_dir, exist_ok=True)
    
    # Sequence of keyframe targets across the 6-second timeline:
    # 0.0s: frame_00
    # 1.5s: frame_01
    # 3.0s: frame_02
    # 4.5s: frame_03
    # 6.0s: frame_00 (loop dissolve back to start)
    key_frames = [frames_pil[0], frames_pil[1], frames_pil[2], frames_pil[3], frames_pil[0]]
    num_segments = len(key_frames) - 1 # 4 segments
    frames_per_seg = total_frames / num_segments # 36 frames per segment
    
    print(f"Generating {total_frames} Ken Burns push frames with smooth crossfades...")
    
    w, h = 1920, 1080
    cx, cy = w / 2.0, h * 0.45 # focal center
    
    for f_idx in range(total_frames):
        t = f_idx / total_frames # 0.0 to 1.0
        
        # Ken Burns push: 1.00x at t=0 to 1.08x at t=0.85, then gentle settle to match loop
        # S-curve progression for slow cinematic push
        scale = 1.0 + 0.08 * (0.5 * (1.0 - np.cos(np.pi * t)))
        
        # Determine current segment
        seg_idx = int(f_idx // frames_per_seg)
        seg_idx = min(seg_idx, num_segments - 1)
        seg_t = (f_idx - (seg_idx * frames_per_seg)) / frames_per_seg
        
        # Smooth cosine blend between key_frames[seg_idx] and key_frames[seg_idx + 1]
        blend_factor = 0.5 * (1.0 - np.cos(np.pi * seg_t))
        
        img_a = np.array(key_frames[seg_idx], dtype=np.float32)
        img_b = np.array(key_frames[seg_idx + 1], dtype=np.float32)
        blended_np = (1.0 - blend_factor) * img_a + blend_factor * img_b
        blended_pil = Image.fromarray(np.clip(blended_np, 0, 255).astype(np.uint8))
        
        # Apply zoom/push centered at cx, cy
        crop_w = w / scale
        crop_h = h / scale
        left = max(0, cx - crop_w / 2.0)
        top = max(0, cy - crop_h / 2.0)
        right = min(w, left + crop_w)
        bottom = min(h, top + crop_h)
        
        cropped = blended_pil.crop((left, top, right, bottom))
        final_frame = cropped.resize((w, h), Image.Resampling.LANCZOS)
        
        frame_file = os.path.join(temp_frames_dir, f"frame_{f_idx:04d}.png")
        final_frame.save(frame_file, format="PNG")
        
    print("All 144 frames rendered. Encoding MP4 via ffmpeg...")
    
    # Encode MP4 using ffmpeg:
    # 1920x1080, 24fps, H.264, yuv420p, no audio (-an), +faststart, target under 6MB
    input_pattern = os.path.join(temp_frames_dir, "frame_%04d.png")
    cmd = [
        ffmpeg_exe,
        "-y",
        "-framerate", str(fps),
        "-i", input_pattern,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-an",
        "-movflags", "+faststart",
        "-crf", "18",
        "-t", "6.0",
        "-vf", "scale=1920:1080",
        output_mp4
    ]
    
    subprocess.run(cmd, check=True)
    mp4_size = os.path.getsize(output_mp4)
    print(f"MP4 successfully generated at: {output_mp4} ({mp4_size / (1024*1024):.2f} MB)")
    
    # Extract frame 0 of the finished MP4 to create the WebP poster
    # Ensures poster exactly matches video frame 0
    print("Extracting frame 0 of the finished MP4 for the WebP poster...")
    cmd_poster = [
        ffmpeg_exe,
        "-y",
        "-ss", "00:00:00.000",
        "-i", output_mp4,
        "-vframes", "1",
        "-c:v", "libwebp",
        "-quality", "92",
        output_poster
    ]
    subprocess.run(cmd_poster, check=True)
    poster_size = os.path.getsize(output_poster)
    print(f"Poster successfully generated at: {output_poster} ({poster_size / 1024:.2f} KB)")
    
    # Clean up temp frames
    for f in os.listdir(temp_frames_dir):
        os.remove(os.path.join(temp_frames_dir, f))
    os.rmdir(temp_frames_dir)
    print("Temporary render frames cleaned up.")

if __name__ == "__main__":
    assemble_hero_video_and_poster()
