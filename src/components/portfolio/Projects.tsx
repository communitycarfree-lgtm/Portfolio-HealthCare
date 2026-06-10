import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Featured Work
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Healthcare products with <span className="gold-text">measurable impact</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground md:max-w-sm">
            A selection of platforms shipped for clinics, hospitals, and telehealth providers —
            each architected for compliance, scale, and clinician trust.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                filter === c
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card/40 text-muted-foreground hover:border-gold/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass group flex flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                    {p.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
