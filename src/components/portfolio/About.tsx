import { profile, profileStats } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            “{profile.about}”
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl glass-light p-6 glow-ring">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Profile Stats
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {profileStats.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/70 px-3 py-2 text-sm font-medium text-foreground"
                >
                  <BadgeCheck className="size-4 shrink-0 text-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
