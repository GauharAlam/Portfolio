export const projects = [
  {
    id: 'wappify',
    title: 'Wappify',
    subtitle: 'Multi-Tenant WhatsApp Commerce SaaS',
    description:
      'AI-powered WhatsApp commerce automation platform enabling D2C brands to turn WhatsApp into a high-revenue 24/7 automated storefront.',
    highlights: [
      'Gemini 1.5 Pro AI concierge with 10-turn memory for automated customer support & smart product recommendations.',
      'Async outbox pattern: webhooks acknowledged in <20ms via Postgres queue with zero message loss.',
      'Merchant dashboard with real-time analytics, catalog CMS, bulk broadcasts (98% open rate), and Razorpay payments.',
      'Protected with 150 req/min DDoS rate-limiting and automated CI/CD pipelines via GitHub Actions.',
    ],
    tech: ['Next.js 15', 'Node.js', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'Razorpay'],
    github: 'https://github.com/GauharAlam/wappify',
    live: 'https://wappify-one.vercel.app/',
  },
  {
    id: 'algoforge',
    title: 'AlgoForge',
    subtitle: 'LeetCode-Style Coding Platform with AI Agent',
    description:
      'Interactive in-browser code editor and algorithm practice platform designed for deliberate DSA problem-solving powered by a contextual AI tutor.',
    highlights: [
      'In-browser code editor with instant test-case runner and real-time pass/fail feedback.',
      'Contextual AI tutor providing step-by-step guidance and time complexity analysis without revealing code.',
      'JWT authentication, problem tagging by difficulty/topic, and user progress-tracking analytics dashboard.',
      'Admin panel with role-based access control to manage problem sets and run competitive coding contests.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'AI Agent'],
    github: 'https://github.com/GauharAlam/algoforge',
    live: 'https://algosforge.netlify.app/',
  },
  {
    id: 'qaleenkaar',
    title: 'Qaleenkaar (Loom Tales)',
    subtitle: 'Carpet & Shawl Care Brand Platform',
    description:
      'Full-stack digital platform for a luxury carpet and shawl restoration brand, featuring service bookings, showcases, and enquiry handling.',
    highlights: [
      'Mobile-first React frontend with interactive service showcases and brand storytelling.',
      'REST API backend with Express and MongoDB for customer service requests and enquiries.',
      'Delivered end-to-end independently for the client, deployed to production on Vercel.',
    ],
    tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/GauharAlam/qaleenkaar',
    live: 'https://qaleenkaar-4ack.vercel.app/',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Monochrome Editorial Design System',
    description:
      'This portfolio website — a strict monochrome, editorial design system built with React, Tailwind CSS, and Framer Motion.',
    highlights: [
      'Strict monochrome design: #0A0A0A, #FAFAFA, and 3 grays — no accent colors.',
      'Dark/light mode toggle with localStorage persistence.',
      'Zero database requirement — ultra-fast static loading with Vercel edge deployment.',
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/GauharAlam',
    live: '#',
  },
]
