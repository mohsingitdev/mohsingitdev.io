export interface CaseStudy {
  slug: string;
  title: string;
  outcome: string;
  relationshipDisclosure: string; // e.g., "Enterprise Engagement (Anonymized)" or "Reproducible Lab Benchmark"
  date: string;
  roleAndOwnership: string;
  problemAndConstraints: string[];
  architectureAndDecisions: {
    title: string;
    description: string;
    codeSnippet?: {
      language: string;
      caption: string;
      code: string;
    };
  }[];
  evaluationMethod: {
    approach: string;
    metricsTracked: string[];
    benchmarkDataset: string;
  };
  quantitativeResults: {
    metric: string;
    baseline: string;
    achieved: string;
    testConditions: string;
  }[];
  failureModesAndTradeoffs: string[];
  securityAndPrivacy: string[];
  postTestingChanges: string[];
  technologies: string[];
  githubRepo?: string;
  interactiveDemoAnchor?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'production-rag-evaluation',
    title: 'Production RAG Evaluation: Hybrid Retrieval, Reranking, and Groundedness Testing',
    outcome: 'Eliminated ungrounded responses in regulated enterprise documentation down to <0.5% drift while cutting retrieval latency from 1.8s to 320ms.',
    relationshipDisclosure: 'Enterprise Architecture & Evaluation Engagement (Accenture Strategy & Novartis Portfolio Context)',
    date: 'Q3 2026',
    roleAndOwnership: 'Lead AI Platform Architect & FDE. Owned the end-to-end retrieval topology, synthetic regression evaluation suite, and cross-encoder re-ranking gate.',
    problemAndConstraints: [
      'Naive dense cosine similarity search over vector databases repeatedly retrieved semantically adjacent but factually incorrect paragraphs for exact chemical compounds and regulatory identifiers.',
      'Frontier LLMs hallucinated citations when context chunks were arbitrarily truncated at chunk boundaries.',
      'SLA mandated p95 response time under 800ms across 500,000+ indexed documentation pages under regulatory compliance audit.'
    ],
    architectureAndDecisions: [
      {
        title: 'Two-Stage Hybrid Retrieval: Lexical BM25 + Dense Vectors (RRF)',
        description: 'Combined lexical BM25 token precision with dense semantic embeddings (BGE-large / Cohere) via Reciprocal Rank Fusion (k=60), ensuring exact serial numbers and semantic context were jointly captured.',
        codeSnippet: {
          language: 'python',
          caption: 'Reciprocal Rank Fusion (RRF) with Cross-Encoder Gate',
          code: `def reciprocal_rank_fusion(bm25_hits: list[dict], vector_hits: list[dict], k: int = 60) -> list[str]:
    """Combines sparse BM25 and dense embedding candidate pools."""
    rrf_table = defaultdict(float)
    for rank, hit in enumerate(bm25_hits):
        rrf_table[hit["doc_id"]] += 1.0 / (k + rank + 1)
    for rank, hit in enumerate(vector_hits):
        rrf_table[hit["doc_id"]] += 1.0 / (k + rank + 1)
        
    sorted_candidates = sorted(rrf_table.items(), key=lambda x: x[1], reverse=True)
    return [doc_id for doc_id, _ in sorted_candidates[:25]]`
        }
      },
      {
        title: 'Cross-Encoder Re-Ranking & Citation Offset Verification',
        description: 'Passed the top-25 RRF candidates through a BAAI/bge-reranker-large model to prune down to the top-4 most authoritative context windows. Built a deterministic post-generation validation pass matching asserted claims to exact character-offset spans in the source document.'
      }
    ],
    evaluationMethod: {
      approach: 'Constructed an automated golden-set regression pipeline running 1,200 curated domain questions with synthetic negative perturbations.',
      metricsTracked: [
        'Faithfulness / Groundedness (Claim-level attribution)',
        'Context Precision (Relevant chunks in top-k)',
        'Context Recall (Ground truth coverage in retrieved context)',
        'P95 Wall-Clock End-to-End Latency'
      ],
      benchmarkDataset: '1,200 curated compliance queries with verified source document truth spans.'
    },
    quantitativeResults: [
      {
        metric: 'Hallucination / Ungrounded Claim Rate',
        baseline: '14.2% (Naive Vector Search)',
        achieved: '<0.5%',
        testConditions: '1,200 adversarial test queries, temperature=0.0'
      },
      {
        metric: 'Context Recall @ k=5',
        baseline: '68.4%',
        achieved: '94.8%',
        testConditions: '500k indexed pages, Milvus / Qdrant cluster'
      },
      {
        metric: 'P95 Wall-Clock Latency',
        baseline: '1,840ms',
        achieved: '380ms',
        testConditions: 'Dual A10G GPU inference worker, vLLM backend'
      }
    ],
    failureModesAndTradeoffs: [
      'Trade-off: Adding cross-encoder reranking introduced ~45ms of compute overhead, which was amortized by caching top document embeddings in Redis.',
      'Failure mode: Tables spanning multiple PDF page breaks lost row/column semantic headers during naive chunking. Resolved by adding layout-aware PDF bounding table parsers.'
    ],
    securityAndPrivacy: [
      'Document vectors and source text remained completely within customer VPC perimeter.',
      'No customer PII or compliance data logged into third-party commercial LLM training loops.'
    ],
    postTestingChanges: [
      'Migrated from single vector query to hybrid sparse-dense pipeline after finding 22% of product codes failed dense-only retrieval.',
      'Instituted an automated pull-request evaluation gate that blocks prompt changes if faithfulness drops below 99%.'
    ],
    technologies: ['FastAPI', 'Milvus', 'Qdrant', 'Cross-Encoder', 'PyTorch', 'vLLM', 'Redis', 'Docker'],
    githubRepo: 'https://github.com/mohsingitdev/citation-grounded-rag',
    interactiveDemoAnchor: '#interactive-demos'
  },
  {
    slug: 'llm-routing-cost-latency',
    title: 'Designing an LLM Routing Layer for Latency, Cost, and Reliability',
    outcome: 'Cut generative AI inference cloud spend by 72% while guaranteeing <33ms fast-path responses for 80% of routine traffic.',
    relationshipDisclosure: 'High-Concurrency E-Commerce Engineering Engagement (Flipkart Production Context)',
    date: 'Q2 2026',
    roleAndOwnership: 'AI Platform Engineer. Designed the two-tier routing gateway, wall-clock SLA budgets, and asynchronous queue fallback topology.',
    problemAndConstraints: [
      'Directly querying monolithic frontier LLMs (GPT-4 / Claude 3.5) for every customer intent produced 2.2s+ p99 latency spikes and single-point-of-failure rate-limiting during flash sales.',
      'Token consumption was burning tens of thousands of dollars per week on repetitive intent extraction that required zero reasoning.',
      'Strict SLA requirement: Must sustain 10,000+ concurrent requests without degradation.'
    ],
    architectureAndDecisions: [
      {
        title: 'Two-Tier Architecture: Deterministic First, Probabilistic Second',
        description: 'Constructed an edge intent gateway. Tier 1 evaluates incoming requests through regex/Pydantic schemas and a fine-tuned sub-100M SLM classifier in <33ms. Tier 2 routes complex multi-step reasoning to LangGraph workers with strict wall-clock timeout budgets.',
        codeSnippet: {
          language: 'python',
          caption: 'Deterministic Intent Fast-Path with Wall-Clock SLA Budget',
          code: `@app.post("/v1/enterprise/route")
async def route_incoming_intent(req: UserIntentRequest):
    # Tier 1: Fast-Path SLM Classifier (<33ms)
    prediction = await edge_slm_classifier.predict(req.prompt)
    if prediction.confidence >= 0.90:
        return await execute_deterministic_resolution(prediction.intent, req)

    # Tier 2: Frontier LLM Fallback with Strict 650ms Wall-Clock Budget
    try:
        async with asyncio.timeout(0.650):
            return await frontier_orchestrator.invoke(req)
    except asyncio.TimeoutError:
        logger.warning(f"Wall-clock deadline exceeded for {req.request_id}")
        return await cached_degraded_fallback(req)`
        }
      }
    ],
    evaluationMethod: {
      approach: 'Locust load-testing against synthetic traffic profiles simulating Black Friday / Flash Sale spikes up to 25,000 requests/second.',
      metricsTracked: [
        'P50, P90, P99 Latency curves',
        'Cost per 10,000 routed queries',
        'Intent routing classification accuracy (Macro F1)',
        'Gateway circuit breaker trip frequency'
      ],
      benchmarkDataset: '100,000 real-world customer query traces categorized across 42 transactional intents.'
    },
    quantitativeResults: [
      {
        metric: 'Cloud Inference Cost',
        baseline: '$1.42 per 100 queries',
        achieved: '$0.39 per 100 queries (-72%)',
        testConditions: 'Workload mix: 78% routine intent, 22% deep reasoning'
      },
      {
        metric: 'P99 Latency (Routine Fast-Path)',
        baseline: '2,450ms',
        achieved: '32ms',
        testConditions: 'vLLM on AWS EKS c6i.2xlarge nodes'
      },
      {
        metric: 'Peak Concurrency Availability',
        baseline: '94.2% (Rate limit errors)',
        achieved: '99.98%',
        testConditions: '15,000 concurrent RPS burst test'
      }
    ],
    failureModesAndTradeoffs: [
      'Trade-off: Fast-path SLM requires periodic retraining on newly introduced product intents.',
      'Failure mode: Out-of-distribution queries with misleading high confidence. Mitigated by setting entropy bounds on classifier logits.'
    ],
    securityAndPrivacy: [
      'All Tier-1 classifier instances run fully localized on AWS EKS worker nodes with zero outbound public API calls.',
      'Strict schema validation sanitizes prompt injection attempts before reaching LLM workers.'
    ],
    postTestingChanges: [
      'Added circuit-breaking Redis semantic cache that absorbs identical high-frequency queries during marketing pushes.',
      'Implemented automated Prometheus alerts tracking confidence score distribution drift.'
    ],
    technologies: ['FastAPI', 'LangGraph', 'AWS EKS', 'vLLM', 'Redis', 'Prometheus', 'Pydantic v2'],
    githubRepo: 'https://github.com/mohsingitdev/enterprise-agentic-router',
    interactiveDemoAnchor: '#interactive-demos'
  },
  {
    slug: 'voice-ai-crm-integration',
    title: 'Voice AI and CRM Integration: Architecture, Failure Modes, and Handoffs',
    outcome: 'Engineered sub-700ms voice agent turns with deterministic CRM session syncing, 0% lost caller context, and graceful escalation to human agents.',
    relationshipDisclosure: 'Contact Center Conversational AI Architecture Engagement',
    date: 'Q1 2026',
    roleAndOwnership: 'Forward-Deployed AI Engineer. Architected audio streaming pipelines, WebSocket state management, CRM read/write boundaries, and agent handoff protocol.',
    problemAndConstraints: [
      'Standard conversational AI systems suffer 2.5s+ latency over telephony, causing unnatural conversational awkwardness and caller interruptions.',
      'Voice bots frequently hallucinated customer records or failed mid-call without syncing session context back to Salesforce / Zendesk CRM.',
      'Hard SLA: Audio packet round-trip time must remain under 800ms for natural conversational cadence.'
    ],
    architectureAndDecisions: [
      {
        title: 'Full-Duplex WebSocket Streaming & Speculative Tool Execution',
        description: 'Engineered a low-latency pipeline using Deepgram Nova-2 streaming STT, an optimized vLLM streaming generator, and Cartesia/ElevenLabs streaming TTS connected over bi-directional WebSockets. Integrated speculative CRM lookups based on partial speech transcripts.',
        codeSnippet: {
          language: 'python',
          caption: 'Bi-Directional Telephony Voice Turn Pipeline',
          code: `async def handle_telephony_audio_stream(websocket: WebSocket, session_id: str):
    """Processes bidirectional telephony audio with barge-in interruption handling."""
    session_state = await crm_client.fetch_caller_state(session_id)
    
    async for audio_chunk in websocket.iter_bytes():
        transcript_event = await stt_stream.process_chunk(audio_chunk)
        
        # User interruption detected - flush current TTS playback buffer
        if transcript_event.is_user_speech_detected:
            await tts_stream.interrupt_playback()
            
        if transcript_event.is_final:
            async for audio_reply in llm_to_tts_pipeline(transcript_event.text, session_state):
                await websocket.send_bytes(audio_reply)`
        }
      }
    ],
    evaluationMethod: {
      approach: 'Automated telephony simulator running 500 dial-in scenarios measuring speech barge-in responsiveness, packet jitter, and CRM write accuracy.',
      metricsTracked: [
        'Time-to-First-Audio (TTFA)',
        'CRM Transaction Consistency (ACID writes)',
        'Barge-in Interruption Latency',
        'Human Escalation Success Rate'
      ],
      benchmarkDataset: '500 recorded customer telephony audio sessions across high-noise and mobile line conditions.'
    },
    quantitativeResults: [
      {
        metric: 'Time-to-First-Audio (TTFA)',
        baseline: '2,650ms (REST API pipeline)',
        achieved: '680ms',
        testConditions: 'Twilio Media Streams over WebSocket, US-East server'
      },
      {
        metric: 'CRM State Sync Accuracy',
        baseline: '86.4% (Asynchronous post-call)',
        achieved: '99.7% (Transactional checkpoints)',
        testConditions: 'Salesforce REST & GraphQL sync API'
      },
      {
        metric: 'Unassisted Task Completion',
        baseline: '34.2%',
        achieved: '71.8%',
        testConditions: 'Tier-1 billing & appointment rescheduling calls'
      }
    ],
    failureModesAndTradeoffs: [
      'Trade-off: Streaming STT can produce partial homophone misinterpretations on accented speech. Addressed by running secondary validation on entity extraction.',
      'Failure mode: Audio packet drop on 3G cellular lines. Built adaptive jitter buffering with synthetic silence insertion.'
    ],
    securityAndPrivacy: [
      'Telephony audio streams encrypted via TLS 1.3 in-flight and ephemeral in memory.',
      'Automatic dual-tone multi-frequency (DTMF) masking for credit card and social security inputs with zero audio recording.'
    ],
    postTestingChanges: [
      'Implemented deterministic sentiment and frustration detectors that immediately trigger warm human handoffs with full transcript dossiers before caller churn.',
      'Added automated post-call synthetic QA that flags discrepancies between conversational promises and CRM database writes.'
    ],
    technologies: ['WebSockets', 'Deepgram STT', 'vLLM', 'Cartesia TTS', 'Twilio Media Streams', 'FastAPI', 'Redis'],
    githubRepo: 'https://github.com/mohsingitdev',
    interactiveDemoAnchor: '#interactive-demos'
  }
];
