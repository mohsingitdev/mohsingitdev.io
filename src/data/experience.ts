import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'flipkart',
    role: 'Forward Deployment Engineer | AI Systems',
    company: 'Flipkart',
    location: 'Remote',
    badge: 'High-Concurrency E-Commerce',
    bullets: [
      'Architected and deployed high-concurrency, multi-agent routing infrastructure supporting enterprise-scale customer workflows.',
      'Engineered deterministic fast-path and SLM intent routing to optimize inference cost and latency, replacing monolithic LLM prompts with sub-40ms classification.',
      'Tuned hybrid RAG retrieval architectures over large enterprise document corpora, enforcing strict citation grounding and reducing hallucination rates.',
      'Established LLMOps standards: implemented per-field confidence scoring, automated fallback schemas, and wall-clock retry budgets to guarantee high platform availability.'
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
      'Spearheaded design and delivery of enterprise-grade agentic RAG knowledge platforms for global scientific research clients, reducing document discovery time from hours to minutes.',
      'Benchmarked foundation models against strict accuracy, latency, and cloud budget constraints, implementing multi-layer LLM guardrails for safety and compliance.',
      'Led the transition of AI prototypes to production-ready systems leveraging containerized inference APIs and distributed cloud deployments.',
      'Monitored production telemetry and optimized GPU-backed serving infrastructure to maximize throughput while minimizing cloud compute expenditures.'
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
      'Conducted AI research focused on clinical narrative comprehension, entity disambiguation, and knowledge extraction under strict regulatory compliance.',
      'Designed validation pipelines for clinical narrative analysis ensuring 100% auditable citations and zero-hallucination tolerance for scientific researchers.'
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
      'Architected enterprise knowledge retrieval and semantic document ingestion pipelines for complex telecommunications technical documentation and hardware specifications.',
      'Enabled natural-language query resolution over deep technical documentation with sub-second retrieval and strict contextual grounding.',
      'Performed data modeling on high-throughput telecommunication telemetry datasets for network performance analysis.'
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
      'Engineered Computer Vision research pipelines contributing to generative AI and visual data processing initiatives.',
      'Developed and optimized image/video analysis models using PyTorch, integrating CV solutions directly into downstream production analytics pipelines.',
      'Collaborated asynchronously with engineering teams across time zones under a fully remote delivery model.'
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
      'Architected real-time video analytics and computer vision pipelines for automated safety monitoring in industrial manufacturing environments.',
      'Led GenAI and NLP delivery for healthcare and enterprise clients, building custom Named Entity Recognition (NER) models achieving 90%+ extraction accuracy.',
      'Built high-fidelity simulation and synchronization pipelines for enterprise digital twin platforms serving multi-tenant virtual A/B testing.',
      'Established foundational MLOps CI/CD pipelines with automated training, model versioning, and post-deployment drift detection.'
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
      'Engineered streaming anomaly detection and telemetry classification models for high-throughput telecommunications network security logs.',
      'Delivered production architecture roadmaps and real-time streaming ML pipelines for automated threat telemetry analysis.'
    ],
    technologies: ['Anomaly Detection', 'Network Security', 'Time-Series ML', 'Big Data Streaming']
  }
];

export const EDUCATION = [
  {
    degree: 'Entrepreneurship & Venture Studies',
    institution: 'Indian Institute of Technology, Madras',
    period: 'Executive Program'
  },
  {
    degree: 'Postgraduate Diploma in Product Management',
    institution: "Masters' Union",
    period: 'Executive Program'
  },
  {
    degree: 'Bachelor of Engineering (BE) - Electronics Engineering',
    institution: 'Shri Ramdeobaba College of Engineering and Management',
    period: 'Undergraduate Degree'
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
