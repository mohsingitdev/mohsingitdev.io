import{r as Q,a as p}from"./vendor-lucide-JewSVzjz.js";var F={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U;function tt(){if(U)return T;U=1;var t=Q(),e=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(c,r,f){var l,d={},m=null,A=null;f!==void 0&&(m=""+f),r.key!==void 0&&(m=""+r.key),r.ref!==void 0&&(A=r.ref);for(l in r)n.call(r,l)&&!s.hasOwnProperty(l)&&(d[l]=r[l]);if(c&&c.defaultProps)for(l in r=c.defaultProps,r)d[l]===void 0&&(d[l]=r[l]);return{$$typeof:e,type:c,key:m,ref:A,props:d,_owner:i.current}}return T.Fragment=a,T.jsx=o,T.jsxs=o,T}var V;function et(){return V||(V=1,F.exports=tt()),F.exports}var j=et();const at="modulepreload",st=function(t,e){return new URL(t,e).href},W={},jt=function(e,a,n){let i=Promise.resolve();if(a&&a.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const c=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),f=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=o(a.map(l=>{if(l=st(l,n),l in W)return;W[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!n)for(let x=c.length-1;x>=0;x--){const b=c[x];if(b.href===l&&(!d||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":at,d||(h.as="script"),h.crossOrigin="",h.href=l,f&&h.setAttribute("nonce",f),document.head.appendChild(h),d)return new Promise((x,b)=>{h.addEventListener("load",x),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},it=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) — core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`,nt=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`,ot=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`,rt=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="••••••••">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`,ct=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`,lt=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61°C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`,dt=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`,pt=`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`,g={mode:"dark",speed:1,size:1,gap:2,length:1,density:1,strokeWidth:1,opacity:1,hue:0,saturation:1,brightness:1},L="#eef1f6";function w(t,e,a){return Math.min(a,Math.max(e,t))}function u(t,e,a=1){return Math.max(a,Math.round(t*e))}function G(t,e=3){const a=Number(t).toFixed(e);return a.includes(".")?a:`${a}.0`}function ht(t,e="dark"){return t==null?e:t==="light"||t===1||t==="1"?"light":"dark"}function X(){if(typeof document>"u"||typeof window>"u")return"dark";const t=document.documentElement,e=t.dataset.scheme??t.dataset.theme;return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function gt(t){const[e,a]=p.useState(X);return p.useEffect(()=>{if(!t||typeof document>"u"||typeof window>"u")return;const n=document.documentElement,i=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>a(X()),o=new MutationObserver(s);return o.observe(n,{attributes:!0,attributeFilter:["data-scheme","data-theme"]}),i.addEventListener("change",s),s(),()=>{o.disconnect(),i.removeEventListener("change",s)}},[t]),e}function Z(t,e){return typeof t=="function"?t(e):t}const z={constellationField:{title:"Constellation Field",source:it,supportsMode:!0,background:t=>t==="light"?L:"#070914",targets:[{selector:"#constellationCanvas",role:"background"}],patch(t,{size:e,length:a,density:n,strokeWidth:i,mode:s}){let o=t.replace("const LINK = 160;",`const LINK = ${Math.round(160*a)};`).replace("const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",`const MAX_NODES = window.innerWidth < 768 ? ${u(40,n,8)} : ${u(85,n,12)};`).replace("radius: Math.random() * 2.4 + 1.8",`radius: (Math.random() * 2.4 + 1.8) * ${e}`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number(Math.max(.25,i).toFixed(2))};`).replace("node.x += node.vx;","node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("node.y += node.vy;","node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return s==="light"&&(o=o.replace("ctx.strokeStyle = '#E6C879';","ctx.strokeStyle = '#8B6914';").replace("ctx.fillStyle = '#E6C879';","ctx.fillStyle = '#8B6914';")),o}},particleDrift:{title:"Particle Drift",source:nt,supportsMode:!0,background:t=>t==="light"?L:"#030509",targets:[{selector:"#particle-canvas",role:"background"}],patch(t,{size:e,length:a,density:n,mode:i}){const s=Math.round(120*a),o=i==="light"?.22:.15;let c=t.replace("Array.from({ length: 90 })",`Array.from({ length: ${u(90,n,12)} })`).replace("Array.from({ length: 25 })",`Array.from({ length: ${u(25,n,4)} })`).replace("length: Math.random() * 100 + 50,",`length: (Math.random() * 100 + 50) * ${a},`).replace("n.y += n.vy; // Slow drift","n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift").replace("b.y -= b.speed;","b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if(d < 120) {",`if(d < ${s}) {`).replace("0.15 * (1 - d/120)",`${o} * (1 - d/${s})`).replace("ctx.lineWidth = 1.5;",`ctx.lineWidth = ${Number((1.5*e).toFixed(2))};`);return i==="light"&&(c=c.replaceAll("rgba(96, 165, 250,","rgba(37, 99, 235,").replaceAll("rgba(156, 163, 175,","rgba(36, 48, 68,").replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';","ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';")),c}},particleNetwork:{title:"Particle Network",source:ot,supportsMode:!0,background:t=>t==="light"?L:"#05070d",targets:[{selector:"#particle-canvas",role:"background"}],patch(t,{size:e,length:a,density:n,mode:i}){let s=t.replace("const particleCount = 200;",`const particleCount = ${u(200,n,40)};`).replace("this.length = Math.random() * 2 + 0.5;",`this.length = (Math.random() * 2 + 0.5) * ${a};`).replace("this.z -= this.speed;","this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const fov = 300;",`const fov = ${Math.round(300/Math.max(.4,e))};`);return i==="light"&&(s=s.replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';","ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';").replace("const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';","const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';")),s}},gatewayFlow:{title:"Gateway Flow",source:rt,supportsMode:!0,background:t=>t==="light"?L:"#000000",targets:[{selector:"#flow-canvas",role:"background"}],patch(t,{size:e,density:a,mode:n}){let i=t.replace("const numPaths = 80;",`const numPaths = ${u(80,a,12)};`).replace("p.t += p.speed;","p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 1.2;",`ctx.lineWidth = ${Number((1.2*e).toFixed(2))};`);return n==="light"&&(i=i.replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';","ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';").replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;","ctx.fillStyle = `rgba(26, 31, 42, 0.75)`;")),i}},connectivityGraph:{title:"Connectivity Graph",source:ct,supportsMode:!0,defaultMode:"light",background:t=>t==="light"?"#c4d9ef":"#0a1220",targets:[{selector:"#networkCanvas",role:"background"}],patch(t,{size:e,length:a,density:n,mode:i}){let s=t.replace("const particleCount = window.innerWidth < 768 ? 150 : 400;",`const particleCount = window.innerWidth < 768 ? ${u(150,n,30)} : ${u(400,n,60)};`).replace("this.maxLength = 20 + Math.random() * 180;",`this.maxLength = (20 + Math.random() * 180) * ${a};`).replace("this.distance += this.speed;","this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5 + (distRatio * 2);",`ctx.lineWidth = (0.5 + (distRatio * 2)) * ${e};`);return i==="dark"&&(s=s.replace("const lightness = 15 + (distRatio * 35);","const lightness = 58 + (distRatio * 28);").replace("const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;","const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;")),s}},interfaceLines:{title:"Interface Lines",source:lt,supportsMode:!0,background:t=>t==="light"?L:"#050505",targets:[{selector:"#bg-canvas",role:"background"}],patch(t,{size:e,length:a,density:n,mode:i}){const s=Math.round(120*a);let o=t.replace("const numParticles = window.innerWidth < 640 ? 30 : 70;",`const numParticles = window.innerWidth < 640 ? ${u(30,n,8)} : ${u(70,n,12)};`).replace("p.x += p.vx;","p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("p.y += p.vy;","p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if (dist < 120)",`if (dist < ${s})`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number((1*e).toFixed(2))};`);return i==="light"?o=o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${s}) * 0.42})\`;`).replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';","ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';"):o=o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${s}) * 0.42})\`;`),o}},defenseLines:{title:"Defense Lines",source:dt,supportsMode:!0,background:t=>t==="light"?"#f4ecec":"#120303",targets:[{selector:"#bg-canvas",role:"background"}],patch(t,{size:e,length:a,density:n,mode:i}){let s=t.replace("const particleCount = window.innerWidth < 768 ? 40 : 100;",`const particleCount = window.innerWidth < 768 ? ${u(40,n,8)} : ${u(100,n,16)};`).replace("baseLength: Math.random() * 80 + 20,",`baseLength: (Math.random() * 80 + 20) * ${a},`).replace("p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);","p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5;",`ctx.lineWidth = ${Number((.5*e).toFixed(2))};`);return i==="light"&&(s=s.replaceAll("rgba(220, 38, 38, 0)","rgba(153, 27, 27, 0)").replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);","grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);")),s}},topoField:{title:"Topo Field",source:pt,supportsMode:!0,background:t=>t==="light"?L:"#000000",targets:[{selector:"#topo-canvas",role:"background"}],patch(t,{length:e,density:a,mode:n}){let i=t.replace("float noiseScale = 1.4;",`float noiseScale = ${G(1.4*e,3)};`).replace("float numBands = 10.0;",`float numBands = ${G(10*a,2)};`);return n==="light"&&(i=i.replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;","gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;").replace("float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;","float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;").replace(`vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;`,`vec3 paper = vec3(0.933, 0.945, 0.965);
                    vec3 ink = vec3(0.12, 0.14, 0.18);
                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);
                    vec3 color = mix(paper, ink, lines);`)),i}}};function mt(t,e){const a=e.mode,n=Z(t.background,a),i=JSON.stringify(t.targets).replace(/</g,"\\u003c"),s=JSON.stringify({mode:a,speed:e.speed,size:e.size,gap:e.gap,length:e.length,density:e.density,strokeWidth:e.strokeWidth,opacity:e.opacity}).replace(/</g,"\\u003c"),o=t.patch?t.patch(t.source,{variant:e.variant,size:e.size,gap:e.gap,length:e.length,density:e.density,strokeWidth:e.strokeWidth,mode:a}):t.source,c=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${n} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${t.focusCss??""}
</style>`,r=`<script data-threeui-controls>
(function () {
  var controls = ${s};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`,f=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${i};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return o.replace(/<head([^>]*)>/i,`<head$1>${r}${c}`).replace(/<\/body>/i,`${f}</body>`)}function vt({definition:t,variant:e="cube",mode:a,speed:n=g.speed,size:i=g.size,gap:s=g.gap,length:o=g.length,density:c=g.density,strokeWidth:r=g.strokeWidth,opacity:f=g.opacity,hue:l=g.hue,saturation:d=g.saturation,brightness:m=g.brightness,className:A,style:h}){const x=p.useRef(null),b=a??t.defaultMode??g.mode,_=gt(b==="auto"),k=b==="auto"?_:ht(b,g.mode),P=Z(t.background,k),R=w(n,0,3),M=w(i,.05,200),v=w(s,0,64),y=w(o,.35,2.5),C=w(c,.25,2.5),B=w(r,.25,8),O=w(f,.05,1),I=w(l,-180,180),N=w(d,0,2),D=w(m,.35,1.65),H=p.useMemo(()=>mt(t,{variant:e,mode:k,speed:g.speed,size:M,gap:v,length:y,density:C,strokeWidth:B,opacity:g.opacity}),[t,k,C,v,y,M,B,e]);p.useEffect(()=>{var $;const q=($=x.current)==null?void 0:$.contentWindow;q&&q.postMessage({type:"threeui-controls",controls:{mode:k,speed:R,size:M,gap:v,length:y,density:C,strokeWidth:B,opacity:O}},"*")},[k,C,v,y,O,M,R,B,H]);const J=I===0&&N===1&&D===1?void 0:`hue-rotate(${I}deg) saturate(${N}) brightness(${D})`;return j.jsx("iframe",{ref:x,className:A,title:t.title,srcDoc:H,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:P,filter:J,...h}})}function S(t){return function(e){return j.jsx(vt,{...e,definition:t})}}const xt=S(z.constellationField),ut=S(z.particleDrift),ft=S(z.particleNetwork),bt=S(z.gatewayFlow),yt=S(z.connectivityGraph),wt=S(z.interfaceLines),kt=S(z.defenseLines),Mt=S(z.topoField),Ct=`<!doctype html>
<html lang="en" data-theme="dark" data-theme-mode="system">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Brand orbs — Thinking orbs for twenty-three marks</title>
<meta name="description" content="A macOS-style specimen library for twenty-three animated brand orbs.">
<script>
  (() => {
    let mode = "system";
    try { mode = localStorage.getItem("brand-orbs-theme-mode") || "system"; } catch (_) {}
    if (!/^(system|light|dark)$/.test(mode)) mode = "system";
    document.documentElement.dataset.themeMode = mode;
    document.documentElement.dataset.theme = mode === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : mode;
  })();
<\/script>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230A0B0D'/%3E%3Cg fill='%23ECE9E0'%3E%3Ccircle cx='16' cy='7' r='1.5'/%3E%3Ccircle cx='24' cy='16' r='1.5'/%3E%3Ccircle cx='16' cy='25' r='1.5'/%3E%3Ccircle cx='8' cy='16' r='1.5'/%3E%3C/g%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<style>
  :root{
    --page:#DAD7CC;
    --wall:#E4E1D7;
    --surface:#ECE9E0;
    --text:#131110;
    --muted:#57544A;
    --faint:#8B877A;
    --stroke:#232320;
    --line-1:rgba(35,35,32,.085);
    --line-2:rgba(35,35,32,.17);
    --line-3:rgba(35,35,32,.30);
    --tint:rgba(35,35,32,.035);
    --hover:rgba(35,35,32,.055);
    --card:rgba(35,35,32,.032);
    --pill-fill:#F7F4EC;
    --pill-stroke:rgba(35,35,32,.16);
    --pill-fg:#171613;
    --pill-inner:rgba(35,35,32,.025);
    --shimmer-base:rgba(19,17,16,.46);
    --shimmer-highlight:#131110;
    --orb-filter:invert(1) hue-rotate(180deg) contrast(1.04) saturate(.92);
    --app-icon-a:#F7F4EC;
    --app-icon-b:#DAD5C9;
    --app-icon-ink:#171613;
    --glass:rgba(236,233,224,.92);
    --mode-track:rgba(35,35,32,.055);
    --mode-active:#0B0B0A;
    --mode-active-fg:#ECE9E0;
    --elev:0 1px 2px rgba(35,35,32,.05),
           0 8px 18px -4px rgba(35,35,32,.08),
           0 24px 48px -12px rgba(35,35,32,.12),
           0 56px 104px -28px rgba(35,35,32,.20);
    --shimmer-band:400%;
    --shimmer-dur:2s;
    --shimmer-ease:linear;
    color-scheme:light;
  }
  :root[data-theme="dark"]{
    --page:#050608;
    --wall:#0A0B0D;
    --surface:#101113;
    --text:#F7F8F8;
    --muted:#8A8F98;
    --faint:#62666D;
    --stroke:rgba(255,255,255,.44);
    --line-1:rgba(255,255,255,.035);
    --line-2:rgba(255,255,255,.075);
    --line-3:rgba(255,255,255,.13);
    --tint:rgba(255,255,255,.026);
    --hover:rgba(255,255,255,.045);
    --card:rgba(255,255,255,.024);
    --pill-fill:rgba(5,6,8,.72);
    --pill-stroke:rgba(255,255,255,.08);
    --pill-fg:#F8F8F8;
    --pill-inner:rgba(255,255,255,.012);
    --shimmer-base:rgba(251,251,251,.5);
    --shimmer-highlight:#FFF;
    --orb-filter:none;
    --app-icon-a:#161616;
    --app-icon-b:#0B0B0B;
    --app-icon-ink:#E8E8E8;
    --glass:rgba(10,11,12,.92);
    --mode-track:rgba(255,255,255,.045);
    --mode-active:#EDEEF0;
    --mode-active-fg:#0A0B0D;
    --elev:0 1px 2px rgba(0,0,0,.55),
           0 8px 18px -4px rgba(0,0,0,.60),
           0 24px 48px -12px rgba(0,0,0,.68),
           0 56px 104px -28px rgba(0,0,0,.80);
    color-scheme:dark;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{background:var(--page);scroll-behavior:smooth}
  body{
    font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
    color:var(--text);
    background:var(--page);
    -webkit-font-smoothing:antialiased;
    min-height:100vh;
    transition:background .45s ease,color .45s ease;
  }
  button{font:inherit;color:inherit}
  button:focus-visible,a:focus-visible{outline:2px solid var(--stroke);outline-offset:3px}
  .menubar{
    position:fixed;inset:0 0 auto;z-index:20;height:28px;
    display:flex;align-items:center;gap:17px;padding:0 14px;
    background:var(--glass);border-bottom:.5px solid var(--line-2);
    -webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);
    font-size:11px;letter-spacing:.085em;color:var(--muted);
    transition:background .45s ease,border-color .45s ease;
  }
  .menu-mark{width:11px;height:11px;border-radius:3px 3px 3px 1px;background:var(--text);transform:rotate(-8deg);flex:none}
  .menu-app{color:var(--text);font-weight:700;letter-spacing:.12em}
  .menu-spacer{margin-left:auto}
  .menu-right{display:flex;align-items:center;gap:10px;min-width:0;flex:none}
  .menu-status{display:flex;align-items:center;gap:13px}
  .menu-status svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round}
  .menu-clock{color:var(--text);font-variant-numeric:tabular-nums;white-space:nowrap}
  .github-stats{
    height:25px;padding:0 7px;display:flex;align-items:center;gap:6px;flex:none;
    border:.5px solid var(--line-2);border-radius:5px;background:var(--mode-track);
    color:var(--muted);text-decoration:none;font-variant-numeric:tabular-nums;
    transition:background .2s ease,color .2s ease,border-color .2s ease;
  }
  .github-stats:hover{background:var(--hover);border-color:var(--line-3);color:var(--text)}
  .github-stats:active{transform:translateY(1px)}
  .github-mark{width:14px;height:14px;fill:currentColor;flex:none}
  .github-star{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linejoin:round;flex:none}
  .theme-switcher{
    display:grid;grid-template-columns:repeat(3,22px);gap:2px;padding:2px;
    border:.5px solid var(--line-2);border-radius:5px;background:var(--mode-track);flex:none;
  }
  .theme-option{
    width:22px;height:20px;padding:0;border:0;border-radius:3px;background:transparent;
    display:grid;place-items:center;color:var(--muted);cursor:pointer;
    transition:background .2s ease,color .2s ease,transform .12s ease;
  }
  .theme-option svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.45;stroke-linecap:round;stroke-linejoin:round}
  .theme-option .system-half{fill:currentColor;stroke:none}
  .theme-option:hover{color:var(--text);background:var(--hover)}
  .theme-option[aria-pressed="true"]{background:var(--mode-active);color:var(--mode-active-fg)}
  .theme-option:active{transform:translateY(1px)}
  .workspace{padding:68px 20px 46px}
  .app-window{
    width:min(100%,960px);margin:0 auto;background:var(--surface);
    border:.5px solid var(--line-3);border-radius:10px;overflow:hidden;
    box-shadow:var(--elev);
    transition:background .45s ease,border-color .45s ease,box-shadow .45s ease;
  }
  .window-bar{
    height:38px;display:flex;align-items:center;gap:12px;padding:0 11px;
    border-bottom:.5px solid var(--line-2);background:var(--surface);
    transition:background .45s ease,border-color .45s ease;
  }
  .traffic-lights{display:flex;gap:6px;flex:none}
  .traffic-light{width:9px;height:9px;border-radius:50%;border:.5px solid var(--stroke);opacity:.55}
  .window-title{font-size:11px;letter-spacing:.13em;color:var(--muted);white-space:nowrap}
  .window-toolbar{
    min-height:39px;display:flex;align-items:center;gap:11px;padding:0 14px;
    border-bottom:.5px solid var(--line-1);background:var(--tint);color:var(--faint);
    font-size:11px;letter-spacing:.12em;
  }
  .toolbar-nav{display:flex;gap:9px;color:var(--muted)}
  .toolbar-nav svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .toolbar-divider{width:.5px;height:15px;background:var(--line-2)}
  .toolbar-path{display:flex;align-items:center;gap:7px;color:var(--muted)}
  .toolbar-path svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linejoin:round}
  .toolbar-meta{margin-left:auto;white-space:nowrap}
  .window-content{padding:50px 48px 58px}
  .hero{display:flex;align-items:center;gap:22px;padding:2px 0 6px}
  .hero-copy{min-width:0}
  .eyebrow{display:block;margin-bottom:9px;font-size:11px;letter-spacing:.16em;color:var(--faint)}
  h1{font-size:25px;font-weight:600;letter-spacing:-.045em;line-height:1.1}
  .sub{margin-top:9px;max-width:690px;font-size:11px;line-height:1.8;color:var(--muted);text-wrap:pretty}
  .sub a{color:var(--text);text-decoration:none;border-bottom:.5px solid var(--line-3)}
  .sub a:hover{border-color:var(--text)}
  /* ---------- header ---------- */
  .app-icon{
    position:relative;width:58px;height:58px;border-radius:15px;flex:none;
    background:linear-gradient(180deg,var(--app-icon-a),var(--app-icon-b));
    box-shadow:inset 0 0 0 .5px var(--line-2),inset 0 1px 0 rgba(255,255,255,.09),0 12px 28px rgba(0,0,0,.14);
    display:flex;align-items:center;justify-content:center;
    transition:background .45s ease,box-shadow .45s ease;
  }
  .app-icon g{fill:var(--app-icon-ink);transition:fill .45s ease}
  .app-icon::after{
    content:"";position:absolute;inset:-20px;border-radius:50%;
    background:radial-gradient(closest-side,rgba(255,255,255,.05),transparent 72%);
    pointer-events:none;
  }
  /* ---------- grid ---------- */
  .grid{
    margin-top:36px;
    display:grid;grid-template-columns:repeat(2,minmax(0,412px));gap:12px;
    width:100%;
  }
  .card{
    position:relative;height:294px;border:.5px solid var(--line-1);border-radius:7px;background:var(--card);
    display:flex;align-items:center;justify-content:center;
    overflow:hidden;transition:background .2s ease,border-color .2s ease;
  }
  .card:hover{background:var(--hover);border-color:var(--line-2)}
  .brand-tag{
    position:absolute;top:17px;left:18px;
    display:flex;align-items:center;gap:8px;
    color:var(--muted);
  }
  .brand-tag svg{width:14px;height:14px;fill:currentColor;opacity:.9}
  .brand-tag span{font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase}
  .concept{
    position:absolute;bottom:16px;right:18px;
    font-size:11px;color:var(--faint);letter-spacing:.09em;text-transform:uppercase;
  }
  .section-label{
    margin-top:48px;padding-top:17px;border-top:.5px solid var(--line-1);
    font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);
  }
  .section-label+.grid{margin-top:14px}
  /* ---------- pills ---------- */
  .pill{
    display:inline-flex;align-items:center;gap:12px;
    min-width:270px;height:74px;padding:0 32px 0 9px;
    border-radius:999px;background:var(--pill-fill);
    box-shadow:inset 0 0 0 1px var(--pill-stroke),inset 0 0 50px 0 var(--pill-inner);
    color:var(--pill-fg);font-size:18px;line-height:24px;
    cursor:default;white-space:nowrap;
    transition:background .45s ease,box-shadow .45s ease,color .45s ease;
  }
  .pill canvas{width:56px;height:56px;display:block;filter:var(--orb-filter);transition:filter .45s ease}
  .minis{
    margin-top:46px;padding-top:24px;border-top:.5px solid var(--line-1);
    display:flex;flex-wrap:wrap;justify-content:flex-start;gap:8px;
  }
  .pill.mini{
    min-width:0;height:36px;padding:0 14px 0 8px;gap:8px;
    font-size:12px;line-height:14px;
  }
  .pill.mini canvas{width:20px;height:20px}
  footer{
    margin-top:42px;padding-top:18px;border-top:.5px solid var(--line-1);
    font-size:11px;color:var(--faint);text-align:left;line-height:1.8;letter-spacing:.07em;
  }
  footer a{color:var(--muted);text-decoration:none;border-bottom:.5px solid var(--line-2)}
  footer a:hover{color:var(--text);border-color:var(--text)}
  /* label shimmer — a highlight band sweeps the text, as on the reference */
  .t-shimmer{position:relative;display:inline-block;color:var(--shimmer-base)}
  .t-shimmer::before{
    content:attr(data-text);
    position:absolute;inset:0;pointer-events:none;
    background-image:linear-gradient(90deg,transparent 0%,transparent 40%,var(--shimmer-highlight) 50%,transparent 60%,transparent 100%);
    background-size:var(--shimmer-band) 100%;
    background-repeat:no-repeat;
    -webkit-background-clip:text;background-clip:text;
    color:transparent;-webkit-text-fill-color:transparent;
    animation:t-shimmer var(--shimmer-dur) var(--shimmer-ease) infinite;
  }
  @keyframes t-shimmer{0%{background-position:100% 0}to{background-position:0% 0}}
  @media (prefers-reduced-motion:reduce){.t-shimmer::before{animation:none!important}}

  /* zoom / debug mode */
  body.zoom-mode>*:not(.zoom-stage){display:none}
  .zoom-stage{display:flex;align-items:center;justify-content:center;min-height:100vh}
  @media (max-width:900px){
    .grid{grid-template-columns:minmax(0,1fr)}
    .window-content{padding:38px 28px 44px}
  }
  @media (max-width:760px){
    .menu-item{display:none}
  }
  @media (max-width:650px){
    .menu-clock{display:none}
  }
  @media (max-width:520px){
    .menubar{gap:10px}
    .menu-status{display:none}
    .workspace{padding:46px 0 0}
    .app-window{border-left:0;border-right:0;border-bottom:0;border-radius:0}
    .window-title{display:none}
    .window-toolbar{padding:0 12px}
    .toolbar-meta{display:none}
    .window-content{padding:34px 16px 40px}
    .hero{align-items:flex-start;gap:16px}
    .app-icon{width:50px;height:50px;border-radius:13px}
    .app-icon svg{width:29px;height:29px}
    h1{font-size:22px}
    .sub{font-size:11px;line-height:1.7}
    .card{height:280px}
  }
  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    *{transition-duration:.01ms!important}
  }
</style>
</head>
<body>

  <nav class="menubar" aria-label="Application menu">
    <span class="menu-mark" aria-hidden="true"></span>
    <span class="menu-app">BRAND ORBS</span>
    <span class="menu-item">FILE</span>
    <span class="menu-item">EDIT</span>
    <span class="menu-item">VIEW</span>
    <span class="menu-item">WINDOW</span>
    <span class="menu-spacer"></span>
    <span class="menu-right">
      <span class="menu-status">
        <svg viewBox="0 0 24 24" aria-label="Wi-Fi"><path d="M2.5 8.5a15 15 0 0 1 19 0M5.5 12a10.5 10.5 0 0 1 13 0M8.5 15.4a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/></svg>
        <svg viewBox="0 0 34 24" aria-label="Battery"><rect x="1.5" y="7" width="26" height="10" rx="3"/><path d="M30 11v2"/><rect x="4" y="9.4" width="16" height="5.2" rx="1.6" fill="currentColor" stroke="none"/></svg>
        <time class="menu-clock" id="menu-clock"></time>
      </span>
      <a class="github-stats" id="github-stats-link" href="https://github.com/Jakubantalik/thinking-orbs" target="_blank" rel="noopener noreferrer" aria-label="Thinking Orbs on GitHub, 2,210 stars">
        <svg class="github-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <svg class="github-star" viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2.6 2.17 4.4 4.86.71-3.52 3.43.83 4.84L10 13.7l-4.34 2.28.83-4.84-3.52-3.43L7.83 7z"/></svg>
        <span id="github-stars">2,210</span>
      </a>
      <span class="theme-switcher" role="group" aria-label="Appearance">
        <button class="theme-option" type="button" data-theme-mode="system" aria-label="Use system appearance" aria-pressed="true" title="System">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6.4"/><path class="system-half" d="M10 3.6a6.4 6.4 0 0 0 0 12.8z"/></svg>
        </button>
        <button class="theme-option" type="button" data-theme-mode="light" aria-label="Use light appearance" aria-pressed="false" title="Light">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="2.8"/><path d="M10 2.4v1.4M10 16.2v1.4M2.4 10h1.4M16.2 10h1.4M4.62 4.62l1 1M14.38 14.38l1 1M15.38 4.62l-1 1M5.62 14.38l-1 1"/></svg>
        </button>
        <button class="theme-option" type="button" data-theme-mode="dark" aria-label="Use dark appearance" aria-pressed="false" title="Dark">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.8 12.4A6.5 6.5 0 0 1 7.6 4.2 6.5 6.5 0 1 0 15.8 12.4Z"/></svg>
        </button>
      </span>
    </span>
  </nav>

  <main class="workspace">
    <section class="app-window" aria-labelledby="page-title">
      <header class="window-bar">
        <span class="traffic-lights" aria-hidden="true">
          <span class="traffic-light"></span><span class="traffic-light"></span><span class="traffic-light"></span>
        </span>
        <span class="window-title">BRAND ORBS — SPECIMEN LIBRARY</span>
      </header>
      <div class="window-toolbar" aria-hidden="true">
        <span class="toolbar-nav">
          <svg viewBox="0 0 24 24"><path d="m14 5-7 7 7 7"/></svg>
          <svg viewBox="0 0 24 24" style="opacity:.35"><path d="m10 5 7 7-7 7"/></svg>
        </span>
        <span class="toolbar-divider"></span>
        <span class="toolbar-path">
          <svg viewBox="0 0 24 24"><path d="M3 6.5h7l2-2h3l2 2h4v12H3z"/></svg>
          LIBRARY / BRAND ORBS
        </span>
        <span class="toolbar-meta">ANIMATED SPECIMENS</span>
      </div>
      <div class="window-content">

  <header class="hero">

  <div class="app-icon" aria-hidden="true">
    <svg width="34" height="34" viewBox="0 0 34 34">
      <g fill="#e8e8e8">
        <circle cx="17" cy="5.5" r="1.15"/><circle cx="22.75" cy="7.04" r="1.15"/>
        <circle cx="26.96" cy="11.25" r="1.15"/><circle cx="28.5" cy="17" r="1.15"/>
        <circle cx="26.96" cy="22.75" r="1.15"/><circle cx="22.75" cy="26.96" r="1.15"/>
        <circle cx="17" cy="28.5" r="1.15"/><circle cx="11.25" cy="26.96" r="1.15"/>
        <circle cx="7.04" cy="22.75" r="1.15"/><circle cx="5.5" cy="17" r="1.15"/>
        <circle cx="7.04" cy="11.25" r="1.15"/><circle cx="11.25" cy="7.04" r="1.15"/>
      </g>
    </svg>
  </div>

    <div class="hero-copy">
      <span class="eyebrow">SPECIMEN ARCHIVE / 01</span>
      <h1 id="page-title">Brand orbs</h1>
      <p class="sub">One orb language, twenty-three marks — each as an orb and as a book — inspired by <a href="https://orbs.jakubantalik.com/" target="_blank" rel="noopener">Thinking&nbsp;orbs</a></p>
    </div>
  </header>

  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>
        <span>Claude Code</span>
      </div>
      <div class="pill"><canvas data-mode="claude" data-size="56"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
      <div class="concept">spark burst</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
        <span>OpenAI</span>
      </div>
      <div class="pill"><canvas data-mode="openai" data-size="56"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
      <div class="concept">bloom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="8.2"/><path d="M9 8.7 12.3 12 9 15.3"/><path d="M13.7 15.3h3.5"/></svg>
        <span>Codex</span>
      </div>
      <div class="pill"><canvas data-mode="codex" data-size="56"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
      <div class="concept">prompt blob</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/></svg>
        <span>Cursor</span>
      </div>
      <div class="pill"><canvas data-mode="cursor" data-size="56"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
      <div class="concept">the cursor</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
        <span>Gemini</span>
      </div>
      <div class="pill"><canvas data-mode="gemini" data-size="56"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
      <div class="concept">twinkle</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
        <span>Figma</span>
      </div>
      <div class="pill"><canvas data-mode="figma" data-size="56"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
      <div class="concept">swatch morph</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
        <span>Framer</span>
      </div>
      <div class="pill"><canvas data-mode="framer" data-size="56"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
      <div class="concept">the f</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(120 12 12)"/></svg>
        <span>React</span>
      </div>
      <div class="pill"><canvas data-mode="react" data-size="56"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
      <div class="concept">the atom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"/></svg>
        <span>Swift</span>
      </div>
      <div class="pill"><canvas data-mode="swift" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">the bird</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 44 44" style="fill:none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z"/><path d="M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"/></svg>
        <span>DesignCode</span>
      </div>
      <div class="pill"><canvas data-mode="designcode" data-size="56"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
      <div class="concept">the monogram</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><circle cx="10.18" cy="1.93" r="0.72"/><circle cx="12.59" cy="3.53" r="0.60"/><circle cx="13.38" cy="5.12" r="0.55"/><circle cx="12.51" cy="6.86" r="0.55"/><circle cx="9.72" cy="8.27" r="0.55"/><circle cx="7.21" cy="10.06" r="0.55"/><circle cx="4.98" cy="12.02" r="0.60"/><circle cx="4.07" cy="13.71" r="0.59"/><circle cx="19.09" cy="13.43" r="0.55"/><circle cx="9.94" cy="15.30" r="0.55"/><circle cx="18.31" cy="15.16" r="0.55"/><circle cx="7.49" cy="17.12" r="0.60"/><circle cx="15.71" cy="16.85" r="0.55"/><circle cx="3.19" cy="18.74" r="0.55"/><circle cx="16.59" cy="18.54" r="0.55"/><circle cx="4.00" cy="20.44" r="0.55"/><circle cx="22.50" cy="20.24" r="0.55"/><circle cx="21.72" cy="21.98" r="0.55"/></svg>
        <span>Aura</span>
      </div>
      <div class="pill"><canvas data-mode="aura" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">the dot field</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><ellipse cx="16.40" cy="12.00" rx="4.6" ry="2.9" transform="rotate(0.0 12 12)"/><ellipse cx="14.20" cy="15.81" rx="4.6" ry="2.9" transform="rotate(60.0 12 12)"/><ellipse cx="9.80" cy="15.81" rx="4.6" ry="2.9" transform="rotate(120.0 12 12)"/><ellipse cx="7.60" cy="12.00" rx="4.6" ry="2.9" transform="rotate(180.0 12 12)"/><ellipse cx="9.80" cy="8.19" rx="4.6" ry="2.9" transform="rotate(240.0 12 12)"/><ellipse cx="14.20" cy="8.19" rx="4.6" ry="2.9" transform="rotate(300.0 12 12)"/></svg>
        <span>DreamCut</span>
      </div>
      <div class="pill"><canvas data-mode="dreamcut" data-size="56"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
      <div class="concept">petal bloom</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.6" y="4" width="18.8" height="16" rx="2.2"/><path d="M2.6 8.6h18.8M9 8.6V20"/></svg>
        <span>UI</span>
      </div>
      <div class="pill"><canvas data-mode="ui" data-size="56"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
      <div class="concept">the panel</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 17.5c4 0 6-11 9-11s5 5.5 9 5.5"/><circle cx="3" cy="17.5" r="1.9"/><circle cx="12" cy="6.6" r="1.9"/><circle cx="21" cy="12" r="1.9"/></svg>
        <span>UX</span>
      </div>
      <div class="pill"><canvas data-mode="ux" data-size="56"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
      <div class="concept">the journey</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>
        <span>CSS</span>
      </div>
      <div class="pill"><canvas data-mode="css" data-size="56"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
      <div class="concept">the letters</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"/></svg>
        <span>iOS</span>
      </div>
      <div class="pill"><canvas data-mode="ios" data-size="56"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
      <div class="concept">the wordmark</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 128 128" style="fill:none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><path d="M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077"/></svg>
        <span>Neuform</span>
      </div>
      <div class="pill"><canvas data-mode="neuform" data-size="56"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
      <div class="concept">eight chevrons</div>
    </div>

  </div>

  <p class="section-label">Social</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span>GitHub</span>
      </div>
      <div class="pill"><canvas data-mode="github" data-size="56"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
      <div class="concept">the octocat</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
        <span>X</span>
      </div>
      <div class="pill"><canvas data-mode="x" data-size="56"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
      <div class="concept">the x</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        <span>Instagram</span>
      </div>
      <div class="pill"><canvas data-mode="instagram" data-size="56"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
      <div class="concept">the camera</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
        <span>Threads</span>
      </div>
      <div class="pill"><canvas data-mode="threads" data-size="56"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
      <div class="concept">the loop</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </div>
      <div class="pill"><canvas data-mode="linkedin" data-size="56"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
      <div class="concept">the in</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4"/><path d="M3.2 6.6 12 13.4l8.8-6.8"/></svg>
        <span>Email</span>
      </div>
      <div class="pill"><canvas data-mode="email" data-size="56"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
      <div class="concept">the envelope</div>
    </div>

  </div>

  <p class="section-label">Books</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>
        <span>Claude Code</span>
      </div>
      <div class="pill"><canvas data-mode="claudebook" data-size="56"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
        <span>OpenAI</span>
      </div>
      <div class="pill"><canvas data-mode="openaibook" data-size="56"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="8.2"/><path d="M9 8.7 12.3 12 9 15.3"/><path d="M13.7 15.3h3.5"/></svg>
        <span>Codex</span>
      </div>
      <div class="pill"><canvas data-mode="codexbook" data-size="56"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/></svg>
        <span>Cursor</span>
      </div>
      <div class="pill"><canvas data-mode="cursorbook" data-size="56"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
        <span>Gemini</span>
      </div>
      <div class="pill"><canvas data-mode="geminibook" data-size="56"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
        <span>Figma</span>
      </div>
      <div class="pill"><canvas data-mode="figmabook" data-size="56"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
        <span>Framer</span>
      </div>
      <div class="pill"><canvas data-mode="framerbook" data-size="56"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.6" ry="4.05" transform="rotate(120 12 12)"/></svg>
        <span>React</span>
      </div>
      <div class="pill"><canvas data-mode="reactbook" data-size="56"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"/></svg>
        <span>Swift</span>
      </div>
      <div class="pill"><canvas data-mode="swiftbook" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 44 44" style="fill:none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z"/><path d="M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"/></svg>
        <span>DesignCode</span>
      </div>
      <div class="pill"><canvas data-mode="designcodebook" data-size="56"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><circle cx="10.18" cy="1.93" r="0.72"/><circle cx="12.59" cy="3.53" r="0.60"/><circle cx="13.38" cy="5.12" r="0.55"/><circle cx="12.51" cy="6.86" r="0.55"/><circle cx="9.72" cy="8.27" r="0.55"/><circle cx="7.21" cy="10.06" r="0.55"/><circle cx="4.98" cy="12.02" r="0.60"/><circle cx="4.07" cy="13.71" r="0.59"/><circle cx="19.09" cy="13.43" r="0.55"/><circle cx="9.94" cy="15.30" r="0.55"/><circle cx="18.31" cy="15.16" r="0.55"/><circle cx="7.49" cy="17.12" r="0.60"/><circle cx="15.71" cy="16.85" r="0.55"/><circle cx="3.19" cy="18.74" r="0.55"/><circle cx="16.59" cy="18.54" r="0.55"/><circle cx="4.00" cy="20.44" r="0.55"/><circle cx="22.50" cy="20.24" r="0.55"/><circle cx="21.72" cy="21.98" r="0.55"/></svg>
        <span>Aura</span>
      </div>
      <div class="pill"><canvas data-mode="aurabook" data-size="56"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><ellipse cx="16.40" cy="12.00" rx="4.6" ry="2.9" transform="rotate(0.0 12 12)"/><ellipse cx="14.20" cy="15.81" rx="4.6" ry="2.9" transform="rotate(60.0 12 12)"/><ellipse cx="9.80" cy="15.81" rx="4.6" ry="2.9" transform="rotate(120.0 12 12)"/><ellipse cx="7.60" cy="12.00" rx="4.6" ry="2.9" transform="rotate(180.0 12 12)"/><ellipse cx="9.80" cy="8.19" rx="4.6" ry="2.9" transform="rotate(240.0 12 12)"/><ellipse cx="14.20" cy="8.19" rx="4.6" ry="2.9" transform="rotate(300.0 12 12)"/></svg>
        <span>DreamCut</span>
      </div>
      <div class="pill"><canvas data-mode="dreamcutbook" data-size="56"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        <span>GitHub</span>
      </div>
      <div class="pill"><canvas data-mode="githubbook" data-size="56"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
        <span>X</span>
      </div>
      <div class="pill"><canvas data-mode="xbook" data-size="56"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        <span>Instagram</span>
      </div>
      <div class="pill"><canvas data-mode="instagrambook" data-size="56"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
        <span>Threads</span>
      </div>
      <div class="pill"><canvas data-mode="threadsbook" data-size="56"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </div>
      <div class="pill"><canvas data-mode="linkedinbook" data-size="56"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4"/><path d="M3.2 6.6 12 13.4l8.8-6.8"/></svg>
        <span>Email</span>
      </div>
      <div class="pill"><canvas data-mode="emailbook" data-size="56"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.6" y="4" width="18.8" height="16" rx="2.2"/><path d="M2.6 8.6h18.8M9 8.6V20"/></svg>
        <span>UI</span>
      </div>
      <div class="pill"><canvas data-mode="uibook" data-size="56"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 17.5c4 0 6-11 9-11s5 5.5 9 5.5"/><circle cx="3" cy="17.5" r="1.9"/><circle cx="12" cy="6.6" r="1.9"/><circle cx="21" cy="12" r="1.9"/></svg>
        <span>UX</span>
      </div>
      <div class="pill"><canvas data-mode="uxbook" data-size="56"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>
        <span>CSS</span>
      </div>
      <div class="pill"><canvas data-mode="cssbook" data-size="56"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24"><path d="M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"/></svg>
        <span>iOS</span>
      </div>
      <div class="pill"><canvas data-mode="iosbook" data-size="56"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 128 128" style="fill:none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><path d="M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077"/></svg>
        <span>Neuform</span>
      </div>
      <div class="pill"><canvas data-mode="neuformbook" data-size="56"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
      <div class="concept">mark on cover</div>
    </div>

  </div>

  <p class="section-label">Studies</p>
  <div class="grid">

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.6 20.4 7.4v9.2L12 21.4 3.6 16.6V7.4z"/><path d="M12 21.4V12M3.6 7.4 12 12l8.4-4.6"/></svg>
        <span>Cube</span>
      </div>
      <div class="pill"><canvas data-mode="cube" data-size="56"></canvas><span class="t-shimmer" data-text="Compiling&hellip;">Compiling&hellip;</span></div>
      <div class="concept">face sweep</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.8"/><path d="M4.1 9.2h15.8M4.1 14.8h15.8"/></svg>
        <span>Blue orb</span>
      </div>
      <div class="pill"><canvas data-mode="orb" data-size="56"></canvas><span class="t-shimmer" data-text="Syncing&hellip;">Syncing&hellip;</span></div>
      <div class="concept">band shift</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 3.2v14.2l3.4-3 2.1 4.6 2.2-1-2.1-4.6 4.5-.4z"/></svg>
        <span>Pointer</span>
      </div>
      <div class="pill"><canvas data-mode="pointer" data-size="56"></canvas><span class="t-shimmer" data-text="Clicking&hellip;">Clicking&hellip;</span></div>
      <div class="concept">click ripple</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3.4"/><ellipse cx="12" cy="12" rx="3.4" ry="9"/></svg>
        <span>Sphere</span>
      </div>
      <div class="pill"><canvas data-mode="sphere" data-size="56"></canvas><span class="t-shimmer" data-text="Spinning&hellip;">Spinning&hellip;</span></div>
      <div class="concept">blossom knot</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.4"><ellipse cx="16.20" cy="12.00" rx="4.3" ry="2.7" transform="rotate(0 12 12)"/><ellipse cx="14.10" cy="15.64" rx="4.3" ry="2.7" transform="rotate(60 12 12)"/><ellipse cx="9.90" cy="15.64" rx="4.3" ry="2.7" transform="rotate(120 12 12)"/><ellipse cx="7.80" cy="12.00" rx="4.3" ry="2.7" transform="rotate(180 12 12)"/><ellipse cx="9.90" cy="8.36" rx="4.3" ry="2.7" transform="rotate(240 12 12)"/><ellipse cx="14.10" cy="8.36" rx="4.3" ry="2.7" transform="rotate(300 12 12)"/><circle cx="12" cy="12" r="1.2"/></svg>
        <span>Flower</span>
      </div>
      <div class="pill"><canvas data-mode="flower" data-size="56"></canvas><span class="t-shimmer" data-text="Blooming&hellip;">Blooming&hellip;</span></div>
      <div class="concept">tapered petals</div>
    </div>

    <div class="card">
      <div class="brand-tag">
        <svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 4.6h6.4a2 2 0 0 1 2 2v12.8a1.6 1.6 0 0 0-1.6-1.6H4z"/><path d="M20 4.6h-6.4a2 2 0 0 0-2 2v12.8a1.6 1.6 0 0 1 1.6-1.6H20z"/></svg>
        <span>Book</span>
      </div>
      <div class="pill"><canvas data-mode="book" data-size="56"></canvas><span class="t-shimmer" data-text="Reading&hellip;">Reading&hellip;</span></div>
      <div class="concept">open cover</div>
    </div>


  </div>

  <div class="minis">
    <div class="pill mini"><canvas data-mode="claude" data-size="20"></canvas><span class="t-shimmer" data-text="Thinking&hellip;">Thinking&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="openai" data-size="20"></canvas><span class="t-shimmer" data-text="Reasoning&hellip;">Reasoning&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="codex" data-size="20"></canvas><span class="t-shimmer" data-text="Coding&hellip;">Coding&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="cursor" data-size="20"></canvas><span class="t-shimmer" data-text="Tab, tab, tab&hellip;">Tab, tab, tab&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="gemini" data-size="20"></canvas><span class="t-shimmer" data-text="Dreaming&hellip;">Dreaming&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="react" data-size="20"></canvas><span class="t-shimmer" data-text="Rendering&hellip;">Rendering&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="swift" data-size="20"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="figma" data-size="20"></canvas><span class="t-shimmer" data-text="Designing&hellip;">Designing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="framer" data-size="20"></canvas><span class="t-shimmer" data-text="Publishing&hellip;">Publishing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="designcode" data-size="20"></canvas><span class="t-shimmer" data-text="Learning&hellip;">Learning&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="aura" data-size="20"></canvas><span class="t-shimmer" data-text="Building&hellip;">Building&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="dreamcut" data-size="20"></canvas><span class="t-shimmer" data-text="Cutting&hellip;">Cutting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="github" data-size="20"></canvas><span class="t-shimmer" data-text="Committing&hellip;">Committing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="x" data-size="20"></canvas><span class="t-shimmer" data-text="Posting&hellip;">Posting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="instagram" data-size="20"></canvas><span class="t-shimmer" data-text="Sharing&hellip;">Sharing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="threads" data-size="20"></canvas><span class="t-shimmer" data-text="Threading&hellip;">Threading&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="linkedin" data-size="20"></canvas><span class="t-shimmer" data-text="Connecting&hellip;">Connecting&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="email" data-size="20"></canvas><span class="t-shimmer" data-text="Sending&hellip;">Sending&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ui" data-size="20"></canvas><span class="t-shimmer" data-text="Composing&hellip;">Composing&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ux" data-size="20"></canvas><span class="t-shimmer" data-text="Mapping&hellip;">Mapping&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="css" data-size="20"></canvas><span class="t-shimmer" data-text="Styling&hellip;">Styling&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="ios" data-size="20"></canvas><span class="t-shimmer" data-text="Shipping&hellip;">Shipping&hellip;</span></div>
    <div class="pill mini"><canvas data-mode="neuform" data-size="20"></canvas><span class="t-shimmer" data-text="Forming&hellip;">Forming&hellip;</span></div>
  </div>

  <footer>
    Twenty-three marks, one particle language.<br>
    Brand Orbs by <a href="https://github.com/MengTo" target="_blank" rel="noopener noreferrer">Meng To</a>. Inspired by <a href="https://orbs.jakubantalik.com/" target="_blank" rel="noopener noreferrer">Thinking Orbs</a>. <a href="https://github.com/Jakubantalik/thinking-orbs" target="_blank" rel="noopener noreferrer">View the project on GitHub</a>.
  </footer>

      </div>
    </section>
  </main>

<script>
(() => {
  "use strict";
  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll(".theme-option")];
  const systemPreference = matchMedia("(prefers-color-scheme: dark)");
  const clock = document.getElementById("menu-clock");
  const githubStars = document.getElementById("github-stars");
  const githubLink = document.getElementById("github-stats-link");

  function resolvedTheme(mode) {
    return mode === "system" ? (systemPreference.matches ? "dark" : "light") : mode;
  }

  function applyThemeMode(mode, persist = true) {
    root.dataset.themeMode = mode;
    root.dataset.theme = resolvedTheme(mode);
    themeButtons.forEach(button => button.setAttribute("aria-pressed", button.dataset.themeMode === mode ? "true" : "false"));
    if (persist) {
      try { localStorage.setItem("brand-orbs-theme-mode", mode); } catch (_) {}
    }
  }

  let saved = root.dataset.themeMode || "system";
  if (!/^(system|light|dark)$/.test(saved)) saved = "system";
  applyThemeMode(saved, false);
  themeButtons.forEach(button => button.addEventListener("click", () => applyThemeMode(button.dataset.themeMode)));
  systemPreference.addEventListener("change", () => {
    if (root.dataset.themeMode === "system") applyThemeMode("system", false);
  });

  const formatClock = () => {
    clock.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "short", day: "2-digit", month: "short",
      hour: "2-digit", minute: "2-digit", hour12: false
    }).format(new Date()).replace(",", "").toUpperCase();
  };
  formatClock();
  setInterval(formatClock, 30000);

  fetch("https://api.github.com/repos/Jakubantalik/thinking-orbs", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(repo => {
      if (!Number.isFinite(repo.stargazers_count)) return;
      const stars = new Intl.NumberFormat("en-US").format(repo.stargazers_count);
      githubStars.textContent = stars;
      githubLink.setAttribute("aria-label", \`Thinking Orbs on GitHub, \${stars} stars\`);
    })
    .catch(() => {});
})();
<\/script>

<script>
(() => {
  "use strict";
  const TAU = Math.PI * 2;
  const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const smooth = v => { v = clamp01(v); return v * v * (3 - 2 * v); };
  const lerp = (a, b, m) => a + (b - a) * m;

  /* deterministic hash noise (ported from the reference orb engine) */
  const hash = (x, y) => { const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453; return n - Math.floor(n); };
  const vnoise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    let fx = x - xi, fy = y - yi;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };

  /* fibonacci sphere point i of n → [x,y,z] on unit sphere */
  const fib = (i, n) => {
    const ga = Math.PI * (3 - Math.sqrt(5));
    const y = 1 - 2 * (i + .5) / n;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * ga;
    return [r * Math.cos(th), y, r * Math.sin(th)];
  };

  /* yaw+tilt rotation and orthographic projection: returns (x,y,z)→[px,py,zdepth] */
  const proj = (yaw, tilt, cx, cy, s) => {
    const st = Math.sin(tilt), ct = Math.cos(tilt);
    const sy = Math.sin(yaw), cyw = Math.cos(yaw);
    return (x, y, z) => {
      const px = x * cyw + z * sy, pz = -x * sy + z * cyw;
      const py = y * ct - pz * st, z2 = y * st + pz * ct;
      return [cx + px * s, cy - py * s, z2];
    };
  };

  /* dot radius scale for a given canvas size (reference: (size/300)^.6) */
  const rscale = S => Math.pow(S / 300, .6);

  /* painter: z-sorted brand-tinted dots.
     dot: {x,y,z,r,v (brightness 0..1),a,c (optional [r,g,b] accent)} */
  function paint(ctx, dots, accent, sat, rMin) {
    dots.sort((a, b) => a.z - b.z);
    for (const d of dots) {
      const al = d.a ?? 1;
      if (al < .02) continue;
      const v = clamp01(d.v);
      const g = v * 255;
      const acc = d.c || accent;
      const st = d.c ? .95 : sat;
      let r = g, gg = g, b = g;
      if (acc && st) {
        const lift = Math.min(1, v * 1.12);
        r = g * (1 - st) + acc[0] * lift * st;
        gg = g * (1 - st) + acc[1] * lift * st;
        b = g * (1 - st) + acc[2] * lift * st;
      }
      if (v > .85) { const w = (v - .85) / .15 * .45; r += (255 - r) * w; gg += (255 - gg) * w; b += (255 - b) * w; }
      ctx.fillStyle = \`rgba(\${r | 0},\${gg | 0},\${b | 0},\${al})\`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, Math.max(rMin, d.r), 0, TAU);
      ctx.fill();
    }
  }

  /* ============ CLAUDE — spark burst ============ */
  function drawClaude(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const yaw = .32 * Math.sin(t * .5), tilt = .3 + .17 * Math.sin(t * .33);
    const p = proj(yaw, tilt, cx, cy, R);
    const spin = t * .17;
    const rays = o.mini ? 8 : 11;
    const perRay = o.mini ? 4 : 6;
    const dots = [];
    /* ghost silhouette ring */
    const gh = o.mini ? 10 : 22;
    for (let i = 0; i < gh; i++) {
      const a = i / gh * TAU + t * .05;
      const [x, y, z] = p(Math.cos(a), Math.sin(a), 0);
      dots.push({ x, y, z, r: .8 * rs, v: .22, a: .1 + .1 * ((z + 1) / 2) });
    }
    for (let k = 0; k < rays; k++) {
      const baseA = k / rays * TAU + (hash(k, 3.1) - .5) * .3 + spin;
      const baseL = .62 + .38 * hash(k, 7.7);
      const pulse = .5 + .5 * Math.sin(t * 1.7 - k * 1.13);
      const L = baseL * (.8 + .28 * pulse * pulse);
      for (let j = 0; j < perRay; j++) {
        const f = (j + .8) / perRay;
        const rr = .14 + f * (L - .14);
        const [x, y, z] = p(Math.cos(baseA) * rr, Math.sin(baseA) * rr, 0);
        const dep = (z + 1) / 2;
        dots.push({
          x, y, z,
          r: (.75 + 1.35 * (1 - f * .45) + .5 * dep) * rs,
          v: .38 + .38 * f + .22 * pulse * f,
          a: .55 + .45 * f
        });
      }
    }
    /* core */
    const [x0, y0, z0] = p(0, 0, 0);
    dots.push({ x: x0, y: y0, z: z0 + .01, r: 1.5 * rs, v: .92 });
    paint(ctx, dots, o.accent, .85, .3);
  }

  /* ============ SPHERE (study) — blossom knot ============ */
  function drawSphere(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(t * .26, .35 + .08 * Math.sin(t * .4), cx, cy, R);
    const rings = 6, phi = 1.13; /* ring plane tilt from vertical axis */
    const ghostN = o.mini ? 10 : 32;
    const runners = o.mini ? 1 : 2;
    const dots = [];
    for (let i = 0; i < rings; i++) {
      const a = i / rings * TAU;
      /* ring normal, arranged with 6-fold symmetry */
      const nx = Math.sin(phi) * Math.cos(a), ny = Math.cos(phi), nz = Math.sin(phi) * Math.sin(a);
      /* orthonormal basis in ring plane */
      let ux = -nz, uy = 0, uz = nx;
      const ul = Math.hypot(ux, uz) || 1; ux /= ul; uz /= ul;
      const vx = ny * uz - nz * uy, vy = nz * ux - nx * uz, vz = nx * uy - ny * ux;
      const rad = .74;
      for (let j = 0; j < ghostN; j++) {
        const th = j / ghostN * TAU;
        const gx = (ux * Math.cos(th) + vx * Math.sin(th)) * rad;
        const gy = (uy * Math.cos(th) + vy * Math.sin(th)) * rad;
        const gz = (uz * Math.cos(th) + vz * Math.sin(th)) * rad;
        const [x, y, z] = p(gx, gy, gz);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (.65 + 1 * dep) * rs, v: .4 + .45 * dep, a: .4 + .6 * dep });
      }
      for (let m = 0; m < runners; m++) {
        const th = t * (i % 2 ? -.9 : .9) + i * 1.05 + m / runners * TAU;
        const gx = (ux * Math.cos(th) + vx * Math.sin(th)) * rad;
        const gy = (uy * Math.cos(th) + vy * Math.sin(th)) * rad;
        const gz = (uz * Math.cos(th) + vz * Math.sin(th)) * rad;
        const [x, y, z] = p(gx, gy, gz);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .78 + .22 * dep });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ CURSOR — the pointer ============ */
  const mkArrow = (pts, ox, oy, sc) => pts.map(([x, y]) => [(x - ox) * sc, (y - oy) * sc]);
  /* the arrow inside the Cursor logo, traced from its own path (viewBox 24), tip first.
     two long edges (18.55 / 18.90) and two short ones (10.80 / 10.93) — the logo's own proportions */
  const ARROW_CLEAN = mkArrow([[21.207, 6.338], [12.11, 22.9], [11.95, 12.1], [2.657, 6.338]], 12, 12, .08426);
  /* the cube silhouette that frames it — same transform, so the two nest exactly as they do in the logo */
  const CURSOR_HEX = mkArrow([[12, .131], [22.528, 6.19], [22.528, 17.81], [12, 23.866], [1.471, 17.81], [1.471, 6.19]], 12, 12, .08426);
  /* study: the classic pointer, tail leg and all */
  const ARROW_LEG = mkArrow([[0, 0], [0, 17], [4, 13], [7, 19.5], [10, 18], [7, 12], [12, 12]], 5.7, 11.6, .086);
  function perimeter(pts) {
    const n = pts.length, seg = [];
    let L = 0;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      seg.push(l); L += l;
    }
    return u => {
      let d = (((u % 1) + 1) % 1) * L, i = 0;
      while (d > seg[i] && i < n - 1) { d -= seg[i]; i++; }
      const a = pts[i], b = pts[(i + 1) % n], f = seg[i] ? d / seg[i] : 0;
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
    };
  }
  const cleanPath = perimeter(ARROW_CLEAN), legPath = perimeter(ARROW_LEG), hexPath = perimeter(CURSOR_HEX);
  function inPoly(pts, x, y) {
    let hit = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }
  function drawArrowOrb(ctx, S, t, o, rot, pts, path, opt) {
    const { span, fill, wob, frame, framePath } = opt;
    const cs = Math.cos(rot), sn = Math.sin(rot);
    const rp = (x, y) => [x * cs - y * sn, x * sn + y * cs];
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const w = wob ?? 1;   /* keep the official mark close to the flat logo silhouette */
    const p = proj(.26 * w * Math.sin(t * .5), (.3 + .12 * Math.sin(t * .35)) * w, cx, cy, R);
    /* click cycle */
    const beat = 2.4, c = ((t / beat) % 1 + 1) % 1;
    const press = c < .14 ? Math.sin(c / .14 * Math.PI) : 0;
    const scale = 1 - .09 * press;
    /* one dot every fixed step of edge length, so every line is an even queue */
    let per = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      per += Math.hypot(b[0] - a[0], b[1] - a[1]);
    }
    const N = Math.max(8, Math.round(per / (o.mini ? .4 : .152)));
    const dots = [];
    const tip = rp(pts[0][0], pts[0][1]);
    for (let i = 0; i < N; i++) {
      const [ax0, ay0] = path((i + .5) / N);
      const [ax, ay] = rp(ax0, ay0);
      const [x, y, z] = p(ax * scale, -ay * scale, 0);
      const dep = (z + 1) / 2;
      const tipNear = Math.max(0, 1 - Math.hypot(ax - tip[0], ay - tip[1]) / span);
      dots.push({
        x, y, z,
        r: (.85 + 1.05 * dep + .7 * tipNear) * rs,
        v: .58 + .26 * tipNear + .14 * dep + .12 * press
      });
    }
    /* interior lattice so the mark reads as a solid pointer, not an outline */
    if (fill && !o.mini) {
      let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (const [px, py] of pts) { x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py); }
      const gap = .17;
      for (let gy = y0 + gap * .5; gy < y1; gy += gap) {
        for (let gx = x0 + gap * .5; gx < x1; gx += gap) {
          if (!inPoly(pts, gx, gy)) continue;
          const [ax, ay] = rp(gx, gy);
          const [x, y, z] = p(ax * scale, -ay * scale, .03);
          const dep = (z + 1) / 2;
          const tipNear = Math.max(0, 1 - Math.hypot(ax - tip[0], ay - tip[1]) / span);
          dots.push({ x, y, z, r: (.72 + .8 * dep) * rs, v: .43 + .16 * dep + .18 * tipNear, a: .85 });
        }
      }
    }
    /* the cube outline, its own even queue of dots, sat behind the arrow */
    if (frame) {
      let fper = 0;
      for (let i = 0; i < frame.length; i++) {
        const a = frame[i], b = frame[(i + 1) % frame.length];
        fper += Math.hypot(b[0] - a[0], b[1] - a[1]);
      }
      const FN = Math.max(6, Math.round(fper / (o.mini ? .44 : .152)));
      for (let i = 0; i < FN; i++) {
        const [fx0, fy0] = framePath((i + .5) / FN);
        const [fx, fy] = rp(fx0, fy0);
        const [x, y, z] = p(fx * scale, -fy * scale, -.05);
        const dep = (z + 1) / 2;
        dots.push({ x, y, z, r: (.78 + .68 * dep) * rs, v: .46 + .16 * dep, a: .8 });
      }
    }
    /* click ripple expanding from the tip */
    const rip = c < .5 ? c / .5 : 0;
    if (rip > 0 && !o.mini) {
      const rr = .22 + .72 * rip, Nr = 14;
      for (let i = 0; i < Nr; i++) {
        const a = i / Nr * TAU;
        const [x, y, z] = p(tip[0] + Math.cos(a) * rr, -(tip[1] + Math.sin(a) * rr), -.05);
        dots.push({ x, y, z, r: .7 * rs, v: .62, a: (1 - rip) * .5 });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }
  /* official: pointing right and a little up, like the logo */
  function drawCursor(ctx, S, t, o) {
    drawArrowOrb(ctx, S, t, o, 0, ARROW_CLEAN, cleanPath,
      { span: 1.5, fill: true, wob: .5, frame: CURSOR_HEX, framePath: hexPath });
  }
  /* study: the original up-left pointer */
  function drawPointer(ctx, S, t, o) { drawArrowOrb(ctx, S, t, o, 0, ARROW_LEG, legPath, { span: 1.05 }); }

  /* ============ CUBE (study) — face sweep ============ */
  const CUBE_V = [];
  for (let i = 0; i < 8; i++) CUBE_V.push([(i & 1 ? 1 : -1), (i & 2 ? 1 : -1), (i & 4 ? 1 : -1)]);
  const CUBE_E = [[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];
  const CUBE_F = [[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]];
  const CUBE_PATH = [0,1,3,2,6,7,5,4]; /* gray-code loop over vertices */
  function drawCube(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.63 + t * .38, .6155 + .06 * Math.sin(t * .5), cx, cy, R);
    const h = .62;
    const perEdge = o.mini ? 4 : 8;
    /* face sweep: one face pulses at a time */
    const cyc = t * .55;
    const face = Math.floor(cyc % 6);
    const pulse = Math.sin(clamp01(cyc % 1) * Math.PI);
    const inFace = CUBE_F[face];
    const dots = [];
    for (const [a, b] of CUBE_E) {
      const hot = inFace.includes(a) && inFace.includes(b) ? pulse : 0;
      const A = CUBE_V[a], B = CUBE_V[b];
      for (let j = 0; j < perEdge; j++) {
        const f = (j + .5) / perEdge;
        const [x, y, z] = p(lerp(A[0], B[0], f) * h, lerp(A[1], B[1], f) * h, lerp(A[2], B[2], f) * h);
        const dep = (z + 1) / 2;
        dots.push({
          x, y, z,
          r: (.8 + 1.5 * dep + .5 * hot) * rs,
          v: .42 + .44 * dep + .28 * hot,
          a: .55 + .45 * dep
        });
      }
    }
    /* corner anchors */
    for (const V of CUBE_V) {
      const [x, y, z] = p(V[0] * h, V[1] * h, V[2] * h);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep });
    }
    /* the runner "cursor" walking the edges */
    const walk = t * .8;
    const seg = Math.floor(walk % 8), fseg = walk % 1;
    const A = CUBE_V[CUBE_PATH[seg]], B = CUBE_V[CUBE_PATH[(seg + 1) % 8]];
    for (let k = 0; k < 4; k++) {
      const f = clamp01(fseg - k * .09);
      const [x, y, z] = p(lerp(A[0], B[0], f) * h, lerp(A[1], B[1], f) * h, lerp(A[2], B[2], f) * h);
      dots.push({ x, y, z: z + .02, r: (1.7 - k * .3) * rs, v: .96 - k * .17, a: 1 - k * .2 });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ GEMINI — astroid twinkle ============ */
  function drawGemini(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const yaw = .3 * Math.sin(t * .45), tilt = .32 + .14 * Math.sin(t * .28);
    const p = proj(yaw, tilt, cx, cy, R);
    const rotW = .14 * Math.sin(t * .9);          /* twinkle wobble */
    const scale = .88 + .12 * Math.sin(t * 1.8);  /* twinkle breath */
    const N = o.mini ? 22 : 58;
    const dots = [];
    const cBlue = [64, 148, 255], cPurple = [176, 118, 240], cPink = [225, 118, 178];
    const grad = py => {
      /* vertical gradient: top blue → mid purple → bottom pink (screen up = +py) */
      const gpos = clamp01((1 - py) / 2);
      return gpos < .5
        ? [lerp(cBlue[0], cPurple[0], gpos * 2), lerp(cBlue[1], cPurple[1], gpos * 2), lerp(cBlue[2], cPurple[2], gpos * 2)]
        : [lerp(cPurple[0], cPink[0], gpos * 2 - 1), lerp(cPurple[1], cPink[1], gpos * 2 - 1), lerp(cPurple[2], cPink[2], gpos * 2 - 1)];
    };
    for (let i = 0; i < N; i++) {
      const th = i / N * TAU + rotW;
      const c3 = Math.cos(th), s3 = Math.sin(th);
      const px = c3 * c3 * c3 * scale, py = s3 * s3 * s3 * scale;
      const [x, y, z] = p(px, py, 0);
      const dep = (z + 1) / 2;
      const tip = Math.pow(Math.abs(px) + Math.abs(py), 1.6); /* brighter near the 4 points */
      dots.push({
        x, y, z,
        r: (.7 + 1.1 * dep + .9 * tip) * rs,
        v: .48 + .32 * tip + .2 * dep,
        c: grad(py)
      });
    }
    /* inner echo star for body */
    const Ni = o.mini ? 0 : N >> 1;
    for (let i = 0; i < Ni; i++) {
      const th = i / Ni * TAU - rotW * .6;
      const c3 = Math.cos(th), s3 = Math.sin(th);
      const px = c3 * c3 * c3 * scale * .48, py = s3 * s3 * s3 * scale * .48;
      const [x, y, z] = p(px, py, .04);
      dots.push({ x, y, z, r: .85 * rs, v: .52, a: .8, c: grad(py * 2) });
    }
    /* orbiting satellite sparkles */
    if (!o.mini) for (let k = 0; k < 3; k++) {
      const a = t * (k % 2 ? -.5 : .65) + k * 2.1;
      const rr = .95 + .1 * Math.sin(t * 1.3 + k * 2);
      const [x, y, z] = p(Math.cos(a) * rr, Math.sin(a) * rr, .25 * Math.sin(t * .7 + k * 3));
      const tw = .5 + .5 * Math.sin(t * 3 + k * 2.4);
      dots.push({ x, y, z, r: (.6 + .9 * tw) * rs, v: .85, a: .25 + .6 * tw, c: k === 0 ? cBlue : k === 1 ? cPurple : cPink });
    }
    /* core glimmer */
    const [x0, y0, z0] = p(0, 0, 0);
    dots.push({ x: x0, y: y0, z: z0 + .01, r: (1.1 + .5 * Math.sin(t * 2.2)) * rs, v: .9, c: cPurple });
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ FIGMA — swatch morph ============ */
  const FIGMA_COLS = [
    [242, 78, 30],   /* L-top  */
    [255, 114, 98],  /* R-top  */
    [162, 89, 255],  /* L-mid  */
    [26, 188, 254],  /* R-mid  */
    [10, 207, 131]   /* L-bot  */
  ];
  const FIGMA_POS = [[-.21, -.42], [.21, -.42], [-.21, 0], [.21, 0], [-.21, .42]];
  function drawFigma(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const per = o.mini ? 6 : 13;       /* dots per swatch */
    const N = per * 5;
    /* cycle: sphere → logo → sphere */
    const T = 7, u = ((t * .9) % T + T) % T;
    let m; /* 0 = sphere, 1 = logo */
    if (u < 2.8) m = 0;
    else if (u < 3.7) m = smooth((u - 2.8) / .9);
    else if (u < 5.6) m = 1;
    else if (u < 6.5) m = 1 - smooth((u - 5.6) / .9);
    else m = 0;
    const p = proj(t * .5, .32 + .1 * Math.sin(t * .35), cx, cy, R);
    const dots = [];
    for (let i = 0; i < N; i++) {
      const grp = i % 5;
      const idx = (i / 5) | 0;
      /* sphere home */
      const f = fib(i, N);
      const [sx, sy, sz] = p(f[0], f[1], f[2]);
      /* logo home: tight sunflower disc per swatch, face-on */
      const ring = .155 * Math.sqrt((idx + .5) / per);
      const ang = idx * 2.399963 + grp * 1.2;
      const bob = .008 * Math.sin(t * 1.6 + grp * 1.3);
      const lx = cx + (FIGMA_POS[grp][0] + Math.cos(ang) * ring) * R * 1.05;
      const ly = cy + (FIGMA_POS[grp][1] + bob + Math.sin(ang) * ring) * R * 1.05;
      const x = lerp(sx, lx, m), y = lerp(sy, ly, m), z = lerp(sz, grp * .05 - .1, m);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.8 + 1.4 * lerp(dep, .85, m)) * rs,
        v: lerp(.45 + .48 * dep, .85, m),
        c: FIGMA_COLS[grp]
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ REACT — the atom ============ */
  function drawReact(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.1 * Math.sin(t * .4), .12 * Math.sin(t * .33), cx, cy, R);
    const spin = t * .26, rx = .94, ry = .345;
    const per = o.mini ? 20 : 56;
    const dots = [];
    for (let k = 0; k < 3; k++) {
      const a0 = spin + k * Math.PI / 3;
      const ca = Math.cos(a0), sa = Math.sin(a0);
      const ring = th => {
        const ex = Math.cos(th) * rx, ey = Math.sin(th) * ry;
        return [ex * ca - ey * sa, ex * sa + ey * ca];
      };
      for (let i = 0; i < per; i++) {
        const th = i / per * TAU;
        const [gx, gy] = ring(th);
        const [x, y, z] = p(gx, gy, 0);
        /* a highlight travels each orbit so the flat mark still breathes */
        const ph = ((th / TAU - t * .19 - k * .33) % 1 + 1) % 1;
        const crest = Math.exp(-Math.pow(ph - .5, 2) / .022);
        dots.push({ x, y, z: z + crest * .01, r: (.95 + .6 * crest) * rs, v: .66 + .3 * crest, a: .85 + .15 * crest });
      }
      const eth = t * (k % 2 ? -1.15 : 1.3) + k * 2.1;
      const [ex2, ey2] = ring(eth);
      const [x2, y2, z2] = p(ex2, ey2, .04);
      dots.push({ x: x2, y: y2, z: z2 + .02, r: 1.9 * rs, v: .95 });
    }
    /* nucleus */
    const nN = o.mini ? 3 : 7;
    for (let i = 0; i < nN; i++) {
      const a = i / nN * TAU, rr = i ? .085 : 0;
      const [x, y, z] = p(Math.cos(a) * rr, Math.sin(a) * rr, .05);
      dots.push({ x, y, z: z + .03, r: 1.5 * rs, v: .9 });
    }
    paint(ctx, dots, o.accent, .88, .3);
  }

  /* ============ SWIFT — the bird ============ */
  const OPENAI_PATH = "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";
  const SWIFT_PATH = "M13.543 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z";
  const maskCache = new Map();
  /* sample a real logo path into a dot lattice, normalised on its own bounding box */
  function pathDots(key, d, N, vb, strokeW, inv, rc) {
    const ck = key + "-" + N + "-" + (inv || "") + (rc ? "-rc" : "");
    if (maskCache.has(ck)) return maskCache.get(ck);
    const px = 200, c = document.createElement("canvas");
    c.width = c.height = px;
    const g = c.getContext("2d");
    g.setTransform(px / (vb || 24), 0, 0, px / (vb || 24), 0, 0);
    if (strokeW) {
      g.strokeStyle = "#fff"; g.lineWidth = strokeW; g.lineJoin = "round"; g.lineCap = "round";
      g.stroke(new Path2D(d));
    } else {
      g.fillStyle = "#fff";
      g.fill(new Path2D(d));
    }
    const img = g.getImageData(0, 0, px, px).data;
    let x0 = px, x1 = -1, y0 = px, y1 = -1;
    for (let j = 0; j < px; j++) for (let i = 0; i < px; i++)
      if (img[(j * px + i) * 4 + 3] > 128) { if (i < x0) x0 = i; if (i > x1) x1 = i; if (j < y0) y0 = j; if (j > y1) y1 = j; }
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2, m = Math.max(x1 - x0, y1 - y0);
    const pts = [];
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const sx = mx + ((i + .5) / N * 2 - 1) * m / 2, sy = my + ((j + .5) / N * 2 - 1) * m / 2;
      const ix = Math.round(sx), iy = Math.round(sy);
      if (ix < 0 || iy < 0 || ix >= px || iy >= px) continue;
      const on = img[(iy * px + ix) * 4 + 3] > 128;
      const nx = (sx - mx) / (m / 2), ny = (sy - my) / (m / 2);
      if (inv) {
        /* the mark is the hole: keep empty pixels that sit inside the outer silhouette */
        if (on) continue;
        if (inv === "circle" && Math.hypot(nx, ny) > .96) continue;
        if (inv === "box" && Math.pow(Math.abs(nx), 4) + Math.pow(Math.abs(ny), 4) > Math.pow(.9, 4)) continue;
      } else if (!on) continue;
      pts.push([nx, ny]);
    }
    /* a mark carried as a hole is normalised against the outer silhouette, so it can sit
       off-centre in the frame; recentre it on its own bounds */
    if (rc && pts.length) {
      let ax0 = 1e9, ax1 = -1e9, ay0 = 1e9, ay1 = -1e9;
      for (const [qx, qy] of pts) {
        if (qx < ax0) ax0 = qx; if (qx > ax1) ax1 = qx;
        if (qy < ay0) ay0 = qy; if (qy > ay1) ay1 = qy;
      }
      const ox = (ax0 + ax1) / 2, oy = (ay0 + ay1) / 2;
      for (const q of pts) { q[0] -= ox; q[1] -= oy; }
    }
    maskCache.set(ck, pts);
    return pts;
  }

  /* ---------- marks sampled straight from each brand's own logo path ---------- */
  const MARK_PATHS = {
    github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    threads: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    css: "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63",
    ios: "M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z",
    neuform: "M111.571 49.9795L84 64.7156L112.332 77.9309 M107.889 87.5876L77.9727 78.5118L88.6616 107.89 M78.6897 111.575L63.9536 84.0035L50.7383 112.335 M41.0796 107.89L50.1554 77.9739L20.7773 88.6627 M17.0924 78.6912L44.6636 63.9551L16.332 50.7398 M20.7812 41.0833L50.697 50.1591L40.0081 20.781 M49.9766 17.0959L64.7127 44.6672L77.928 16.3356 M87.5875 20.7808L78.5117 50.6965L107.89 40.0077",
    designcode: "M14 12H24C29.5228 12 34 16.4772 34 22C34 27.5228 29.5228 32 24 32H14V12Z M30.3581 14.3347C28.6503 12.9333 26.6553 12.0237 24.2764 12L14.2469 22L24.2764 32C26.6552 31.9762 28.6503 31.041 30.3581 29.6397C30.3166 29.5982 27.6374 27.0121 26.6669 26.0446C25.6965 25.0772 23.2779 22.7255 22.5501 22C22.5501 22 30.3166 14.3762 30.3581 14.3347Z"
  };
  /* one driver for every sampled mark; each brand is just a config */
  function drawMark(ctx, S, t, o, cfg) {
    const cx = S / 2, cy = S / 2, R = S / 2 * (cfg.fit ?? .88);
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .4), .13 * Math.sin(t * .31), cx, cy, R);
    const pts = pathDots(cfg.key, MARK_PATHS[cfg.key], o.mini ? (cfg.nMini ?? 12) : (cfg.n ?? 26), cfg.vb, cfg.stroke, cfg.invert, cfg.recenter);
    const wave = (((t * (cfg.speed ?? .4)) % 1 + 1) % 1) * 2.4 - 1.2;
    const dots = [];
    for (const [gx, gy] of pts) {
      let crest;
      if (cfg.motion === "scan") crest = Math.exp(-Math.pow(gy - wave, 2) / .05);
      else if (cfg.motion === "sweep") {
        const ph = ((Math.atan2(gy, gx) / TAU + .5 - t * .3) % 1 + 1) % 1;
        crest = Math.exp(-Math.pow(ph - .5, 2) / .014);
      } else crest = Math.exp(-Math.pow((gx - gy) * .5 - wave, 2) / .05);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      const d = { x, y, z, r: (.78 + .72 * dep + .45 * crest) * rs, v: (cfg.v ?? .58) + .15 * dep + .3 * crest };
      if (cfg.grad) {
        const m = clamp01((gy + 1) / 2);
        d.c = [lerp(cfg.grad[0][0], cfg.grad[1][0], m),
               lerp(cfg.grad[0][1], cfg.grad[1][1], m),
               lerp(cfg.grad[0][2], cfg.grad[1][2], m)];
      }
      dots.push(d);
    }
    paint(ctx, dots, cfg.accent ?? null, cfg.accent ? .9 : 0, .3);
  }
  const mk = cfg => (ctx, S, t, o) => drawMark(ctx, S, t, o, cfg);

  /* walk a real path at uniform arc length, so its lines come out as even dot runs */
  const walkCache = new Map();
  function pathWalk(key, d, spacing, ox, oy, sc) {
    const ck = "w" + key + "-" + spacing;
    if (walkCache.has(ck)) return walkCache.get(ck);
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.cssText = "position:absolute;left:-9999px;top:0";
    document.body.appendChild(svg);
    const pts = [];
    for (const sub of d.split(/(?=M)/)) {          /* every subpath gets its own even queue */
      if (!sub.trim()) continue;
      const el = document.createElementNS(NS, "path");
      el.setAttribute("d", sub);
      svg.appendChild(el);
      const L = el.getTotalLength();
      if (!L) continue;
      const n = Math.max(2, Math.round(L / spacing));
      for (let i = 0; i < n; i++) {
        const q = el.getPointAtLength((i + .5) / n * L);
        pts.push([(q.x - ox) * sc, (q.y - oy) * sc]);
      }
    }
    svg.remove();
    walkCache.set(ck, pts);
    return pts;
  }

  /* ============ DESIGNCODE — monogram in a dot field ============ */
  /* geometry is static, so build it once per size: the disc, minus a clearance
     around the monogram, plus the monogram itself. Normalised on the logo's own
     disc (centre 22,22 r 22 of its 44 viewBox) so the proportions are the logo's. */
  const dcCache = new Map();
  function dcGeom(mini) {
    const ck = mini ? "m" : "s";
    if (dcCache.has(ck)) return dcCache.get(ck);
    /* the monogram, walked evenly along its own outlines (logo's disc: centre 22,22 r 22 of 44) */
    const mark = pathWalk("designcode", MARK_PATHS.designcode, mini ? 3.1 : 1.5, 22, 22, 1 / 22);
    /* the disc of dots behind it, kept clear of the lines */
    const fg = mini ? .26 : .12, cl = mini ? .17 : .105, cl2 = cl * cl;
    const field = [];
    for (let gy = -1; gy <= 1; gy += fg) {
      for (let gx = -1; gx <= 1; gx += fg) {
        if (Math.hypot(gx, gy) > .97) continue;
        let near = false;
        for (const [mx2, my2] of mark) {
          const dx = gx - mx2, dy = gy - my2;
          if (dx * dx + dy * dy < cl2) { near = true; break; }
        }
        if (!near) field.push([gx, gy]);
      }
    }
    const geom = { mark, field };
    dcCache.set(ck, geom);
    return geom;
  }
  function drawDesignCode(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .82;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .38), .12 * Math.sin(t * .29), cx, cy, R);
    const { mark, field } = dcGeom(o.mini);
    const wave = (((t * .3) % 1 + 1) % 1) * 2.3 - 1.15;
    const dots = [];
    for (const [gx, gy] of field) {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.7 + .58 * dep) * rs, v: .3 + .1 * dep, a: .82 });
    }
    for (const [gx, gy] of mark) {
      const crest = Math.exp(-Math.pow(gy - wave, 2) / .06);
      const [x, y, z] = p(gx, -gy, .05);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.9 + .75 * dep + .3 * crest) * rs, v: .78 + .1 * dep + .18 * crest });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ AURA — the logo's own dot field ============ */
  /* [x, y, radius] for each circle in the Aura mark, normalised on its bounding box */
  const AURA_DOTS = [[-0.173, -0.959, 0.065], [-0.015, -0.963, 0.061], [0.138, -0.971, 0.052], [-0.264, -0.803, 0.059], [-0.103, -0.804, 0.058], [0.056, -0.807, 0.055], [0.207, -0.817, 0.044], [-0.336, -0.636, 0.064], [-0.172, -0.634, 0.067], [-0.012, -0.636, 0.064], [0.131, -0.655, 0.045], [0.284, -0.664, 0.036], [-0.417, -0.47, 0.068], [-0.291, -0.507, 0.032], [-0.143, -0.52, 0.018], [0.049, -0.49, 0.048], [0.201, -0.5, 0.038], [0.357, -0.506, 0.033], [-0.499, -0.313, 0.064], [-0.375, -0.351, 0.025], [-0.217, -0.355, 0.021], [0.131, -0.331, 0.045], [0.285, -0.339, 0.037], [0.439, -0.346, 0.03], [-0.589, -0.157, 0.058], [-0.456, -0.185, 0.03], [-0.298, -0.19, 0.025], [0.207, -0.17, 0.045], [0.361, -0.178, 0.036], [0.513, -0.187, 0.027], [-0.669, 0.002, 0.055], [-0.534, -0.024, 0.029], [0.291, -0.009, 0.043], [0.45, -0.012, 0.041], [0.598, -0.026, 0.026], [-0.755, 0.163, 0.054], [-0.611, 0.146, 0.036], [-0.457, 0.137, 0.028], [0.36, 0.145, 0.035], [0.523, 0.146, 0.036], [0.675, 0.136, 0.026], [-0.836, 0.322, 0.05], [-0.681, 0.315, 0.043], [-0.524, 0.31, 0.039], [-0.355, 0.316, 0.045], [-0.196, 0.314, 0.043], [-0.038, 0.31, 0.038], [0.117, 0.303, 0.032], [0.265, 0.289, 0.018], [0.442, 0.304, 0.032], [0.601, 0.301, 0.03], [0.759, 0.297, 0.025], [-0.924, 0.48, 0.047], [-0.765, 0.477, 0.044], [-0.588, 0.492, 0.058], [-0.43, 0.488, 0.055], [-0.3, 0.456, 0.023], [-0.118, 0.476, 0.043], [0.035, 0.468, 0.035], [0.197, 0.467, 0.034], [0.353, 0.462, 0.028], [0.516, 0.463, 0.029], [0.677, 0.462, 0.029], [0.832, 0.455, 0.022], [-1.0, 0.643, 0.048], [-0.839, 0.642, 0.047], [-0.675, 0.645, 0.05], [-0.527, 0.631, 0.035], [0.123, 0.632, 0.037], [0.277, 0.625, 0.029], [0.437, 0.623, 0.028], [0.599, 0.623, 0.028], [0.757, 0.619, 0.024], [0.918, 0.618, 0.023], [-0.92, 0.808, 0.051], [-0.762, 0.804, 0.047], [0.357, 0.79, 0.033], [0.517, 0.787, 0.03], [0.676, 0.785, 0.028], [0.835, 0.782, 0.024], [1.0, 0.785, 0.028], [-0.995, 0.971, 0.053], [-0.835, 0.97, 0.051], [0.604, 0.951, 0.033], [0.761, 0.947, 0.028], [0.926, 0.95, 0.031]];
  function drawAura(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .63;
    const rs = rscale(S) * (o.mini ? 1.7 : 1);
    const p = proj(.14 * Math.sin(t * .36), .12 * Math.sin(t * .28), cx, cy, R);
    /* an aura travels outward through the field */
    const ring = (((t * .32) % 1 + 1) % 1) * 2.2 - .2;
    const dots = [];
    const step = o.mini ? 2 : 1;
    for (let i = 0; i < AURA_DOTS.length; i += step) {
      const [gx, gy, gr] = AURA_DOTS[i];
      const d0 = Math.hypot(gx, gy);
      const glow = Math.exp(-Math.pow(d0 - ring, 2) / .045);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: Math.max(.4, gr * R * .92) + (.25 * dep + .5 * glow) * rs,
        v: .5 + .12 * dep + .36 * glow
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ FLOWER (study) — tapered petal bloom ============ */
  function drawFlower(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .34), .12 * Math.sin(t * .27), cx, cy, R);
    const petals = 6, spin = t * .15;
    const open = .9 + .1 * Math.sin(t * .8);           /* the bloom breathes */
    const a = .42, b = .335;                           /* petal half-length / half-width */
    const mid = .53 * open;                            /* petal centre, measured from the middle */
    const gap = o.mini ? .17 : .076;
    const dots = [];
    for (let k = 0; k < petals; k++) {
      const th = spin + k / petals * TAU;
      const ca = Math.cos(th), sa = Math.sin(th);
      const lean = .5 + .5 * Math.sin(t * .9 + k * 1.05);
      for (let u = -a; u <= a; u += gap) {
        /* teardrop: pinched toward the centre, full at the outer end */
        const bw = b * (.5 + .5 * (u + a) / (2 * a));
        for (let v = -bw; v <= bw; v += gap) {
          const q = Math.pow(Math.abs(u / a), 2.8) + Math.pow(Math.abs(v / bw), 2.4);
          if (q > 1) continue;
          const rad = mid + u;
          const gx = rad * ca - v * sa, gy = rad * sa + v * ca;
          const [x, y, z] = p(gx, -gy, .05 * (1 - q));
          const dep = (z + 1) / 2;
          const rim = clamp01(q);
          dots.push({
            x, y, z,
            r: (.68 + .6 * dep + .3 * rim) * rs,
            v: .48 + .13 * dep + .26 * rim + .1 * lean,
            a: .7 + .24 * rim
          });
        }
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ DREAMCUT — the blossom ============ */
  function drawDreamCut(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.11 * Math.sin(t * .33), .11 * Math.sin(t * .26), cx, cy, R);
    const petals = 6, spin = t * .14;
    const breathe = 1 + .04 * Math.sin(t * .9);
    /* six round lobes, spaced so they overlap into a scalloped blossom */
    const d = .46 * breathe, rp = .41 * breathe, hole = .11;
    const pc = [];
    for (let k = 0; k < petals; k++) {
      const th = spin + k / petals * TAU;
      pc.push([Math.cos(th) * d, Math.sin(th) * d]);
    }
    const gap = o.mini ? .2 : .1;
    const glow = (((t * .3) % 1 + 1) % 1) * TAU;      /* a highlight travels round the bloom */
    const dots = [];
    const lit = (gx, gy) => .5 + .5 * Math.cos(Math.atan2(gy, gx) - glow);
    /* dim fill: the union of the six lobes */
    for (let gy = -1; gy <= 1; gy += gap) {
      for (let gx = -1; gx <= 1; gx += gap) {
        if (Math.hypot(gx, gy) < hole) continue;       /* the dark centre */
        let bd = 9;
        for (let k = 0; k < petals; k++) {
          const dd = Math.hypot(gx - pc[k][0], gy - pc[k][1]);
          if (dd < bd) bd = dd;
        }
        if (bd > rp) continue;
        const [x, y, z] = p(gx, -gy, .03);
        const dep = (z + 1) / 2;
        const l = lit(gx, gy);
        dots.push({ x, y, z, r: (.58 + .45 * dep) * rs, v: .27 + .09 * dep + .15 * l * l, a: .66 });
      }
    }
    /* each petal's own edge, so the six lobes read as petals and not one blob */
    const per = o.mini ? 10 : 26;
    for (let k = 0; k < petals; k++) {
      for (let i = 0; i < per; i++) {
        const a = i / per * TAU;
        const gx = pc[k][0] + Math.cos(a) * rp, gy = pc[k][1] + Math.sin(a) * rp;
        if (Math.hypot(gx, gy) < hole) continue;
        const [x, y, z] = p(gx, -gy, .06);
        const dep = (z + 1) / 2;
        const l = lit(gx, gy);
        dots.push({ x, y, z, r: (.88 + .78 * dep) * rs, v: .66 + .12 * dep + .26 * l * l });
      }
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ EMAIL — the envelope, flap lifting ============ */
  function drawEmail(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.14 * Math.sin(t * .4), .14 * Math.sin(t * .3), cx, cy, R);
    /* gy runs downward here, so -h is the top edge */
    const w = .88, h = .6, r = .24;
    /* opens, holds, shuts again */
    const cyc = ((t * .3) % 1 + 1) % 1;
    const lift = smooth(Math.sin(clamp01(cyc * 1.5) * Math.PI));
    /* the letter only shows once the flap has actually lifted */
    const show = clamp01((lift - .2) / .3);
    const step = o.mini ? .28 : .128;                 /* spaced like the cube's edges */
    const dots = [];
    /* one dot, cube-weighted: bigger and brighter as it comes forward */
    const dot = (gx, gy, z0, v, mul) => {
      const [x, y, z] = p(gx, -gy, z0 || 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.82 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.62 + .38 * dep) * (mul ?? 1) });
    };
    const node = (gx, gy, z0, mul) => {              /* the cube's brighter corner anchors */
      const [x, y, z] = p(gx, -gy, z0 || 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.22 + 1.5 * dep) * rs, v: .62 + .4 * dep, a: (.68 + .32 * dep) * (mul ?? 1) });
    };
    const line = (ax, ay, bx, by, v, z0, mul) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n;
        dot(ax + (bx - ax) * f, ay + (by - ay) * f, z0, v, mul);
      }
    };
    /* rounded envelope body, walked at even spacing */
    const body = [];
    const arc = (ax, ay, a0, a1) => {
      for (let i = 0; i <= 5; i++) {
        const a = a0 + (a1 - a0) * i / 5;
        body.push([ax + Math.cos(a) * r, ay + Math.sin(a) * r]);
      }
    };
    body.push([-w + r, -h], [w - r, -h]);
    arc(w - r, -h + r, -Math.PI / 2, 0);
    body.push([w, h - r]);
    arc(w - r, h - r, 0, Math.PI / 2);
    body.push([-w + r, h]);
    arc(-w + r, h - r, Math.PI / 2, Math.PI);
    body.push([-w, -h + r]);
    arc(-w + r, -h + r, Math.PI, Math.PI * 1.5);
    let per = 0;
    for (let i = 0; i < body.length; i++) {
      const a = body[i], b = body[(i + 1) % body.length];
      per += Math.hypot(b[0] - a[0], b[1] - a[1]);
    }
    const bodyPath = perimeter(body);
    const N = Math.max(8, Math.round(per / step));
    for (let i = 0; i < N; i++) {
      const [gx, gy] = bodyPath((i + .5) / N);
      dot(gx, gy, 0, .5);
    }
    /* anchors where the four corners turn */
    const kx = w - r * .3, ky = h - r * .3;
    node(-kx, -ky); node(kx, -ky); node(kx, ky); node(-kx, ky);
    /* the letter: hidden while shut, rising into view as the flap opens */
    if (show > .02) {
      const lw = w * .6, lh = h * .62, lr = .1, lz = -.06;
      const ly = 0;                                 /* sits centred; the flap does the revealing */
      line(-lw + lr, ly - lh, lw - lr, ly - lh, .56, lz, show);
      line(-lw + lr, ly + lh, lw - lr, ly + lh, .56, lz, show);
      line(-lw, ly - lh + lr, -lw, ly + lh - lr, .56, lz, show);
      line(lw, ly - lh + lr, lw, ly + lh - lr, .56, lz, show);
      if (!o.mini) {                                  /* a couple of written lines */
        line(-lw * .55, ly - lh * .3, lw * .55, ly - lh * .3, .5, lz, show);
        line(-lw * .55, ly + lh * .12, lw * .28, ly + lh * .12, .5, lz, show);
      }
      node(-lw, ly - lh, lz, show); node(lw, ly - lh, lz, show);
    }
    /* the flap: creased along the top edge, dipping in when shut, swinging up when open */
    const apex = lerp(.34 * h, -1.5 * h, lift);
    const fx = w - r * .4, fy = -h + r * .1;
    line(-fx, fy, 0, apex, .6, .07);
    line(fx, fy, 0, apex, .6, .07);
    node(0, apex, .08);
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ OPENAI — the rosette, blooming ============ */
  function drawOpenAI(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .9;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.12 * Math.sin(t * .38), .12 * Math.sin(t * .29), cx, cy, R);
    const pts = pathDots("openai", OPENAI_PATH, o.mini ? 14 : 34);
    /* furls shut and opens again; the outer petals swirl further than the middle */
    const cyc = ((t * .28) % 1 + 1) % 1;
    const open = smooth(Math.sin(cyc * Math.PI));
    const scl = .5 + .5 * open;
    const dots = [];
    for (const [gx0, gy0] of pts) {
      const r0 = Math.hypot(gx0, gy0), th = Math.atan2(gy0, gx0);
      const a = th + (1 - open) * 1.5 * r0 + t * .1;
      const rr = r0 * scl;
      const [x, y, z] = p(Math.cos(a) * rr, -Math.sin(a) * rr, 0);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.78 + .7 * dep + .4 * r0 * open) * rs,
        v: .5 + .16 * dep + .28 * r0 * open
      });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ NEUFORM — eight chevrons ============ */
  function drawNeuform(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.13 * Math.sin(t * .36), .12 * Math.sin(t * .28), cx, cy, R);
    /* the mark is drawn in strokes, so walk it evenly rather than sampling a fill */
    const pts = pathWalk("neuform", MARK_PATHS.neuform, o.mini ? 6.5 : 2.9, 64, 64, 1 / 64);
    const spin = t * .12, cs = Math.cos(spin), sn = Math.sin(spin);
    /* light pushes outward through the eight arms */
    const wave = (((t * .34) % 1 + 1) % 1) * 1.55 - .1;
    const dots = [];
    for (const [gx0, gy0] of pts) {
      const gx = gx0 * cs - gy0 * sn, gy = gx0 * sn + gy0 * cs;
      const rr = Math.hypot(gx, gy);
      const crest = Math.exp(-Math.pow(rr - wave, 2) / .035);
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + .7 * dep + .55 * crest) * rs, v: .48 + .14 * dep + .34 * crest });
    }
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ UI — the panel ============ */
  function drawUI(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .34), .14 * Math.sin(t * .27), cx, cy, R);
    const step = o.mini ? .3 : .13;
    const dots = [];
    const dot = (gx, gy, v, mul) => {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + 1.45 * dep) * rs, v: v + .42 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    const line = (ax, ay, bx, by, v, mul) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n;
        dot(ax + (bx - ax) * f, ay + (by - ay) * f, v, mul);
      }
    };
    const w = .84, h = .64, r = .16, bar = -h + .3, side = -w + .42;
    /* the window frame */
    line(-w + r, -h, w - r, -h, .5); line(-w + r, h, w - r, h, .5);
    line(-w, -h + r, -w, h - r, .5); line(w, -h + r, w, h - r, .5);
    for (const [ax, ay, a0] of [[w - r, -h + r, -Math.PI / 2], [w - r, h - r, 0], [-w + r, h - r, Math.PI / 2], [-w + r, -h + r, Math.PI]])
      for (let i = 0; i <= 4; i++) {
        const a = a0 + i / 4 * (Math.PI / 2);
        dot(ax + Math.cos(a) * r, ay + Math.sin(a) * r, .5);
      }
    line(-w, bar, w, bar, .46);                      /* title bar */
    line(side, bar, side, h, .42);                   /* sidebar */
    if (!o.mini) { dot(-w + .17, -h + .15, .8); dot(-w + .3, -h + .15, .8); }
    /* content rows light up in turn, like a panel filling in */
    const rows = o.mini ? 2 : 3;
    for (let i = 0; i < rows; i++) {
      const yy = bar + .22 + i * .24;
      const pulse = .5 + .5 * Math.sin(t * 1.5 - i * 1.1);
      line(side + .16, yy, w - .16 - (i === rows - 1 ? .28 : 0), yy, .36 + .3 * pulse);
    }
    /* and a nav item on the sidebar */
    if (!o.mini) for (let i = 0; i < 2; i++) {
      const yy = bar + .28 + i * .3;
      line(-w + .14, yy, side - .12, yy, .34 + .22 * (.5 + .5 * Math.sin(t * 1.5 - i * 1.1 - .6)));
    }
    paint(ctx, dots, o.accent, .86, .3);
  }

  /* ============ UX — the journey ============ */
  const uxCurve = u => [-.82 + 1.64 * u, .40 * Math.cos(u * Math.PI) - .17 * Math.sin(u * TAU)];
  function drawUX(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .86;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.15 * Math.sin(t * .33), .14 * Math.sin(t * .26), cx, cy, R);
    const dots = [];
    const dot = (gx, gy, v, size, mul) => {
      const [x, y, z] = p(gx, -gy, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: ((size ?? .8) + 1.4 * dep) * rs, v: v + .4 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    /* the path itself, evenly spaced */
    const N = o.mini ? 13 : 34;
    for (let i = 0; i <= N; i++) {
      const u = i / N, q = uxCurve(u);
      /* a traveller runs the route */
      const head = (((t * .32) % 1 + 1) % 1);
      const d = Math.abs(u - head);
      const crest = Math.exp(-d * d / .006);
      dot(q[0], q[1], .38 + .38 * crest, .78 + .5 * crest);
    }
    /* waypoints along the way */
    for (const u of (o.mini ? [.5] : [.06, .5, .94])) {
      const q = uxCurve(u);
      const ring = o.mini ? 5 : 9, rr = .13;
      for (let i = 0; i < ring; i++) {
        const a = i / ring * TAU;
        dot(q[0] + Math.cos(a) * rr, q[1] + Math.sin(a) * rr, .58, .78);
      }
    }
    /* an arrowhead where the route ends */
    if (!o.mini) {
      const e = uxCurve(1), b = uxCurve(.93);
      const ang = Math.atan2(e[1] - b[1], e[0] - b[0]);
      for (const s2 of [-1, 1]) for (let i = 1; i <= 3; i++) {
        const a = ang + Math.PI + s2 * .62, f = i / 3 * .2;
        dot(e[0] + Math.cos(a) * f, e[1] + Math.sin(a) * f, .66);
      }
    }
    paint(ctx, dots, o.accent, .86, .3);
  }

  /* ============ CODEX — prompt blob ============ */
  const CODEX_CHEV = [[-.30, -.34], [.07, 0], [-.30, .34]];   /* the '>' , y down */
  const CODEX_BAR = [[.11, .30], [.43, .30]];                 /* the '_' */
  function segDist(px, py, ax, ay, bx, by) {
    const dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy;
    let u = L2 ? ((px - ax) * dx + (py - ay) * dy) / L2 : 0;
    u = u < 0 ? 0 : u > 1 ? 1 : u;
    return Math.hypot(px - (ax + dx * u), py - (ay + dy * u));
  }
  function drawCodex(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .92;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(.13 * Math.sin(t * .42), .13 * Math.sin(t * .31), cx, cy, R);
    const lobes = 6, spin = t * .2;
    const amp = .1 + .03 * Math.sin(t * 1.15);
    const rad = th => .76 * (1 + amp * Math.cos(lobes * (th - spin)));
    /* the underscore blinks like a terminal caret */
    const ph = ((t / 1.15) % 1 + 1) % 1;
    const blink = ph < .58 ? 1 : ph < .68 ? 1 - (ph - .58) / .1 : ph < .9 ? 0 : (ph - .9) / .1;
    const light = [186, 186, 252], deep = [104, 96, 246];
    const dots = [];
    const gap = o.mini ? .28 : .112;
    const clr = o.mini ? .1 : .108;
    const chevD = (x, y) => Math.min(
      segDist(x, y, CODEX_CHEV[0][0], CODEX_CHEV[0][1], CODEX_CHEV[1][0], CODEX_CHEV[1][1]),
      segDist(x, y, CODEX_CHEV[1][0], CODEX_CHEV[1][1], CODEX_CHEV[2][0], CODEX_CHEV[2][1]));
    const barD = (x, y) => segDist(x, y, CODEX_BAR[0][0], CODEX_BAR[0][1], CODEX_BAR[1][0], CODEX_BAR[1][1]);
    for (let gy = -1; gy <= 1; gy += gap) {
      for (let gx = -1; gx <= 1; gx += gap) {
        const d = Math.hypot(gx, gy);
        if (!d || d > rad(Math.atan2(gy, gx))) continue;
        if (chevD(gx, gy) < clr || barD(gx, gy) < clr * .92) continue;   /* leave room for the glyphs */
        const [x, y, z] = p(gx, -gy, 0);
        const dep = (z + 1) / 2, m = clamp01((gy + .85) / 1.7);
        dots.push({
          x, y, z, r: (.9 + 1.05 * dep) * rs, a: .95,
          v: .8 - .12 * m,
          c: [lerp(light[0], deep[0], m), lerp(light[1], deep[1], m), lerp(light[2], deep[2], m)]
        });
      }
    }
    /* the prompt itself, in white */
    const step = o.mini ? .13 : .052;
    const glyph = (ax, ay, bx, by, alpha) => {
      const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
      for (let i = 0; i <= n; i++) {
        const f = i / n, gx = ax + (bx - ax) * f, gy = ay + (by - ay) * f;
        const [x, y, z] = p(gx, -gy, .06);
        dots.push({ x, y, z, r: (1.15 + 1.1 * ((z + 1) / 2)) * rs, v: .97, a: alpha, c: [255, 255, 255] });
      }
    };
    glyph(CODEX_CHEV[0][0], CODEX_CHEV[0][1], CODEX_CHEV[1][0], CODEX_CHEV[1][1], 1);
    glyph(CODEX_CHEV[1][0], CODEX_CHEV[1][1], CODEX_CHEV[2][0], CODEX_CHEV[2][1], 1);
    if (blink > .02) glyph(CODEX_BAR[0][0], CODEX_BAR[0][1], CODEX_BAR[1][0], CODEX_BAR[1][1], blink);
    paint(ctx, dots, null, 0, .3);
  }

  /* ============ SWIFT — the bird ============ */
  function drawSwift(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .88;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a slow bank, as if riding an updraft */
    const p = proj(.2 * Math.sin(t * .43), .18 * Math.sin(t * .31) - .04, cx, cy, R);
    const pts = pathDots("swift", SWIFT_PATH, o.mini ? 11 : 27);
    const bob = .035 * Math.sin(t * .95);
    const wave = (((t * .4) % 1 + 1) % 1) * 2.4 - 1.2;
    const dots = [];
    for (const [gx, gy] of pts) {
      /* crest sweeps tail-to-beak along the bird's diagonal */
      const u = (gx - gy) * .5;
      const crest = Math.exp(-Math.pow(u - wave, 2) / .05);
      const [x, y, z] = p(gx, -gy + bob, 0);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.75 + .8 * dep + .45 * crest) * rs, v: .6 + .16 * dep + .26 * crest });
    }
    paint(ctx, dots, o.accent, .92, .3);
  }

  /* ============ FRAMER — letter morph ============ */
  const FRAMER_PTS = (() => {
    /* dot fill of the logo's three sections; each one carries its own diagonal (viewBox 24) */
    const pts = [], g = 1.72;
    for (let y = .9; y <= 7.4; y += g)                    /* top: left edge runs down to (12,8) */
      for (let x = 4 + y; x <= 19.4; x += g) pts.push([x, y, 0]);
    for (let y = 8.9; y <= 15.4; y += g)                  /* middle: right edge runs out to (20,16) */
      for (let x = 4.9; x <= 12 + (y - 8); x += g) pts.push([x, y, 1]);
    for (let y = 16.9; y <= 23.4; y += g)                 /* bottom: left edge runs down to (12,24) */
      for (let x = 4 + (y - 16); x <= 11.9; x += g) pts.push([x, y, 2]);
    return pts;
  })();
  function drawFramer(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const list = o.mini ? FRAMER_PTS.filter((_, i) => i % 2 === 0) : FRAMER_PTS;
    const N = list.length;
    /* cycle: sphere -> letter -> sphere (phase-shifted against the Figma orb) */
    const T = 7, u = (((t * .9 + 3.5) % T) + T) % T;
    let m;
    if (u < 2.8) m = 0;
    else if (u < 3.7) m = smooth((u - 2.8) / .9);
    else if (u < 5.6) m = 1;
    else if (u < 6.5) m = 1 - smooth((u - 5.6) / .9);
    else m = 0;
    const p = proj(t * .5, .32 + .1 * Math.sin(t * .35), cx, cy, R);
    const dots = [];
    for (let i = 0; i < N; i++) {
      const [lx0, ly0, sec] = list[i];
      const f = fib(i, N);
      const [sx, sy, sz] = p(f[0], f[1], f[2]);
      const sway = .012 * Math.sin(t * 1.4 + sec * 2.1) * (sec === 1 ? -1 : 1);
      const lx = cx + ((lx0 - 12) / 12 * .95 + sway) * R * 1.02;
      const ly = cy + ((ly0 - 12) / 12 * .95) * R * 1.02;
      const x = lerp(sx, lx, m), y = lerp(sy, ly, m), z = lerp(sz, sec * .05 - .08, m);
      const dep = (z + 1) / 2;
      dots.push({
        x, y, z,
        r: (.8 + 1.35 * lerp(dep, .85, m)) * rs,
        v: lerp(.42 + .48 * dep, .87, m)
      });
    }
    paint(ctx, dots, o.accent, .9, .3);
  }

  /* ============ BLUE ORB (study) — band shift ============ */
  function drawBands(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .8;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    const p = proj(t * .08, .35, cx, cy, R);
    const perRing = o.mini ? 14 : 22;
    const bands = [-.58, 0, .58];
    const sub = o.mini ? [0] : [-.09, 0, .09];
    /* eased 90-degree snap every few beats, alternating direction per band */
    const beat = 2.4, w = t / beat, step = Math.floor(w), f = w - step;
    const snapped = step + smooth(clamp01(f * 2.2));
    const snapPulse = Math.sin(clamp01(f * 2.2) * Math.PI);
    const dots = [];
    for (let b = 0; b < 3; b++) {
      const dir = b % 2 ? -1 : 1;
      const phase = dir * (snapped * Math.PI / 2 + t * .18) + b * .8;
      const hot = (step % 3 === b ? 1 : .25) * snapPulse;
      for (const so of sub) {
        const yy = bands[b] + so;
        const rad = Math.sqrt(Math.max(0, 1 - yy * yy)) * .96;
        for (let j = 0; j < perRing; j++) {
          const th = j / perRing * TAU + phase;
          const [x, y, z] = p(Math.cos(th) * rad, yy, Math.sin(th) * rad);
          const dep = (z + 1) / 2;
          dots.push({
            x, y, z,
            r: (.7 + 1.5 * dep + .45 * hot) * rs,
            v: .4 + .48 * dep + .16 * hot,
            a: .45 + .55 * dep
          });
        }
      }
    }
    paint(ctx, dots, o.accent, .9, .3);
  }

  /* ============ BOOK COVERS (study) — a closed book with a mark stamped on it ============ */
  /* the mark is laid onto the cover plane, so it takes the book's perspective */
  function drawBookCover(ctx, S, t, o, cfg) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .9;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a gentle three-quarter that drifts, so the cover turns through the light */
    const yaw = .55 + .13 * Math.sin(t * .28);
    const p = proj(yaw, .34 + .06 * Math.sin(t * .41), cx, cy, R);
    const w = .54, h = .72, d = .15;          /* half width / height / half thickness */
    const gapE = o.mini ? .33 : .155;         /* the cube's dot step */
    const dots = [];
    const dot = (gx, gy, gz, v, mul, col) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      const q = { x, y, z, r: (.8 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.58 + .42 * dep) * (mul ?? 1) };
      if (col) q.c = col;
      dots.push(q);
    };
    const node = (gx, gy, gz, mul) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep, a: (.62 + .38 * dep) * (mul ?? 1) });
    };
    const edge = (a, b, v, mul) => {
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const k = Math.max(2, Math.round(L / gapE));
      for (let i = 0; i < k; i++) {
        const f = (i + .5) / k;
        dot(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, v, mul);
      }
    };
    /* the closed slab */
    const V = [];
    for (const sx of [-w, w]) for (const sy of [-h, h]) for (const sz of [-d, d]) V.push([sx, sy, sz]);
    const ix = (a, b, c) => (a ? 4 : 0) + (b ? 2 : 0) + (c ? 1 : 0);
    const E = [];
    for (const a of [0, 1]) for (const b of [0, 1]) E.push([ix(a, b, 0), ix(a, b, 1)]);
    for (const a of [0, 1]) for (const c of [0, 1]) E.push([ix(a, 0, c), ix(a, 1, c)]);
    for (const b of [0, 1]) for (const c of [0, 1]) E.push([ix(0, b, c), ix(1, b, c)]);
    for (const [i, j] of E) edge(V[i], V[j], .45);
    for (const q of V) node(q[0], q[1], q[2]);
    /* page edges along the fore-edge, away from the spine */
    if (!o.mini) for (const pz of [-d * .5, 0, d * .5])
      edge([w, -h * .9, pz], [w, h * .9, pz], .34);
    /* the mark, stamped on the front cover */
    const front = d + .02, sp = w * .78;
    /* as the book turns, a highlight rakes across the cover */
    for (const [u, v, weight, col] of cfg.marks(t, o)) {
      const rake = .55 + .45 * Math.cos(u * 2.1 - yaw * 3.4);
      dot(u * sp, -v * sp, front, (cfg.base ?? .5) * weight + .26 * weight * rake, 1, col || cfg.col);
    }
    paint(ctx, dots, null, 0, .3);
  }
  /* Claude's spark burst, flattened onto the cover */
  const claudeCoverMarks = (t, o) => {
    const out = [], rays = o.mini ? 8 : 11, per = o.mini ? 3 : 5;
    for (let k = 0; k < rays; k++) {
      const a = k / rays * TAU + t * .1 + (hash(k, 3.1) - .5) * .28;
      const pulse = .5 + .5 * Math.sin(t * 1.7 - k * 1.13);
      const L = (.6 + .38 * hash(k, 7.7)) * (.82 + .24 * pulse * pulse);
      for (let j = 0; j < per; j++) {
        const f = (j + .8) / per;
        out.push([Math.cos(a) * L * f, Math.sin(a) * L * f, .62 + .3 * f + .2 * pulse]);
      }
    }
    out.push([0, 0, 1.25]);
    return out;
  };
  /* OpenAI's rosette, stamped still like a foil block */
  const openaiCoverMarks = (t, o) => {
    const pts = pathDots("openai", OPENAI_PATH, o.mini ? 10 : 17);
    const breathe = 1 + .02 * Math.sin(t * .8);
    return pts.map(([gx, gy]) => [gx * .78 * breathe, gy * .78 * breathe, .9]);
  };

  /* ---- 2-D mark geometry for the book covers: still stamps, built once and cached ---- */
  const coverCache = new Map();
  const cov = (key, build) => {
    if (!coverCache.has(key)) coverCache.set(key, build());
    return coverCache.get(key);
  };
  /* lay dots along a segment */
  const covSeg = (out, ax, ay, bx, by, step, w, col) => {
    const L = Math.hypot(bx - ax, by - ay), n = Math.max(2, Math.round(L / step));
    for (let i = 0; i <= n; i++) {
      const f = i / n;
      out.push([ax + (bx - ax) * f, ay + (by - ay) * f, w, col]);
    }
  };
  /* sample a real logo path straight onto the cover */
  const covPath = (key, d, N, sc, vb, stroke, inv, rc) =>
    pathDots("cov" + key, d, N, vb, stroke, inv, rc).map(([x, y]) => [x * sc, y * sc, .92]);

  const COVER_MARKS = {
    openai: () => cov("openai", () => covPath("openai", OPENAI_PATH, 17, .78)),
    swift: () => cov("swift", () => covPath("swift", SWIFT_PATH, 16, .8)),
    github: () => cov("github", () => covPath("github", MARK_PATHS.github, 18, .8, 24, 0, "circle", 1)),
    linkedin: () => cov("linkedin", () => covPath("linkedin", MARK_PATHS.linkedin, 18, .76, 24, 0, "box", 1)),
    x: () => cov("x", () => covPath("x", MARK_PATHS.x, 16, .72)),
    instagram: () => cov("instagram", () => covPath("instagram", MARK_PATHS.instagram, 17, .78)),
    threads: () => cov("threads", () => covPath("threads", MARK_PATHS.threads, 17, .78)),
    designcode: () => cov("designcode", () =>
      pathWalk("dcCover", MARK_PATHS.designcode, 1.9, 22, 22, 1 / 22).map(([x, y]) => [x * 1.55, y * 1.55, .95])),
    framer: () => cov("framer", () =>
      FRAMER_PTS.map(([x, y]) => [(x - 12) / 12 * .78, (y - 12) / 12 * .78, .92])),
    aura: () => cov("aura", () =>
      AURA_DOTS.map(([x, y, r]) => [x * .82, y * .82, .6 + 5 * r])),
    css: () => cov("css", () => covPath("css", MARK_PATHS.css, 19, .8, 24, 0, "box", 1)),
    ios: () => cov("ios", () => covPath("ios", MARK_PATHS.ios, 20, .86)),
    neuform: () => cov("neuform", () =>
      pathWalk("nfCover", MARK_PATHS.neuform, 3.1, 64, 64, 1 / 64).map(([x, y]) => [x * .84, y * .84, .95])),
    ui: () => cov("ui", () => {
      const o = [], w = .74, h = .56, bar = -h + .26, side = -w + .36;
      covSeg(o, -w, -h, w, -h, .1, .92); covSeg(o, w, -h, w, h, .1, .92);
      covSeg(o, w, h, -w, h, .1, .92); covSeg(o, -w, h, -w, -h, .1, .92);
      covSeg(o, -w, bar, w, bar, .1, .9);
      covSeg(o, side, bar, side, h, .1, .86);
      for (let i = 0; i < 3; i++) covSeg(o, side + .14, bar + .2 + i * .2, w - .14, bar + .2 + i * .2, .1, .8);
      return o;
    }),
    ux: () => cov("ux", () => {
      const o = [];
      for (let i = 0; i <= 30; i++) { const q = uxCurve(i / 30); o.push([q[0] * .82, q[1] * .82, .9]); }
      for (const u of [.06, .5, .94]) {
        const q = uxCurve(u);
        for (let i = 0; i < 9; i++) {
          const a = i / 9 * TAU;
          o.push([(q[0] + Math.cos(a) * .13) * .82, (q[1] + Math.sin(a) * .13) * .82, 1]);
        }
      }
      return o;
    }),
    codex: () => cov("codex", () => {
      const o = [];
      covSeg(o, -.4, -.44, .1, 0, .075, .95);          /* the '>' */
      covSeg(o, .1, 0, -.4, .44, .075, .95);
      covSeg(o, .17, .4, .62, .4, .075, .95);          /* the '_' */
      return o;
    }),
    cursor: () => cov("cursor", () => {
      const o = [], P = ARROW_CLEAN;
      for (let i = 0; i < P.length; i++) {
        const a = P[i], b = P[(i + 1) % P.length];
        covSeg(o, a[0] * .58, a[1] * .58, b[0] * .58, b[1] * .58, .07, .95);
      }
      return o;
    }),
    gemini: () => cov("gemini", () => {
      const o = [], N = 44;
      for (let i = 0; i < N; i++) {
        const th = i / N * TAU, c = Math.cos(th), sn = Math.sin(th);
        o.push([c * c * c * .82, sn * sn * sn * .82, .95]);
      }
      return o;
    }),
    figma: () => cov("figma", () => {
      const o = [];
      FIGMA_POS.forEach(([px, py], g) => {
        for (let i = 0; i < 15; i++) {
          const ring = .175 * Math.sqrt((i + .5) / 15), a = i * 2.399963 + g * 1.2;
          o.push([px * 1.62 + Math.cos(a) * ring, py * 1.62 + Math.sin(a) * ring, .98, FIGMA_COLS[g]]);
        }
      });
      return o;
    }),
    react: () => cov("react", () => {
      const o = [], rx = .84, ry = .3, per = 26;
      for (let k = 0; k < 3; k++) {
        const a0 = k * Math.PI / 3, ca = Math.cos(a0), sa = Math.sin(a0);
        for (let i = 0; i < per; i++) {
          const th = i / per * TAU, ex = Math.cos(th) * rx, ey = Math.sin(th) * ry;
          o.push([ex * ca - ey * sa, ex * sa + ey * ca, .9]);
        }
      }
      o.push([0, 0, 1.15]);
      return o;
    }),
    dreamcut: () => cov("dreamcut", () => {
      const o = [], petals = 6, d = .44, rp = .39, hole = .1;
      const pc = [];
      for (let k = 0; k < petals; k++) {
        const th = k / petals * TAU;
        pc.push([Math.cos(th) * d, Math.sin(th) * d]);
      }
      for (let gy = -.9; gy <= .9; gy += .135) {          /* dim fill */
        for (let gx = -.9; gx <= .9; gx += .135) {
          if (Math.hypot(gx, gy) < hole) continue;
          let bd = 9;
          for (const q of pc) { const dd = Math.hypot(gx - q[0], gy - q[1]); if (dd < bd) bd = dd; }
          if (bd > rp) continue;
          o.push([gx, gy, .58]);
        }
      }
      for (const q of pc) {                                /* each petal's own edge */
        for (let i = 0; i < 24; i++) {
          const a = i / 24 * TAU;
          const px = q[0] + Math.cos(a) * rp, py = q[1] + Math.sin(a) * rp;
          if (Math.hypot(px, py) < hole) continue;
          o.push([px, py, 1]);
        }
      }
      return o;
    }),
    email: () => cov("email", () => {
      const o = [], w = .74, h = .5;
      covSeg(o, -w, -h, w, -h, .085, .92);
      covSeg(o, w, -h, w, h, .085, .92);
      covSeg(o, w, h, -w, h, .085, .92);
      covSeg(o, -w, h, -w, -h, .085, .92);
      covSeg(o, -w, -h, 0, h * .34, .085, .95);        /* the flap */
      covSeg(o, w, -h, 0, h * .34, .085, .95);
      return o;
    })
  };
  const COVER_COL = {
    css: [156, 116, 224], ios: [214, 214, 224], ui: [130, 200, 240], ux: [240, 190, 120],
    claude: [222, 132, 100], codex: [176, 176, 250], gemini: [186, 132, 246],
    framer: [80, 140, 255], react: [120, 224, 250], swift: [242, 118, 88],
    designcode: [180, 224, 238], instagram: [228, 118, 156], linkedin: [80, 148, 226]
  };
  /* one book per mark */
  const bookOf = key => (c, S, t, o) => drawBookCover(c, S, t, o, {
    marks: key === "claude" ? claudeCoverMarks
         : key === "openai" ? openaiCoverMarks
         : (tt, oo) => COVER_MARKS[key](tt, oo),
    col: COVER_COL[key],
    base: .5
  });

  /* ============ BOOK (study) — open book, cube-style wireframe ============ */
  function drawBook(ctx, S, t, o) {
    const cx = S / 2, cy = S / 2, R = S / 2 * .84;
    const rs = rscale(S) * (o.mini ? 1.8 : 1);
    /* a three-quarter view like the cube's, drifting */
    const p = proj(.4 + .14 * Math.sin(t * .28), .66 + .05 * Math.sin(t * .44), cx, cy, R);
    const h = .58, Lp = .92;                   /* page half-height / page width, sized so edges carry the cube's dot count */
    /* the cube spaces 8 dots along a 1.24 edge; match that step so every line here is even */
    const gapE = o.mini ? .33 : .155;
    const dots = [];
    const dot = (gx, gy, gz, v, mul) => {
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (.8 + 1.5 * dep) * rs, v: v + .44 * dep, a: (.55 + .45 * dep) * (mul ?? 1) });
    };
    const node = (gx, gy, gz, mul) => {        /* the cube's brighter corner anchors */
      const [x, y, z] = p(gx, gy, gz);
      const dep = (z + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.5 * dep) * rs, v: .52 + .4 * dep, a: (.6 + .4 * dep) * (mul ?? 1) });
    };
    const edge = (a, b, v, mul) => {
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const k = Math.max(2, Math.round(L / gapE));   /* count follows length, so spacing stays constant */
      for (let i = 0; i < k; i++) {
        const f = (i + .5) / k;
        dot(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, v, mul);
      }
    };
    /* the two halves breathe between flat-open and tented */
    const lift = .17 + .19 * (.5 + .5 * Math.sin(t * .5));
    /* one half, standing off the spine at angle th (measured in the x-z plane) */
    const leaf = (th, v, mul) => {
      const ex = Math.cos(th) * Lp, ez = Math.sin(th) * Lp;
      edge([0, -h, 0], [ex, -h, ez], v, mul);
      edge([ex, -h, ez], [ex, h, ez], v, mul);
      edge([ex, h, ez], [0, h, 0], v, mul);
      node(ex, -h, ez, mul);
      node(ex, h, ez, mul);
    };
    leaf(lift, .42);                            /* right half */
    leaf(Math.PI - lift, .42);                  /* left half */
    /* the spine, and its anchors */
    edge([0, -h, 0], [0, h, 0], .6);
    node(0, -h, 0); node(0, h, 0);
    /* page edges stacked on each half */
    if (!o.mini) for (const f of [.4, .64, .86]) {
      for (const th of [lift, Math.PI - lift]) {
        const ex = Math.cos(th) * Lp * f, ez = Math.sin(th) * Lp * f;
        edge([ex, -h * .93, ez], [ex, h * .93, ez], .32);
      }
    }
    /* now and then a page sweeps over from one side to the other */
    const cyc = ((t * .24) % 1 + 1) % 1;
    if (cyc < .5) {
      const tau = smooth(cyc / .5);
      const th = lerp(lift, Math.PI - lift, tau);
      const fade = Math.sin(tau * Math.PI) * .55 + .45;
      leaf(th, .66, fade);
    }
    paint(ctx, dots, null, 0, .3);
  }

  const MODES = {
    claude: { draw: drawClaude, accent: [217, 119, 87], speed: 1, staticT: 1.4 },
    openai: { draw: drawOpenAI, accent: null, speed: 1, staticT: .8 },
    cursor: { draw: drawCursor, accent: null, speed: 1, staticT: 1 },
    gemini: { draw: drawGemini, accent: null, speed: 1, staticT: .9 },
    figma:  { draw: drawFigma,  accent: null, speed: 1, staticT: 5 },
    framer: { draw: drawFramer, accent: [51, 119, 255], speed: 1, staticT: 1.1 },
    codex:  { draw: drawCodex,  accent: null, speed: 1, staticT: .4 },
    react:  { draw: drawReact,  accent: [97, 218, 251], speed: 1, staticT: 1.2 },
    sphere: { draw: drawSphere, accent: null, speed: 1, staticT: .8 },
    css:    { draw: mk({ key: "css", n: 30, nMini: 13, motion: "scan", speed: .34, invert: "box", accent: [150, 110, 220], v: .66, fit: 1.02 }), accent: null, speed: 1, staticT: 1.2 },
    ios:    { draw: mk({ key: "ios", n: 30, nMini: 13, motion: "diag", fit: .78, v: .64 }), accent: null, speed: 1, staticT: 1.1 },
    neuform: { draw: drawNeuform, accent: null, speed: 1, staticT: 1.5 },
    ui:     { draw: drawUI,     accent: [130, 200, 240], speed: 1, staticT: 1.2 },
    ux:     { draw: drawUX,     accent: [240, 190, 120], speed: 1, staticT: 1.6 },
    designcode: { draw: drawDesignCode, accent: null, speed: 1, staticT: 1.3 },
    aura:   { draw: drawAura,     accent: null, speed: 1, staticT: 1.5 },
    dreamcut: { draw: drawDreamCut, accent: null, speed: 1, staticT: 1.2 },
    swift:  { draw: drawSwift,  accent: [240, 81, 56], speed: 1, staticT: .9 },
    github: { draw: mk({ key: "github", n: 30, nMini: 13, motion: "diag", invert: "circle", recenter: true, v: .62 }), accent: null, speed: 1, staticT: 1.1 },
    x:      { draw: mk({ key: "x", n: 30, nMini: 12, motion: "sweep", fit: .70, v: .64 }), accent: null, speed: 1, staticT: 1.1 },
    instagram: { draw: mk({ key: "instagram", n: 28, nMini: 13, motion: "sweep", fit: .74,
      grad: [[151, 78, 200], [250, 140, 70]], v: .68 }), accent: null, speed: 1, staticT: 1.4 },
    threads: { draw: mk({ key: "threads", n: 30, nMini: 13, motion: "sweep", fit: .74, v: .64 }), accent: null, speed: 1, staticT: 1.2 },
    linkedin: { draw: mk({ key: "linkedin", n: 30, nMini: 13, motion: "scan", speed: .38, invert: "box", accent: [40, 130, 220], v: .66 }), accent: null, speed: 1, staticT: 1.2 },
    email:  { draw: drawEmail,  accent: null, speed: 1, staticT: 1.2 },
    flower: { draw: drawFlower,  accent: null, speed: 1, staticT: 1.2 },
    book:   { draw: drawBook,    accent: null, speed: 1, staticT: .52 },
    claudebook:   { draw: bookOf("claude"), accent: null, speed: 1, staticT: 1.3 },
    openaibook:   { draw: bookOf("openai"), accent: null, speed: 1, staticT: 1.3 },
    codexbook:    { draw: bookOf("codex"), accent: null, speed: 1, staticT: 1.3 },
    cursorbook:   { draw: bookOf("cursor"), accent: null, speed: 1, staticT: 1.3 },
    geminibook:   { draw: bookOf("gemini"), accent: null, speed: 1, staticT: 1.3 },
    figmabook:    { draw: bookOf("figma"), accent: null, speed: 1, staticT: 1.3 },
    framerbook:   { draw: bookOf("framer"), accent: null, speed: 1, staticT: 1.3 },
    reactbook:    { draw: bookOf("react"), accent: null, speed: 1, staticT: 1.3 },
    swiftbook:    { draw: bookOf("swift"), accent: null, speed: 1, staticT: 1.3 },
    designcodebook: { draw: bookOf("designcode"), accent: null, speed: 1, staticT: 1.3 },
    aurabook:     { draw: bookOf("aura"), accent: null, speed: 1, staticT: 1.3 },
    dreamcutbook: { draw: bookOf("dreamcut"), accent: null, speed: 1, staticT: 1.3 },
    githubbook:   { draw: bookOf("github"), accent: null, speed: 1, staticT: 1.3 },
    xbook:        { draw: bookOf("x"), accent: null, speed: 1, staticT: 1.3 },
    instagrambook: { draw: bookOf("instagram"), accent: null, speed: 1, staticT: 1.3 },
    threadsbook:  { draw: bookOf("threads"), accent: null, speed: 1, staticT: 1.3 },
    linkedinbook: { draw: bookOf("linkedin"), accent: null, speed: 1, staticT: 1.3 },
    emailbook:    { draw: bookOf("email"), accent: null, speed: 1, staticT: 1.3 },
    uibook:       { draw: bookOf("ui"), accent: null, speed: 1, staticT: 1.3 },
    uxbook:       { draw: bookOf("ux"), accent: null, speed: 1, staticT: 1.3 },
    cssbook:      { draw: bookOf("css"), accent: null, speed: 1, staticT: 1.3 },
    iosbook:      { draw: bookOf("ios"), accent: null, speed: 1, staticT: 1.3 },
    neuformbook:  { draw: bookOf("neuform"), accent: null, speed: 1, staticT: 1.3 },
    cube:   { draw: drawCube,   accent: null, speed: 1, staticT: 2.6 },
    orb:    { draw: drawBands,  accent: [64, 122, 255], speed: 1, staticT: .5 },
    pointer:{ draw: drawPointer, accent: null, speed: 1, staticT: 1 }
  };

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dpr = Math.min(2, devicePixelRatio || 1);
  const anims = [];

  function boot(canvas) {
    const mode = MODES[canvas.dataset.mode];
    if (!mode) return;
    const S = +canvas.dataset.size || 56;
    canvas.width = Math.round(S * dpr);
    canvas.height = Math.round(S * dpr);
    const ctx = canvas.getContext("2d");
    const o = { mini: S < 32, accent: mode.accent };
    const frame = t => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, S, S);
      mode.draw(ctx, S, t * mode.speed * (o.mini ? 1.25 : 1), o);
    };
    if (reduced) { frame(mode.staticT); return; }
    anims.push({ canvas, frame, visible: true });
    frame(performance.now() / 1e3);
  }

  /* zoom/debug mode: ?zoom=claude&size=480&t=2.5 */
  const q = new URLSearchParams(location.search);
  if (q.get("zoom")) {
    document.body.classList.add("zoom-mode");
    const stage = document.createElement("div");
    stage.className = "zoom-stage";
    const c = document.createElement("canvas");
    c.dataset.mode = q.get("zoom");
    c.dataset.size = q.get("size") || 480;
    c.style.width = c.dataset.size + "px";
    c.style.height = c.dataset.size + "px";
    stage.appendChild(c);
    document.body.appendChild(stage);
    if (q.get("t")) {
      const mode = MODES[c.dataset.mode], S = +c.dataset.size;
      c.width = S * dpr; c.height = S * dpr;
      const ctx = c.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mode.draw(ctx, S, +q.get("t"), { mini: false, accent: mode.accent });
    } else boot(c);
  } else {
    document.querySelectorAll("canvas[data-mode]").forEach(boot);
  }

  if (!reduced && anims.length) {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        const a = anims.find(a => a.canvas === e.target);
        if (a) a.visible = e.isIntersecting;
      }
    });
    anims.forEach(a => io.observe(a.canvas));
    window.__orbFrames = 0;
    let usingTimer = false, timerId = 0;
    const tick = () => {
      window.__orbFrames++;
      const t = performance.now() / 1e3;
      if (document.visibilityState !== "hidden")
        for (const a of anims) if (a.visible) a.frame(t);
      if (!usingTimer) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    /* watchdog: some throttled webviews never fire rAF — fall back to a timer */
    setTimeout(() => {
      if (window.__orbFrames === 0) {
        usingTimer = true;
        timerId = setInterval(tick, 33);
      }
    }, 400);
  }
})();
<\/script>
</body>
</html>
`,zt=["claude","openai","codex","cursor","gemini","figma","framer","react","swift","designcode","aura","dreamcut","ui","ux","css","ios","neuform","github","x","instagram","threads","linkedin","email"],St=["small","medium"],E={variant:"claude",size:"medium",mode:"dark",speed:1,paused:!1},At={small:20,medium:56},K={claude:"Claude Code",openai:"OpenAI",codex:"Codex",cursor:"Cursor",gemini:"Gemini",figma:"Figma",framer:"Framer",react:"React",swift:"Swift",designcode:"DesignCode",aura:"Aura",dreamcut:"DreamCut",ui:"UI",ux:"UX",css:"CSS",ios:"iOS",neuform:"Neuform",github:"GitHub",x:"X",instagram:"Instagram",threads:"Threads",linkedin:"LinkedIn",email:"Email"};function Et(t,e,a){return Math.min(a,Math.max(e,t))}function Y(){if(typeof document>"u"||typeof window>"u")return"dark";const t=document.documentElement.dataset.theme??document.documentElement.dataset.scheme;return t==="light"||t==="dark"?t:document.documentElement.classList.contains("light")?"light":document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Lt(t){const[e,a]=p.useState(Y);return p.useEffect(()=>{if(!t||typeof document>"u"||typeof window>"u")return;const n=window.matchMedia("(prefers-color-scheme: dark)"),i=()=>a(Y()),s=new MutationObserver(i);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-scheme","data-theme"]}),n.addEventListener("change",i),i(),()=>{s.disconnect(),n.removeEventListener("change",i)}},[t]),e}function Tt(t){var e;return((e=[...t.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].at(-1))==null?void 0:e[1])??""}const _t=Tt(Ct).replace(/<\/script/gi,"<\\/script");function Pt(t,e,a){const n=a==="light"?"#dad7cc":"#050608",i=a==="light"?"invert(1) hue-rotate(180deg) contrast(1.04) saturate(.92)":"none",s=At[e],o=JSON.stringify(t).replace(/</g,"\\u003c"),c=`<script data-brand-orbs-controls>
(function () {
  var nativeNow = performance.now.bind(performance);
  var last = nativeNow();
  var virtual = last;
  var controls = { speed: 1, paused: false };
  window.__BRAND_ORB_PAUSED = false;
  performance.now = function () {
    var real = nativeNow();
    if (!controls.paused) virtual += (real - last) * controls.speed;
    last = real;
    return virtual;
  };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'brand-orbs-controls') return;
    var next = event.data.controls || {};
    if (Number.isFinite(next.speed)) controls.speed = Math.max(.1, Math.min(3, next.speed));
    controls.paused = Boolean(next.paused);
    window.__BRAND_ORB_PAUSED = controls.paused;
  });
})();
<\/script>`,r=_t.replace('if (document.visibilityState !== "hidden")','if (document.visibilityState !== "hidden" && !window.__BRAND_ORB_PAUSED)');return`<!doctype html>
<html lang="en" data-theme="${a}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${K[t]} Brand Orb</title>
<style>
html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; background: ${n}; }
body { display: grid; place-items: center; }
canvas { display: block; width: ${s}px; height: ${s}px; filter: ${i}; }
</style>
${c}
</head>
<body>
<canvas data-mode=${o} data-size="${s}" aria-hidden="true"></canvas>
<script>${r}<\/script>
</body>
</html>`}function Ft({variant:t=E.variant,size:e=E.size,mode:a=E.mode,speed:n=E.speed,paused:i=E.paused,"aria-label":s,className:o,style:c}){const r=p.useRef(null),[f,l]=p.useState(!0),[d,m]=p.useState(()=>typeof document>"u"||!document.hidden),A=Lt(a==="auto"),h=a==="auto"?A:a,x=zt.includes(t)?t:E.variant,b=St.includes(e)?e:E.size,_=Et(n,.1,3),k=i||!f||!d,P=p.useMemo(()=>Pt(x,b,h),[h,b,x]),R=h==="light"?"#dad7cc":"#050608",M=p.useCallback(()=>{var v,y;(y=(v=r.current)==null?void 0:v.contentWindow)==null||y.postMessage({type:"brand-orbs-controls",controls:{speed:_,paused:k}},"*")},[k,_]);return p.useEffect(()=>{const v=r.current;if(!v||typeof IntersectionObserver>"u")return;const y=new IntersectionObserver(([C])=>l((C==null?void 0:C.isIntersecting)??!0));return y.observe(v),()=>y.disconnect()},[]),p.useEffect(()=>{if(typeof document>"u")return;const v=()=>m(!document.hidden);return document.addEventListener("visibilitychange",v),()=>document.removeEventListener("visibilitychange",v)},[]),p.useEffect(()=>{M()},[M,P]),j.jsx("iframe",{ref:r,className:o,title:s??`${K[x]} animated brand orb`,srcDoc:P,sandbox:"allow-scripts",loading:"eager",onLoad:M,style:{display:"block",width:"100%",height:"100%",border:0,background:R,...c}})}const Rt={"constellation-field":xt,"particle-drift":ut,"particle-network":ft,"gateway-flow":bt,"connectivity-graph":yt,"interface-lines":wt,"defense-lines":kt,"topo-field":Mt};function Ot({variant:t="constellation-field",...e}){const a=Rt[t];return j.jsx(a,{...e})}export{Ot as F,Ft as J,jt as _,j};
