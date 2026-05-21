import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {e.period} · {e.location}
            </div>
            <h3 className="mt-1 text-lg font-semibold">{e.school}</h3>
            <div className="text-sm text-primary">{e.degree}</div>
            <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}