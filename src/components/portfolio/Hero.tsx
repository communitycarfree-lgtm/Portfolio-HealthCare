import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-radial opacity-40" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            Available for healthcare projects · Q3 2026
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Full-Stack Developer
            <br />
            <span className="gold-text">Healthcare & Clinic</span> Systems
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Building secure, HIPAA-compliant, and efficient digital products for
            hospitals, clinics, and telemedicine providers worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 font-semibold transition hover:border-gold/40 hover:text-gold"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: ShieldCheck, label: "HIPAA Compliant", value: "100%" },
              { icon: Activity, label: "System Uptime", value: "99.98%" },
              { icon: Lock, label: "PHI Breaches", value: "Zero" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-4 text-left md:p-6"
              >
                <Icon className="h-5 w-5 text-gold" />
                <div className="mt-3 font-display text-2xl font-bold md:text-3xl">{value}</div>
                <div className="text-xs text-muted-foreground md:text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
