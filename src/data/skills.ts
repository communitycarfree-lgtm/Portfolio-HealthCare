import {
  Code2,
  Server,
  HeartPulse,
  Database,
  ShieldCheck,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", ".NET", "REST & GraphQL"],
  },
  {
    title: "Healthcare Domain",
    icon: HeartPulse,
    items: [
      "EHR / EMR Systems",
      "Telemedicine",
      "Appointment Booking",
      "Patient Portals",
      "Medical Billing",
      "Pharmacy & Inventory",
      "HL7 / FHIR Integration",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    items: ["HIPAA", "GDPR", "End-to-end Encryption", "Role-Based Access", "Audit Logging"],
  },
  {
    title: "Cloud & Realtime",
    icon: Cloud,
    items: ["AWS", "Azure", "WebSockets / WebRTC", "Docker", "CI/CD", "React Native"],
  },
];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Lead Full-Stack Engineer — Healthcare",
    org: "MediCore Health Systems",
    period: "2023 — Present",
    description:
      "Architected a multi-tenant clinic platform serving 12 branches. Led HIPAA compliance, FHIR integrations, and a team of 6 engineers.",
  },
  {
    role: "Senior Full-Stack Developer",
    org: "VitalLink Telehealth",
    period: "2021 — 2023",
    description:
      "Built a WebRTC telemedicine product from zero to 50k MAU. Designed end-to-end encryption and real-time vitals streaming.",
  },
  {
    role: "Full-Stack Developer",
    org: "ChartFlow EHR",
    period: "2019 — 2021",
    description:
      "Delivered EHR modules integrating HL7/FHIR with 30+ hospital systems. Cut clinician charting time by 30%.",
  },
  {
    role: "Software Engineer",
    org: "Independent Clinics Network",
    period: "2017 — 2019",
    description:
      "Developed appointment booking, billing, and patient portal modules for a network of 40+ private clinics.",
  },
];
