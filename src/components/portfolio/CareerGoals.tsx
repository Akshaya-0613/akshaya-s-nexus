import { Target } from "lucide-react";
import { careerHighlights, profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function CareerGoals() {
  return (
    <Section id="career" eyebrow="What's next" title="Career Goals" dark>
      <Reveal>
        <div className="rounded-2xl glass-dark p-7">
          <span className="grid size-11 place-items-center rounded-xl border border-cream/20 bg-cream/10 text-cream">
            <Target className="size-5" />
          </span>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream/80 sm:text-lg">
            “{profile.careerGoal}”
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {careerHighlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-cream/20 bg-cream/5 px-3 py-2 text-xs font-medium text-cream/85"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
