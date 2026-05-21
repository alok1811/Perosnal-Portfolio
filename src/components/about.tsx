import { motion } from "framer-motion";
import { Code2, Database, Rocket, Server } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/lib/portfolio-data";

const pillars = [
  { icon: Server, title: "Backend Engineering", text: "REST APIs, auth flows, data modeling and reliability." },
  { icon: Database, title: "Data & Persistence", text: "PostgreSQL, Prisma, MongoDB — designed for scale." },
  { icon: Code2, title: "Full Stack Delivery", text: "React + Node end-to-end, with crisp UX details." },
  { icon: Rocket, title: "AI Integrations", text: "Groq, Gemini, OCR pipelines into real products." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A backend-leaning full stack engineer in the making.">
      <div className="grid items-start gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            {profile.about}
          </p>
          <p className="mt-4 text-muted-foreground">
            I&apos;m most interested in the layer where product meets infrastructure — API
            design, schema modeling, background jobs and the deployment pipeline that
            keeps everything boring in the best way.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-4"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <p.icon className="h-4 w-4" />
              </div>
              <div className="font-medium">{p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}