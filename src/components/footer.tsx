import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React, TanStack & Tailwind.
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          Crafted with <Heart className="h-3 w-3 fill-primary text-primary" /> in Bhubaneswar
        </div>
      </div>
    </footer>
  );
}