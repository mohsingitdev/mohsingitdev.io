// All home-page copy and data. Outcome figures come only from delivered work (LinkedIn-backed).
// Everything computed in the value demo is an estimate from the visitor's own inputs and is labelled so.

export const LINKS = {
  calendly: 'https://calendly.com/mohsin-qureshi',
  email: 'mailto:mohsin.i.qureshi@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/mohd-mohsin-qureshi',
  github: 'https://github.com/mohsingitdev',
  topmate: 'https://topmate.io/mohsin_qureshi',
};

// Role titles as they appear in 2026 job posts, so recruiters and platforms can match quickly.
export const CAPABILITIES = [
  {
    tag: 'Forward-deployed engineer',
    title: 'Embedded with your team, accountable for adoption',
    body: 'I run discovery with the people doing the work, build in your environment and stay until the system is used, not just shipped.',
    points: ['One use case and one success metric', 'Integrations with the systems you already run', 'Handover your team can maintain'],
  },
  {
    tag: 'AI engineer · agents and RAG',
    title: 'Answers from your data that people can check',
    body: 'Hybrid search, reranking, tool calling and guardrails, with every answer traced back to its source.',
    points: ['Citations on every claim', 'Evaluation sets that gate each release', 'Retries, fallbacks and human approval'],
  },
  {
    tag: 'MLOps and inference',
    title: 'Models that stay up and stay affordable',
    body: 'Serving, release pipelines and monitoring, so models reach production faster and keep working after launch.',
    points: ['Containerized serving with vLLM and FastAPI', 'CI/CD, versioning and drift detection', 'Latency and cost per task, tracked'],
  },
  {
    tag: 'GTM engineer · AI automation',
    title: 'Pipeline work done by systems, approved by people',
    body: 'Lead research, enrichment, scoring and CRM workflows that give reps time back without sending anything unchecked.',
    points: ['Enrichment and scoring your team can tune', 'CRM and webhook integrations', 'Drafts that a rep approves before sending'],
  },
];

export interface Scenario {
  id: string;
  label: string;
  role: string;
  problem: string;
  stages: { name: string; body: string }[];
  beyond: string;
  evidence?: string;
  defaults: { people: number; hours: number; rate: number; share: number };
  peopleLabel: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'docs',
    label: 'Experts lose hours searching documents',
    role: 'AI engineering · RAG',
    problem: 'Specialists spend part of every week finding and re-reading documents, and nobody fully trusts the current search.',
    stages: [
      { name: 'Diagnose', body: 'Collect 50 real questions with known answers and measure today’s search on them. That becomes the baseline and the first eval set.' },
      { name: 'Plan', body: 'Agree where answers must cite a source, when the system should refuse, and the latency and cost per query you will accept.' },
      { name: 'Build', body: 'Hybrid search with reranking, cited answers, refusal when evidence is thin, and guardrails for sensitive content.' },
      { name: 'Hand over', body: 'The eval set becomes a release gate. Quality and cost dashboards, and a runbook for adding new document sets.' },
    ],
    beyond: 'Every answer links to the passage it came from, so a reviewer checks it in seconds instead of re-reading the document.',
    evidence: 'Delivered for global pharma and research clients: document discovery went from hours to minutes.',
    defaults: { people: 20, hours: 6, rate: 70, share: 50 },
    peopleLabel: 'People who search documents',
  },
  {
    id: 'ops',
    label: 'An ops team buried in repetitive requests',
    role: 'Forward-deployed · AI automation',
    problem: 'A support or operations team handles the same few request types all day, and reviews are manual.',
    stages: [
      { name: 'Diagnose', body: 'Tag a few hundred recent requests. A small number of intents usually make up most of the volume, and a few always need a person.' },
      { name: 'Plan', body: 'Automate the top intents end to end, send uncertain ones to a person with the evidence attached, and agree one metric: handling hours removed.' },
      { name: 'Build', body: 'Intent routing, retrieval over your policies, tool calls into your systems, confidence scores and human approval for anything involving money or policy.' },
      { name: 'Hand over', body: 'An eval set from real requests, a dashboard for volume and cost per request, and a runbook for adding new intents.' },
    ],
    beyond: 'Confidence is scored per field, so one uncertain value goes to a fallback instead of the whole request failing or slipping through.',
    evidence: 'Delivered for a large e-commerce marketplace: manual review workflows replaced by automated synthesis.',
    defaults: { people: 8, hours: 15, rate: 45, share: 40 },
    peopleLabel: 'People handling requests',
  },
  {
    id: 'gtm',
    label: 'Reps research and qualify leads by hand',
    role: 'GTM engineering',
    problem: 'Reps spend hours on research and list-building before they talk to anyone, and lead scores are a guess.',
    stages: [
      { name: 'Diagnose', body: 'Map how a lead moves from source to first touch: enrichment, scoring, who writes the message and where it stalls.' },
      { name: 'Plan', body: 'Write your ideal customer profile as rules a system can check, choose the signals that matter, and keep a rep approving every send.' },
      { name: 'Build', body: 'An enrichment waterfall, AI research per account, fit and intent scoring, CRM sync by webhook and first drafts from the research.' },
      { name: 'Hand over', body: 'Scoring rules your team can edit, a monthly check of scores against closed deals, and a runbook for new data sources.' },
    ],
    beyond: 'Each score comes with a one-line reason on the CRM record, so reps trust it and RevOps can tune it without an engineer.',
    defaults: { people: 5, hours: 12, rate: 60, share: 50 },
    peopleLabel: 'Reps or SDRs',
  },
  {
    id: 'mlops',
    label: 'Model releases are slow and risky',
    role: 'MLOps · inference',
    problem: 'Getting a model to production takes weeks of manual steps, and nobody knows when it starts to drift.',
    stages: [
      { name: 'Diagnose', body: 'Trace one model from training to production: the manual steps, missing tests, approvals and what happens when it drifts.' },
      { name: 'Plan', body: 'Decide what to automate first, which checks block a bad release, and targets for release time and rollback time.' },
      { name: 'Build', body: 'CI/CD for training and deployment, model versioning, drift detection, and containerized serving with latency and cost tracking.' },
      { name: 'Hand over', body: 'Pipelines as code, a release checklist, alert thresholds and an on-call runbook.' },
    ],
    beyond: 'Rollback is tested before the first release, not after the first incident.',
    evidence: 'Delivered for US enterprise clients: release cycles 40% shorter.',
    defaults: { people: 4, hours: 10, rate: 80, share: 35 },
    peopleLabel: 'ML engineers involved',
  },
];

// Standard practice vs what I add, per stage.
export const METHOD = [
  { stage: 'Diagnose', usual: 'Workshops and a slide deck of requirements.', mine: 'A measured baseline on your real data in week one, and one success metric we both sign.' },
  { stage: 'Plan', usual: 'A roadmap with a dozen candidate use cases.', mine: 'One use case with a go/no-go threshold and a cost ceiling per task, agreed before any build.' },
  { stage: 'Build', usual: 'A demo that works on clean examples.', mine: 'Evals that block bad releases, fallbacks, human approval for risky actions, and cost tracked from day one.' },
  { stage: 'Hand over', usual: 'A recorded walkthrough.', mine: 'Code in your repos, runbooks and dashboards, and paired sessions until your team ships a change alone.' },
];

export const ENGAGEMENTS = [
  {
    title: 'Production readiness audit',
    summary: 'For a RAG or agent system that works in demos but not reliably for users. You get a ranked list of what will break, what each fix costs, and what to do first.',
    duration: '1–2 weeks · fixed price',
    details: [
      'Retrieval quality and citation grounding',
      'Eval set, release gates and guardrails',
      'Latency, reliability and cost review',
      'Written report and a walkthrough with your team',
    ],
  },
  {
    title: 'Pilot to production',
    summary: 'For one use case you have already proven. I take it to a system people rely on, with evals, monitoring and a cost per task you can defend.',
    duration: '4–8 weeks · fixed scope',
    details: [
      'Scope with one success metric and a go/no-go',
      'Agents with tool calling, retries and fallbacks',
      'Evals as a release gate, monitoring and cost per task',
      'Handover with docs and runbooks',
    ],
  },
  {
    title: 'Embedded AI engineer',
    summary: 'For teams that need a senior AI engineer inside the team, part-time or full-time, from architecture to go-live.',
    duration: 'Monthly · part or full time',
    details: [
      'Architecture and hands-on delivery in your stack',
      'Staged releases from development to production',
      'Code review, pairing and team enablement',
      'Support, knowledge and revenue-ops agents',
    ],
  },
];

export interface WorkItem {
  id: string;
  sector: string;
  title: string;
  via: string;
  problem: string;
  built: string;
  different: string;
  results: { value: string; label: string }[];
  stack: string[];
  repo?: string;
}

export const WORK: WorkItem[] = [
  {
    id: 'pharma',
    sector: 'Life sciences',
    title: 'Cited answers for scientific research',
    via: 'Global pharma and research organizations',
    problem: 'Researchers spent hours finding evidence across large document sets, and answers without sources carried audit risk.',
    built: 'Hybrid retrieval with reranking, guardrails on output, and containerized inference behind an API.',
    different: 'Benchmarked candidate models against accuracy, latency and cost limits before choosing one, instead of defaulting to the largest.',
    results: [{ value: 'Hours → minutes', label: 'Document discovery time' }],
    stack: ['Hybrid search', 'Reranking', 'Guardrails', 'Containerized inference'],
    repo: 'https://github.com/mohsingitdev/citation-grounded-rag',
  },
  {
    id: 'commerce',
    sector: 'E-commerce',
    title: 'Multi-agent automation for operations',
    via: 'Large e-commerce marketplace',
    problem: 'Manual review workflows, and a single heavy model that made cost and latency hard to control at peak load.',
    built: 'Deterministic and LLM routing, retrieval with strict citation grounding, and staged releases from development to production.',
    different: 'Per-field confidence scores with automated fallbacks and retry budgets, so uncertain output never reached downstream systems unchecked.',
    results: [{ value: 'Manual → automated', label: 'Review workflows replaced by synthesis' }],
    stack: ['Python', 'FastAPI', 'Multi-agent routing', 'RAG'],
    repo: 'https://github.com/mohsingitdev/enterprise-agentic-router',
  },
  {
    id: 'telecom',
    sector: 'Telecom',
    title: 'Documentation Q&A for engineers',
    via: 'Global telecom equipment vendor',
    problem: 'Engineers lost time searching dense technical documentation.',
    built: 'Chunking, sentence-transformer embeddings, vector storage and LLM query resolution with LangChain.',
    different: 'Built the pipeline end to end, so the team owned one system instead of stitching tools together.',
    results: [{ value: 'Plain-language search', label: 'Over internal technical docs' }],
    stack: ['LangChain', 'Sentence transformers', 'Vector DB'],
  },
  {
    id: 'industrial',
    sector: 'Manufacturing and healthcare',
    title: 'Vision, NLP and MLOps in production',
    via: 'Enterprise products for US clients',
    problem: 'Manual safety monitoring, slow entity extraction from clinical text, and slow, risky model releases.',
    built: 'Real-time video analytics, a custom NER system, and CI/CD with automated training and versioning.',
    different: 'Drift detection built into the release pipeline, so models stayed accurate after launch rather than degrading quietly.',
    results: [
      { value: '50%', label: 'Less manual oversight' },
      { value: '90%+', label: 'Entity extraction accuracy' },
      { value: '40%', label: 'Shorter release cycles' },
    ],
    stack: ['PyTorch', 'Computer vision', 'NER', 'MLOps'],
    repo: 'https://github.com/mohsingitdev/E2E-MLOPS-with-MLFLOW',
  },
];

export const TRACK = [
  { years: '2024 – now', role: 'Senior AI consultant', org: 'global consulting firm', note: 'Forward-deployed AI engineering for e-commerce, pharma and telecom clients: agents, retrieval and model evaluation.' },
  { years: '2021 – 2024', role: 'AI/ML engineer', org: 'global IT services firm', note: 'Computer vision, network-security ML and MLOps for US telecom, media and industrial clients.' },
];

export const EDUCATION = [
  'PG Diploma, Product Management',
  'BE, Electronics Engineering',
  'Machine Learning and Data Science specializations, University of Washington and University of Michigan',
];

export const FACTS = [
  { term: 'Hours', value: 'Based in India (IST), with daily overlap with US, UK or Canada working hours agreed per engagement.' },
  { term: 'Commercials', value: 'Fixed price for audits and builds, a monthly retainer for embedded work. Quoted and invoiced in USD or GBP, so you pay in your own currency.' },
  { term: 'Confidentiality', value: 'NDA and IP assignment before work starts. I work inside your cloud, repositories and tools.' },
  { term: 'How to engage', value: 'Contract directly, as a vendor, or through the platform or agency you already use.' },
];

// Measured outcomes from delivered work (LinkedIn-backed). Shown in the hero.
export const PROOF = [
  { value: 'Hours → min', label: 'Document discovery time, global pharma research' },
  { value: '40%', label: 'Shorter model release cycles' },
  { value: '50%', label: 'Less manual oversight with real-time vision' },
  { value: '90%+', label: 'Accuracy on custom entity extraction' },
];

// Differentiator: how hiring me compares with the usual alternatives.
export const COMPARE = {
  cols: ['Typical agency', 'Generalist freelancer', 'Working with me'],
  rows: [
    { k: 'Who builds it', v: ['A junior team after a senior pitch', 'One person, often new to production AI', 'The senior engineer you spoke to, start to finish'] },
    { k: 'First useful output', v: ['Weeks of discovery workshops', 'A demo on sample data', 'A measured baseline on your data in week one'] },
    { k: 'Proof it works', v: ['Case studies from other clients', 'It looks right in the demo', 'An eval set that blocks bad releases'] },
    { k: 'Cost control', v: ['Priced by headcount', 'Rarely tracked', 'Cost per task tracked and budgeted from day one'] },
    { k: 'After launch', v: ['Change requests and a new contract', 'Hard to reach', 'Runbooks, dashboards and pairing until your team ships alone'] },
  ],
};

// How I think about AI-first work.
export const PRINCIPLES = [
  { t: 'Start from the workflow, not the model', b: 'Map where hours and errors actually happen. The model is chosen last.' },
  { t: 'Measure before you build', b: 'A baseline on your own data turns “it feels better” into a number you can report.' },
  { t: 'Smallest model that passes the eval', b: 'Rules, routing and small models first. Frontier models only where they earn their cost.' },
  { t: 'People approve what’s costly to get wrong', b: 'Agents handle the routine. Money, policy and customer-facing actions get a human check.' },
];

// Risk reversal shown under the comparison. Edit if your terms differ.
export const COMMITMENTS = [
  'Every build starts with a diagnosis week. If the numbers don’t justify the build, we stop there.',
  'Fixed price and a written scope before work starts.',
  'Your code, your cloud and your repos from day one.',
];

// Enquiry topics. No public prices: scope and commercials are agreed on a call.
export const ENQUIRY_TOPICS = [
  'Strategy session',
  'Production readiness audit',
  'Pilot to production',
  'Embedded AI engineer',
  'GTM and workflow automation',
  'Contract or full-time role',
  'Something else',
];

// Problems buyers bring in 2026. "signal" is third-party market data (linked). "outcome" is either
// Delivered (my own measured work) or Benchmark (published industry range, not a client claim).
export interface Problem {
  id: string;
  role: string;
  title: string;
  signal: string;
  signalLabel: string;
  source: { name: string; url: string };
  approach: string;
  outcome: { kind: 'Delivered' | 'Benchmark'; text: string };
}

export const PROBLEMS: Problem[] = [
  {
    id: 'pilots',
    role: 'Forward-deployed engineering',
    title: 'AI pilots that never reach production',
    signal: '14%',
    signalLabel: 'of organisations have scaled an AI agent pilot to organisation-wide use',
    source: { name: 'Wharton survey, 2026', url: 'https://www.webpronews.com/why-95-of-ai-pilots-stall-the-organizational-barriers-blocking-scale-in-2026/' },
    approach: 'Narrow the scope to one workflow and one success metric, put evaluation gates in front of every release, and stage the rollout from development to production.',
    outcome: { kind: 'Delivered', text: 'Multi-agent platform taken from development to production for a large e-commerce marketplace; manual review workflows replaced.' },
  },
  {
    id: 'trust',
    role: 'AI engineering · RAG',
    title: 'Answers nobody trusts enough to use',
    signal: '~25%',
    signalLabel: 'of the working week goes on searching for information',
    source: { name: 'Atlassian, 2025', url: 'https://cfotech.com.au/story/australian-workers-waste-time-searching-for-information' },
    approach: 'Hybrid retrieval with reranking, a citation on every claim, refusal when evidence is thin, and an evaluation set built from real questions.',
    outcome: { kind: 'Delivered', text: 'Document discovery cut from hours to minutes for global pharma and research clients.' },
  },
  {
    id: 'cost',
    role: 'MLOps · inference',
    title: 'AI spend growing faster than usage',
    signal: '40–70%',
    signalLabel: 'lower blended model cost reported on mixed traffic with routing and caching',
    source: { name: 'Industry benchmarks, 2026', url: 'https://www.gmicloud.ai/en/blog/llm-inference-cost-optimization-caching-batching-routing' },
    approach: 'Route routine requests to rules and smaller models, cache stable context, reserve frontier models for hard cases, and report cost per task.',
    outcome: { kind: 'Benchmark', text: 'Savings depend on traffic mix; a cost and quality baseline in week one shows what is achievable for you.' },
  },
  {
    id: 'gtm',
    role: 'GTM engineering · automation',
    title: 'Revenue teams buried in manual research',
    signal: '~60%',
    signalLabel: 'of sales rep time is spent on non-selling work',
    source: { name: 'Salesforce State of Sales, 2026', url: 'https://www.salesforce.com/ap/sales/state-of-sales/sales-statistics/' },
    approach: 'Enrichment, AI account research and explainable scoring synced to the CRM, with first drafts a rep approves before anything is sent.',
    outcome: { kind: 'Benchmark', text: 'Target: research and list-building hours returned to selling, measured per rep from a week-one baseline.' },
  },
  {
    id: 'drift',
    role: 'MLOps',
    title: 'Models that degrade quietly after launch',
    signal: '40%',
    signalLabel: 'shorter release cycles after automating training, versioning and drift detection',
    source: { name: 'Delivered work', url: 'https://www.linkedin.com/in/mohd-mohsin-qureshi' },
    approach: 'CI/CD for training and deployment, model versioning, drift alerts and a tested rollback before the first release.',
    outcome: { kind: 'Delivered', text: '40% shorter release cycles and 50% less manual oversight on enterprise vision and NLP products.' },
  },
];

// ICPs: who the site is written for.
export const ICPS = [
  {
    tag: 'Startups · Seed to Series B',
    title: 'AI is the product, and the team is small',
    fit: 'You have a roadmap with AI at its core, a few engineers, and no senior AI hire yet.',
    get: 'Architecture, the first production release, and evals and monitoring in place, without a six-month hiring process.',
    start: 'Pilot to production, or embedded part-time',
  },
  {
    tag: 'Business teams building with Claude and AI tools',
    title: 'The prototype works. Real customers are next.',
    fit: 'You built a working AI product with Claude, Cursor, Lovable or similar, and people want to use or buy it.',
    get: 'A review of what you built, then the parts that make it safe to sell: auth, data handling, guardrails, deployment and cost control.',
    start: 'Production readiness audit',
  },
  {
    tag: 'Enterprises and large organisations',
    title: 'A proven pilot, stuck behind production standards',
    fit: 'Your innovation or AI team has a pilot that works, and security, architecture review and procurement are next.',
    get: 'HLD and LLD that pass review, guardrails and evaluation for sign-off, delivery inside your cloud and vendor rules, and handover to your team.',
    start: 'Readiness audit, or embedded as a vendor or contractor',
  },
];

// Direct answers so search and answer engines can quote them. Mirrored in index.html (FAQPage JSON-LD and no-JS content).
export const FAQ = [
  {
    q: "What does a forward-deployed AI engineer do?",
    a: "A forward-deployed AI engineer works inside a client team to take an AI system from prototype to production. That covers scoping the use case, designing the architecture, building the agents and retrieval, adding evals and guardrails, deploying in the client cloud, and handing over code and runbooks the team can run.",
  },
  {
    q: "We built a prototype with Claude or another AI tool. Can you make it production-ready?",
    a: "Yes. Prototypes built with Claude, Cursor, Lovable or similar tools usually prove the idea but miss authentication, data handling, guardrails, evaluation, monitoring and cost limits. I review what you have, keep what works, and rebuild the parts that will not hold up with real users. A readiness audit shows which is which in 1 to 2 weeks.",
  },
  {
    q: "We are an early-stage startup. Why not hire a full-time AI engineer?",
    a: "A senior AI hire usually takes months and adds a large fixed cost. An engagement gets the first production version live while you hire, and the handover documentation makes that hire productive from the first week.",
  },
  {
    q: "Can you work as a vendor or contractor through our procurement?",
    a: "Yes. I have delivered as a vendor and as a contract hire inside large organisations. I can work under your MSA, NDA and security questionnaires, or contract through the platform or agency you already use.",
  },
  {
    q: "How long does it take to move an AI pilot to production?",
    a: "For one well-scoped use case, usually 4 to 8 weeks: about a week to diagnose and agree a success metric, then design, build behind evaluation gates and a staged rollout. A readiness audit of an existing system takes 1 to 2 weeks.",
  },
  {
    q: "Do you work with US, UK and Canadian teams from India?",
    a: "Yes. I have delivered fully remote for US, UK and European clients since 2021. Daily overlap with US, UK or Canadian working hours is agreed at the start of each engagement.",
  },
  {
    q: "Will you work alongside our in-house engineers?",
    a: "Yes, that is the default. I pair with your team, review their code, document design decisions, and leave runbooks so your engineers own the system after handover.",
  },
  {
    q: "How are engagements priced?",
    a: "Audits and builds are fixed price with a written scope. Embedded work is a monthly retainer. A quote follows a 15-minute call, and invoices are in USD or GBP.",
  },
  {
    q: "How do you handle confidentiality, data and IP?",
    a: "I sign an NDA and an IP assignment before work starts and work inside your cloud, repositories and tools, so your data stays in your environment. Client work is only described publicly at the level the contract allows.",
  },
  {
    q: "What do you need from us to start?",
    a: "A named business owner, access to the relevant data and systems, and one success metric. A kickoff checklist covers accounts, environments and stakeholders in the first week.",
  },
  {
    q: "What happens after handover?",
    a: "You get the code in your repositories, architecture documents, runbooks, dashboards and the evaluation set. Ongoing support or an embedded retainer is available but not required.",
  },
  {
    q: "What do you build with?",
    a: "Python, FastAPI, LangGraph and LangChain for agents; hybrid search with Milvus or Qdrant and cross-encoder reranking for RAG; vLLM and containerized inference on AWS or GCP; PyTorch for fine-tuning and computer vision; and evaluation harnesses as release gates.",
  },
];
