import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'flipkart',
    role: 'Forward Deployment Engineer & AI Platform Lead | AI Systems',
    company: 'Flipkart',
    location: 'Remote',
    badge: 'High-Concurrency E-Commerce & Cloud Scale',
    bullets: [
      'Architected distributed AI platform infrastructure on AWS EKS and GCP GKE with auto-scaling vLLM worker pools, handling peak flash-sale throughput (100k+ req/sec) and cutting cloud token burn by 72%.',
      'Trained and fine-tuned open-source Hugging Face models (Gemma 8B & 27B) using PyTorch and QLoRA for task-specific multi-agent fleets, achieving 98.8% structured JSON tool-calling accuracy.',
      'Engineered deterministic fast-path SLM intent routing gateways, reducing p99 latency from 2,140ms to 34ms while guaranteeing schema conformance via Pydantic validator fallbacks.',
      'Constructed hybrid RAG retrieval pipelines uniting BM25 lexical precision with dense vector embeddings over millions of enterprise documents, dropping hallucination rates below 0.5%.',
      'Established automated LLMOps regression suites and wall-clock circuit breakers on Kubernetes, maintaining 99.99% system availability during surge traffic.'
    ],
    technologies: ['Hugging Face', 'Gemma 8B/27B', 'AWS EKS', 'GCP GKE', 'vLLM', 'QLoRA / SFT', 'LangGraph', 'Redis', 'Kubernetes']
  },
  {
    id: 'accenture',
    role: 'Conversational AI & Platform Consultant',
    company: 'Accenture Strategy & Consulting',
    location: 'Remote',
    badge: 'Enterprise Advisory & Multi-Cloud',
    bullets: [
      'Spearheaded design and delivery of enterprise-grade agentic RAG knowledge platforms on AWS & GCP VPCs for global scientific research clients, slashing technical document discovery time from hours to under 3 minutes.',
      'Fine-tuned and hardened open-source Hugging Face checkpoints against strict latency and cloud FinOps budgets, enforcing multi-layer semantic guardrails to eradicate private data leakage.',
      'Migrated fragile proof-of-concept prototypes to production-hardened Triton Inference Server microservices, scaling concurrent throughput by 4.2x.',
      'Monitored production GPU telemetry and optimized vLLM serving infrastructure, cutting inference cost per 10k requests by 65%.'
    ],
    technologies: ['Agentic RAG', 'Hugging Face', 'Gemma / Llama', 'Triton Inference Server', 'AWS', 'GCP', 'PyTorch', 'FastAPI']
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
    role: 'Senior Data Scientist | Traditional ML & Telemetry',
    company: 'Ericsson',
    location: 'Remote',
    badge: 'Traditional ML & Data Science',
    bullets: [
      'Engineered full-stack Data Science and classical machine learning pipelines (XGBoost, Random Forests, Scikit-Learn) for high-dimensional predictive maintenance and hardware anomaly detection.',
      'Constructed statistical feature engineering stores and high-throughput telemetry ingestion frameworks processing streaming 5G network performance logs with zero event loss.',
      'Architected enterprise semantic ingestion pipelines for hardware specifications and network documentation, achieving sub-second vector recall across 50,000+ technical assets.'
    ],
    technologies: ['Traditional ML', 'XGBoost', 'Scikit-Learn', 'Feature Stores', 'Time-Series ML', 'LangChain', 'Python']
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
    technologies: ['Computer Vision', 'PyTorch', 'TensorRT', 'Video Analytics', 'Distributed Data Pipelines', 'Docker']
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
    role: 'Machine Learning Engineer & Data Science Specialist',
    company: 'Verizon',
    location: 'Remote',
    badge: 'Telco Cyber Security & Traditional ML',
    bullets: [
      'Constructed streaming anomaly detection engines and supervised XGBoost classifiers processing 50k+ events/sec across distributed network nodes, accelerating incident triage MTTD from hours to under 3 minutes.',
      'Productionized time-series telemetry classification models delivering automated cyber-threat mitigation across critical network backbones.'
    ],
    technologies: ['Traditional ML', 'XGBoost', 'Isolation Forests', 'Anomaly Detection', 'Time-Series ML', 'Big Data Streaming']
  }
];

export const EDUCATION = [
  {
    degree: 'Entrepreneurship & Venture Studies',
    institution: 'Indian Institute of Technology, Madras',
    period: 'Executive Post-Graduate'
  },
  {
    degree: 'Artificial Intelligence & Machine Learning',
    institution: 'IIIT Hyderabad',
    period: 'Advanced Executive Certification'
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Engineering & Technology',
    period: 'Undergraduate'
  }
];
