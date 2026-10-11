import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'flipkart',
    role: 'Forward Deployment Engineer | AI Systems',
    company: 'Flipkart',
    location: 'Remote',
    badge: 'High-Concurrency E-Commerce',
    bullets: [
      'Architected high-concurrency multi-agent routing infrastructure handling peak flash-sale throughput (100k+ req/sec), replacing monolithic LLM calls with sub-40ms SLM deterministic fast paths and cutting cloud token burn by 72%.',
      'Engineered deterministic fast-path and SLM intent routing gateways, reducing p99 latency from 2,140ms to 34ms while guaranteeing schema conformance via Pydantic validator fallbacks.',
      'Constructed hybrid RAG retrieval pipelines uniting BM25 lexical precision with dense vector embeddings over millions of enterprise documents, dropping hallucination rates below 0.5%.',
      'Established automated LLMOps regression suites and wall-clock circuit breakers, maintaining 99.99% system availability during flash-sale surge traffic.'
    ],
    technologies: ['Multi-Agent Systems', 'Deterministic Routing', 'LangGraph', 'vLLM', 'Enterprise RAG', 'LLMOps', 'Kubernetes']
  },
  {
    id: 'accenture',
    role: 'Conversational AI Consultant',
    company: 'Accenture Strategy & Consulting',
    location: 'Remote',
    badge: 'Enterprise Advisory',
    bullets: [
      'Spearheaded design and delivery of enterprise-grade agentic RAG knowledge platforms for global scientific research clients, slashing complex technical document discovery time from hours to under 3 minutes.',
      'Benchmarked and hardened frontier foundation models against strict latency and cloud FinOps budgets, enforcing multi-layer semantic guardrails to eliminate data leakage.',
      'Migrated fragile proof-of-concept prototypes to production-hardened Triton Inference Server microservices, scaling concurrent throughput by 4.2x.',
      'Monitored production GPU telemetry and optimized vLLM serving infrastructure, cutting inference cost per 10k requests by 65%.'
    ],
    technologies: ['Agentic RAG', 'LLM Guardrails', 'Triton Inference Server', 'PyTorch', 'FastAPI', 'GPU Telemetry']
  },
  {
    id: 'novartis',
    role: 'Artificial Intelligence Researcher',
    company: 'Novartis',
    location: 'Remote',
    badge: 'Life Sciences & Pharma',
    bullets: [
      'Constructed zero-hallucination clinical narrative comprehension and entity disambiguation engines under strict FDA/EMA regulatory constraints, achieving 100% auditable sentence citations.',
      'Engineered Bio-Transformer validation pipelines delivering 99.2% entity resolution accuracy across clinical trials and scientific research corpora.'
    ],
    technologies: ['Clinical NLP', 'Bio-Transformers', 'Semantic Disambiguation', 'Regulatory Compliance', 'Vector Search']
  },
  {
    id: 'ericsson',
    role: 'Data Scientist',
    company: 'Ericsson',
    location: 'Remote',
    badge: 'Telecommunications',
    bullets: [
      'Architected enterprise semantic ingestion pipelines for hardware specifications and network documentation, achieving sub-second vector recall across 50,000+ technical assets.',
      'Engineered high-throughput telemetry ingestion frameworks processing streaming 5G network performance logs with zero event loss.'
    ],
    technologies: ['LangChain', 'Sentence Transformers', 'ChromaDB', 'Telco Big Data', 'Python']
  },
  {
    id: 'comcast',
    role: 'Computer Vision Research Engineer',
    company: 'Comcast',
    location: 'Remote',
    badge: 'Multimodal Research',
    bullets: [
      'Engineered distributed computer vision pipelines processing 60 FPS video streams for real-time scene classification and generative AI asset tagging.',
      'Optimized PyTorch inference models through TensorRT quantization, cutting GPU memory overhead by 48% with zero precision loss.'
    ],
    technologies: ['Computer Vision', 'PyTorch', 'Video Analytics', 'Distributed Data Pipelines', 'Docker']
  },
  {
    id: 'tcs',
    role: 'AI/ML Engineer - Digital Twin & MLOps',
    company: 'Tata Consultancy Services',
    location: 'Remote',
    badge: 'Industrial IoT & Digital Twins',
    bullets: [
      'Architected real-time edge computer vision pipelines for industrial safety compliance, monitoring high-throughput physical operations with sub-100ms response.',
      'Engineered clinical NLP pipelines delivering 90%+ Named Entity Recognition (NER) extraction precision on healthcare documentation.',
      'Built high-fidelity digital twin simulation engines (TwinX) synchronizing multi-tenant telemetry for virtual A/B testing and predictive maintenance.',
      'Established enterprise MLOps CI/CD pipelines incorporating automated drift detection and canary deployments across Kubernetes clusters.'
    ],
    technologies: ['Digital Twin (TwinX)', 'MLOps CI/CD', 'Custom NER', 'Real-time CV', 'MLflow', 'Docker']
  },
  {
    id: 'verizon',
    role: 'Machine Learning Engineer',
    company: 'Verizon',
    location: 'Remote',
    badge: 'Telco Cyber Security',
    bullets: [
      'Constructed streaming anomaly detection engines processing 50k+ events/sec across distributed network nodes, accelerating incident triage MTTD from hours to under 3 minutes.',
      'Productionized time-series telemetry classification models delivering automated cyber-threat mitigation across critical network backbones.'
    ],
    technologies: ['Anomaly Detection', 'Network Security', 'Time-Series ML', 'Big Data Streaming']
  }
];

export const EDUCATION = [
  {
    degree: 'Entrepreneurship & Venture Studies',
    institution: 'Indian Institute of Technology, Madras',
    period: 'Executive Post-Graduate'
  },
  {
    degree: 'Postgraduate Diploma in Product Management',
    institution: "Masters' Union",
    period: 'Executive Diploma'
  },
  {
    degree: 'Bachelor of Engineering (BE) - Electronics Engineering',
    institution: 'Autonomous Engineering Institute',
    period: 'Undergraduate Engineering'
  },
  {
    degree: 'Machine Learning Specialization',
    institution: 'University of Washington',
    period: 'Professional Specialization'
  },
  {
    degree: 'Data Science Specialization',
    institution: 'University of Michigan',
    period: 'Professional Specialization'
  }
];
