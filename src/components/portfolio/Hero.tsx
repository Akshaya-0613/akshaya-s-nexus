import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  FileText,
  Github,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";
import { profile, recruiterHighlights, typingRoles } from "@/data/portfolio";
import photo from "@/assets/akshaya.jpeg.asset.json";
import { Reveal } from "./Reveal";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length]!;
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1500 : empty ? 260 : deleting ? 40 : 85;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Hero() {
  const typed = useTyping(typingRoles);

  return (
    <section id="home" className="relative overflow-hidden surface-dark pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18]" />
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-plum-glow/30 blur-3xl pulse-glow" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-burgundy/40 blur-3xl pulse-glow" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream/80">
            <Sparkles className="size-3.5" />
            {profile.status}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="group relative mx-auto mt-8 w-fit">
            <div
              className="pointer-events-none absolute -inset-4 rounded-full bg-plum-glow/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden
            />
            <div className="relative rounded-full glass-dark p-2 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.85)] ring-1 ring-plum-deep/60 transition-transform duration-500 group-hover:-translate-y-1">
              <img
                src={photo.url}
                alt="Portrait of Allada Akshaya"
                loading="eager"
                width={224}
                height={224}
                className="size-36 rounded-full object-cover object-center ring-1 ring-cream/25 sm:size-48 lg:size-56"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] text-gradient-cream sm:text-6xl lg:text-7xl">
            ALLADA AKSHAYA
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-4 text-base font-medium text-cream/85 sm:text-lg">{profile.title}</p>
          <p className="mt-1 font-display text-xl text-cream/70 sm:text-2xl">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 font-mono text-sm text-cream sm:text-base">
            <span className="text-cream/50">&gt; </span>
            {typed}
            <span className="caret-blink">|</span>
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
            “{profile.description}”
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-cream px-5 py-3 text-sm font-semibold text-plum-deep transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)]"
            >
              <Rocket className="size-4 transition-transform group-hover:-rotate-12" />
              View Projects
            </button>
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName}
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/10"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/10"
            >
              <FileText className="size-4" />
              View Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/10"
            >
              <Mail className="size-4" />
              Contact Me
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/10"
            >
              <Github className="size-4" />
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="relative mx-auto mt-14 max-w-3xl px-5">
          <article className="rounded-[1.5rem] glass-dark p-6 glow-ring">
            <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/60">
              For Recruiters — 30-Second Snapshot
            </p>
            <h2 className="mt-2 text-center font-display text-xl font-bold text-cream">
              {profile.name}
            </h2>
            <p className="mt-1 text-center text-sm font-medium text-cream/85">
              Backend Developer | Full Stack Developer | AI &amp; ML Enthusiast
            </p>
            <p className="text-center text-sm text-cream/60">{profile.status}</p>

            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {recruiterHighlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-cream/15 bg-cream/5 px-3 py-1.5 text-xs font-medium text-cream/85"
                >
                  {h}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("about")}
              className="group mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-cream px-5 py-3 text-sm font-semibold text-plum-deep transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Full Profile
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
