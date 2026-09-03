import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
  dark = false,
  className,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24",
        dark ? "surface-dark" : "bg-background",
        className,
      )}
    >
      {dark && <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14]" />}
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          {eyebrow && (
            <p
              className={cn(
                "text-[0.68rem] font-semibold uppercase tracking-[0.24em]",
                dark ? "text-cream/60" : "text-muted-foreground",
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "mt-2 font-display text-3xl font-bold sm:text-4xl",
              dark ? "text-gradient-cream" : "text-gradient-plum",
            )}
          >
            {title}
          </h2>
          <div
            className={cn(
              "mt-4 h-px w-24",
              dark ? "bg-cream/30" : "bg-primary/30",
            )}
          />
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
