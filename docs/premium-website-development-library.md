# Premium Website Development Library

Updated 2026-10-20. 39 distinct additional public GitHub repositories verified through connected GitHub metadata. Reference-only: no installation, no forks, no automatic code execution. Repository availability does not establish security, licensing suitability, compatibility or production readiness. Some are alternatives, not additive dependencies.

## Recommended default architecture

Next.js + TypeScript + Tailwind CSS + shadcn/ui + Radix UI + Motion + Lucide. Add Payload CMS for editorial sites, Shopify storefront integration for Thornhush, Supabase for existing Project Vault features, and Playwright/Vitest/Storybook for testing. Choose analytics, auth and commerce alternatives **per project**, not all at once.

## Core framework and design

| Verified GitHub repository | Role |
|---|---|
| [vercel/next.js](https://github.com/vercel/next.js) | Default React website framework |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | Customizable UI components |
| [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | Utility CSS and design tokens |
| [motiondivision/motion](https://github.com/motiondivision/motion) | Animation and interaction |
| [radix-ui/primitives](https://github.com/radix-ui/primitives) | Accessible UI behavior |
| [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | Consistent icons |
| [withastro/astro](https://github.com/withastro/astro) | Alternative for content-heavy static sites |
| [chakra-ui/ark](https://github.com/chakra-ui/ark) | Headless UI alternative |
| [floating-ui/floating-ui](https://github.com/floating-ui/floating-ui) | Popovers/tooltips positioning |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | Premium animated components |
| [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts) | Additional UI interaction patterns |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | Animation examples and primitives |

## Content and commerce

| Verified GitHub repository | Role |
|---|---|
| [payloadcms/payload](https://github.com/payloadcms/payload) | Next.js CMS; preferred for editorial sites |
| [directus/directus](https://github.com/directus/directus) | Data-first CMS alternative |
| [strapi/strapi](https://github.com/strapi/strapi) | Headless CMS alternative |
| [vercel/commerce](https://github.com/vercel/commerce) | Commerce storefront reference; evaluate Shopify integration |
| [medusajs/medusa](https://github.com/medusajs/medusa) | Self-hosted commerce backend alternative |
| [saleor/saleor](https://github.com/saleor/saleor) | GraphQL commerce backend alternative |
| [resend/react-email](https://github.com/resend/react-email) | Transactional email templates |

## Application features

| Verified GitHub repository | Role |
|---|---|
| [better-auth/better-auth](https://github.com/better-auth/better-auth) | Authentication candidate |
| [nextauthjs/next-auth](https://github.com/nextauthjs/next-auth) | Authentication alternative |
| [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form) | Form state and validation integration |
| [colinhacks/zod](https://github.com/colinhacks/zod) | Runtime data validation |
| [TanStack/query](https://github.com/TanStack/query) | Server-state fetching and caching |
| [TanStack/table](https://github.com/TanStack/table) | Complex data tables |
| [vercel/ai](https://github.com/vercel/ai) | Streaming AI UI and model integration |
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | Interactive 3D experiences |
| [pmndrs/drei](https://github.com/pmndrs/drei) | 3D helper components |
| [calcom/cal.com](https://github.com/calcom/cal.com) | Scheduling integration reference |

## Quality and operations

| Verified GitHub repository | Role |
|---|---|
| [storybookjs/storybook](https://github.com/storybookjs/storybook) | Component documentation and visual review |
| [vitest-dev/vitest](https://github.com/vitest-dev/vitest) | Unit and integration tests |
| [microsoft/playwright](https://github.com/microsoft/playwright) | End-to-end browser tests |
| [vercel/turborepo](https://github.com/vercel/turborepo) | Multi-site monorepo builds |
| [plausible/analytics](https://github.com/plausible/analytics) | Privacy-focused analytics candidate |
| [umami-software/umami](https://github.com/umami-software/umami) | Self-hosted analytics alternative |
| [formbricks/formbricks](https://github.com/formbricks/formbricks) | User surveys and feedback |
| [t3-oss/create-t3-app](https://github.com/t3-oss/create-t3-app) | TypeScript app starter reference |
| [vercel/next-forge](https://github.com/vercel/next-forge) | SaaS starter reference |
| [BuilderIO/mitosis](https://github.com/BuilderIO/mitosis) | Cross-framework component tooling |

## Reuse and selection rules

- **Premium appearance**: define typography, spacing, color tokens, animation restraint, image direction and mobile layouts before adding components. Prefer shadcn/ui plus selective Magic UI and Motion rather than mixing multiple full component libraries.
- **Ecommerce**: for Thornhush, retain Shopify as commerce source of truth. Vercel Commerce is a reference storefront; Medusa and Saleor are alternatives, not additions to the existing stack.
- **CMS**: Payload for Next.js editorial experiences; Directus/Strapi only when their data model or editor is preferable.
- **Authentication**: select one supported auth system per site; don't layer Better Auth and NextAuth automatically. Keep Project Vault's existing Supabase auth unless migration is justified.
- **Analytics**: choose Plausible or Umami, subject to privacy, deployment and licensing review.
- **Performance/accessibility**: test Lighthouse/Core Web Vitals, keyboard access, reduced motion, mobile screens, forms, SEO metadata and contrast.
- **Quality gate**: Playwright E2E + Vitest unit tests + Storybook component reviews; check dependencies, licenses, security alerts and hosting/API costs.
- **Multi-site strategy**: consider Turborepo once at least two websites genuinely share a design system or packages; avoid premature monorepo complexity.
- **3D**: React Three Fiber/Drei only for purposeful high-end product or portfolio scenes; respect performance and motion preferences.

## First reusable starter blueprint

1. Create a separate `premium-web-starter` repository only when approved, preserving existing websites.
2. Configure Next.js TypeScript, Tailwind, shadcn/ui, Radix, Lucide and Motion.
3. Implement a responsive header, editorial hero, product/service cards, feature sections, testimonials, FAQ, lead capture, footer, legal pages, SEO metadata and analytics consent as appropriate.
4. Build reusable page templates for landing, portfolio, SaaS dashboard and ecommerce catalog.
5. Add Storybook, Vitest, Playwright, CI checks and deployment previews.
6. Add integrations (Shopify, Payload, Supabase, AI) behind optional feature flags.

## Relationship to existing catalog

This file is an extension of `docs/github-tool-library.md` and `docs/github-tool-library-expansion-2026-10.md`. It intentionally overlaps with prior Playwright MCP (a tool interface) but **microsoft/playwright** is the underlying test framework, a separate repository. Keep both references. No existing projects were modified.
