// Reference architectures. Patterns come from confidential client work;
// client figures are confidential, so this file contains no client metrics. Add numbers only
// when they come from a public reference build you can share.

export interface CaseStudy {
  slug: string;
  title: string;
  outcome: string;
  relationshipDisclosure: string;
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
  // Qualitative before/after: what is measured, the usual starting point, the design change, and how it is tested.
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
    title: 'Production RAG: hybrid retrieval, reranking and groundedness testing',
    outcome:
      'How I build retrieval systems for regulated documents, where every answer must point to its source and unsupported claims are refused.',
    relationshipDisclosure:
      'Reference architecture. The pattern comes from research-knowledge work for global pharma and research clients, where document discovery went from hours to minutes. Client figures are confidential and not shown',
    date: '2026',
    roleAndOwnership:
      'Designed the retrieval pipeline, the evaluation set and the guardrails, and moved the system from prototype to containerized production services.',
    problemAndConstraints: [
      'Dense-only vector search returns passages that sound right but miss exact identifiers such as compound names, codes and regulation numbers.',
      'When context is cut at arbitrary chunk boundaries, models invent citations.',
      'Answers in regulated settings must be auditable, so each claim needs a traceable source.',
    ],
    architectureAndDecisions: [
      {
        title: 'Hybrid retrieval: BM25 and dense vectors with rank fusion',
        description:
          'Lexical search catches exact terms and dense embeddings catch meaning. Reciprocal rank fusion merges both candidate lists before reranking.',
        codeSnippet: {
          language: 'python',
          caption: 'Reciprocal rank fusion (illustrative)',
          code: `def reciprocal_rank_fusion(bm25_hits: list[dict], vector_hits: list[dict], k: int = 60) -> list[str]:
    """Merge sparse and dense candidate lists."""
    scores = defaultdict(float)
    for rank, hit in enumerate(bm25_hits):
        scores[hit["doc_id"]] += 1.0 / (k + rank + 1)
    for rank, hit in enumerate(vector_hits):
        scores[hit["doc_id"]] += 1.0 / (k + rank + 1)
    ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    return [doc_id for doc_id, _ in ranked[:25]]`,
        },
      },
      {
        title: 'Reranking and citation verification',
        description:
          'A cross-encoder reranks the fused candidates down to a few passages. After generation, a check matches each sentence to a span in the source and drops or flags anything unsupported.',
      },
    ],
    evaluationMethod: {
      approach:
        'A golden set of real user questions with known source passages, plus adversarial variants, run as a regression gate on every change.',
      metricsTracked: [
        'Groundedness: share of claims supported by a cited passage',
        'Context precision and recall in the top results',
        'End-to-end latency at p95',
        'Cost per answered question',
      ],
      benchmarkDataset: 'Built with the client from their own documents and questions.',
    },
    quantitativeResults: [
      {
        metric: 'Ungrounded claims',
        baseline: 'Common with dense-only search and loose prompts',
        achieved: 'Hybrid retrieval, reranking and a per-sentence citation check',
        testConditions: 'Golden set at temperature 0, run on every release',
      },
      {
        metric: 'Exact-term recall',
        baseline: 'Weak for codes and identifiers',
        achieved: 'BM25 added alongside dense vectors',
        testConditions: 'Questions that hinge on exact identifiers',
      },
      {
        metric: 'Time to find evidence',
        baseline: 'Manual search across many documents',
        achieved: 'Cited answers in one step',
        testConditions: 'Measured with the client team during rollout',
      },
    ],
    failureModesAndTradeoffs: [
      'Reranking adds compute per query. Caching frequent queries and limiting candidate count keeps latency in budget.',
      'Tables that span PDF pages lose their headers under naive chunking. Layout-aware parsing fixes it.',
    ],
    securityAndPrivacy: [
      'Documents and vectors stay inside the client cloud boundary.',
      'No client data is used to train third-party models.',
    ],
    postTestingChanges: [
      'Moved from dense-only to hybrid retrieval after exact-term questions failed.',
      'Added an evaluation gate that blocks prompt or model changes when groundedness drops.',
    ],
    technologies: ['FastAPI', 'Milvus', 'Qdrant', 'Cross-encoder', 'PyTorch', 'Docker'],
    githubRepo: 'https://github.com/mohsingitdev/citation-grounded-rag',
  },
  {
    slug: 'llm-routing-cost-latency',
    title: 'An LLM routing layer for latency, cost and reliability',
    outcome:
      'How I keep routine requests off large models, send hard ones to the right path, and stay stable at peak load.',
    relationshipDisclosure:
      'Reference architecture. The pattern comes from a multi-agent platform for a large e-commerce marketplace, where manual review workflows were replaced by automated synthesis. Client figures are confidential and not shown',
    date: '2026',
    roleAndOwnership:
      'Designed deterministic and LLM-based routing, confidence scoring, fallbacks and retry budgets, and owned staged dev-to-prod releases.',
    problemAndConstraints: [
      'Sending every request to a frontier model makes latency and cost unpredictable and creates a single point of failure under rate limits.',
      'Much of the traffic is routine and needs no reasoning at all.',
      'Peak events need stable behaviour, not best-effort retries.',
    ],
    architectureAndDecisions: [
      {
        title: 'Deterministic first, probabilistic second',
        description:
          'Rules, schemas and a small classifier handle known intents. Only uncertain or complex requests reach agent workflows, each with a strict time budget and a fallback.',
        codeSnippet: {
          language: 'python',
          caption: 'Fast path with a wall-clock budget (illustrative)',
          code: `@app.post("/v1/route")
async def route(req: IntentRequest):
    pred = await fast_classifier.predict(req.text)
    if pred.confidence >= THRESHOLD:
        return await resolve_deterministic(pred.intent, req)

    try:
        async with asyncio.timeout(BUDGET_SECONDS):
            return await agent_orchestrator.invoke(req)
    except asyncio.TimeoutError:
        logger.warning("budget exceeded", extra={"request_id": req.id})
        return await degraded_fallback(req)`,
        },
      },
      {
        title: 'Per-field confidence and automated fallbacks',
        description:
          'Each extracted field carries a confidence score. Low-confidence fields fall back or go to review instead of failing the whole response.',
      },
    ],
    evaluationMethod: {
      approach: 'Load tests on synthetic traffic shaped like the real mix, plus a labelled set for routing accuracy.',
      metricsTracked: [
        'p50, p90 and p99 latency per route',
        'Cost per thousand requests',
        'Routing accuracy',
        'Fallback and circuit-breaker rates',
      ],
      benchmarkDataset: 'Built from anonymized request patterns agreed with the client.',
    },
    quantitativeResults: [
      {
        metric: 'Cost and latency',
        baseline: 'Every request hits a large model',
        achieved: 'Routine intents resolved by rules and a small model',
        testConditions: 'Load test on the real traffic mix',
      },
      {
        metric: 'Peak-load stability',
        baseline: 'Rate limits cascade into errors',
        achieved: 'Time budgets, retries with limits and degraded fallbacks',
        testConditions: 'Burst tests above expected peak',
      },
      {
        metric: 'Manual review',
        baseline: 'People review outputs by hand',
        achieved: 'Automated synthesis with confidence-based escalation',
        testConditions: 'Measured with the business team after go-live',
      },
    ],
    failureModesAndTradeoffs: [
      'The small classifier needs retraining when new intents appear.',
      'Out-of-distribution requests can look confident. Entropy limits on classifier outputs catch most of them.',
    ],
    securityAndPrivacy: [
      'Fast-path models run inside the client cloud with no external API calls.',
      'Schema validation rejects malformed or injected input before it reaches an LLM.',
    ],
    postTestingChanges: [
      'Added a semantic cache for repeated high-frequency requests.',
      'Added alerts on confidence-score drift.',
    ],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'vLLM', 'Redis', 'Pydantic'],
    githubRepo: 'https://github.com/mohsingitdev/enterprise-agentic-router',
  },
];
