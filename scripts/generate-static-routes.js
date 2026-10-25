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
    title: 'Mohsin Qureshi | Remote AI Platform Engineer & Forward-Deployed AI Engineer',
    description: 'Production AI and Forward-Deployed Engineering available for remote US/UK teams. Specializing in high-concurrency model routing, RAG evaluation gates, and vLLM cloud deployment.',
    h1: 'Remote AI Platform Engineer & Forward-Deployed AI Engineer (US/UK)',
    bodyText: 'Bridging the gap between frontier research prototypes and mission-critical production systems. Available for remote US/UK roles with 4-5 hours synchronous daily overlap (EST/GMT). Proven track record across Flipkart, Novartis, Accenture Strategy, and Ericsson.',
    schemaType: 'ProfilePage'
  },
  {
    path: 'case-studies',
    title: 'Production AI Case Studies & Architecture Teardowns | Mohsin Qureshi',
    description: '12-point audit-grade engineering teardowns of retrieval systems, model routing gateways, and voice AI integrations moving from prototype to reliable enterprise scale.',
    h1: 'Production AI Case Studies',
    bodyText: 'Explore reproducible benchmarks, architecture decisions, failure modes, and quantitative disclosures across enterprise RAG, high-concurrency model routing, and conversational telephony voice systems.',
    schemaType: 'CollectionPage'
  },
  {
    path: 'case-studies/production-rag-evaluation',
    title: 'Case Study: Production RAG Evaluation & Groundedness Testing | Mohsin Qureshi',
    description: 'Hybrid retrieval (BM25 + Dense RRF), cross-encoder reranking, and citation attribution cutting ungrounded responses to <0.5% drift over 500k compliance documents.',
    h1: 'Production RAG Evaluation: Hybrid Retrieval, Reranking, and Groundedness Testing',
    bodyText: 'A technical teardown of two-stage hybrid search, reciprocal rank fusion (k=60), cross-encoder validation gates, and empirical latency percentiles (380ms p95). Deployed for regulated enterprise research contexts at Novartis and Accenture Strategy.',
    schemaType: 'TechArticle'
  },
  {
    path: 'case-studies/llm-routing-cost-latency',
    title: 'Case Study: Designing an LLM Routing Layer for Latency & FinOps | Mohsin Qureshi',
    description: 'Two-tier routing architecture with <33ms deterministic fast-path classification reducing cloud generative AI inference spend by 72% under 15k RPS flash concurrency.',
    h1: 'Designing an LLM Routing Layer for Latency, Cost, and Reliability',
    bodyText: 'How decoupling routine intent extraction from multi-step probabilistic reasoning insulates enterprise platforms from frontier LLM rate-limiting, p99 latency spikes, and exorbitant token bills.',
    schemaType: 'TechArticle'
  },
  {
    path: 'case-studies/voice-ai-crm-integration',
    title: 'Case Study: Voice AI & CRM Integration at the Telephony Boundary | Mohsin Qureshi',
    description: 'Full-duplex WebSocket audio streaming, sub-700ms Time-to-First-Audio, speculative CRM lookups, and graceful human handoff protocols.',
    h1: 'Voice AI and CRM Integration: Architecture, Failure Modes, and Handoffs',
    bodyText: 'Architecture post-mortem on solving the 2.5s+ telephony latency bottleneck using streaming STT, vLLM generation, and transactional CRM checkpoints with zero lost caller context.',
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
    description: 'Why invoking monolithic LLMs directly for every request is an enterprise anti-pattern, and how a deterministic fast-path + SLM gateway reduces inference bills by 72%.',
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
    title: 'Privacy Policy | Mohsin Qureshi AI Platform & Engineering Advisory',
    description: 'Privacy Policy covering data protection under India Digital Personal Data Protection (DPDP) Act 2023, EU/UK GDPR, and California CCPA/CPRA. Transparent data handling and zero unauthorized selling.',
    h1: 'Privacy Policy & Data Protection Governance',
    bodyText: 'Comprehensive privacy policy detailing personal data processing, lawful basis, third-party processors (Calendly, GitHub Pages, Formspree), consent management, and data subject rights including access, rectification, and erasure.',
    schemaType: 'WebPage'
  },
  {
    path: 'terms',
    title: 'Terms & Conditions | Mohsin Qureshi Sovereign AI Portfolio',
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
    title: 'Refund & Cancellation Policy | Mohsin Qureshi Technical Advisory',
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

    // Inject Crawlable Noscript / Pre-rendered Semantic Content for Search Engines
    const preRenderedContent = `
    <noscript>
      <div style="max-width: 800px; margin: 40px auto; padding: 20px; font-family: sans-serif; color: #e2e8f0; background: #0f172a;">
        <header>
          <a href="${baseCanonical}/" style="color: #d97757;">← Back to Mohsin Qureshi Sovereign Portfolio</a>
          <h1 style="color: #ffffff; font-size: 28px; margin-top: 16px;">${route.h1}</h1>
          <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6;">${route.description}</p>
        </header>
        <main style="margin-top: 24px; line-height: 1.7; color: #94a3b8;">
          <p>${route.bodyText}</p>
          <p>Contact: <a href="https://www.linkedin.com/in/mohd-mohsin-qureshi" style="color: #d97757;">LinkedIn</a> | <a href="https://github.com/mohsingitdev" style="color: #d97757;">GitHub</a></p>
        </main>
      </div>
    </noscript>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n${preRenderedContent}`);

    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`✓ Pre-rendered static route: /${route.path}/index.html`);
  });

  console.log('✓ All 2026 static routes successfully generated.');
}

generateStaticRoutes();
