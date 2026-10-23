# watermarks-remover / remove-ai-marks

Source: https://github.com/guillaumemeyer/watermarks-remover
Skill: https://github.com/guillaumemeyer/watermarks-remover/tree/main/skills/remove-ai-marks

Status: Cataloged; NOT installed or enabled. Security review and target host selection required.

Capabilities: inspect/clean invisible Unicode, metadata in documents and images, optional statistical text rewriting. Not guaranteed to remove pixel watermarks or defeat detection.

Current upstream architecture: skill is an HTTP client requiring a separate service. Default local service is http://127.0.0.1:8765. Do not expose it publicly without authentication/TLS. Review scripts, service endpoints, dependencies, file handling and license before enabling. Prefer test files and preserve originals.

Installation targets offered upstream: Codex, Claude Code, Cursor, Cowork. Installation into GitHub alone does not activate a skill in ChatGPT.
