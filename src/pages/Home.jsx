import { Link } from 'react-router-dom'
import FadeUp from '../components/FadeUp'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        <FadeUp>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-fg leading-[0.95]">
            Gauhar Alam
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-body text-base md:text-lg text-muted tracking-widest uppercase">
            Full Stack Developer & GenAI Engineer
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-body text-base md:text-lg text-muted max-w-xl leading-relaxed">
            B.Tech CS student and full-stack developer building production-grade apps — from multi-tenant SaaS platforms to AI-powered coding tools.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link to="/projects" className="btn-outline">
              View Projects
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
