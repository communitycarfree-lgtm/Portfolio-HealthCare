import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/skills";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Experience
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            A career in <span className="gold-text">healthcare engineering</span>.
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-gold/60 via-border to-transparent md:left-1/2" />

          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-4 grid h-8 w-8 place-items-center rounded-full border border-gold/40 bg-background text-gold ${
                  i % 2 === 0 ? "left-0 md:-right-4 md:left-auto" : "left-0 md:-left-4"
                }`}
              >
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="glass rounded-2xl p-6 transition hover:border-gold/40">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {e.period}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.org}</div>
                <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
