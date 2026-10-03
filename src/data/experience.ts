import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'flipkart',
    role: 'Forward Deployment Engineer | AI Engineer',
    company: 'Flipkart',
    location: 'Bengaluru, India',
    period: 'Apr 2026 – Present',
    badge: 'High-Concurrency E-Commerce',
    bullets: [
      'Architected and deployed an AI-native, multi-agent enterprise platform supporting high-concurrency, business-critical customer operations.',
      'Engineered deterministic and LLM-based routing pipelines to optimize inference cost and latency, replacing manual review workflows with automated synthesis.',
      'Tuned RAG retrieval architectures over vast enterprise corpora (optimizing top-k retrieval and strict citation grounding) to measurably reduce hallucination rates.',
      'Established robust LLMOps practices: implemented per-field confidence scoring, automated fallback mechanisms, and wall-clock retry budgets to guarantee 99.9% platform reliability under peak global flash-sale loads.'
    ],
    technologies: ['Multi-Agent Systems', 'Deterministic Routing', 'LangGraph', 'vLLM', 'Enterprise RAG', 'LLMOps', 'Kubernetes']
  },
  {
    id: 'accenture',
    role: 'Conversational AI Consultant',
    company: 'Accenture Strategy & Consulting',
    location: 'Hyderabad, India',
    period: 'Nov 2024 – Present',
    badge: 'Enterprise Advisory',
    bullets: [
      'Spearheaded the design and delivery of an enterprise-grade agentic RAG knowledge platform for a global scientific research client, reducing complex document discovery time from hours to minutes.',
      'Evaluated and benchmarked foundation models against rigid accuracy, latency, and cloud budget constraints, implementing comprehensive LLM guardrails for output safety.',
      'Led the transition of AI prototypes to robust, production-ready systems leveraging containerized inference APIs and managing global deployment rollouts.',
      'Monitored production telemetry and optimized GPU-backed serving infrastructure to maximize throughput while strictly controlling cloud workload expenditures.'
    ],
    technologies: ['Agentic RAG', 'LLM Guardrails', 'Triton Inference Server', 'PyTorch', 'FastAPI', 'GPU Telemetry']
  },
  {
    id: 'novartis',
    role: 'Artificial Intelligence Researcher',
    company: 'Novartis',
    location: 'Basel, Switzerland',
    period: 'Nov 2025 – Apr 2026',
    badge: 'Life Sciences & Pharma',
    bullets: [
      'Conducted cutting-edge AI research focused on clinical document comprehension, entity disambiguation, and knowledge extraction under strict regulatory compliance.',
      'Designed validation pipelines for clinical narrative analysis ensuring 100% auditable citations and zero-hallucination tolerance for medical researchers.'
    ],
    technologies: ['Clinical NLP', 'Bio-Transformers', 'Semantic Disambiguation', 'Regulatory Compliance', 'Vector Search']
  },
  {
    id: 'ericsson',
    role: 'Data Scientist',
    company: 'Ericsson',
    location: 'Stockholm, Sweden',
    period: 'Dec 2024 – Aug 2025',
    badge: 'Telecommunications',
    bullets: [
      'Architected end-to-end RAG-based Document Ingestion Q&A Bot for Ericsson internal engineering teams: semantic chunking, sentence transformer embeddings, vector storage, and LangChain query resolution.',
      'Significantly slashed internal document search time by enabling natural-language access to complex telecommunications standards and hardware specifications.',
      'Performed deep data science modeling on enterprise telco telemetry datasets for real-time network optimization use cases.'
    ],
    technologies: ['LangChain', 'Sentence Transformers', 'ChromaDB', 'Telco Big Data', 'Python']
  },
  {
    id: 'comcast',
    role: 'Computer Vision Research Engineer',
    company: 'Comcast',
    location: 'United States (Remote)',
    period: 'Jun 2023 – Sep 2024',
    badge: 'Multimodal Research',
    bullets: [
      'Engineered Computer Vision research pipelines for offshore AI team, contributing to generative AI and visual data processing initiatives.',
      'Developed and optimized image/video analysis models using PyTorch, integrating CV solutions directly into downstream production analytics pipelines.',
      'Delivered high-throughput models asynchronously with US-based engineering teams across time zones under a fully remote delivery model.'
    ],
    technologies: ['Computer Vision', 'PyTorch', 'Video Analytics', 'Distributed Data Pipelines', 'Docker']
  },
  {
    id: 'tcs',
    role: 'AI/ML Engineer - TwinX Platform',
    company: 'Tata Consultancy Services',
    location: 'Pune, India',
    period: 'Jan 2022 – Sep 2024',
    badge: 'Industrial IoT & Digital Twins',
    bullets: [
      'Architected a real-time video analytics and computer vision pipeline for a top-tier manufacturing client, automating safety monitoring and reducing manual oversight effort by 50%.',
      'Led GenAI and NLP delivery for a global healthcare client, building a custom Named Entity Recognition (NER) system that achieved 90%+ accuracy in entity extraction.',
      'Built high-fidelity entity simulation and synchronization systems for the TwinX Digital Twin platform serving enterprise clients across multiple verticals for virtual A/B testing.',
      'Established foundational MLOps CI/CD pipelines with automated training, model versioning, and post-deployment drift detection, reducing release cycles by 40%.'
    ],
    technologies: ['Digital Twin (TwinX)', 'MLOps CI/CD', 'Custom NER', 'Real-time CV', 'MLflow', 'Docker']
  },
  {
    id: 'verizon',
    role: 'Machine Learning Engineer',
    company: 'Verizon',
    location: 'United States (Remote)',
    period: 'Jun 2024 – Aug 2024',
    badge: 'Telco Cyber Security',
    bullets: [
      'Engineered ML4SEC — a machine learning security framework for Verizon telco security logs, applying anomaly detection and classification models to large-scale network streaming datasets.',
      'Delivered executive findings and production architecture roadmaps to TCS account leads and Verizon engineering stakeholders.'
    ],
    technologies: ['Anomaly Detection', 'Network Security', 'Time-Series ML', 'Big Data Streaming']
  }
];

export const EDUCATION = [
  {
    degree: 'Entrepreneurship & Venture Studies',
    institution: 'Indian Institute of Technology, Madras',
    period: 'Sep 2025'
  },
  {
    degree: 'Postgraduate Diploma in Product Management',
    institution: "Masters' Union",
    period: 'Executive Program'
  },
  {
    degree: 'Bachelor of Engineering (BE) - Electronics Engineering',
    institution: 'Shri Ramdeobaba College of Engineering and Management',
    period: 'Nagpur, India'
  },
  {
    degree: 'Machine Learning Specialization',
    institution: 'University of Washington',
    period: 'Jul 2021 – Sep 2021'
  },
  {
    degree: 'Data Science Specialization',
    institution: 'University of Michigan',
    period: 'Jun 2021 – Sep 2021'
  }
];
