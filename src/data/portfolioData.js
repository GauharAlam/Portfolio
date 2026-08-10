export const personalDetails = {
  name: "Gauhar Alam",
  roles: ["Full Stack Developer", "SaaS Builder", "GenAI Engineer"],
  oneLiner: "B.Tech CS student and full-stack developer building production-grade apps — from multi-tenant SaaS platforms to AI-powered coding tools.",
  email: "gauhar54995@gmail.com",
  phone: "+91 8409153351",
  github: "https://github.com/GauharAlam",
  linkedin: "https://www.linkedin.com/in/gauhar-alam/",
  leetcode: "https://leetcode.com/u/GauharAlam1377/",
  gfg: "https://www.geeksforgeeks.org/profile/gauhar8lyu?tab=activity",
  twitter: "https://x.com/NawazCodex",
  location: "Delhi, India",
  resumeUrl: "https://drive.google.com/file/d/1mhhfomsWvGaRbqOiIGF0PiDDDYYFydpz/view?usp=drive_link",
};

export const statsData = [
  { label: "DSA Problems Solved", value: 200, suffix: "+" },
  { label: "Production SaaS Platforms", value: 2, suffix: "" },
  { label: "Client Projects Delivered", value: 3, suffix: "+" },
];

export const aboutData = {
  bio: "I am a B.Tech Computer Science Engineering student at Guru Tegh Bahadur Institute of Technology, Delhi (2022–2026, GPA 7.63). My core passion lies in building scalable, production-grade applications that combine clean full-stack architecture with modern LLM & Generative AI integrations. From architecting async webhook queues for high-volume WhatsApp SaaS to engineering browser-based code execution platforms with AI code review agents, I bring high ownership and technical rigor.",
  highlights: [
    "Expertise in MERN stack, Next.js 15, PostgreSQL & MongoDB",
    "Hands-on experience with GenAI/LLM orchestration (LangChain, OpenAI/Anthropic APIs, RAG)",
    "Strong foundation in Data Structures, Algorithms, and System Design",
    "Proven track record of delivering end-to-end client applications to production"
  ]
};

export const skillsGrouped = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: "Code2" },
      { name: "Python", level: 85, icon: "Terminal" },
      { name: "C++", level: 88, icon: "Cpu" },
      { name: "C", level: 75, icon: "FileCode" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 92, icon: "Atom" },
      { name: "Next.js 15", level: 88, icon: "Layers" },
      { name: "TypeScript", level: 85, icon: "FileJson" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "Material UI", level: 80, icon: "Layout" },
      { name: "HTML5/CSS3", level: 95, icon: "Globe" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express.js", level: 90, icon: "Workflow" },
      { name: "Django", level: 75, icon: "Shield" },
      { name: "Flask", level: 70, icon: "Zap" },
      { name: "REST APIs", level: 92, icon: "Network" },
    ]
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "PostgreSQL", level: 82, icon: "Table" },
      { name: "MySQL", level: 80, icon: "HardDrive" },
      { name: "Mongoose", level: 88, icon: "Binary" },
    ]
  },
  {
    category: "AI & GenAI",
    skills: [
      { name: "LLM APIs (OpenAI/Anthropic)", level: 88, icon: "Sparkles" },
      { name: "LangChain", level: 80, icon: "Link" },
      { name: "RAG Architectures", level: 82, icon: "BrainCircuit" },
      { name: "Prompt Engineering", level: 90, icon: "MessageSquareCode" },
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: [
      { name: "AWS (EC2, S3)", level: 75, icon: "Cloud" },
      { name: "Vercel / Netlify", level: 92, icon: "UploadCloud" },
      { name: "GitHub Actions / Git", level: 85, icon: "GitBranch" },
      { name: "Postman", level: 90, icon: "Send" },
      { name: "JWT / OAuth", level: 85, icon: "Key" },
    ]
  }
];

export const projectsData = [
  {
    id: "wappify",
    title: "Wappify",
    subtitle: "Multi-Tenant WhatsApp Commerce SaaS Platform",
    featured: true,
    tags: ["Next.js 15", "Node.js", "TypeScript", "PostgreSQL", "Gemini 1.5 Pro AI", "Razorpay"],
    accentColor: "from-emerald-500 to-cyan-500",
    badge: "Production SaaS",
    description: "AI-powered WhatsApp commerce automation platform enabling D2C brands to turn WhatsApp into a high-revenue 24/7 automated storefront.",
    highlights: [
      "Integrated Gemini 1.5 Pro AI concierge handling 24/7 automated customer support, smart product recommendations, and 10-turn memory.",
      "Built an async outbox pattern: webhooks acknowledged in <20ms via Postgres queue with zero message loss during AI processing.",
      "Merchant dashboard featuring real-time revenue analytics, catalog CMS, bulk broadcast campaigns (98% open rate), and 1-tap Razorpay payments.",
      "Protected with 150 req/min DDoS rate-limiting and automated CI/CD pipelines via GitHub Actions."
    ],
    github: "https://github.com/GauharAlam/wappify",
    live: "https://wappify-one.vercel.app/",
    metrics: "Gemini 1.5 Pro | <20ms Webhook Ack"
  },
  {
    id: "algoforge",
    title: "AlgoForge",
    subtitle: "LeetCode-Style Coding Platform with AI Agent",
    featured: true,
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Daisy UI", "AI Agent", "JWT"],
    accentColor: "from-blue-500 to-violet-500",
    badge: "EdTech & AI Platform",
    description: "Interactive in-browser code editor and algorithm practice platform designed for deliberate DSA problem-solving powered by a contextual AI tutor.",
    highlights: [
      "In-browser code editor featuring instant test-case runner with real-time pass/fail feedback.",
      "Contextual AI hint & review agent providing step-by-step guidance, time complexity analysis, and explanations without revealing direct code.",
      "JWT authentication, problem tagging by difficulty/topic, and user progress-tracking analytics dashboard.",
      "Admin panel with role-based access control to manage problem sets and run competitive coding contests."
    ],
    github: "https://github.com/GauharAlam/algoforge",
    live: "https://algosforge.netlify.app/",
    metrics: "In-Browser Execution | AI Tutor"
  },
  {
    id: "resume-builder",
    title: "AI Resume Builder",
    subtitle: "ATS-Friendly Resume Creator for Tech Professionals",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Quill.js", "jsPDF", "HTML2Canvas", "AI Assistant"],
    accentColor: "from-indigo-500 to-purple-500",
    badge: "Web Application",
    description: "AI-assisted resume generator producing ATS-compliant resumes tailored for software engineers and IT professionals with live formatting preview.",
    highlights: [
      "Interactive resume builder featuring rich-text editing (Quill.js) and dynamic font selector (Inter, Roboto, Fira Code).",
      "Integrated one-click high-fidelity PDF and DOCX file export powered by jsPDF, html2canvas, and html-docx-js.",
      "Structured ATS-friendly section templates optimized for modern tech recruiter filtering."
    ],
    github: "https://github.com/GauharAlam",
    live: "https://resume-buildersss.netlify.app/",
    metrics: "ATS-Compliant | 1-Click PDF Export"
  },
  {
    id: "qaleenkaar",
    title: "Qaleenkaar (Loom Tales)",
    subtitle: "Carpet & Shawl Care Brand Platform",
    featured: true,
    tags: ["MERN Stack", "React.js", "Express.js", "MongoDB", "Tailwind CSS", "Vercel"],
    accentColor: "from-purple-500 to-pink-500",
    badge: "Client Production App",
    description: "Full-stack digital platform designed for a luxury carpet and shawl restoration brand, featuring service bookings, story showcases, and enquiry handling.",
    highlights: [
      "Mobile-first React frontend with interactive service showcases, cleaning galleries, and brand storytelling.",
      "Robust REST API backend built with Express and MongoDB for processing customer service requests and enquiries.",
      "Delivered independently end-to-end for the client and deployed to production on Vercel."
    ],
    github: "https://github.com/GauharAlam/qaleenkaar",
    live: "https://qaleenkaar-4ack.vercel.app/",
    metrics: "End-to-End Client Delivery"
  }
];

export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "HelioShift",
    period: "Oct 2024 – Feb 2025",
    type: "Internship",
    description: "Architected and developed core features for Wappify — a multi-tenant WhatsApp SaaS product.",
    achievements: [
      "Engineered async outbox pattern for webhook ingestion ensuring zero message loss and sub-20ms acknowledgement.",
      "Built GenAI conversational bot memory system and connected live merchant catalog data.",
      "Implemented merchant dashboard with Razorpay payment processing and API rate limiters."
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Mar 2025 – May 2025",
    type: "Freelance",
    description: "Built and delivered production web applications independently for private clients from concept to Vercel deployment.",
    achievements: [
      "Architected & deployed Qaleenkaar (Loom Tales) — a luxury carpet & shawl care client platform (https://qaleenkaar-4ack.vercel.app/).",
      "Designed mobile-first React UI/UX, service showcases, and automated Express/MongoDB customer booking APIs.",
      "Engineered SEO optimizations and production deployment pipeline on Vercel with fast performance scores."
    ]
  }
];

export const accomplishmentsData = [
  {
    title: "DSA in C++",
    issuer: "Physics Wallah",
    type: "Certification",
    details: "Mastered Data Structures, Algorithms, Time Complexity, and Advanced Problem Solving in C++.",
    icon: "Award"
  },
  {
    title: "Full Stack Web Development & Blockchain",
    issuer: "Coder Army",
    type: "Certification",
    details: "Comprehensive training in modern MERN stack, REST API architecture, and Smart Contracts.",
    icon: "CheckCircle2"
  },
  {
    title: "Flipkart Grid 6.0",
    issuer: "Unstop / Flipkart",
    type: "Engineering Hackathon",
    details: "Participated in Software Development Track solving real-world logistics & tech challenges.",
    icon: "Trophy"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Guru Tegh Bahadur Institute of Technology, Delhi",
    period: "2022 – 2026",
    score: "GPA: 7.63 / 10",
    status: "Pursuing (Final Year)"
  },
  {
    degree: "Class XII (Senior Secondary - BSEB)",
    institution: "Amana Urdu High School, Bettiah, Bihar",
    period: "2019 – 2021",
    score: "Marks: 80%",
    status: "Completed"
  }
];
