import { DomainProject } from '../types';

export const DOMAIN_PROJECTS: DomainProject[] = [
  {
    id: 'agentic-router',
    domain: 'E-Commerce & High-Concurrency Systems',
    title: 'Enterprise Multi-Agent Routing & Fallback Gateway',
    tagline: 'Deterministic fast-path routing + SLM intent classification for sub-100ms enterprise SLA',
    enterpriseContext: 'Inspired by high-concurrency production platforms like Flipkart, handling tens of thousands of complex real-time user intents.',
    challenge: 'Directly invoking monolithic LLMs (e.g., GPT-4 or Claude 3.5) for every customer inquiry results in prohibitive API costs, slow 2-3s p99 latency, and single-point-of-failure rate limit outages during peak flash sales.',
    architectureSolution: 'Engineered a two-tier gateway: 80% of routine intents are resolved via deterministic regex/Pydantic schemas and fine-tuned sub-100M SLMs (e.g. FastText/BERT routing) in <45ms. Complex multi-step reasoning routes asynchronously to agentic LangGraph workflows with wall-clock retry budgets and automated failovers.',
    metrics: [
      { label: 'Inference Cost Reduction', value: '72%' },
      { label: 'p99 Routing Latency', value: '<60ms' },
      { label: 'Peak Load Availability', value: '99.98%' },
      { label: 'Daily Query Throughput', value: '1.2M+' }
    ],
    technologies: ['FastAPI', 'LangGraph', 'vLLM', 'Redis Cache', 'Pydantic v2', 'Docker'],
    githubRepo: 'https://github.com/mohsingitdev/enterprise-agentic-router',
    hasInteractiveDemo: true
  },
  {
    id: 'citation-rag',
    domain: 'Life Sciences & Enterprise Knowledge',
    title: 'Self-Correcting Agentic RAG with Strict Citation Grounding',
    tagline: 'Multi-stage hybrid retrieval (BM25 + Dense) with zero-hallucination sentence-level attribution',
    enterpriseContext: 'Built for compliance-critical research institutions (Accenture & Novartis), where ungrounded claims risk regulatory audit failure.',
    challenge: 'Naive vector-only RAG frequently truncates critical context, hallucinates citations, and suffers from semantic drift across multi-hundred-page technical documentation and medical trials.',
    architectureSolution: 'Architected a multi-stage retrieval pipeline: Reciprocal Rank Fusion combining BM25 keyword precision with dense embeddings (Cohere/BGE), followed by cross-encoder reranking. Integrated a post-generation verification loop that matches every generated sentence back to explicit bounding character offsets in the source PDF.',
    metrics: [
      { label: 'Discovery Time', value: 'Hours -> Mins' },
      { label: 'Citation Attribution', value: '100% Grounded' },
      { label: 'Hallucination Mitigation', value: '94% Reduction' },
      { label: 'Corpus Volume Indexed', value: '500k+ Pages' }
    ],
    technologies: ['Milvus / Qdrant', 'LangChain', 'Cross-Encoder', 'SentenceTransformers', 'BM25', 'FastAPI'],
    githubRepo: 'https://github.com/mohsingitdev/citation-grounded-rag',
    hasInteractiveDemo: true
  },
  {
    id: 'telco-streaming-anomaly',
    domain: 'Telecommunications & Cyber Security',
    title: 'Streaming Anomaly Detection & Automated Incident Triage',
    tagline: 'High-throughput unsupervised network security anomaly detection and LangChain Q&A resolver',
    enterpriseContext: 'Developed based on engineering engagements at Ericsson and Verizon, processing millions of network telemetry logs in near real-time.',
    challenge: 'Security teams were drowned in alerts across heterogeneous network nodes, taking hours of manual log correlation to isolate distributed denial and intrusion anomalies.',
    architectureSolution: 'Deployed an isolation forest and autoencoder pipeline for continuous outlier scoring on streaming network traffic, paired with a specialized LangChain document intelligence bot that instantly generates root-cause hypotheses against telco protocols and operational runbooks.',
    metrics: [
      { label: 'Alert Triage Acceleration', value: '65%' },
      { label: 'False Positive Reduction', value: '48%' },
      { label: 'Streaming Processing Rate', value: '50k eps' },
      { label: 'Mean Time to Detect (MTTD)', value: '<3 mins' }
    ],
    technologies: ['PyTorch', 'Kafka', 'Isolation Forests', 'LangChain', 'Telco Big Data', 'MLflow'],
    githubRepo: 'https://github.com/mohsingitdev/E2E-MLOPS-with-MLFLOW',
    hasInteractiveDemo: false
  },
  {
    id: 'edge-cv-twinx',
    domain: 'Computer Vision & Industrial IoT',
    title: 'Real-Time Edge Video Analytics & Digital Twin Synchronization',
    tagline: 'Multi-stream safety CV pipeline with 50% manual oversight reduction and virtual A/B simulations',
    enterpriseContext: 'Architected for Comcast visual analytics and TCS TwinX platform for enterprise manufacturing clients.',
    challenge: 'Deploying heavy deep learning video analytics models on bandwidth-constrained industrial edge devices while maintaining sub-second safety violation alerting.',
    architectureSolution: 'Constructed an optimized PyTorch/TensorRT inference pipeline running on edge gateways. Synchronized video detections directly with the TwinX digital twin state machine to simulate plant-floor safety bottlenecks and run virtual scenario testing without physical downtime.',
    metrics: [
      { label: 'Manual Oversight Cut', value: '50%' },
      { label: 'Edge Inference Latency', value: '33ms (30 FPS)' },
      { label: 'Hazard Detection Recall', value: '96.4%' },
      { label: 'Release Cycle Acceleration', value: '40% (MLOps)' }
    ],
    technologies: ['PyTorch', 'TensorRT', 'OpenCV', 'Digital Twin TwinX', 'MQTT', 'Docker Edge'],
    githubRepo: 'https://github.com/mohsingitdev',
    hasInteractiveDemo: false
  }
];
