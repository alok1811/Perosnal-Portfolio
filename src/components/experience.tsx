import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/section";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I&apos;ve worked"
      description="Internships, leadership and community engagement."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-12 sm:pl-0"
            >
              <div className="absolute left-2 top-3 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card sm:left-1/2 sm:-translate-x-1/2">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>
              <div
                className={`glass rounded-2xl p-5 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:ml-auto" : ""
                }`}
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period} · {e.location}
                </div>
                <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                <div className="text-sm text-primary">{e.company}</div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}