import doubleExposure from "@/assets/double-exposure.png";
import cap from "@/assets/cap-portrait.png";
import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "teamsync",
    number: "01",
    title: "TeamSync",
    description:
      "An AI-powered project management platform that brings tasks, collaboration, analytics, and contextual AI assistance into a single workflow.",
    role: "Full-stack development",
    context:
      "Designed and built the application architecture, backend APIs, database workflows, and frontend experience.",
    stack: ["FastAPI", "PostgreSQL", "JavaScript", "Tailwind CSS", "OpenRouter API"],
    visual: "architecture",
    link: "/projects/teamsync",
  },
  {
    id: "ai-resume-enhancer",
    number: "02",
    title: "AI Resume Enhancer",
    description:
      "An AI-assisted resume optimization platform that analyzes resumes against job descriptions and uses structured feedback to generate targeted improvements.",
    role: "Full-stack development",
    context:
      "Built the backend document-processing pipeline, AI integration, ATS-oriented analysis workflow, and interactive frontend.",
    stack: ["Python", "FastAPI", "Gemini API", "JavaScript", "HTML / CSS"],
    image: doubleExposure,
    alt: "Black and white double exposure portrait used as an editorial transition",
    visual: "image",
    link: "/projects/ai-resume-enhancer",
  },
  {
    id: "whatsapp-gita-ai",
    number: "03",
    title: "WhatsApp Gita AI",
    description:
      "An automated system for verse selection, multilingual text-to-speech generation, scheduling, and WhatsApp delivery.",
    role: "Backend & automation",
    context:
      "Designed the application workflow around verse selection, AI-assisted context handling, text-to-speech generation, cloud-hosted audio, scheduling, and WhatsApp delivery.",
    stack: ["Python", "AWS S3", "Text-to-Speech", "Twilio", "Automation"],
    visual: "waveform",
    link: "/projects/whatsapp-gita-ai",
  },
];
