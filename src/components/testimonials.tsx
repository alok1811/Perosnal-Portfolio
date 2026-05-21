import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/section";
import { testimonials } from "@/lib/portfolio-data";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Kind words"
      title="What collaborators say"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <Quote className="h-5 w-5 text-primary" />
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}