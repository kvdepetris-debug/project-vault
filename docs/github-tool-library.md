# GitHub Tool Library — comparison and future-use register

Updated 2026-10-20. This is a **reference catalog**, not an installation or security endorsement. Names were collected from screenshots and earlier discussion; only some upstream identities were independently checked. No tools have been deployed by this catalog. GitHub stars, free-tier claims, feature claims and project maturity can change. **36 entries** below, including one duplicate/variant watch entry; the earlier 39-project total is not fully reconstructable, so missing items are not invented.

## Decision framework

- **Pilot**: test in a disposable GitHub Actions/cloud environment, with no production secrets.
- **Shortlist**: good fit, pending technical/security review.
- **Evaluate**: investigate upstream, license, maintenance, integration and cost.
- **Alternative**: overlapping tool; do not deploy both by default.
- **Research only / Sandbox only**: no real-money trading or unapproved external actions.
- **Later / Reference / Hold / Verify**: save for future use, not approved for deployment.

## Comparison matrix

| Repository/tool | Category | Decision | Comparative finding |
|---|---|---|---|
| Paperclip | Agent orchestration | Evaluate | Central coordination; compare with LobeHub; verify original repo |
| LibreChat | AI interface | Shortlist | Multi-provider chat; overlaps Open WebUI/LobeHub |
| Open WebUI | AI interface | Alternative | Best for Ollama/local-first; cloud-only preference lowers priority |
| LobeHub / lobe-chat | AI interface and agents | Alternative | UI plus agents; compare against LibreChat before adopting |
| Agency Agents | Agent templates | Shortlist | Agent role templates, not an autonomous runtime |
| OpenHands | Coding agent | Pilot | Build/test code in isolated cloud environment |
| Graft (JCNGROUP/graft) | Code intelligence | Pilot | Readable code context; compare with Codebase Memory |
| Codebase Memory MCP (DeusData) | Code intelligence | Pilot | Structural graph, impact and call queries; overlap with Graft |
| Browser Use | Browser automation | Pilot | Browser tasks with explicit approval and access controls |
| Camofox Browser | Browser automation | Alternative | Compare browser reliability and anti-bot limitations |
| Page Agent | Browser automation | Evaluate | Browser UI automation; overlaps Browser Use |
| Langflow | Visual AI workflows | Evaluate | Compare with existing Dify rather than duplicate it |
| Supabase | Backend | Shortlist | Hosted Postgres, auth and storage; costs/limits apply |
| Coolify | Deployment | Later | Self-hosted PaaS; requires server, not zero hosting cost |
| Maxun | Web extraction/backend | Evaluate | Verify product scope; screenshot scraping claims may be overstated |
| Public APIs (public-apis/public-apis) | API directory | Reference | Discover APIs; each provider has separate terms/limits |
| The Algorithms / Python | Code learning | Reference | Educational implementations, not production dependencies |
| Home Assistant Core | Home automation | Later | Separate home hub; local hardware/server likely required |
| OBS Studio | Video capture | Later | Capture/stream; desktop environment required |
| OpenMontage | Video production | Evaluate | Agentic video editing; verify maturity and resource needs |
| MoneyPrinterTurbo | Content generation | Evaluate | Automated media workflows; review licensing/quality |
| Open Higgsfield AI | Media generation | Evaluate | Verify upstream repository and usage terms |
| Hyperframes | Media creation | Evaluate | Verify upstream repository and actual functionality |
| Watermarks Remover | Image editing | Hold | Avoid stripping third-party attribution; verify permitted uses |
| Fincept Terminal | Financial research | Research only | Not equivalent to Bloomberg data coverage |
| Vibe Trading | Trading agents | Sandbox only | Paper trade; no autonomous live orders |
| AutoHedge | Trading agents | Sandbox only | No autonomous live trades; require manual approval |
| DeepSeek Harness | Agent framework | Evaluate | Verify repository identity and overlap with orchestration |
| Karpathy Skills | Agent skills | Reference | Review skills individually before granting permissions |
| Strix | Security testing | Sandbox only | Authorized repositories/environments only |
| Claude Ads | Marketing | Evaluate | Verify functionality and terms |
| Agentic Inbox | Messaging automation | Evaluate | Approval-gated drafts and inbox actions |
| Meetily | Meeting notes | Evaluate | Check privacy and transcription accuracy |
| AI for Beginners | Learning | Reference | Training material |
| Generative AI for Beginners .NET | Learning | Reference | Training material |
| Open LLM VTuber | Avatar AI | Later | Optional entertainment UI |
| Paperclip (alternate variants) | Agent orchestration | Verify | Avoid similarly named unrelated forks |

## Overlap decisions

1. **Graft vs Codebase Memory MCP**: benchmark both on GamePilot-S24 using identical code navigation, impact analysis and repair tasks; pick the one with higher accuracy and lower maintenance/cost. Graft's documented integration and Codebase Memory's structural graph are complementary but overlapping.
2. **LibreChat vs Open WebUI vs LobeHub**: select one primary interface. Prefer LibreChat for multi-model cloud workflows; evaluate the others only for missing features.
3. **Paperclip vs Agency Agents**: Paperclip is an orchestration candidate; Agency Agents supplies roles. Do not treat them as interchangeable.
4. **Dify vs Langflow**: keep existing Dify work intact; use Langflow only if a needed flow cannot be implemented satisfactorily in Dify.
5. **Browser Use vs Page Agent vs Camofox**: benchmark with the same approved browser tasks; isolate sessions and never give broad credentials by default.
6. **OpenMontage vs MoneyPrinterTurbo vs OBS**: video editing, content generation and recording are different layers, not direct substitutes.
7. **AutoHedge vs Vibe Trading vs Fincept Terminal**: research dashboard versus trading agents; all trading experiments remain paper-only unless separately reviewed and explicitly authorized.
8. **Supabase vs Coolify**: managed backend versus deployment platform; can coexist, but Coolify needs hosting infrastructure.

## Recommended cloud-only adoption order

1. Inventory and license/security verification; do not fork blindly.
2. Pilot Graft and Codebase Memory MCP on a disposable checkout of GamePilot-S24.
3. Pilot OpenHands with tests and human-reviewed pull requests, no automatic merges.
4. Add controlled browser automation only after scoped credentials and approvals are defined.
5. Reuse Dify and existing GitHub Actions before adding orchestration platforms.
6. Keep finance, marketing, video, home and education repositories in their own deferred queues.

## Known upstream references

- https://github.com/JCNGROUP/graft
- https://github.com/DeusData/codebase-memory-mcp
- https://github.com/public-apis/public-apis
- https://github.com/home-assistant/core
- https://github.com/TheAlgorithms/Python
- https://github.com/obsproject/obs-studio
- https://github.com/HKUDS/Vibe-Trading
- https://github.com/The-Swarm-Corporation/AutoHedge
- https://github.com/Fincept-Corporation/FinceptTerminal

For other entries, verify the canonical upstream before downloading, forking, installing or connecting accounts. Do not put credentials in this repository: it is public. This register intentionally stores links and decisions only, not source-code copies or API keys.
