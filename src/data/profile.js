export const links = {
  github: "https://github.com/mugil027",
  linkedin: "https://www.linkedin.com/in/mugil-m-47597a352/",
  instagram: "https://www.instagram.com/mugil.27/",
  email: "mugil272000@gmail.com",
  emailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=mugil272000@gmail.com",
  phone: "+91 9880451553",
  resumePdf: "/Mugil_M_FE.pdf",
  socionn: "https://www.socionn.com",
};

export const roles = ["Full Stack Engineer", "Data Architect", "Founder of Socionn", "MSc Big Data Analytics"];

export const heroBio =
  "I build production-grade systems from scratch — social media platforms, data pipelines, AI applications. One engineer, end to end.";

export const about = {
  lead: "I'm Mugil — a Full Stack Engineer and the sole architect of Socionn, a production social media platform serving 10K+ concurrent users, built entirely by one person.",
  body: "Currently pursuing MSc Big Data Analytics, I work across the entire stack — from Flutter mobile apps to Kafka pipelines, from FastAPI backends to Snowflake data warehouses. No templates. No shortcuts. Every system engineered from the ground up.",
  summary:
    "Software Engineer specializing in scalable distributed systems and real-time infrastructure. Sole architect of a production-grade social platform supporting 10K+ concurrent users and 100K+ daily API requests with <200ms p95 latency and 99.9% uptime. Experienced in modern frontend frameworks including React.js & Next.js, Vue.js & Nuxt.js. Strong in backend architecture using FastAPI and Express, distributed system design, real-time messaging, and cloud-native deployment. Additionally built production ELT/ETL pipelines with Airflow, dbt, Snowflake, and Kafka, processing 100K+ records daily with sub-100ms streaming latency.",
};

export const journey = [
  {
    year: "2021",
    title: "The Origin Story",
    subtitle: "BSc Computer Science",
    description:
      "Started my journey into computer science. Fell in love with building things from scratch — every line of code felt like writing a new chapter.",
    tech: ["Python", "Java", "C", "Data Structures"],
  },
  {
    year: "2024",
    title: "Leveling Up",
    subtitle: "MSc Big Data Analytics + Production Apps",
    description:
      "Began MSc in Big Data Analytics while simultaneously shipping production applications. Built ELT pipelines, Kafka streaming, OCR+LLM systems, and air traffic analysis.",
    tech: ["Kafka", "Airflow", "dbt", "Snowflake", "TensorFlow"],
  },
  {
    year: "2025",
    title: "The Socionn Chapter",
    subtitle: "Founded & Built a Full Social Media Platform",
    description:
      "Designed, implemented, and deployed Socionn — a full-scale social media platform with real-time WebSockets, reels system, video transcoding, CDN delivery, and scalable infrastructure. Alone.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "AWS", "WebSockets"],
    flagship: true,
  },
  {
    year: "2026",
    title: "Live on the Stores",
    subtitle: "Socionn on Android & iOS — Now",
    description:
      "Socionn officially launches on Google Play and App Store. 5K+ concurrent chat sessions, 500+ video uploads/day, 10K+ concurrent users, 99.9% uptime. The dream is live.",
    tech: ["Android", "iOS", "Production", "Scale"],
    current: true,
  },
];

export const skillGroups = [
  { label: "Languages", skills: ["Python", "JavaScript / TypeScript", "SQL", "HTML5", "CSS3"] },
  { label: "Frontend", skills: ["React.js & Next.js", "Vue.js & Nuxt.js", "AngularJS", "Tailwind CSS", "Framer Motion", "PWA", "Responsive Design"] },
  { label: "Backend & APIs", skills: ["FastAPI", "Node.js (Express)", "RESTful APIs", "GraphQL", "WebSockets", "Microservices", "JWT", "OAuth2", "Rate Limiting"] },
  { label: "Database & Caching", skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis (caching, pub/sub)", "Distributed Systems"] },
  { label: "Cloud & DevOps", skills: ["AWS (EC2, S3)", "Cloudflare (R2, CDN)", "Docker", "Nginx", "GitHub Actions", "CI/CD"] },
  { label: "Data Engineering", skills: ["Apache Airflow", "dbt", "Snowflake", "Apache Kafka", "ELT / ETL Pipelines", "Power BI"] },
  { label: "Mobile", skills: ["Flutter (cross-platform)", "Android (Kotlin)", "iOS (Swift)"] },
  { label: "AI / ML", skills: ["TensorFlow", "Keras", "OpenAI API", "LLM Function Calling", "Tesseract OCR"] },
];

export const experience = [
  {
    company: "Socionn",
    companyUrl: "https://www.socionn.com",
    role: "Founding Full Stack Engineer",
    type: "Founder · Sole Architect",
    period: "2025 – Present",
    stack: ["React.js", "Next.js", "FastAPI", "TypeScript", "PostgreSQL", "RESTful APIs", "WebSockets", "Redis", "Docker", "FFmpeg"],
    description:
      "Sole architect and engineer of a real-time social media platform across web, Android, iOS, backend, and infrastructure. Owned the entire product lifecycle from system design to production operations.",
    bullets: [
      { bold: "10K+ concurrent users · 100K+ daily API requests · <200ms p95 latency", text: " - Architected an end-to-end distributed platform, designing service boundaries across feeds, chat, notifications, media, and authentication domains." },
      { bold: "25+ table PostgreSQL schema", text: " - Modeled and optimized for social graph queries and feed generation at scale." },
      { bold: "70% database load reduction", text: " - Achieved via multi-layer caching (Redis + in-process LRU), enabling 3× traffic spike tolerance." },
      { bold: "5K+ concurrent WebSocket sessions", text: " - Built real-time messaging system with delivery guarantees and <50ms notification latency." },
      { bold: "500+ video uploads/day · 60% buffering reduction", text: " - Engineered async video processing pipeline (FFmpeg + HLS/DASH)." },
      { bold: "99.9% uptime · zero-downtime deployments", text: " - Containerized with Docker and implemented CI/CD pipelines." },
      { bold: "Zero critical vulnerabilities", text: " - Implemented authentication, OAuth2 flows, rate limiting, and abuse protection - passed full security review." },
    ],
  },
];

export const featuredProject = {
  title: "AI-Powered Mail Client",
  subtitle: "Autonomous UI Control via LLM Function Calling",
  demo: "https://mailappfrontend.vercel.app/",
  stack: ["Next.js (TypeScript)", "FastAPI", "Gmail API", "OAuth2", "SSE", "Zustand", "OpenAI Function Calling"],
  bullets: [
    { bold: "Deterministic LLM function-calling pipeline", text: " - enabling natural language → typed UI state transitions." },
    { bold: "Real-time inbox sync", text: " - using Server-Sent Events, Gmail History API, and resilient polling fallback." },
    { bold: "RFC-compliant email threading", text: " - MIME parsing and token auto-refresh for long-lived sessions." },
    { bold: "Finite state machine + action dispatcher", text: " - for single-cycle command execution and idempotent updates." },
    { bold: "OAuth2 authorization flow", text: " - secure token storage and refresh rotation." },
    { bold: "Zustand state management", text: " - optimized to prevent redundant renders and race conditions." },
  ],
};

export const infraProjects = [
  {
    title: "E-Commerce Intelligence Analytics System",
    stack: ["Python", "Airflow", "AWS S3", "Snowflake", "dbt", "Docker", "Power BI"],
    bullets: [
      "Architected fully automated ELT pipeline processing 50K+ daily transactions from AWS S3 to Snowflake, reducing manual processing by 90%.",
      "Designed 3-layer dbt transformation architecture (staging → intermediate → marts) with 25+ models implementing star schema for analytics.",
      "Orchestrated workflows using Apache Airflow with 12+ DAGs, implementing task dependencies, retry logic, and SLA monitoring.",
    ],
  },
  {
    title: "Live Air Traffic Monitoring Pipeline",
    stack: ["Apache Kafka", "Python", "FastAPI", "PostgreSQL", "Docker"],
    bullets: [
      "Engineered high-throughput Kafka pipeline processing 10K+ flight telemetry records per minute with sub-100ms latency.",
      "Designed Kafka topic architecture with 8-partition strategy achieving parallel processing and 300% throughput improvement.",
      "Implemented real-time data enrichment (geocoding, airline mapping) using Python consumer groups, transforming raw data to analytics-ready format.",
    ],
  },
  {
    title: "Land Deed Extraction Pipeline (OCR + LLM)",
    stack: ["Python", "FastAPI", "Tesseract OCR", "GPT-4 API", "PostgreSQL"],
    bullets: [
      "Designed multi-stage automated pipeline (ingestion → OCR → cleaning → LLM parsing → validation) processing 500+ documents daily, reducing manual entry by 85%.",
      "Leveraged LLM APIs with engineered prompts to extract structured fields from unstructured OCR text with 92% field-level accuracy.",
    ],
  },
];

export const achievements = [
  { value: "10K+", label: "Concurrent Users", desc: "Sole-architected production distributed platform with <200ms p95 latency" },
  { value: "99.9%", label: "Uptime", desc: "Maintained SLA across 6 months of continuous production operation" },
  { value: "70%", label: "DB Load Reduction", desc: "Multi-layer caching (Redis + LRU), enabling 3× traffic spike tolerance" },
  { value: "100K+", label: "Daily API Requests", desc: "Handled at scale across feeds, chat, notifications, media & auth" },
  { value: "500+", label: "Video Uploads/Day", desc: "Async FFmpeg pipeline with HLS/DASH, reducing buffering by 60%" },
  { value: "5K+", label: "Concurrent Chat Sessions", desc: "WebSocket messaging with <50ms delivery latency & guarantees" },
  { value: "90%", label: "Manual Processing Cut", desc: "ELT pipeline processing 50K+ daily transactions (S3 → Snowflake)" },
  { value: "92%", label: "Field-Level Accuracy", desc: "OCR + LLM extraction pipeline processing 500+ documents/day" },
  { value: "300%", label: "Throughput Boost", desc: "Kafka 8-partition architecture for 10K+ flight records/min" },
  { value: "Zero", label: "Critical Vulnerabilities", desc: "Auth, OAuth2, rate limiting & abuse prevention passed security review" },
];

export const education = [
  { degree: "MSc in Big Data Analytics", institution: "St. Joseph's University", location: "Bengaluru, India", period: "2024 – 2026", status: "In Progress" },
  { degree: "BSc in Computer Science", institution: "St. Joseph's College", location: "Bengaluru, India", period: "2021", status: "Completed" },
];

export const contactPitch =
  "I build data-driven, AI-powered applications from the ground up. Open for collaborations, senior engineering roles, and ambitious product ideas.";

export const heroMetrics = [
  { value: "10K+", label: "Concurrent users", sub: "<200ms p95 latency" },
  { value: "99.9%", label: "Uptime", sub: "Production" },
  { value: "100K+", label: "Daily API requests", sub: "Feeds, chat, media, auth" },
  { value: "5K+", label: "Live chat sessions", sub: "WebSocket real-time" },
];

export const proficiency = [
  { name: "Python", level: 95, cat: "Languages" },
  { name: "JavaScript", level: 93, cat: "Languages" },
  { name: "TypeScript", level: 88, cat: "Languages" },
  { name: "SQL", level: 92, cat: "Languages" },
  { name: "React", level: 94, cat: "Frontend" },
  { name: "Next.js", level: 88, cat: "Frontend" },
  { name: "Vue.js", level: 82, cat: "Frontend" },
  { name: "Tailwind", level: 96, cat: "Frontend" },
  { name: "FastAPI", level: 93, cat: "Backend" },
  { name: "Node.js", level: 90, cat: "Backend" },
  { name: "GraphQL", level: 84, cat: "Backend" },
  { name: "WebSockets", level: 92, cat: "Backend" },
  { name: "PostgreSQL", level: 90, cat: "Database" },
  { name: "MongoDB", level: 86, cat: "Database" },
  { name: "Redis", level: 88, cat: "Database" },
  { name: "AWS", level: 85, cat: "Cloud" },
  { name: "Docker", level: 87, cat: "Cloud" },
  { name: "Kafka", level: 88, cat: "Data Eng" },
  { name: "Airflow", level: 85, cat: "Data Eng" },
  { name: "Snowflake", level: 83, cat: "Data Eng" },
  { name: "dbt", level: 84, cat: "Data Eng" },
  { name: "Flutter", level: 90, cat: "Mobile" },
  { name: "TensorFlow", level: 82, cat: "AI/ML" },
  { name: "OpenAI API", level: 88, cat: "AI/ML" },
];
