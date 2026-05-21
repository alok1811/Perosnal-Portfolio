import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/section";
import { profile } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio contact — ${parsed.data.name}`,
    )}&body=${encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`)}`;
    setTimeout(() => {
      window.location.href = mailto;
      toast.success("Opening your email client…");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let&apos;s build something."
      description="Internships, collaborations, or just a hello — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 lg:col-span-2"
        >
          <div className="space-y-4 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-start gap-3 hover:text-primary">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div>{profile.email}</div>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-start gap-3 hover:text-primary">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div>{profile.phone}</div>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div>{profile.location}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Currently:</span> open to Summer
            2026 Software Engineering internships (Backend / Full Stack).
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" maxLength={100} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} className="mt-1.5" />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about the role, project or idea…"
              rows={5}
              maxLength={1000}
              className="mt-1.5"
            />
          </div>
          <Button type="submit" disabled={loading} className="mt-5 w-full rounded-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" /> {loading ? "Sending…" : "Send message"}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}