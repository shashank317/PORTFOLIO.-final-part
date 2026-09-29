import doubleExposure from "@/assets/double-exposure.png";
import cap from "@/assets/cap-portrait.png";
import type { Project } from "../types";

export const FEATURED_CASE_STUDIES: Project[] = [
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
    id: "ai-resume-enhancer-study",
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

export const PROJECTS: Project[] = [
  {
    id: "ai-computer-vision",
    number: "01",
    title: "AI & Computer Vision",
    description:
      "Applied machine learning, document parsing, and vision pipelines spanning hybrid DXF extraction, transfer learning, and NLP.",
    role: "Applied AI",
    context:
      "Production-focused computer vision pipelines and multi-model architectures. Built to process structured engineering assets, visual recognition tasks, and natural language sentiment.",
    stack: ["Python", "FastAPI", "TensorFlow", "OpenCV", "FAISS", "NLP"],
    visual: "architecture",
    link: "/projects",
    items: [
      {
        title: "CAD Drawing Reviewer (Flagship)",
        description:
          "Hybrid DXF review pipeline where text-first extraction from DXF serves as the source of truth, and a vision model fills items the text pass missed. RAG (FAISS, sentence-transformers) over client design standards validates dimensions and annotations.",
        stack: ["Python", "FastAPI", "RAG", "FAISS", "LLMs", "Vision models"],
        note: "Built during role at Cadmaxx (Confidential)",
        // repoUrl omitted (confidential)
        // TODO: add metric once available
      },
      {
        title: "Image Classification (ResNet50)",
        description:
          "TensorFlow/Keras + OpenCV transfer-learning pipeline with contour-based preprocessing, augmentation, evaluation, and confusion matrix.",
        stack: ["TensorFlow", "Keras", "OpenCV", "ResNet50"],
        repoUrl: "https://github.com/shashank317/image-classification-",
      },
      {
        title: "YouTube Comment Sentiment Analysis",
        description:
          "NLP pipeline (NLTK, TF-IDF/CountVectorizer) comparing Naive Bayes, Logistic Regression, SVC, Decision Tree, and Random Forest models.",
        stack: ["Python", "NLTK", "TF-IDF", "Scikit-learn"],
        repoUrl: "https://github.com/shashank317/Sentiment-Analysis",
      },
      {
        title: "Book Recommendation System",
        description:
          "KNN (ball_tree) algorithm on ratings, rating counts, and language, with a Streamlit interface.",
        stack: ["Python", "KNN", "Streamlit"],
        repoUrl: "https://github.com/shashank317/Book-Recommendation-System-using-KNN",
      },
      {
        title: "Vehicle Detection & Counting",
        description:
          "YOLO-based vehicle detection with TensorFlow and OpenCV on video with frame-level vehicle counting.",
        stack: ["TensorFlow", "OpenCV", "YOLO", "Python"],
        repoUrl: "https://github.com/shashank317/vehicle-detection-using-TensorFlow-and-opencv",
      },
      {
        title: "Landmark Recognition",
        description:
          "Pre-trained TensorFlow Hub landmark classifier with geopy geocoding to identify landmarks and return geographical coordinates.",
        stack: ["TensorFlow Hub", "geopy", "Python"],
        repoUrl: "https://github.com/shashank317/Landmark-Recognition-using-TensorFlow",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description:
      "APIs, multi-model LLM orchestration, structured document parsers, and authenticated full-stack architectures.",
    role: "Backend Engineering",
    context:
      "Backend systems built with Python, FastAPI, and Flask. Implements resilient API layers, external service integrations, and transactional database storage.",
    stack: ["Python", "FastAPI", "Flask", "SQLite", "Firebase", "REST APIs"],
    visual: "architecture",
    link: "/projects",
    items: [
      {
        title: "AI Resume Enhancer",
        description:
          "FastAPI + Gemini/OpenRouter multi-model orchestration with fallback, custom ATS scoring engine, and JSON repair/sanitisation.",
        stack: ["FastAPI", "Gemini API", "OpenRouter", "Python"],
        liveUrl: "https://ai-resume-enhancer-mz7s.onrender.com/",
        caseStudyUrl: "/projects/ai-resume-enhancer",
        // TODO: add repoUrl once available
      },
      {
        title: "Flask + Firebase Authentication",
        description:
          "Email/password authentication pipeline integrating Firebase into a modular Flask application.",
        stack: ["Flask", "Firebase", "Python"],
        repoUrl: "https://github.com/shashank317/Authentication-using-Flask",
      },
      {
        title: "Flask E-Commerce",
        description:
          "Flask + SQLite storefront with user authentication, product catalog, cart handling, checkout, and order history.",
        stack: ["Flask", "SQLite", "Python"],
        repoUrl: "https://github.com/shashank317/Flask-E-commmers-webpage",
      },
    ],
  },
  {
    id: "web-design-ai-agents",
    number: "03",
    title: "Web Design with AI Agents",
    description:
      "Frontend interfaces and design workflows built and iterated alongside autonomous AI coding agents.",
    role: "AI-assisted Web Design",
    context:
      "Explorations in rapid prototyping and full-stack web interfaces using AI agents. Repositories and live demonstrations will be populated soon.",
    stack: ["TypeScript", "React", "Tailwind CSS", "AI Agents"],
    visual: "waveform",
    link: "/projects",
    items: [],
  },
];

