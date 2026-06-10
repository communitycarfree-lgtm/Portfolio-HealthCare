import { motion } from "framer-motion";
import { Heart, Users, Award, Code } from "lucide-react";

const stats = [
  { icon: Heart, value: "7+", label: "Years in Healthcare Tech" },
  { icon: Users, value: "40+", label: "Clinics & Hospitals Served" },
  { icon: Code, value: "120+", label: "Production Deployments" },
  { icon: Award, value: "100%", label: "HIPAA Audits Passed" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              About Me
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Engineering trust into <span className="gold-text">every line of care</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer with deep specialization in healthcare and clinic
                management systems. Over the past seven years I've built HIPAA-compliant EHR
                platforms, telemedicine products, smart appointment systems, and pharmacy &
                inventory tooling used by hundreds of clinicians every day.
              </p>
              <p>
                My focus is the intersection of <span className="text-foreground">clinical
                workflow</span>, <span className="text-foreground">security</span>, and{" "}
                <span className="text-foreground">delightful UX</span>. I work closely with
                doctors, administrators, and compliance teams to turn complex regulations into
                products that feel effortless to use — without ever compromising patient data.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-3xl font-bold">{value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
