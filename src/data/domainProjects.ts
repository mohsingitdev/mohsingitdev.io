import { DomainProject } from '../types';

export const DOMAIN_PROJECTS: DomainProject[] = [
  {
    id: 'gemma-fine-tuned-agent-fleet',
    domain: 'Enterprise AI Platform & Multi-Agent Systems',
    title: 'Domain-Adapted Gemma 8B/27B Multi-Agent Fleet on AWS & GCP',
    tagline: 'Hugging Face SFT + QLoRA fine-tuning for deterministic tool-calling agents with vLLM serving on AWS EKS & GCP GKE',
    enterpriseContext: 'Engineered for privacy-critical enterprise environments requiring in-VPC task execution without external API token leakage.',
    challenge: 'General-purpose frontier models leak private schema payloads and suffer high token inference costs, while vanilla open-source base models fail on strict structured JSON tool-calling and autonomous multi-agent state handoffs.',
    architectureSolution: 'Constructed an end-to-end Hugging Face fine-tuning pipeline utilizing PyTorch, DeepSpeed, and QLoRA on Google Gemma 8B & 27B checkpoints. Curated synthetic domain-specific trajectory datasets with strict Pydantic v2 schemas for supervised fine-tuning (SFT). Deployed containerized vLLM worker pools on AWS EKS (c6i/g5.4xlarge) and GCP GKE with Ray Serve, auto-scaling up to 100k+ req/sec with sub-65ms token generation.',
    metrics: [
      { label: 'Tool-Calling Accuracy', value: '98.8%' },
      { label: 'p99 Serving Latency', value: '<65ms' },
      { label: 'Cloud FinOps Savings', value: '78%' },
      { label: 'VPC Privacy Conformance', value: '100%' }
    ],
    technologies: ['Hugging Face', 'Gemma 8B/27B', 'PyTorch / LoRA', 'AWS EKS', 'GCP GKE', 'vLLM', 'Ray Serve'],
    githubRepo: 'https://github.com/mohsingitdev',
    hasInteractiveDemo: true
  },
  {
    id: 'agentic-router',
    domain: 'E-Commerce & High-Concurrency Systems',
    title: 'Enterprise Multi-Agent Routing & Fallback Gateway',
    tagline: 'Deterministic fast-path routing + SLM intent classification for sub-100ms enterprise SLA',
    enterpriseContext: 'Inspired by high-concurrency production platforms like Flipkart, handling tens of thousands of complex real-time user intents.',
    challenge: 'Directly invoking monolithic LLMs (e.g., GPT-4 or Claude 3.5) for every customer inquiry results in prohibitive API costs, slow 2-3s p99 latency, and single-point-of-failure rate limit outages during peak flash sales.',
    architectureSolution: 'Engineered a two-tier gateway: 80% of routine intents are resolved via deterministic regex/Pydantic schemas and fine-tuned sub-100M SLMs (e.g. FastText/BERT routing) in <45ms. Complex multi-step reasoning routes asynchronously to agentic LangGraph workflows on AWS EKS with wall-clock retry budgets and automated failovers.',
    metrics: [
      { label: 'Inference Cost Reduction', value: '72%' },
      { label: 'p99 Routing Latency', value: '<60ms' },
      { label: 'Peak Load Availability', value: '99.98%' },
      { label: 'Daily Query Throughput', value: '1.2M+' }
    ],
    technologies: ['FastAPI', 'LangGraph', 'vLLM', 'AWS EKS', 'Redis Cache', 'Pydantic v2', 'Docker'],
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
    architectureSolution: 'Architected a multi-stage retrieval pipeline deployed on GCP Vertex AI & Cloud Run: Reciprocal Rank Fusion combining BM25 keyword precision with dense embeddings (Cohere/BGE), followed by cross-encoder reranking. Integrated a post-generation verification loop that matches every generated sentence back to explicit bounding character offsets in the source PDF.',
    metrics: [
      { label: 'Discovery Time', value: 'Hours -> Mins' },
      { label: 'Citation Attribution', value: '100% Grounded' },
      { label: 'Hallucination Mitigation', value: '94% Reduction' },
      { label: 'Corpus Volume Indexed', value: '500k+ Pages' }
    ],
    technologies: ['Milvus / Qdrant', 'LangChain', 'Cross-Encoder', 'GCP Vertex AI', 'SentenceTransformers', 'BM25', 'FastAPI'],
    githubRepo: 'https://github.com/mohsingitdev/citation-grounded-rag',
    hasInteractiveDemo: true
  },
  {
    id: 'telco-streaming-anomaly',
    domain: 'Telecommunications & Cyber Security',
    title: 'Streaming Anomaly Detection & Classical ML Feature Pipeline',
    tagline: 'High-throughput unsupervised & gradient-boosted ML (XGBoost, Isolation Forests) with LangChain incident resolver',
    enterpriseContext: 'Developed based on engineering engagements at Ericsson and Verizon, processing millions of network telemetry logs in near real-time.',
    challenge: 'Security teams were drowned in alerts across heterogeneous network nodes, taking hours of manual log correlation to isolate distributed denial and intrusion anomalies.',
    architectureSolution: 'Engineered a full-stack Data Science & Classical ML pipeline: statistical feature engineering, Isolation Forests, and XGBoost gradient-boosted decision trees for continuous anomaly classification on 50k+ events/sec streaming Kafka data. Paired with automated LangChain runbook resolution on AWS EKS and GCP BigQuery.',
    metrics: [
      { label: 'Alert Triage Acceleration', value: '65%' },
      { label: 'False Positive Reduction', value: '48%' },
      { label: 'Streaming Processing Rate', value: '50k eps' },
      { label: 'Mean Time to Detect (MTTD)', value: '<3 mins' }
    ],
    technologies: ['Traditional ML', 'XGBoost', 'Isolation Forests', 'Scikit-Learn', 'Kafka', 'PyTorch', 'AWS EKS', 'MLflow'],
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
