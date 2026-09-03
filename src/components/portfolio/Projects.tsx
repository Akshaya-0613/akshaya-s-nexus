import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured Projects" dark>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="flex h-full flex-col rounded-2xl glass-dark p-6 tilt-card">
              <h3 className="font-display text-xl font-bold text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-cream/20 bg-cream/5 px-2.5 py-1 text-[0.7rem] font-medium text-cream/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 pt-1">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cream/30 px-4 py-2 text-xs font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cream px-4 py-2 text-xs font-semibold text-plum-deep transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
