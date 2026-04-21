# Changelog — Moka Landing

> Formato: [Semantic Versioning](https://semver.org/)
> Cada entrada incluye: fecha, tipo, archivos afectados, request original.

---

## [0.2.0] — 2026-04-20

### Added — Fase 2: Secciones de la landing
- Navbar fija con glassmorphism, links de navegación y CTAs
- HeroSection con headline, badge de social proof y CTA principal
- TrackingSection con 2 feature cards
- SpySection con 4 feature cards en grid
- ProductionSection con 3 feature cards
- Footer con logo, links y copyright
- Design system oscuro (`#06060A`) con accent violet en globals.css
- `SITE_CONFIG.ts` con todo el copy extraído del diseño de Canva
- Metadata SEO en layout.tsx (ES, título y descripción de Moka)
- Feature doc: `docs/features/landing-sections.md`

### Archivos afectados
- `src/app/page.tsx` — Ensambla todas las secciones
- `src/app/layout.tsx` — Metadata + lang="es"
- `src/app/globals.css` — Design system oscuro + scroll-behavior
- `src/constants/SITE_CONFIG.ts` — Todo el copy y configuración
- `src/components/layout/Navbar.tsx` — Navbar fija glassmorphism
- `src/components/layout/Footer.tsx` — Footer simple
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/TrackingSection.tsx`
- `src/components/sections/SpySection.tsx`
- `src/components/sections/ProductionSection.tsx`
- `docs/features/landing-sections.md` — Doc de la feature

### Request original
> Implementar las secciones de la landing de Moka basadas en el diseño de Canva (DAHHO3AkNxw). Stack: Next.js 15 + TailwindCSS 4 + TypeScript.

---

## [0.1.0] — 2026-04-20

### Added — Setup Inicial (Método AInnovate)
- Estructura de proyecto creada con Next.js 15 + React 19 + TailwindCSS 4
- Documentación base: overview, architecture, security, DB_SCHEMA, API_DOCS, SKILLS
- Reglas para IA: .windsurfrules, CLAUDE.md, .cursorrules, .clinerules, copilot-instructions.md, .aider.conf.yml
- CHANGELOG inicializado
- `.env.example` creado

### Archivos afectados
- `docs/01-project-overview.md` — Visión, objetivos, stack del proyecto
- `docs/02-architecture.md` — Estructura de carpetas, convenciones, ADRs
- `docs/03-security.md` — Reglas de seguridad base
- `docs/04-deployment.md` — Template de deployment (pendiente)
- `docs/DB_SCHEMA.md` — Template base (no aplica para landing)
- `docs/API_DOCS.md` — Template base (no aplica para landing)
- `docs/SKILLS.md` — Registro de skills disponibles
- `.windsurfrules` — Reglas para Windsurf/Cascade
- `CLAUDE.md` — Reglas para Claude Code
- `.cursorrules` — Reglas para Cursor
- `.clinerules` — Reglas para Cline
- `.github/copilot-instructions.md` — Reglas para GitHub Copilot
- `.aider.conf.yml` — Reglas para Aider
- `CHANGELOG.md` — Este archivo
- `.env.example` — Template de variables de entorno

### Request original
> Lee el archivo METODO_AINNOVATE.md completo y sigue las instrucciones de la FASE 1. Mi proyecto es: una landing para Moka, la app que venimos desarrollando para Fran de Arcadia. Stack: React + Next.js.
