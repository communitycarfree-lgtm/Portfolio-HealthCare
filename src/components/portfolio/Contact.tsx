import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Send, ShieldCheck } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more (min 10 chars)"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    toast.success("Message sent — I'll get back to you within 24 hours.");
    reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Let's build something <span className="gold-text">your patients trust</span>.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell me about your clinic, hospital, or healthtech idea. I respond to every
              inquiry within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "hello@drcode.health" },
                { icon: MapPin, label: "Remote · Worldwide" },
                { icon: ShieldCheck, label: "NDA-friendly · HIPAA-aware" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  placeholder="Dr. Jane Doe"
                  className="input-base"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  placeholder="jane@clinic.com"
                  className="input-base"
                />
              </Field>
            </div>
            <Field label="Organization (optional)" error={errors.organization?.message}>
              <input
                {...register("organization")}
                placeholder="Greenfield Medical Group"
                className="input-base"
              />
            </Field>
            <Field label="How can I help?" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="We're a 4-clinic network looking to modernize our booking + EHR…"
                className="input-base resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.01] disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          background: color-mix(in oklab, var(--background) 60%, transparent);
          border: 1px solid var(--input);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-base::placeholder { color: var(--muted-foreground); }
        .input-base:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px var(--ring);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
