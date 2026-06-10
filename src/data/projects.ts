import clinic from "@/assets/project-clinic.jpg";
import telemed from "@/assets/project-telemed.jpg";
import ehr from "@/assets/project-ehr.jpg";
import booking from "@/assets/project-booking.jpg";
import pharmacy from "@/assets/project-pharmacy.jpg";

export type ProjectCategory =
  | "Clinic Management"
  | "Telemedicine"
  | "EHR Systems"
  | "Patient Portal"
  | "Booking Systems";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  stack: string[];
  metrics: string[];
}

export const projects: Project[] = [
  {
    title: "MediCore — Multi-Branch Clinic Management",
    description:
      "End-to-end platform unifying patient records, scheduling, billing, and analytics across 12 clinic locations.",
    image: clinic,
    category: "Clinic Management",
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "AWS"],
    metrics: ["15,000+ patients managed", "12 branches synced live", "HIPAA Compliant"],
  },
  {
    title: "VitalLink — Telemedicine Platform",
    description:
      "HIPAA-compliant video consultations with e-prescriptions, file sharing, and real-time vitals monitoring.",
    image: telemed,
    category: "Telemedicine",
    stack: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    metrics: ["99.98% call uptime", "<200ms latency", "End-to-end encrypted"],
  },
  {
    title: "ChartFlow — EHR / EMR System",
    description:
      "Unified electronic health records with HL7/FHIR interoperability, lab integrations, and clinical decision support.",
    image: ehr,
    category: "EHR Systems",
    stack: ["Next.js", ".NET", "SQL Server", "FHIR"],
    metrics: ["HL7/FHIR certified", "30% faster charting", "Zero PHI breaches"],
  },
  {
    title: "BookCare — Smart Booking & Patient Portal",
    description:
      "AI-assisted appointment scheduling with intake forms, reminders, and self-service patient dashboards.",
    image: booking,
    category: "Booking Systems",
    stack: ["React", "TypeScript", "Supabase", "Twilio"],
    metrics: ["Reduced no-shows by 45%", "+62% online bookings", "WCAG 2.1 AA"],
  },
  {
    title: "RxStock — Pharmacy & Inventory Suite",
    description:
      "Hospital-grade pharmacy management with expiry tracking, automated reordering, and drug-interaction alerts.",
    image: pharmacy,
    category: "Clinic Management",
    stack: ["React", "Express", "PostgreSQL", "Azure"],
    metrics: ["$1.2M annual savings", "98% stock accuracy", "FDA-aligned workflows"],
  },
];

export const categories = [
  "All",
  "Clinic Management",
  "Telemedicine",
  "EHR Systems",
  "Patient Portal",
  "Booking Systems",
] as const;
