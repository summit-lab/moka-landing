# Feature: Landing Sections

## Descripción
Las secciones principales de la landing page de Moka, basadas en el diseño de Canva.

## Secciones

### Navbar
- Logo "moka"
- Links: Tracking | Espía | Producción (anchor links internos)
- CTAs: "Inicia Sesión" + "Agendar Demo"
- Fixed/sticky con efecto glassmorphism

### HeroSection
- Badge de social proof: "27 negocios agendaron una llamada esta semana"
- Headline: "Duplica tu alcance y DMs en Instagram en solo 2hs/sem"
- CTA principal: "Agendar Demo Gratuita"
- Placeholder de mockup del dashboard

### TrackingSection (id: tracking)
- Título: "Todas tus métricas. Como nunca antes."
- Feature 1: Tracking avanzado — desglose ultra-detallado de métricas por reel/publicación
- Feature 2: Trackea la facturación exacta por pieza de contenido

### SpySection (id: espia)
- Título: "Espiá a tus competidores."
- 4 features en grid: formatos ganadores, comparación de métricas, análisis inteligente, ideas ganadoras

### ProductionSection (id: produccion)
- Título: "Ideas. Guiones. Feedback. Para crear contenido ganador."
- 3 features: chat con datos, ideas y guiones basados en datos, optimización de alcance

### Footer
- Logo + links de navegación + copyright

## Archivos
| Archivo | Rol |
|---------|-----|
| `src/components/layout/Navbar.tsx` | Navbar fija con glassmorphism |
| `src/components/layout/Footer.tsx` | Footer simple |
| `src/components/sections/HeroSection.tsx` | Sección hero |
| `src/components/sections/TrackingSection.tsx` | Sección tracking |
| `src/components/sections/SpySection.tsx` | Sección espía |
| `src/components/sections/ProductionSection.tsx` | Sección producción |
| `src/constants/SITE_CONFIG.ts` | Todo el copy y configuración |

## Design System
- Fondo: `#06060A`
- Accent: violet-600 (`#7C3AED`)
- Gradient texto: `from-violet-400 to-purple-400`
- Cards: `bg-white/5` + `border-white/10`
- Glow: blur circles con `bg-violet-600/20`
