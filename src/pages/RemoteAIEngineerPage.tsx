import React from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Briefcase, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  FileText, 
  Calendar, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Card3D } from '../components/common/Card3D';

interface RemoteAIEngineerPageProps {
  onRequestResume: () => void;
  onBookCall: () => void;
}

export const RemoteAIEngineerPage: React.FC<RemoteAIEngineerPageProps> = ({ 
  onRequestResume, 
  onBookCall 
}) => {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="hover:text-terracotta transition-colors"
        >
          home
        </button>
        <span>/</span>
        <span className="text-terracotta">remote-ai-engineer</span>
      </div>

      {/* Hero Header */}
      <div className="mb-14 border-b border-white/10 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE FOR REMOTE US / UK ROLES &amp; CONTRACTS
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 font-sans">
          AI Platform Engineer &amp; <br className="hidden sm:block" />
          <span className="gradient-text">Forward-Deployed AI Engineer</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
          Bridging the gap between frontier research prototypes and mission-critical production systems. 
          Specialized in high-concurrency model routing, hybrid RAG evaluation gates, low-latency inference on AWS &amp; GCP, and stakeholder delivery.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onRequestResume}
            className="px-6 py-3 rounded-full bg-terracotta hover:bg-[#c4684a] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-terracotta/20 flex items-center gap-2 apple-spring hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Request Unredacted Resume
          </button>
          <button
            onClick={onBookCall}
            className="px-6 py-3 rounded-full apple-glass border border-white/15 hover:border-terracotta/50 text-slate-200 font-medium text-sm transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-terracotta" />
            Schedule 20-Min Qualification Sync
          </button>
          <button
            onClick={() => navigate('/case-studies')}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-sm transition-all duration-200 flex items-center gap-2"
          >
            Inspect Production Case Studies
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Target Roles & Placement Fit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card3D className="p-8 apple-glass rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-terracotta/15 border border-terracotta/30 text-terracotta">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Target Roles &amp; Fit</h2>
              <p className="text-xs font-mono text-slate-400">Senior Individual Contributor &amp; Lead Positions</p>
            </div>
          </div>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">AI Platform Engineer:</strong> Building model serving clusters (vLLM, Ray Serve), CI/CD prompt evaluation gates, latency telemetry, and model routers.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Forward-Deployed AI Engineer (FDE):</strong> Embedding directly with enterprise clients, translating high-friction business problems into robust AI architectures, and driving adoption.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Applied AI / ML Systems Engineer:</strong> Productionizing RAG pipelines, fine-tuning task-specific SLMs (LoRA/SFT), and enforcing strict schema validation.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Senior Data Scientist / ML Platform:</strong> High-throughput classical ML pipelines (XGBoost, Isolation Forests), streaming anomaly detection, and MLflow governance.
              </div>
            </li>
          </ul>
        </Card3D>

        <Card3D className="p-8 apple-glass rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Remote Collaboration Model</h2>
              <p className="text-xs font-mono text-slate-400">Engineered for US &amp; UK Distributed Teams</p>
            </div>
          </div>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Timezone Synchronous Overlap:</strong> Dedicated 4-5 hour daily synchronous working window covering London (GMT/BST) and New York (EST).
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Terminal className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Asynchronous Execution Culture:</strong> Comprehensive Architectural Decision Records (ADRs), self-documenting pull requests with automated test vectors, and clear Loom video handoffs.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Security &amp; Compliance Standards:</strong> Strict adherence to VPC data segregation, confidential code isolation, NDA compliance, and zero PII leakage to third-party APIs.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Turnkey Hardware &amp; Tooling:</strong> High-bandwidth fiber connection, dedicated secure workstations, and active familiarity with enterprise stacks (AWS, GCP, Linear, GitHub, Datadog).
              </div>
            </li>
          </ul>
        </Card3D>
      </div>

      {/* Enterprise Pedigree Proof Grid */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-white mb-2">Verified Enterprise Track Record</h2>
        <p className="text-xs font-mono text-slate-400 mb-6">Deploying mission-critical AI systems at global enterprise scale</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 apple-glass rounded-xl border border-white/10 hover:border-terracotta/40 transition-colors">
            <div className="text-base font-bold text-white mb-1">Flipkart</div>
            <div className="text-xs font-mono text-terracotta mb-2">E-Commerce Concurrency</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed two-tier model routing and fast-path intent caching (&lt;33ms) sustaining peak flash sales and cutting inference bills by 72%.
            </p>
          </div>

          <div className="p-5 apple-glass rounded-xl border border-white/10 hover:border-terracotta/40 transition-colors">
            <div className="text-base font-bold text-white mb-1">Novartis</div>
            <div className="text-xs font-mono text-terracotta mb-2">Regulated Life Sciences</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Architected hybrid RAG (BM25 + Dense RRF) with cross-encoder reranking and citation attribution over 500k+ pages of compliance clinical data.
            </p>
          </div>

          <div className="p-5 apple-glass rounded-xl border border-white/10 hover:border-terracotta/40 transition-colors">
            <div className="text-base font-bold text-white mb-1">Accenture Strategy</div>
            <div className="text-xs font-mono text-terracotta mb-2">Enterprise Advisory</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Embedded as Forward-Deployed AI Architect guiding C-level technical teams on production LLM readiness, evaluation gates, and FinOps budgeting.
            </p>
          </div>

          <div className="p-5 apple-glass rounded-xl border border-white/10 hover:border-terracotta/40 transition-colors">
            <div className="text-base font-bold text-white mb-1">Ericsson</div>
            <div className="text-xs font-mono text-terracotta mb-2">High-Throughput Telco</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered streaming anomaly detection pipeline processing 50k+ events/second using Kafka, XGBoost, and Isolation Forests with sub-3min MTTD.
            </p>
          </div>
        </div>
      </div>

      {/* Production Skills Matrix */}
      <div className="p-8 apple-glass rounded-2xl border border-white/10 mb-16">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-terracotta" />
          Production Engineering Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300 font-mono">
          <div>
            <span className="text-white font-bold block mb-2 font-sans text-sm">Generative AI &amp; LLMOps</span>
            <ul className="space-y-1.5 text-slate-400">
              <li>• LangGraph &amp; Multi-Agent State Handoffs</li>
              <li>• vLLM &amp; Ray Serve Inference Clusters</li>
              <li>• Automated CI/CD Regression Evaluation Gates</li>
              <li>• Pydantic v2 Strict Schema Enforcement</li>
              <li>• Model Cascading &amp; Fast-Path Routing</li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-2 font-sans text-sm">Information Retrieval &amp; RAG</span>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Reciprocal Rank Fusion (BM25 + Dense)</li>
              <li>• Cross-Encoder Reranking (BGE/Cohere)</li>
              <li>• Sentence-Level Citation Grounding</li>
              <li>• Vector DBs: Milvus, Qdrant, Pinecone</li>
              <li>• Layout-Aware Multi-Modal Document Parsing</li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold block mb-2 font-sans text-sm">Infrastructure &amp; Cloud</span>
            <ul className="space-y-1.5 text-slate-400">
              <li>• AWS (EKS, CloudWatch, S3, IAM)</li>
              <li>• GCP (GKE, Vertex AI, Cloud Run)</li>
              <li>• Docker &amp; Kubernetes Orchestration</li>
              <li>• Redis Caching &amp; Kafka Event Streams</li>
              <li>• GPU FinOps Cost Profiling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Action Strip */}
      <div className="p-8 rounded-2xl border border-terracotta/30 bg-terracotta/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Ready to discuss an AI Platform or FDE role?</h3>
          <p className="text-xs text-slate-300">Fast review loop. Direct communication with technical leadership.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onRequestResume}
            className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-[#c4684a] text-white text-xs font-mono font-medium transition-all shadow-md"
          >
            Request Full CV
          </button>
          <button
            onClick={onBookCall}
            className="px-5 py-2.5 rounded-full apple-glass border border-white/20 text-slate-200 text-xs font-mono font-medium hover:border-terracotta transition-all"
          >
            Book Intro Call
          </button>
        </div>
      </div>
    </div>
  );
};
