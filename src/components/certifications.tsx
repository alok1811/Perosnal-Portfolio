import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "@/components/section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Research"
      title="Recognition"
      description="Publications and continued learning that shape my craft."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass flex h-full flex-col rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Award className="h-4 w-4" />
              </div>
              <span className="text-xs text-muted-foreground">{c.year}</span>
            </div>
            <h3 className="mt-3 text-base font-semibold leading-snug">{c.title}</h3>
            <div className="mt-1 text-xs text-primary">{c.issuer}</div>
            <p className="mt-3 text-sm text-muted-foreground">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}