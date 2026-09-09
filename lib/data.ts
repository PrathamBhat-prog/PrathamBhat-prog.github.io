export const profile = {
  name: "Pratham Bhat",
  title: "AI & Machine Learning Engineer",
  tagline:
    "Building production-grade AI systems across NLP, computer vision, and MLOps — from clinical intelligence to real-time inference.",
  email: "prathambhat75@gmail.com",
  phone: "+91 8073810591",
  github: "https://github.com/PrathamBhat-prog",
  linkedin: "https://www.linkedin.com/in/pratham-bhat-62bb0a32a/",
  avatar: "/profile/pratham-bhat.png",
  education: {
    school: "Dayananda Sagar College of Engineering",
    degree: "B.E. Artificial Intelligence and Machine Learning",
    period: "2022 – 2026",
    gpa: "9.00/10",
  },
};

export const experience = [
  {
    company: "Beyond Five",
    role: "AI Freelance Engineer",
    period: "August 2026 – Present",
    logo: "/logos/beyond-five.png",
    bullets: [
      "Optimized AI-powered document generation by eliminating unnecessary reasoning calls and introducing deterministic preprocessing, validation, caching, and artifact reuse.",
      "Significantly reduced inference costs while maintaining high-quality outputs.",
      "Shipped the production system to GCP.",
    ],
  },
  {
    company: "LPA GLOBAL LLP",
    role: "AI Automation Intern",
    period: "May 2026 – July 2026",
    logo: "/logos/lpa-global.png",
    bullets: [
      "Engineered backend AI automation services using Python, PostgreSQL, Supabase, and Railway.",
      "Built data validation pipelines and event-driven workflows.",
      "Developed a Reactivation Call Bot that automated dormant lead outreach by integrating Bitrix24 CRM, 3CX telephony, and role-based workflow orchestration for intelligent lead assignment.",
    ],
  },
  {
    company: "Nokia",
    role: "Project Intern",
    period: "September 2025 – December 2025",
    logo: "/logos/nokia.png",
    bullets: [
      "Contributed to the project Estimation of Site-Specific Radio Propagation Loss.",
      "Applied machine learning techniques and conducted a comparative analysis of multiple ML models to predict signal attenuation and radio propagation loss across varying site-specific conditions.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  github: string;
  screenshot?: string;
  screenshots?: string[];
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "ai-debate-panel",
    title: "AI Debate Panel",
    github: "https://github.com/PrathamBhat-prog/AI-Debate-Panel",
    screenshot: "/screenshots/ai-debate-panel.png",
    stack: [
      "FastAPI",
      "Next.js 14",
      "WebSockets",
      "OpenAI",
      "Groq",
      "SQLAlchemy",
      "ChromaDB",
      "ElevenLabs",
      "GSAP",
      "Three.js",
    ],
    highlights: [
      "Built a multi-agent GenAI debate platform: users assemble 2–5 structured personas (29 predefined + LLM-generated custom voices), a moderator agent routes turns via forced `direct_debate` tool calls, and a `DebateOrchestrator` streams token-by-token replies over WebSockets with barge-in support in audio mode.",
      "Backend is DB-agnostic (repository interfaces + composition root): SQLite/Neon for sessions & transcript, diskcache/Redis for rolling transcript, Chroma for persona RAG. LLM/TTS/STT chains fail over (OpenAI → Groq; OpenAI → ElevenLabs → Sarvam) with circuit-breaking on dead keys.",
      "Audio path uses sentence-chunked TTS in a background worker so debate generation never blocks on network latency; frontend plays MP3 frames with karaoke captions. Closing sequence produces persisted minutes-of-meeting for History/Replay.",
    ],
  },
  {
    id: "stock-analyser",
    title: "AI Stock Analysis Recommendation Platform",
    github:
      "https://github.com/PrathamBhat-prog/AI-Stock-Analysis-Recommendation-Platform",
    screenshot: "/screenshots/stock-analyser.png",
    stack: [
      "FastAPI",
      "yfinance",
      "GDELT",
      "CatBoost",
      "scikit-learn",
      "vaderSentiment",
      "FinBERT",
      "Gradio",
      "AWS",
      "Docker",
      "MLflow",
    ],
    highlights: [
      "Built a full-stack stock analysis platform that combines a CatBoost direction model, technical trend signals, a volatility-risk overlay, news sentiment, and inverse-volatility position sizing into BUY / SELL / HOLD output.",
      "Trained Sniper v5 on 10 years of prices for 32 US and India listings to estimate the probability that the close is higher after 10 trading sessions. Used a per-ticker chronological 70/15/15 split, CatBoost early stopping, and a classification threshold chosen on validation. Held-out test: 53.8% accuracy, 0.50 ROC-AUC.",
      "Shipped inference through FastAPI and a Gradio dashboard; containerized with Docker; deployed on AWS (ECR, ECS Fargate, Application Load Balancer); logged training with MLflow and run CI on GitHub Actions.",
    ],
  },
  {
    id: "cephai",
    title: "AI-Based Landmark Detection for Cephalometric Analysis",
    github:
      "https://github.com/PrathamBhat-prog/AI-Based-Landmark-Detection-for-Correlation-of-Upper-Pharyngeal-Airway-and-Mandibular-Position",
    screenshot: "/screenshots/cephai.png",
    stack: ["TensorFlow", "FastAPI", "React", "scikit-learn"],
    highlights: [
      "Developed an AI-powered cephalometric analysis platform integrating deep learning (hybrid CNN/U-Net) with a segmentation-guided regression pipeline and heatmap refinement models for automated skeletal landmark localization, achieving 92.4% SDR@4mm.",
      "Built a FastAPI-based clinical workflow with automated inference and report generation, cutting manual orthodontic analysis time from 15–20 minutes to seconds.",
    ],
  },
  {
    id: "medical-assistant",
    title: "Secure RBAC-Enabled Medical RAG Assistant",
    github:
      "https://github.com/PrathamBhat-prog/Secure-RBAC-Medical-RAG-Healthcare-Assistant",
    screenshot: "/screenshots/medical-assistant.png",
    stack: [
      "LangChain",
      "Ollama",
      "Pinecone",
      "PostgreSQL",
      "Supabase",
      "FastAPI",
      "Streamlit",
      "Groq",
    ],
    highlights: [
      "Engineered a secure Generative AI Medical Assistant using Retrieval-Augmented Generation (RAG) and LLM, integrating Groq (Llama-3) for cloud inference and Ollama for local embeddings.",
      "Backed by Pinecone vector search and Supabase PostgreSQL for user/role storage; deployed an interactive Streamlit interface for real-time document querying with role-based access for doctors, nurses, patients, and admins.",
    ],
  },
  {
    id: "drowsiness-detection",
    title: "Real-Time Drowsiness & Attention Detection System",
    github:
      "https://github.com/PrathamBhat-prog/real-time-drowsiness-detection",
    screenshots: [
      "/screenshots/drowsiness-attentive.png",
      "/screenshots/drowsiness-drowsy.png",
      "/screenshots/drowsiness-metrics.png",
    ],
    stack: [
      "OpenCV",
      "MediaPipe",
      "FastAPI",
      "WebSockets",
      "Streamlit",
    ],
    highlights: [
      "Built a real-time computer vision system that monitors users through a webcam to detect drowsiness and attentiveness using facial landmarks, Eye Aspect Ratio (EAR), and head orientation.",
      "Combined a FastAPI backend with WebSocket-based live video streaming, in-memory metrics, and a Streamlit dashboard for real-time monitoring and explainable state reporting.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "FastAPI",
      "LangChain",
      "Streamlit",
      "Gradio",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "CatBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Pinecone"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "AWS",
      "GCP",
      "Railway",
      "MLflow",
      "Hugging Face",
      "Ollama",
      "Bitrix24 CRM",
      "YOLO",
    ],
  },
  {
    title: "Domains",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Generative AI",
      "Computer Vision",
      "Retrieval-Augmented Generation (RAG)",
      "MLOps",
    ],
  },
];

export const achievements = [
  {
    title: "Best Project of the Year 2025–2026",
    detail:
      "Awarded by the Karnataka State Council for Science and Technology (KSCST), 49th State-Level Student Project Programme, for the AI-Based Landmark Detection project.",
  },
];

export const certifications = [
  {
    title: "Google Cloud Career Launchpad – Cloud Engineer Track",
    issuer: "Google Cloud",
  },
];
