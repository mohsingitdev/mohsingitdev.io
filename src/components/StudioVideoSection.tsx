import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Activity,
  FileText
} from 'lucide-react';

interface StudioVideoSectionProps {
  onBookCall: () => void;
  onRequestResume: () => void;
  onExploreDemos: () => void;
}

const SUBTITLES = [
  "\"Engineering AI that survives production scale isn't about larger prompts—it's about deterministic systems.\"",
  "\"At Flipkart, we handled 100k+ req/sec. Monolithic LLMs were collapsing with 2.5s latency spikes.\"",
  "\"We engineered a two-tier SLM gateway: 78% of queries resolved in <35ms, cutting token bills by 72%.\"",
  "\"At Novartis and Accenture, we enforced strict sentence-level citation grounding with <0.5% hallucination.\"",
  "\"Welcome to my sovereign portfolio. Explore the live interactive architecture labs below.\""
];

export const StudioVideoSection: React.FC<StudioVideoSectionProps> = ({
  onBookCall,
  onRequestResume,
  onExploreDemos,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const [subtitleIndex, setSubtitleIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cycle through subtitles every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <section id="studio-intro" className="py-16 sm:py-24 relative overflow-hidden bg-canvas border-t border-canvas-border">
      {/* Background Volumetric Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-terracotta/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header (Steve Jobs Minimalist Keynote Header) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-terracotta/40 text-xs font-mono text-terracotta shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>EXECUTIVE STUDIO INTRODUCTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            The Philosophy of{' '}
            <span className="font-serif italic font-normal text-amber-200">Production AI</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A 30-second briefing by Mohsin Qureshi on why deterministic systems, sub-40ms routing, and zero-hallucination RAG outperform fragile monolithic prompt engineering.
          </p>
        </div>

        {/* Masterpiece Video Stage Card (Apple Keynote Titanium Glass Frame) */}
        <div className="rounded-[32px] overflow-hidden border border-white/15 bg-[#090B10]/95 shadow-[0_24px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* LEFT / CENTER: The Cinematic Video Player (7 Columns) */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center group/player">
              
              {/* HTML5 Video Element with Instant WebP Fallback */}
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
                <img
                  src="./images/steve_jobs_studio_cinematic_intro.webp"
                  alt="Mohsin Qureshi Studio Keynote"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Ambient Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Floating Top Left Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold uppercase tracking-wider text-amber-300">STUDIO KEYNOTE</span>
                  <span className="text-white/40">|</span>
                  <span className="text-slate-300">0:30 4K</span>
                </div>
              </div>

              {/* Interactive Center Play Overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center z-10 focus:outline-none"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-terracotta text-white flex items-center justify-center shadow-2xl backdrop-blur-md hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white ml-0.5" />
                  </div>
                )}
              </button>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-4 inset-x-4 z-20 space-y-2">
                {/* GenZ Subtitles Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={subtitleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-center shadow-xl"
                  >
                    <p className="text-xs sm:text-sm font-sans font-medium text-white/95 italic leading-snug">
                      {SUBTITLES[subtitleIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress bar & Controls */}
                <div className="flex items-center justify-between text-white/80 pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>

                    <button
                      onClick={restartVideo}
                      className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                      title="Restart Video"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Scrubber */}
                  <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-terracotta rounded-full transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="text-[11px] font-mono text-white/60">
                    30s Brief
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: High-Impact Telemetry & Conversion Panel (5 Columns) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between h-full bg-[#0E121B] border-t lg:border-t-0 lg:border-l border-white/10">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>FORWARD DEPLOYMENT TRACK RECORD</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  Hardened at Scale. Proven in Production.
                </h3>

                {/* 3 Metric Pills */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-amber-300 shrink-0" />
                      <span className="text-xs font-mono text-slate-300">P99 Latency SLA</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-emerald-400">&lt; 40ms</span>
                  </div>

                  <div className="p-3 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono text-slate-300">Peak Flash-Sale Throughput</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-white">100k+ req/sec</span>
                  </div>

                  <div className="p-3 rounded-xl bg-canvas-card border border-canvas-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                      <span className="text-xs font-mono text-slate-300">Regulatory Hallucination Rate</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-terracotta">&lt; 0.5%</span>
                  </div>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={onBookCall}
                    className="py-3 px-4 rounded-xl bg-terracotta hover:bg-terracotta/90 text-white font-bold text-xs font-sans flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                  >
                    <span>Schedule 1:1 Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onExploreDemos}
                    className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs font-sans flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Test Sandboxes</span>
                  </button>
                </div>

                <button
                  onClick={onRequestResume}
                  className="w-full text-center text-xs font-mono text-slate-400 hover:text-amber-200 transition-colors flex items-center justify-center gap-1 pt-1"
                >
                  <FileText className="w-3 h-3" />
                  <span>Request Unredacted CV & Engineering Dossier</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
