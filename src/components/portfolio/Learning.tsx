import { Bot, BrainCircuit, CloudCog, Layers, Server } from "lucide-react";
import { learning } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const icons = { Bot, BrainCircuit, CloudCog, Layers, Server } as const;

export function Learning() {
  return (
    <Section id="learning" eyebrow="Always leveling up" title="What I'm Currently Learning" dark>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <Reveal key={item.title} delay={i * 70}>
              <article className="h-full rounded-2xl glass-dark p-5 glow-ring">
                <span className="grid size-11 place-items-center rounded-xl border border-cream/20 bg-cream/10 text-cream">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{item.title}</h3>
                <p className="mt-1 text-sm text-cream/65">{item.note}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
