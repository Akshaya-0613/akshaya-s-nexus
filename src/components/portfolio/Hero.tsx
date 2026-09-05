import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ChevronRight,
  Download,
  FileText,
  Github,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";
import { profile, recruiterHighlights, typingRoles } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

const photo = "/profile.jpeg";

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
  const [recruiterSnapshotOpen, setRecruiterSnapshotOpen] = useState(false);
  const navigateToAboutAfterClose = useRef(false);

  const viewFullProfile = () => {
    navigateToAboutAfterClose.current = true;
    setRecruiterSnapshotOpen(false);
  };

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
                src={photo}
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
          <Dialog open={recruiterSnapshotOpen} onOpenChange={setRecruiterSnapshotOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group mx-auto flex items-center gap-3 rounded-full border border-plum-glow/80 bg-plum-deep/70 px-4 py-3 text-left text-sm font-bold text-cream shadow-[0_12px_35px_-20px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-cyan-400 hover:bg-plum/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80"
              >
                <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span>For Recruiters — 30-Second Snapshot</span>
                <ChevronRight className="size-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </DialogTrigger>

            <DialogContent
              onCloseAutoFocus={(event) => {
                if (!navigateToAboutAfterClose.current) return;
                event.preventDefault();
                navigateToAboutAfterClose.current = false;
                requestAnimationFrame(() => scrollTo("about"));
              }}
              className="max-w-xl rounded-[1.5rem] border-cream/15 bg-plum-deep p-0 text-cream shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)]"
            >
              <article className="p-5 text-left sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/60">
                    Quick Portfolio Overview
                  </p>
                  <DialogTitle className="mt-1 font-display text-2xl font-bold text-cream">
                    {profile.name}
                  </DialogTitle>
                  <p className="mt-1 text-sm font-medium text-cream/85">
                    Backend Developer · Full Stack Developer · AI &amp; ML
                  </p>
                </div>
                <span className="w-fit rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs font-medium text-cream/70">
                  B.Tech CSE · 2027
                </span>
              </div>

              <DialogDescription className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/70">
                AI/ML-focused developer building practical backend systems, REST APIs, and intelligent
                applications with Java, Python, and modern web technologies.
              </DialogDescription>

              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
                <div className="rounded-xl border border-cream/10 bg-cream/5 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/50">Target roles</p>
                  <p className="mt-1 font-medium text-cream/85">Backend / Full Stack</p>
                </div>
                <div className="rounded-xl border border-cream/10 bg-cream/5 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/50">Core stack</p>
                  <p className="mt-1 font-medium text-cream/85">Java · Python · SQL</p>
                </div>
                <div className="rounded-xl border border-cream/10 bg-cream/5 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/50">Availability</p>
                  <p className="mt-1 font-medium text-cream/85">Open to opportunities</p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {recruiterHighlights.slice(0, 5).map((h) => (
                  <li
                    key={h}
                    className="rounded-lg border border-cream/15 bg-cream/5 px-3 py-1.5 text-xs font-medium text-cream/85"
                  >
                    {h}
                  </li>
                ))}
              </ul>

                <button
                  onClick={viewFullProfile}
                  className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-cream px-4 py-2.5 text-sm font-semibold text-plum-deep transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View Full Profile
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                </button>
              </article>
            </DialogContent>
          </Dialog>
        </div>
      </Reveal>
    </section>
  );
}
