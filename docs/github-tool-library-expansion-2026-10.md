# GitHub Tool Library — Expansion Batch 1

Updated 2026-10-20. **19 additional public repositories verified by connected GitHub metadata**. This file extends `docs/github-tool-library.md` without modifying its original decisions. Entries are **bookmarks and evaluation candidates**, not installed dependencies or endorsements. Stars and licensing were intentionally omitted pending individual reviews.

| Verified repository | Area | Priority | Intended use and comparison |
|---|---|---|---|
| [docling-project/docling](https://github.com/docling-project/docling) | Engineering documents | High | Extract structured PDFs, tables, manuals and drawings metadata; benchmark on PPG technical files |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | Document ingestion | High | Lightweight Office/PDF to Markdown conversion; compare against Docling for table fidelity |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | App testing | High | Browser-based regression tests for Project Vault, Thornhush and web dashboards |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | Business automation | High | Visual automations for store, project notifications and approvals; compare n8n |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | Business automation | High | Broad integrations and flexible workflows; fair-code licensing, self-host maintenance |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | AI observability | High | Trace Dify/agent requests, prompt regressions and costs; evaluate privacy |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Knowledge retrieval | High | Vector search for engineering knowledge; benchmark against Supabase pgvector before adding infrastructure |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Knowledge retrieval | High | Index and retrieve engineering documents; complementary to Docling |
| [continuedev/continue](https://github.com/continuedev/continue) | AI coding | High | Repository-aware coding and agent workflows; compare with OpenHands |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | AI coding | Medium | Git-aware coding assistant; alternative to Continue/OpenHands |
| [OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator) | API integration | High | Generate typed SDKs for app and vendor integrations |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | Engineering diagrams | High | Version-controlled flowcharts, process diagrams and software architecture |
| [getsentry/sentry](https://github.com/getsentry/sentry) | Application monitoring | High | Crash/error monitoring for GamePilot and online apps; hosted tiers may cost |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | Agent framework | Medium | Typed AI agent building; avoid stacking frameworks |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Agent orchestration | Medium | Stateful agents and approval steps; compare with Paperclip/Dify |
| [browserbase/stagehand](https://github.com/browserbase/stagehand) | Browser automation | Medium | Structured browser agents; compare Browser Use and Playwright |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Reference library | Reference | Example AI agents and RAG app patterns |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Reference library | Reference | Discover MCP connectors; vet permissions before use |
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | Training | Reference | Structured agent-building lessons and examples |

## Adoption plan

**Wave 1 (highest immediate value)**: Docling/MarkItDown document extraction benchmark; Playwright MCP test automation; Mermaid diagrams; Sentry monitoring. Use non-confidential sample documents and disposable test credentials.

**Wave 2 (workflow and knowledge)**: Compare Activepieces vs n8n against existing Dify workflows; benchmark Qdrant vs existing Supabase/pgvector before choosing; add Langfuse only with approved data retention and redaction.

**Wave 3 (coding and agents)**: Compare Continue/Aider/OpenHands; evaluate LangGraph and PydanticAI only if existing orchestration cannot satisfy requirements. Stagehand and Playwright MCP should be benchmarked against Browser Use.

## Security and cost gates

- Verify license, recent maintenance, release provenance, CVEs, and supply-chain dependencies before installation.
- Never paste production PPG or personal documents into external services without authorization and appropriate data controls.
- Use branch protection, isolated CI, least-privilege credentials, and human approval for writes or spending.
- Open source does not mean zero hosting, API, storage or operational costs.
- Keep all trading-related tools paper-only and separately approved.

## Project mapping

- **Engineering / Dify**: Docling, MarkItDown, LlamaIndex, Qdrant, Mermaid, Langfuse.
- **GamePilot S24 / REA**: Playwright MCP (web only), Continue, Aider, Sentry; Android device tests need different tooling.
- **Thornhush / Printify / Shopify**: Activepieces or n8n, OpenAPI Generator, Sentry.
- **Project Vault**: Playwright MCP, Mermaid, Activepieces, Sentry.

## Backlog

Before any integration, open an issue or branch with exact project scope, permissions, tests, expected cost, rollback and success criteria. No software was installed as part of this library update.
