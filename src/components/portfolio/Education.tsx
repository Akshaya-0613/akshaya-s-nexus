import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <ol className="relative border-l border-border pl-6">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 80} as="li">
            <span className="absolute -left-[13px] grid size-6 place-items-center rounded-full surface-dark">
              <GraduationCap className="size-3.5" />
            </span>
            <div className="rounded-2xl glass-light p-6 glow-ring">
              <h3 className="font-display text-lg font-semibold text-foreground">{e.degree}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{e.institution}</p>
              <p className="text-sm text-muted-foreground">{e.affiliation}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium">
                  {e.period}
                </span>
                <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium">
                  {e.detail}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
