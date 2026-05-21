import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { skills } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech Stack"
      description="The tools I reach for when shipping production-grade software."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:glow-ring"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {group.category}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}