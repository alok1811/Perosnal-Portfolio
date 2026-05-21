import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/lib/portfolio-data";

function Typing({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      const next = deleting ? word.slice(0, sub.length - 1) : word.slice(0, sub.length + 1);
      setSub(next);
      if (!deleting && next === word) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return (
    <span className="gradient-text">
      {sub}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-primary align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--primary) 60%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for Summer 2026 internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Hi, I&apos;m {profile.firstName}. I build{" "}
          <Typing words={profile.roles} />{" "}
          <span className="block sm:inline">things for the web.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href={profile.resume} download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-4 text-left"
            >
              <div className="text-2xl font-semibold gradient-text sm:text-3xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" /> Scroll to explore
        </div>
      </div>
    </section>
  );
}