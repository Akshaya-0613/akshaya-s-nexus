import { FlaskConical, HeartHandshake, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { PdfButton } from "./PdfButton";

const icons = { Trophy, HeartHandshake, FlaskConical } as const;

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Impact & inquiry" title="Achievements & Research">
      <div className="grid gap-5 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon as keyof typeof icons];
          const research = a.category === "RESEARCH";
          return (
            <Reveal key={a.title} delay={i * 90}>
              <article
                className={`flex h-full flex-col justify-between rounded-2xl p-6 glow-ring ${
                  research ? "surface-dark border border-primary/30" : "glass-light"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid size-10 place-items-center rounded-xl ${
                        research
                          ? "border border-cream/20 bg-cream/10 text-cream"
                          : "surface-dark"
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${
                        research
                          ? "border border-cream/25 text-cream/80"
                          : "border border-primary/30 text-primary"
                      }`}
                    >
                      {a.category}
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-display text-lg font-semibold ${
                      research ? "text-cream" : "text-foreground"
                    }`}
                  >
                    {a.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      research ? "text-cream/70" : "text-muted-foreground"
                    }`}
                  >
                    {a.description}
                  </p>
                </div>
                {a.pdf && (
                  <div className="mt-5">
                    <PdfButton href={a.pdf} label={a.pdfLabel} dark={research} />
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
