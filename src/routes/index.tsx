import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr.Code — Full-Stack Healthcare & Clinic Systems Developer" },
      {
        name: "description",
        content:
          "Premium full-stack developer specialized in HIPAA-compliant EHR, telemedicine, and clinic management systems for hospitals and healthcare providers.",
      },
      { property: "og:title", content: "Dr.Code — Healthcare & Clinic Systems Developer" },
      {
        property: "og:description",
        content:
          "Building secure, compliant, and efficient digital solutions for hospitals, clinics, and telemedicine.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" richColors />
      </div>
    </ThemeProvider>
  );
}
