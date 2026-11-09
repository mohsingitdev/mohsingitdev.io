import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.resolve(rootDir, 'docs');

const baseCanonical = 'https://mohsingitdev.github.io/mohsingitdev.io';

const routes = [
  {
    path: 'remote-ai-engineer',
    title: 'Remote forward-deployed AI engineer for US and UK teams | Mohsin Qureshi',
    description: 'Production AI and Forward-Deployed Engineering available for remote US/UK teams. Specializing in high-concurrency model routing, RAG evaluation gates, and vLLM cloud deployment.',
    h1: 'Remote AI Platform Engineer & Forward-Deployed AI Engineer (US/UK)',
    bodyText: 'Bridging the gap between frontier research prototypes and mission-critical production systems. Available for remote US and UK engagements, with working-hours overlap agreed per engagement. Client work across e-commerce, pharma, telecom and industrial sectors.',
    schemaType: 'ProfilePage'
  },
  {
    path: 'case-studies',
    title: 'Reference architectures | Mohsin Qureshi',
    description: 'How I design production RAG and LLM routing systems: architecture, evaluation, failure modes and trade-offs.',
    h1: 'Reference architectures',
    bodyText: 'Architecture decisions, evaluation methods and failure modes for production RAG and LLM routing. Client figures are confidential.',
    schemaType: 'CollectionPage'
  },
  {
    path: 'case-studies/production-rag-evaluation',
    title: 'Case Study: Production RAG Evaluation & Groundedness Testing | Mohsin Qureshi',
    description: 'Hybrid retrieval, cross-encoder reranking and per-sentence citation checks for regulated documents.',
    h1: 'Production RAG Evaluation: Hybrid Retrieval, Reranking, and Groundedness Testing',
    bodyText: 'Two-stage hybrid search, rank fusion, reranking and a groundedness evaluation gate. The pattern comes from research-knowledge work for global pharma clients.',
    schemaType: 'TechArticle'
  },
  {
    path: 'case-studies/llm-routing-cost-latency',
    title: 'Case Study: Designing an LLM Routing Layer for Latency & FinOps | Mohsin Qureshi',
    description: 'A deterministic fast path, confidence scoring and budgeted fallbacks that keep routine requests off large models.',
    h1: 'Designing an LLM Routing Layer for Latency, Cost, and Reliability',
    bodyText: 'How decoupling routine intent extraction from multi-step probabilistic reasoning insulates enterprise platforms from frontier LLM rate-limiting, p99 latency spikes, and exorbitant token bills.',
    schemaType: 'TechArticle'
  },
  {
    path: 'services',
    title: 'Production AI Engineering Services & Readiness Assessment | Mohsin Qureshi',
    description: 'Fixed-scope architectural advisory, RAG evaluation sprints, and Production AI Readiness Assessments for teams deploying enterprise LLM workflows.',
    h1: 'Production AI Engineering Services & Advisory',
    bodyText: 'Helping founders, CTOs, and Heads of AI transition complex LLM, RAG, voice, and agentic workflows from brittle demos into reliable, cost-controlled production operations.',
    schemaType: 'Service'
  },
  {
    path: 'blog',
    title: 'Production AI Field Notes & Technical Articles | Mohsin Qureshi',
    description: 'First-hand engineering teardowns of multi-agent routing, evaluation gates, and enterprise deployment trade-offs. Published twice monthly.',
    h1: 'Production AI Field Notes',
    bodyText: 'Rigorous engineering write-ups on LLMOps, model cascading, grounded RAG, voice agent streaming, and data contracts. Strictly production code and architecture.',
    schemaType: 'Blog'
  },
  {
    path: 'blog/architecting-sub-100ms-multi-agent-routing',
    title: 'Architecting Sub-100ms Multi-Agent Routing in High-Concurrency Platforms',
    description: 'Why invoking monolithic LLMs directly for every request is an enterprise anti-pattern, and how a deterministic fast-path + SLM gateway keeps inference cost and latency under control.',
    h1: 'Architecting Sub-100ms Multi-Agent Routing in High-Concurrency Platforms',
    bodyText: 'In early GenAI implementations, engineering teams frequently route all incoming traffic through a single frontier LLM. To achieve strict p99 latencies under 60ms, production architectures must decouple simple intent extraction from complex multi-step reasoning.',
    schemaType: 'Article'
  },
  {
    path: 'blog/production-rag-retrieval-grounding',
    title: 'Production RAG Engineering: Hybrid Search, Reranking & Verifiable Citation Grounding',
    description: 'Moving beyond naive vector search: an empirical guide to Reciprocal Rank Fusion, cross-encoder rerankers, and measuring groundedness without hyperbole.',
    h1: 'Production RAG Engineering: Hybrid Search, Reranking & Verifiable Citation Grounding',
    bodyText: 'Naive vector search repeatedly fails in technical and regulated environments. Production retrieval requires combining lexical BM25 with dense embeddings via RRF, cross-encoder candidate pruning, and strict sentence-level citation offset pointers.',
    schemaType: 'Article'
  },
  {
    path: 'blog/production-llmops-eval-guardrails',
    title: 'Production LLMOps: CI/CD Evaluation Gates & Automated Drift Detection',
    description: 'Moving beyond prompt engineering into rigorous continuous evaluation, automated regression tests, and schema guardrails.',
    h1: 'Production LLMOps: CI/CD Evaluation Gates & Automated Drift Detection',
    bodyText: 'Changing system prompts or foundation model checkpoints introduces silent edge-case regressions. Every PR altering prompts or routing rules must run automated synthetic evaluation suites before deployment.',
    schemaType: 'Article'
  },
  {
    path: 'blog/what-forward-deployed-ai-engineers-own',
    title: 'What a Forward-Deployed AI Engineer Actually Owns: From Discovery to Adoption',
    description: 'Why AI projects fail at the client boundary, and how an FDE bridges executive trade-offs, stakeholder evaluation criteria, and production code.',
    h1: 'What a Forward-Deployed AI Engineer Actually Owns: From Discovery to Adoption',
    bodyText: 'Most AI initiatives fail because the deployment fails to integrate with enterprise IT, compliance boundaries, and operational workflows. An FDE bridges scoping, VPC architecture, evaluation defense, and runbook ownership.',
    schemaType: 'Article'
  },
  {
    path: 'blog/voice-ai-at-the-crm-boundary',
    title: 'Voice AI at the CRM Boundary: Low-Latency Streaming & Graceful Handoffs',
    description: 'Deconstructing sub-700ms conversational audio pipelines, full-duplex WebSocket architecture, and deterministic CRM state synchronizations.',
    h1: 'Voice AI at the CRM Boundary: Low-Latency Streaming & Graceful Handoffs',
    bodyText: 'Conventional conversational bots route audio through discrete REST APIs with 2.5-4s latency. Production voice systems require streaming full-duplex WebSockets with speculative tool execution and sub-80ms barge-in buffer flushes.',
    schemaType: 'Article'
  },
  {
    path: 'privacy',
    title: 'Privacy policy | Mohsin Qureshi',
    description: 'Privacy Policy covering data protection under India Digital Personal Data Protection (DPDP) Act 2023, EU/UK GDPR, and California CCPA/CPRA. Transparent data handling and zero unauthorized selling.',
    h1: 'Privacy Policy & Data Protection Governance',
    bodyText: 'Comprehensive privacy policy detailing personal data processing, lawful basis, third-party processors (Calendly, GitHub Pages, Formspree), consent management, and data subject rights including access, rectification, and erasure.',
    schemaType: 'WebPage'
  },
  {
    path: 'terms',
    title: 'Terms and conditions | Mohsin Qureshi',
    description: 'Terms and conditions governing portfolio browsing, sample architecture teardowns, technical advisory sessions, and contractual intellectual property boundaries.',
    h1: 'Terms and Conditions of Use & Engagement',
    bodyText: 'Binding terms covering website usage, open-source sample code licenses (MIT), fixed-scope advisory statements of work, intellectual property warranties, and limitations of liability.',
    schemaType: 'WebPage'
  },
  {
    path: 'cookies',
    title: 'Cookie & Local Storage Policy | Mohsin Qureshi',
    description: 'Detailed disclosure of essential and functional local storage items, affirmative cookie consent mechanism, and third-party embed disclosures.',
    h1: 'Cookie & Browser Local Storage Policy',
    bodyText: 'Transparent breakdown of local storage keys used across this portfolio (such as theme preferences and consent-governed visitor telemetry), third-party scheduling cookies, and instructions on how to revoke consent.',
    schemaType: 'WebPage'
  },
  {
    path: 'refunds',
    title: 'Refund and cancellation policy | Mohsin Qureshi',
    description: 'Clear refund, rescheduling, and cancellation terms for fixed-scope AI engineering advisory, sprint engagements, and Topmate mentorship sessions.',
    h1: 'Refund, Rescheduling & Cancellation Policy',
    bodyText: 'Transparent terms governing cancellations, 100% pre-kickoff refunds for advisory sprints notified >48 hours in advance, Topmate platform policy delegation, and mutual satisfaction checkpoints.',
    schemaType: 'WebPage'
  }
];

function generateStaticRoutes() {
  const templatePath = path.join(docsDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: docs/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  routes.forEach((route) => {
    const routeDir = path.join(docsDir, route.path);
    fs.mkdirSync(routeDir, { recursive: true });

    // Compute relative depth for assets (e.g. "case-studies/production-rag-evaluation" depth is 2 -> "../../")
    const depth = route.path.split('/').length;
    const relPrefix = '../'.repeat(depth);

    let html = baseHtml;

    // Adjust relative asset links
    html = html.replace(/href="\.\//g, `href="${relPrefix}`);
    html = html.replace(/src="\.\//g, `src="${relPrefix}`);
    html = html.replace(/href="\.\/assets\//g, `href="${relPrefix}assets/`);
    html = html.replace(/src="\.\/assets\//g, `src="${relPrefix}assets/`);

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);

    // Replace Description
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

    // Replace Canonical & OG URL
    const canonicalUrl = `${baseCanonical}/${route.path}/`;
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

    // Home-only structured data (FAQPage) shouldn't repeat on every route.
    html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_m, json) => {
      try {
        const data = JSON.parse(json);
        data['@graph'] = data['@graph'].filter((n) => n['@type'] !== 'FAQPage');
        return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
      } catch {
        return _m;
      }
    });

    // Route-specific content inside #root: readable by crawlers that don't run JavaScript
    // (most AI crawlers), and replaced by React when the app loads.
    const routeContent = `<div id="root">
      <main style="max-width:760px;margin:0 auto;padding:48px 20px;font-family:system-ui,sans-serif;color:#ece8e1;background:#12161b">
        <p><a href="${baseCanonical}/" style="color:#f0a33a">Mohsin Qureshi, forward-deployed AI engineer</a></p>
        <h1>${route.h1}</h1>
        <p>${route.description}</p>
        <p>${route.bodyText}</p>
        <p><a href="https://calendly.com/mohsin-qureshi" style="color:#f0a33a">Book a 15-minute call</a> or connect on <a href="https://www.linkedin.com/in/mohd-mohsin-qureshi" style="color:#f0a33a">LinkedIn</a>.</p>
      </main>
    </div>`;
    html = html.replace(/<div id="root">[\s\S]*?<\/main>\s*<\/div>/, routeContent);

    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`✓ Pre-rendered static route: /${route.path}/index.html`);
  });

  console.log('✓ All 2026 static routes successfully generated.');
}

generateStaticRoutes();
