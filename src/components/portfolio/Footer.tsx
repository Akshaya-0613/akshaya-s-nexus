import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="surface-dark border-t border-cream/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
        <div>
          <p className="font-display text-sm font-semibold text-cream">
            © 2027 Allada Akshaya. Built with passion and code.
          </p>
          <p className="mt-1 text-xs text-cream/60">Backend Developer | AI &amp; ML Enthusiast</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            { href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: profile.github, icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-cream/20 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/60 hover:bg-cream/10"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
