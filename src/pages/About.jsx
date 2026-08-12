import FadeUp from '../components/FadeUp'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'C++', 'C'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Material UI', 'HTML5/CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs'],
  },
  {
    title: 'Databases & Storage',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose'],
  },
  {
    title: 'AI & GenAI',
    skills: ['LLM APIs (OpenAI/Anthropic)', 'LangChain', 'RAG Architectures', 'Prompt Engineering'],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: ['AWS (EC2, S3)', 'Vercel / Netlify', 'GitHub Actions / Git', 'Postman', 'JWT / OAuth'],
  },
]

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto min-h-screen">
      <FadeUp>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-16">
          About
        </h1>
      </FadeUp>

      {/* Main Bio */}
      <FadeUp delay={0.1}>
        <section className="mb-12">
          <p className="text-lg text-muted max-w-3xl leading-relaxed font-body mb-6">
            I am a B.Tech Computer Science Engineering student at Guru Tegh Bahadur Institute of
            Technology, Delhi (2022–2026). My core passion lies in building scalable,
            production-grade applications that combine clean full-stack architecture with modern LLM
            & Generative AI integrations.
          </p>
          <p className="text-base text-muted max-w-3xl leading-relaxed font-body">
            A relentless problem solver at heart, I bring high engineering ownership, analytical rigor, and clean architectural principles to every product I build. Having solved over <strong className="text-fg font-semibold">250+ Data Structures & Algorithmic problems</strong> across LeetCode and GeeksforGeeks, I excel at writing optimal, production-ready code with a deep focus on computational efficiency and scalability.
          </p>
        </section>
      </FadeUp>

      {/* Key Highlights */}
      <FadeUp delay={0.15}>
        <section className="mb-16">
          <div className="flex flex-wrap gap-x-12 gap-y-3 text-sm text-muted font-body">
            <span>250+ Algorithmic Problems Solved (LeetCode & GFG)</span>
            <span>·</span>
            <span>Expertise in MERN stack, Next.js 15, PostgreSQL & MongoDB</span>
            <span>·</span>
            <span>GenAI & LLM Orchestration (LangChain, OpenAI, RAG)</span>
            <span>·</span>
            <span>End-to-End Client Delivery to Production</span>
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.2}>
        <hr className="hairline my-16" />
      </FadeUp>

      {/* Problem Solving & Competitive Profiles */}
      <FadeUp delay={0.22}>
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold mb-4">Competitive Coding & Profiles</h2>
          <p className="text-sm text-muted font-body mb-8 max-w-2xl leading-relaxed">
            Consistently sharpening core Computer Science fundamentals, algorithmic thinking, and dynamic programming techniques across competitive coding platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <div className="border border-border-subtle p-6 transition-colors hover:border-fg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold">LeetCode</h3>
                <span className="text-xs font-body text-muted uppercase tracking-widest">250+ Solved</span>
              </div>
              <p className="text-xs text-muted font-body mb-6 leading-relaxed">
                Active problem solver practicing Data Structures, Dynamic Programming, and Graph algorithms.
              </p>
              <a
                href="https://leetcode.com/u/GauharAlam1377/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-fg text-xs font-body tracking-wider uppercase"
              >
                View LeetCode Profile →
              </a>
            </div>

            {/* GeeksforGeeks Card */}
            <div className="border border-border-subtle p-6 transition-colors hover:border-fg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold">GeeksforGeeks</h3>
                <span className="text-xs font-body text-muted uppercase tracking-widest">Activity & Practice</span>
              </div>
              <p className="text-xs text-muted font-body mb-6 leading-relaxed">
                Continuous DSA practice covering foundational algorithms, C++ STL, and time complexity optimizations.
              </p>
              <a
                href="https://www.geeksforgeeks.org/profile/gauhar8lyu?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-fg text-xs font-body tracking-wider uppercase"
              >
                View GFG Profile →
              </a>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.25}>
        <hr className="hairline my-16" />
      </FadeUp>

      {/* Skills */}
      <FadeUp delay={0.28}>
        <section>
          <h2 className="font-heading text-2xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-muted mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.3}>
        <hr className="hairline my-16" />
      </FadeUp>

      {/* Experience */}
      <FadeUp delay={0.35}>
        <section>
          <h2 className="font-heading text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-heading text-base font-semibold">Full Stack Developer Intern — HelioShift</h3>
                <span className="text-xs text-muted font-body tracking-wide">Oct 2024 – Feb 2025</span>
              </div>
              <p className="text-sm text-muted font-body mb-3">Architected and developed core features for Wappify — a multi-tenant WhatsApp SaaS product.</p>
              <ul className="space-y-1.5 text-sm text-muted font-body">
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Engineered async outbox pattern for webhook ingestion ensuring zero message loss and sub-20ms acknowledgement.</li>
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Built GenAI conversational bot memory system and connected live merchant catalog data.</li>
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Implemented merchant dashboard with Razorpay payment processing and API rate limiters.</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-heading text-base font-semibold">Freelance Full Stack Developer</h3>
                <span className="text-xs text-muted font-body tracking-wide">Mar 2025 – May 2025</span>
              </div>
              <p className="text-sm text-muted font-body mb-3">Built and delivered production web applications independently for private clients.</p>
              <ul className="space-y-1.5 text-sm text-muted font-body">
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Architected & deployed Qaleenkaar (Loom Tales) — a luxury carpet & shawl care client platform.</li>
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Designed mobile-first React UI/UX, service showcases, and automated Express/MongoDB booking APIs.</li>
                <li className="flex gap-2"><span className="text-fg opacity-40">—</span> Engineered SEO optimizations and production deployment pipeline on Vercel.</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  )
}
