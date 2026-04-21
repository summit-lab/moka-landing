# Arquitectura — Moka Landing

## Stack Completo
- **React** 19.x — UI library
- **Next.js** 15.x — Framework (App Router)
- **TailwindCSS** 4.x — Utility-first CSS
- **TypeScript** 5.x — Tipado estricto
- **Lucide React** — Iconografía

## Estructura de Carpetas
```
landing-arko/
├── docs/                           # Documentación (Método AInnovate)
│   ├── 01-project-overview.md
│   ├── 02-architecture.md
│   ├── 03-security.md
│   ├── 04-deployment.md
│   ├── DB_SCHEMA.md
│   ├── API_DOCS.md
│   ├── SKILLS.md
│   └── features/
├── src/
│   ├── app/                        # App Router (páginas)
│   │   ├── layout.tsx              # Layout principal
│   │   ├── page.tsx                # Landing page
│   │   └── globals.css             # Estilos globales + Tailwind
│   ├── components/                 # Componentes reutilizables
│   │   ├── ui/                     # Componentes base (Button, Card, etc.)
│   │   ├── layout/                 # Header, Footer, Container
│   │   └── sections/               # Secciones de la landing (Hero, Features, CTA, etc.)
│   ├── lib/                        # Utilidades y helpers
│   ├── hooks/                      # Custom hooks
│   ├── types/                      # Tipos globales TypeScript
│   └── constants/                  # Constantes (textos, config)
├── public/                         # Assets estáticos (imágenes, favicon)
├── .windsurfrules                  # Reglas para IA (Windsurf)
├── CLAUDE.md                       # Reglas para IA (Claude)
├── .cursorrules                    # Reglas para IA (Cursor)
├── .clinerules                     # Reglas para IA (Cline)
├── .github/
│   └── copilot-instructions.md     # Reglas para GitHub Copilot
├── .aider.conf.yml                 # Reglas para Aider
├── CHANGELOG.md                    # Historial de cambios
├── METODO_AINNOVATE.md             # Método completo
├── .env.local                      # Variables de entorno (NO COMMIT)
├── .env.example                    # Template de variables
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## Base de Datos
No aplica para esta landing page. Si en el futuro se agrega captación de leads con formulario, se documentará en DB_SCHEMA.md.

## Flujo de Datos
Landing page estática — no hay flujo de datos complejo. Los componentes se renderizan desde `page.tsx` que importa las secciones.

```
page.tsx → [Header] → [Hero] → [Features] → [CTA] → [Footer]
```

## Variables de Entorno
| Variable | Descripción | Tipo | Requerida |
|----------|-------------|------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio en producción | pública | NO |

## Convenciones del Proyecto
| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase con "use" | `useScrollPosition.ts` |
| Utilidades | camelCase | `formatText.ts` |
| Constantes | SCREAMING_SNAKE | `SITE_CONFIG.ts` |
| Tipos/Interfaces | PascalCase | `SectionProps.ts` |
| Secciones | PascalCase + Section | `HeroSection.tsx` |

## Decisiones Arquitectónicas
### ADR-001: Next.js App Router
**Fecha:** 2026-04-20
**Contexto:** Se necesita un framework React moderno con SSR/SSG para la landing
**Decisión:** Usar Next.js 15 con App Router
**Consecuencias:** Mejor SEO, performance, y developer experience

### ADR-002: TailwindCSS para estilos
**Fecha:** 2026-04-20
**Contexto:** Landing page requiere desarrollo rápido con diseño personalizado
**Decisión:** Usar TailwindCSS como sistema de estilos
**Consecuencias:** Desarrollo rápido, consistencia visual, clases utilitarias en JSX. La lógica de negocio sigue separada en archivos dedicados por el Mandamiento II.
