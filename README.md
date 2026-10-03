# Mohsin Qureshi — Personal AI Architect & FDE Portfolio

> Enterprise-grade personal website for **Mohsin Qureshi**, Forward Deployment Engineer (FDE) & AI Architect specializing in Agentic Systems, Advanced RAG, and Production LLMOps.

---

## ⚡ Tech Stack & Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Dark Cyber-Neon design system (`#08090C`, `#00FF87` luminous accents)
- **Icons**: Lucide Icons
- **Deployment**: Static build optimized for GitHub Pages with relative paths (`./`)
- **Interactive Demonstrations**:
  1. **Multi-Agent Intent Router**: Real-time comparison between naive monolithic LLMs and two-tier deterministic + SLM routing (latency, cost per 10k queries, and execution telemetry).
  2. **Citation-Grounded Enterprise RAG**: Interactive BM25 + dense retrieval + cross-encoder reranking with 100% sentence-level source attribution and zero-hallucination verification.
- **Thought Leadership Blog**: In-depth technical articles with syntax-highlighted code blocks, copy-to-clipboard, tags, and in-article booking CTAs.
- **Client Conversion Funnel**: Direct Calendly scheduling interface with pre-qualification intake questions for 30-minute Architecture Audits.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/ and docs/)
npm run build
```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Deploy from `/docs` branch (Fastest & Zero Setup)
1. In your GitHub repository: Go to **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**: Select **Deploy from a branch**.
3. Under **Branch**: Select `main` and set the folder to `/docs`.
4. Click **Save**. Your site will be live in 1-2 minutes!

### Method 2: Deploy from Custom Domain
If you link your custom domain (e.g. `mohsingitdev.io` or `mohsinqureshi.ai`):
1. In **Settings** -> **Pages**, enter your custom domain under **Custom domain**.
2. Configure your DNS provider with the GitHub Pages A records (`185.199.108.153`, etc.).
