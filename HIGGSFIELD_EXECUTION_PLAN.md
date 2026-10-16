# Higgsfield 3D Portfolio Execution Plan: Mohsin Qureshi
**Role Lock:** Mohsin Qureshi — AI Architect & Forward Deployment Engineer  
**Live Site Base:** `./` (GitHub Pages relative)  
**Target Repository:** `C:\Users\mohsi\Research\mohsingitdev.io`  
**Execution Target:** Google Antigravity CLI (`agy`) & IDE  

---

## 1. Executive Summary & Design System

This plan hardens `mohsingitdev.io` into a tactile, Higgsfield-grade AI Systems engineering portfolio. It leverages the newly generated **Higgsfield cinematic hero portrait** (derived from Mohsin's real photo), introduces **four stacked architecture layers**, an **interactive systems schematic**, and a **chamfered fanned card stack**, while honoring all strict performance, accessibility, and zero-bloat constraints.

### 1.1 Color Tokens & Material Physics
- **Obsidian Dark Field:**
  - Base: `#121110` (`bg-canvas`)
  - Subtle Surface: `#181715` (`bg-canvas-subtle`)
  - Card Fill: `#24221E` (`bg-canvas-card`)
  - Elevated Fill: `#2E2A24` (`bg-canvas-card-elevated`)
- **Metallic & Terracotta Accents:**
  - Signal Orange: `#D97757` (`text-terracotta`, `border-terracotta`)
  - Deep Bronze: `#B85D3E` (`text-terracotta-dark`)
  - Warm Champagne: `#F5EBE6` (`text-luxury-champagne`)
  - Platinum Rim: `rgba(240, 230, 215, 0.08)` (`border-canvas`)
- **Higgsfield 3D Surface Treatment:**
  - Chamfered cut corners (`clip-path: polygon(...)` or `rounded-2xl` with 45° beveled borders)
  - Subtle grain overlay via CSS SVG noise (`opacity-5 pointer-events-none`)
  - Tactical drop shadows (`shadow-[0_20px_50px_rgba(0,0,0,0.85)]`)
  - Thin 1px glowing signal vectors (`w-[1px] bg-gradient-to-b from-[#D97757] via-white/30 to-transparent`)

---

## 2. File Verification & Asset Manifest

| Asset Path | Status | Resolution / Details | Fallback |
| :--- | :--- | :--- | :--- |
| `public/assets/hero/higgsfield-hero-poster.webp` | **Generated & Staged** (96 KB) | 16:9 cinematic studio portrait derived from user photo with terracotta rim lights & 3D circuit traces. | `mohsin_cutout.png` |
| `public/assets/hero/higgsfield-hero.mp4` | **Staged** (2.6 MB) | Muted push-in video loop (under 6 MB threshold). | Poster WebP |
| `src/components/Hero.tsx` | **To Modify** | 900ms wipe reveal, unbaked HTML typography, mobile bypass. | Instant display on mobile / reduced-motion |
| `src/components/HowIDeploy.tsx` | **To Create** | Section 1: 4 stacked collapsible architecture layers + signal path + keyboard a11y. | Static accessible list |
| `src/components/SystemsSection.tsx` | **To Create** | Section 2: Systems schematic (paused off-screen) + 4-chapter infrastructure accordion. | Static SVG schematic |
| `src/components/SelectedWork.tsx` | **To Create** | Section 3: Fanned chamfered card stack on desktop, vertical list on mobile + capabilities row. | Numbered project cards |
| `src/App.tsx` | **To Modify** | Mount new sections directly in sequence below Hero. | Current section layout |

---

## 3. Step-by-Step Implementation Instructions for `agy`

### Task 1: Refactor Hero Reveal in `src/components/Hero.tsx`
1. **Desktop Behavior:**
   - Mount full-bleed background using `higgsfield-hero-poster.webp`.
   - On desktop viewport (`>= 768px`), mount `<video autoPlay loop muted playsInline preload="auto" poster="./assets/hero/higgsfield-hero-poster.webp">` pointing to `./assets/hero/higgsfield-hero.mp4`.
   - Apply a **900ms wipe reveal** using CSS `clip-path`:
     ```css
     clip-path: inset(0 0 0% 0);
     transition: clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1);
     ```
   - Headline and action pills fade up with a 150ms delay after wipe completes.
   - Contrast guarantee: Dark scrim gradient `bg-gradient-to-r from-black/85 via-black/50 to-transparent` ensures HTML typography maintains AAA contrast.
2. **Mobile & Reduced Motion:**
   - If `prefers-reduced-motion` matches or `window.innerWidth < 768`, **do NOT mount the `<video>` element**.
   - Render the static poster immediately without wipe or latency.

---

### Task 2: Build `src/components/HowIDeploy.tsx` (Section 1)
- **Position:** Directly below Hero.
- **Pattern:** 4 stacked architecture layers with thin continuous metallic signal path.
- **Content Mapping (Real Capabilities Only):**
  1. **Layer 01 — Problem Framing:**
     - Title: `Metric-Driven Boundary & SLA Scoping`
     - Description: `Deconstruct monolithic enterprise bottlenecks. Establish sub-40ms latency bounds, token FinOps targets, and deterministic fast-path feasibility before writing model code.`
     - Marker: `01 / FRAME`
  2. **Layer 02 — Agent & Tool Design:**
     - Title: `Stateful Orchestration & Guardrail Ingress`
     - Description: `Architect LangGraph state machines, Pydantic v2 schema validators, and semantic WAF boundaries to eradicate prompt injection and invalid tool calls at the perimeter.`
     - Marker: `02 / DESIGN`
  3. **Layer 03 — Forward Deployment:**
     - Title: `In-Network Hardening & High-Concurrency Serving`
     - Description: `Deploy containerized vLLM and Triton Inference microservices inside client VPCs. Integrate Redis semantic caching and Kafka event streams for 100k+ req/sec scale.`
     - Marker: `03 / DEPLOY`
  4. **Layer 04 — Production Handoff:**
     - Title: `Audited Regression Suites & Client Enablement`
     - Description: `Implement automated CI/CD synthetic evaluation harnesses, wall-clock circuit breakers, and telemetry dashboards. Handoff complete architecture runbooks to internal teams.`
     - Marker: `04 / HANDOFF`
- **Interactivity:**
  - One layer expanded at a time (controlled state `activeLayer: number`).
  - Expanding layer reveals tactical specs and mechanisms.
  - Keyboard accessibility: `ArrowUp`/`ArrowDown` navigates active layer; `Enter`/`Space` toggles open.

---

### Task 3: Build `src/components/SystemsSection.tsx` (Section 2)
- **Position:** Directly below Section 1.
- **Pattern:** Interactive architectural schematic + 4-chapter infrastructure accordion.
- **Schematic Engine (1 Canvas Rule):**
  - Use lightweight 2D Canvas or SVG visualizing live token and signal routing:
    - `Ingress Gate ➔ SLM Fast-Path (<40ms) ➔ Hybrid RAG (BM25+Dense) ➔ Audited Egress`
  - Wrap in `IntersectionObserver`: **Canvas animation completely halts when off-screen** (`cancelAnimationFrame`).
  - Reduced-motion fallback: Serve static crisp SVG topology.
- **4 Infrastructure Chapters (Strict Real Facts):**
  - **Chapter 1: Retrieval (RRF Hybrid RAG)**: BM25 lexical precision + dense embeddings across Milvus/Qdrant with 100% sentence-level attribution (Novartis/Accenture).
  - **Chapter 2: Voice & Intent Automation**: Sub-100M SLM intent classifier resolving 78%+ routine intents in <34ms without touching frontier LLMs (Flipkart).
  - **Chapter 3: Evaluation & Circuit Breakers**: Wall-clock timeout retry budgets, hallucination drift tracking (<0.5%), and zero-cascade failover schemas.
  - **Chapter 4: Deployment & FinOps**: vLLM & Triton GPU optimizations yielding 65–72% token cost reduction under high-concurrency surge loads.

---

### Task 4: Build `src/components/SelectedWork.tsx` & Capabilities Row (Section 3)
- **Position:** Directly below Section 2 (replacing or upgrading the DomainMatrix block).
- **Desktop Fanned Card Stack:**
  - Fan 4 real projects from `src/data/domainProjects.ts`:
    1. *Enterprise Multi-Agent Routing* (Flipkart — <60ms p99, 72% cost cut)
    2. *Self-Correcting Agentic RAG* (Novartis/Accenture — 100% citation grounding)
    3. *Streaming Anomaly Detection* (Ericsson — 50k eps, <3min MTTD)
    4. *Edge CV & Digital Twin* (Comcast/TCS — 33ms inference, 50% oversight cut)
  - Chamfered card skin: Dark metallic `#24221E`, `border-white/10`, subtle grain, no neon.
  - Navigation: Scroll or Arrow Left/Right brings the next card to the foreground with smooth 3D depth transform.
- **Mobile Mode:**
  - Responsive switch to a clean vertical list with normal scroll. No fan trap.
- **Capabilities Row (Under Work):**
  - Four cards displaying validated skills:
    1. `AI Architecture`: Stateful LangGraph, deterministic SLM routing, schema bounding.
    2. `Inference Deployment`: vLLM, Triton Server, PyTorch TensorRT, GPU telemetry.
    3. `Knowledge Retrieval`: Reciprocal Rank Fusion, Qdrant/Milvus, hybrid rerankers.
    4. `Production LLMOps`: Wall-clock circuit breakers, Langfuse/MLflow, CI/CD evals.
  - Desktop: Slow horizontal arc. Mobile: 2-column grid.

---

### Task 5: Assemble in `src/App.tsx` & Run Verification
1. Import `HowIDeploy`, `SystemsSection`, and `SelectedWork` into `src/App.tsx`.
2. Sequence:
   - `<Hero />`
   - `<HowIDeploy />`
   - `<SystemsSection />`
   - `<SelectedWork />`
   - (Followed by Experience Timeline, Blog, Offerings Showcase, Calendly, Footer)
3. Run verification:
   - `npm run build` to verify zero TypeScript errors.
   - Audit mobile viewport (<768px): zero video downloads, smooth vertical flow.
   - Audit reduced motion: static assets rendered with zero continuous RAF loops.
