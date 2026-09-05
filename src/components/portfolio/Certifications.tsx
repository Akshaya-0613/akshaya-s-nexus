import { Award, Briefcase } from "lucide-react";
import { certificates, internships } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { PdfButton } from "./PdfButton";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Internships & Certifications" dark>
      <div className="grid gap-4 md:grid-cols-2">
        {internships.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 70}>
            <article className="h-full rounded-2xl glass-dark p-6 glow-ring">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-cream/20 bg-cream/10 text-cream">
                  <Briefcase className="size-4" />
                </span>
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-cream/60">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cream/60">{item.org}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-12 font-display text-xl font-semibold text-cream">Certifications</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 70}>
            <article className="flex h-full flex-col justify-between rounded-2xl glass-dark p-5 glow-ring">
              <div>
                <span className="grid size-10 place-items-center rounded-xl border border-cream/20 bg-cream/10 text-cream">
                  <Award className="size-4" />
                </span>
                <h4 className="mt-4 font-display text-base font-semibold text-cream">{c.title}</h4>
                {c.issuer && <p className="mt-1 text-xs text-cream/60">{c.issuer}</p>}
              </div>
              <div className="mt-5">
                <PdfButton href={c.pdf} dark />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
