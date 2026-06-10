import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Skills & Expertise
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            A stack built for <span className="gold-text">clinical-grade</span> software.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From real-time telemedicine to multi-tenant EHR platforms — every layer hardened for
            security, compliance, and uptime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
