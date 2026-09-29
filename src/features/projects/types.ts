export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  metric?: string;
  note?: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  role: string;
  context: string;
  stack: string[];
  image?: string;
  alt?: string;
  visual: "architecture" | "image" | "waveform";
  link: string;
  items?: ProjectItem[];
};

