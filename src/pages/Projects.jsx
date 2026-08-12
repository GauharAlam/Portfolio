import FadeUp from '../components/FadeUp'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto min-h-screen">
      <FadeUp>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-muted font-body text-sm mb-16 max-w-xl">
          A selection of production applications, SaaS platforms, and client deliveries.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.08}>
            <div className="project-card flex flex-col justify-between h-full">
              <div>
                <h2 className="font-heading text-xl font-bold mb-1">{project.title}</h2>
                {project.subtitle && (
                  <p className="project-muted text-muted text-xs mb-3 tracking-wide uppercase">
                    {project.subtitle}
                  </p>
                )}
                <p className="project-muted text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="project-muted text-muted text-xs flex gap-2 leading-relaxed"
                      >
                        <span className="text-fg opacity-30 shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline project-link text-sm text-muted"
                  >
                    GitHub
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline project-link text-sm text-muted"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  )
}
