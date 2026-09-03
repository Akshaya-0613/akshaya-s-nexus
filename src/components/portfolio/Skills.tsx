import {
  BrainCircuit,
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const icons = { Code2, MonitorSmartphone, Server, Database, BrainCircuit, Wrench, Sparkles } as const;

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon as keyof typeof icons];
          return (
            <Reveal key={group.title} delay={i * 60}>
              <article className="h-full rounded-2xl glass-light p-5 glow-ring">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl surface-dark">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
