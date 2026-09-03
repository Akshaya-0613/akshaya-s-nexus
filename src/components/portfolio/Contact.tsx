import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});

  const validate = (v: Fields) => {
    const e: Partial<Fields> = {};
    if (!v.name.trim()) e.name = "Please enter your name";
    if (!v.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address";
    if (!v.subject.trim()) e.subject = "Please enter a subject";
    if (!v.message.trim()) e.message = "Please write a message";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Message ready — your email app is opening.");
    setValues(empty);
  };

  const field =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Something Great">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl glass-light p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-semibold text-foreground">Name</label>
                <input
                  id="name"
                  className={field}
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="text-xs font-semibold text-foreground">Subject</label>
              <input
                id="subject"
                className={field}
                placeholder="What is this regarding?"
                value={values.subject}
                onChange={(e) => setValues({ ...values, subject: e.target.value })}
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="text-xs font-semibold text-foreground">Message</label>
              <textarea
                id="message"
                rows={6}
                className={field}
                placeholder="Write your message here..."
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Send className="size-4" />
                Send Message
              </button>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Job Opportunity for Allada Akshaya")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                <Sparkles className="size-4" />
                Hire Me
              </a>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl glass-light p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Contact Information
            </p>
            <ul className="mt-4 grid gap-3">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: Linkedin, label: "linkedin.com/in/akshaya-allada", href: profile.linkedin },
                { icon: Github, label: "github.com/Akshaya-0613", href: profile.github },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45"
                  >
                    <span className="grid size-9 place-items-center rounded-lg surface-dark">
                      <Icon className="size-4" />
                    </span>
                    <span className="break-all">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Allada Akshaya</span> — open to Backend /
              Full Stack Developer opportunities starting 2027.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
