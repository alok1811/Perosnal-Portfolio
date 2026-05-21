import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { profile } from "@/lib/portfolio-data";

function seededRand(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function Contributions() {
  const days = 7 * 26; // ~6 months
  const cells = Array.from({ length: days }, (_, i) => {
    const r = seededRand(i);
    return r > 0.85 ? 4 : r > 0.65 ? 3 : r > 0.45 ? 2 : r > 0.2 ? 1 : 0;
  });

  const levels = [
    "bg-secondary/60",
    "bg-primary/25",
    "bg-primary/45",
    "bg-primary/70",
    "bg-primary",
  ];

  return (
    <Section
      id="contributions"
      eyebrow="Activity"
      title="Building in public"
      description="A snapshot of recent open-source and project commits."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-4xl rounded-3xl p-6"
      >
        <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>{cells.filter((c) => c > 0).length} contributions · last 6 months</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            github.com/alok1811
          </a>
        </div>
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: `repeat(26, minmax(0, 1fr))` }}
        >
          {Array.from({ length: 26 }).map((_, col) => (
            <div key={col} className="grid gap-1" style={{ gridTemplateRows: "repeat(7, 1fr)" }}>
              {Array.from({ length: 7 }).map((_, row) => {
                const idx = col * 7 + row;
                return (
                  <div
                    key={idx}
                    className={`aspect-square w-full rounded-[3px] ${levels[cells[idx]]}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
          Less
          {levels.map((l, i) => (
            <span key={i} className={`h-3 w-3 rounded-[3px] ${l}`} />
          ))}
          More
        </div>
      </motion.div>
    </Section>
  );
}