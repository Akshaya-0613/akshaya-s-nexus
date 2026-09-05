import { useEffect } from "react";
import {
  ArrowLeft,
  Code2,
  ExternalLink,
  Github,
  ImageOff,
  Layers,
  Sparkles,
  User,
  X,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

const meta = (project: Project) => [
  { label: "Language", value: project.language, icon: Code2 },
  { label: "DSA / Technical Focus", value: project.focus, icon: Layers },
  { label: "Type", value: project.type, icon: User },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h3 className="font-display text-lg font-semibold text-cream">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-cream/70">{children}</div>
    </section>
  );
}

export function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-plum-deep/80 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="reveal-in relative w-full max-w-3xl rounded-[1.75rem] glass-dark p-6 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] sm:p-9"
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl border border-cream/20 text-cream/80 transition-colors hover:bg-cream/10"
        >
          <X className="size-4" />
        </button>

        <p className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/70">
          <Sparkles className="size-3" />
          Case Study
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-gradient-cream sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm text-cream/75 sm:text-base">{project.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {meta(project).map((m) => (
            <div key={m.label} className="rounded-xl border border-cream/15 bg-cream/5 p-4">
              <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
                <m.icon className="size-3.5" />
                {m.label}
              </p>
              <p className="mt-2 text-sm font-medium text-cream">{m.value}</p>
            </div>
          ))}
        </div>

        <Block title="Overview">{project.overview}</Block>
        <Block title="Problem Statement">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>

        <Block title="Technologies Used">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-lg border border-cream/20 bg-cream/5 px-3 py-1.5 text-xs font-medium text-cream/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Key Features">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="rounded-lg border border-cream/12 bg-cream/5 px-3 py-2 text-xs text-cream/80"
              >
                {f}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Outcome">{project.outcome}</Block>

        <Block title="Screenshots & Demo">
          {project.screenshots.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full rounded-xl border border-cream/15 object-cover"
                />
              ))}
            </div>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-cream/25 px-3 py-2 text-xs font-medium text-cream/55">
              <ImageOff className="size-3.5" />
              Demo screenshots coming soon
            </span>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cream px-4 py-2 text-xs font-semibold text-plum-deep transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cream/30 px-4 py-2 text-xs font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10"
              >
                <Github className="size-4" />
                GitHub Repository
              </a>
            )}
          </div>
        </Block>

        <button
          onClick={onClose}
          className="mt-9 inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10"
        >
          <ArrowLeft className="size-4" />
          Back to Project
        </button>
      </article>
    </div>
  );
}
