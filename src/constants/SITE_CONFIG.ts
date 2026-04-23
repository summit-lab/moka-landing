export const SITE_CONFIG = {
  name: 'Moka',
  tagline: 'Duplica tu alcance y DMs en Instagram en solo 2hs/sem',
  socialProof: '27 negocios agendaron una llamada esta semana',
  cta: {
    primary: 'Agendar Demo Gratuita',
    secondary: 'Inicia Sesión',
    nav: 'Agendar Demo',
  },
  nav: [
    { label: 'Tracking', href: '#tracking' },
    { label: 'Espía', href: '#espia' },
    { label: 'Producción', href: '#produccion' },
  ],
  sections: {
    tracking: {
      id: 'tracking',
      badge: 'Tracking avanzado',
      title: 'Todas tus métricas.',
      titleAccent: 'Como nunca antes.',
      features: [
        {
          title: 'Desglose ultra-detallado de las métricas de cada reel y publicación.',
          description: '',
          body: 'Todos los datos que necesitas sobre cada pieza de contenido individual... y de tu estrategia de marca personal en general. Encontrá tus formatos y ángulos ganadores. Basado en datos.',
          image: '/screenshots/screenshot-desglose.jpg',
        },
        {
          title: 'Trackea la facturación exacta que te generó cada pieza de contenido.',
          description: '',
          body: 'A partir de ahora vas a poder trackear en un solo lugar cuánto facturaste con cada reel, publicación o historia. Ya no tenés que adivinar, sabés exactamente qué decir para generar la mayor cantidad de ventas.',
          image: '/screenshots/screenshot-trackea.jpg',
        },
        {
          title: 'Análisis y conclusiones inteligentes basadas en tus datos y tendencias.',
          description: '',
          body: 'Moka está entrenado para identificar patrones en tus métricas, tus formatos, tus temas y tus ángulos... Para llegar a conclusiones que nunca hubieras llegado de forma manual, y ajustar tu estrategia constantemente.',
          image: '/screenshots/screenshot-analisis.jpg',
        },
      ],
    },
    spy: {
      id: 'espia',
      badge: 'Espía',
      title: 'Espía a tus',
      titleAccent: 'competidores.',
      features: [
        {
          title: 'Identifica sus formatos y ángulos ganadores, en automático.',
          body: 'Solo decile a Moka quiénes son tus competidores... Y va a analizar cada uno de sus videos, métricas, guion, formatos... todo. 100% automático.',
          image: '/screenshots/screenshot-identifica.png',
        },
        {
          title: 'Compará y analizá tus métricas vs. las de tus competidores.',
          body: 'Analizá visualmente los resultados de tu contenido en comparación al de tus competidores, día a día.',
          image: '/screenshots/screenshot-compara.jpg',
        },
        {
          title: 'Encontrá ideas ganadoras antes. Sé el primero en aplicarlas en tu nicho.',
          body: 'Dejá de buscar ideas de contenido scrolleando en Instagram por horas. Con Moka y su análisis profundo diario a tus competidores, vas a ser el primero en encontrar las ideas ganadoras.',
          image: '/screenshots/screenshot-ideas.jpg',
        },
      ],
    },
    production: {
      id: 'produccion',
      badge: 'Producción de contenido',
      title: 'Ideas. Guiones. Feedback.',
      titleAccent: 'Para crear contenido ganador.',
      features: [
        {
          title: 'Todos los números, todo tu ADN y toda tu estrategia... en un chat.',
          body: 'Como Claude con esteroides. Tenés un chat con Moka AI, conectado a todos tus datos, los de tus competidores, tu negocio (entrenado con 16 micro-agentes) para que le preguntes lo que quieras, cuando quieras. Ilimitado.',
          image: '/screenshots/screenshot-chat.jpg',
        },
        {
          title: 'Genera ideas de contenido y guiones probados basados en tus datos.',
          body: 'Te ayuda a desarrollar las ideas con mayor potencial en tu caso, basado en tu estrategia, tus formatos, tus competidores y tu marca en particular.',
          image: '/screenshots/screenshot-genera.jpg',
        },
        {
          title: 'Optimizá para generar más alcance y más conversaciones.',
          body: 'Moka va a analizar día a día tu rendimiento y sugerirte mejoras basadas en datos, optimizando para lo que realmente querés: Tener más alcance y más conversaciones con prospectos calificados.',
          image: '/screenshots/screenshot-optimiza.jpg',
        },
      ],
    },
  },
} as const
