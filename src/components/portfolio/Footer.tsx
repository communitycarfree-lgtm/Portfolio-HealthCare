import { Stethoscope, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 font-display text-base font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-gold-foreground">
            <Stethoscope className="h-4 w-4" />
          </span>
          Dr<span className="gold-text">.</span>Code
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Crafted for healthcare with care.
        </div>
        <div className="flex items-center gap-2">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/40 text-muted-foreground transition hover:border-gold/40 hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
