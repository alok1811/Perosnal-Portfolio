import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 30% 0%, color-mix(in oklch, var(--primary) 30%, transparent), transparent 60%), radial-gradient(circle at 80% 100%, color-mix(in oklch, var(--accent) 25%, transparent), transparent 60%)",
            }}
          />
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Have an idea worth shipping? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            I&apos;m currently open to internships, freelance backend work, and ambitious side projects.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={profile.resume} download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}