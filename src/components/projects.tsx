import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="A few systems I&apos;ve designed and shipped — from AI products to research."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:glow-ring"
          >
            <div
              aria-hidden
              className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-30`}
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.period}
                </div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="rounded-full border border-border bg-secondary/60 p-2 text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              {p.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Sparkle className="mt-0.5 h-3 w-3 text-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}