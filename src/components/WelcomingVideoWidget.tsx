import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Sparkles, 
  ArrowUpRight, 
  FileText, 
  RotateCcw,
  Video
} from 'lucide-react';

interface WelcomingVideoWidgetProps {
  onBookCall: () => void;
  onExploreDemos: () => void;
  onRequestResume: () => void;
}

const CAPTIONS = [
  "👋 Hey! Welcome to my engineering portfolio & architecture lab.",
  "⚡ Hardening generative AI prototypes into sub-40ms enterprise systems.",
  "🛒 Ex-Flipkart: Handled 100k+ req/sec & cut token bills by 72% with SLMs.",
  "🔬 Ex-Novartis & Accenture: Zero-hallucination RAG with 100% auditability.",
  "🚀 Play with the live SLM router below or schedule a 1:1 roadmap sync!"
];

export const WelcomingVideoWidget: React.FC<WelcomingVideoWidgetProps> = ({
  onBookCall,
  onExploreDemos,
  onRequestResume,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const [captionIndex, setCaptionIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cycle through welcoming captions every 4.5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCaptionIndex((prev) => (prev + 1) % CAPTIONS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle Video Time Updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 30;
      setProgress((current / duration) * 100);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. COLLAPSED FLOATING GENZ VIDEO BUBBLE (BOTTOM-RIGHT)   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center select-none"
          >
            {isMinimized ? (
              // Ultra-compact pill when minimized
              <button
                onClick={() => setIsMinimized(false)}
                className="group p-3 rounded-full bg-[#0B0F17]/95 border border-terracotta/40 text-terracotta shadow-2xl backdrop-blur-xl hover:scale-110 hover:border-terracotta transition-all flex items-center gap-2"
                title="Open Video Intro"
              >
                <div className="relative">
                  <Video className="w-5 h-5 text-amber-300" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border-2 border-black" />
                </div>
              </button>
            ) : (
              // Full GenZ Loom-style interactive bubble
              <div className="relative group">
                {/* Ambient glow behind widget */}
                <div className="absolute inset-0 rounded-full bg-terracotta/25 blur-xl group-hover:bg-terracotta/40 transition-all pointer-events-none" />

                <div className="relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#0B0F17]/90 border border-terracotta/40 hover:border-terracotta backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  
                  {/* Clickable trigger area */}
                  <div 
                    onClick={() => { setIsOpen(true); setIsPlaying(true); }}
                    className="flex items-center gap-3"
                    role="button"
                    tabIndex={0}
                    aria-label="Watch Welcoming Video Intro"
                  >
                    {/* Animated Avatar / Looping Studio Thumbnail */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300/60 shadow-inner shrink-0 bg-neutral-900">
                      <img
                        src="./images/steve_jobs_studio_cinematic_intro.webp"
                        alt="Mohsin Qureshi Welcoming Video"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Live play overlay icon */}
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                      {/* Active green pulse dot */}
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B0F17] animate-pulse" />
                    </div>

                    {/* Welcoming Text & Soundwave Animation */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-300 flex items-center gap-1">
                          <span>👋 QUICK INTRO</span>
                        </span>
                        <span className="text-white/30">•</span>
                        {/* GenZ Audio Equalizer bars */}
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 bg-terracotta rounded-full animate-bounce [animation-delay:-0.3s] h-full" />
                          <span className="w-0.5 bg-amber-300 rounded-full animate-bounce [animation-delay:-0.15s] h-2/3" />
                          <span className="w-0.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.45s] h-4/5" />
                          <span className="w-0.5 bg-terracotta rounded-full animate-bounce [animation-delay:-0.2s] h-1/2" />
                        </div>
                      </div>

                      <span className="text-xs font-sans font-bold text-white group-hover:text-amber-200 transition-colors flex items-center gap-1">
                        Meet Mohsin Qureshi <ArrowUpRight className="w-3 h-3 text-terracotta" />
                      </span>
                    </div>
                  </div>

                  {/* Tiny Minimize Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMinimized(true);
                    }}
                    className="p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                    title="Minimize"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2. EXPANDED LUXURY GENZ VIDEO PLAYER MODAL / DRAWER       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2.5rem)] xs:w-[360px] sm:w-[380px] rounded-[28px] overflow-hidden bg-[#0B0F17]/95 border border-terracotta/40 shadow-[0_24px_64px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col"
          >
            {/* Top Bar Header */}
            <div className="p-3.5 px-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-white tracking-wide uppercase">
                  Mohsin Qureshi • Live Studio
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  title="Close Video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Viewport (9:14 Aspect Ratio with Custom Controls) */}
            <div className="relative w-full aspect-[4/5] bg-black overflow-hidden flex items-center justify-center group/video">
              
              {/* HTML5 Video with Fallback to Animated Studio GIF */}
              {!hasVideoError ? (
                <video
                  ref={videoRef}
                  src="./video/intro.mp4"
                  poster="./images/steve_jobs_studio_cinematic_intro.webp"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onError={() => setHasVideoError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Seamless fallback to animated studio loop
                <img
                  src="./images/steve_jobs_studio_cinematic_intro.webp"
                  alt="Mohsin Qureshi Studio Greeting"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Ambient Cinematic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-black/60 text-amber-300 border border-amber-300/30 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>AI Systems Engineer</span>
                </span>
              </div>

              {/* Center Play/Pause Overlay on Click */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center z-10 focus:outline-none"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {!isPlaying && (
                  <div className="w-14 h-14 rounded-full bg-terracotta/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md animate-scale-in">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                )}
              </button>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-3 inset-x-3 z-20 space-y-2">
                {/* Dynamic GenZ Synchronized Subtitles */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={captionIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="p-2.5 rounded-xl bg-black/75 border border-white/15 backdrop-blur-md text-center shadow-lg"
                  >
                    <p className="text-xs font-sans font-medium text-white/95 leading-snug">
                      {CAPTIONS[captionIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Scrubber & Action Controls */}
                <div className="flex items-center justify-between text-white/80 pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-1 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>

                    <button
                      onClick={restartVideo}
                      className="p-1 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title="Replay"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Progress Line */}
                  <div className="flex-1 mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-terracotta rounded-full transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="text-[10px] font-mono text-white/60">
                    0:30
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Conversion Action Strip (Direct Revenue Ingress) */}
            <div className="p-4 bg-[#0E121B] border-t border-white/10 space-y-2.5">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Enterprise SLA: Sub-40ms P99</span>
                <span className="text-emerald-400 font-bold">Topmate 5.0 ★</span>
              </div>

              {/* Primary Call to Action Button */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookCall();
                  }}
                  className="py-2.5 px-3 rounded-xl bg-terracotta hover:bg-terracotta/90 text-white font-sans font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Schedule Sync</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onExploreDemos();
                  }}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Test Demos</span>
                </button>
              </div>

              {/* Secondary Recruiter Resume Request */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onRequestResume();
                }}
                className="w-full py-1.5 text-center text-[11px] font-mono text-slate-400 hover:text-amber-200 transition-colors flex items-center justify-center gap-1"
              >
                <FileText className="w-3 h-3" />
                <span>Need my unredacted CV & Dossier? Click here</span>
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
