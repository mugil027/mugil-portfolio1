export const projects = [

  {
    id: 7,
    title: "Akira Pilates – Personalized Studio Website",
    description:
      "A personalized website built for a Pilates studio featuring a custom dashboard for managing classes, schedules, and client interactions. The platform includes a sleek, modern UI with smooth animations, a booking system, and an admin panel for the studio owner. Designed with a focus on clean aesthetics and seamless user experience to reflect the studio's premium brand identity.",
    tech: ["React", "Node.js", "Python", "CSS", "Responsive Design"],
    video: "/videos/AkiraV1.mp4",
    cover: "/images/AV.png",
    github: "",
    demo: "",
  },

  {
    id: 8,
    title: "Socionn V2 – Mobile App (Dark Mode)",
    description:
      "The next evolution of the Socionn mobile app featuring a completely redesigned dark mode interface. The V2 update brings an elevated visual experience with refined typography, smoother animations, and an optimized dark theme that reduces eye strain while maintaining the premium aesthetic. Every screen has been reimagined with improved contrast ratios and a cohesive dark color palette.",
    tech: ["Flutter", "Kotlin", "Swift", "PostgreSQL", "FFmpeg", "CDN", "R2 Cloudflare"],
    images: [
      "/images/D1.png",
      "/images/D2.png",
      "/images/D3.png",
      "/images/D4.png",
      "/images/D5.png",
   
    ],
    github: "",
    demo: "",
    appLinks: {
      android: "https://play.google.com/store/apps/details?id=com.socionn.app",
      ios: "https://apps.apple.com/app/6757596007"
    }
  },

  {
    id: 0,
    title: "Socionn - The Future of Social Connection",
    description:
      "A full-scale social media app I built from scratch for Android and iOS, with functionality comparable to Instagram. As the sole architect and engineer, I designed and implemented every layer: a Reels system with highly optimized video transcoding pipelines, feed ranking with efficient pagination, real-time interactions via WebSockets, secure authentication and APIs, complete backend services with database schema design, indexing, and performance tuning, media storage with CDN-style delivery, and production-grade deployment with monitoring. No templates, no boilerplate, no external team \u2013 every service, model, API, and optimization was engineered by me from the ground up.",
    tech: ["Flutter", "Kotlin", "Swift", "PostgreSQL", "FFmpeg", "CDN", "R2 Cloudflare"],
    images: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/6.png",
      "/images/7.png",
      "/images/4.png",
    ],
    github: "",
    demo: "",
    appLinks: {
      android: "https://play.google.com/store/apps/details?id=com.socionn.app",
      ios: "https://apps.apple.com/app/6757596007"
    }
  },

  {
    id: 9,
    title: "Socionn V2 – Web App (Improved UI & Dark Mode)",
    description:
      "A major redesign of the Socionn web platform with a completely overhauled UI and a stunning dark mode. The V2 web app features improved navigation, faster load times, refined component architecture, and a polished visual identity. The dark mode was crafted with careful attention to contrast, readability, and brand consistency, delivering a premium browsing experience across all screen sizes.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    video: "/videos/V2N1.mp4",
    cover: "/images/Cover1.png",
    github: "",
    demo: "https://www.socionn.com",
  },

  {
    id: 5,
    title: "Socionn \u2013 Platform Vision",
    description:
      "I'm Mugil, the founder and creator of Socionn. I built this platform to unify creators from Instagram, YouTube, GitHub, LinkedIn, and all other social platforms into one place, giving the world a single destination to discover their full digital identity.",
    tech: ["Python", "Airflow", "DAG", "AWS S3", "Snowflake", "dbt", "Docker", "Power BI"],
    video: "/videos/SocionnP.mp4",
    cover: "/images/cover3.png",
    github: "",
    demo: "https://www.socionn.com",
  },

  {
    id: 4,
    title: "E-Commerce Analytics System (Automated)",
    description:
      "Engineered a production-style ETL pipeline using Airflow to orchestrate ingestion from AWS S3 into Snowflake and automated transformation with dbt. Built Python-based data generators, Snowflake staging layers, and a curated fact model for end-to-end data warehousing. Containerized the pipeline with Docker and implemented S3 sensors, Snowflake COPY commands, and dbt workflows for reliable, fully automated daily data refresh.",
    tech: ["Python", "Airflow", "DAG", "AWS S3", "Snowflake", "dbt", "Docker", "Power BI"],
    video: "/videos/Ecom_videos.mp4",
    cover: "/images/Ecom_cover.png",
    github: "",
    demo: "",
  },

  {
    id: 3,
    title: "Live Air Traffic ETL Pipeline",
    description:
      "A complete real-time ETL pipeline for live air traffic monitoring built from scratch using Kafka, Zookeeper, PostgreSQL, Python, and FastAPI. The system extracts live flight data from the ADS-B Exchange API, streams it through Kafka topics, aggregates regional and city-wise metrics, and visualizes them on an interactive React dashboard.",
    tech: ["Kafka", "FastAPI", "PostgreSQL", "Python", "React", "Vercel"],
    video: "/videos/ETL_Flight.mp4",
    cover: "/images/ETL2.png",
    github: "https://github.com/mugil027/Live_Air_Traffic_Monitoring",
    demo: "",
  },

  {
    id: 1,
    title: "Land Deed Scrutinizer",
    description:
      "An AI-powered system for extracting key legal details from Indian land deeds using OCR and LLM summarization. It automates document analysis with FastAPI, Python, and Tesseract, allowing users to upload PDFs or scan physical deeds directly through their device's camera. The app enhances OCR accuracy through image cropping and uses Groq's LLaMA3-70B-8192 model to intelligently process text. It identifies deed types, parties, property details, and other document classifications. The extracted information is presented in a structured summary, streamlining legal document review and improving efficiency. Even non-deed documents are summarized clearly for easier understanding.",
    tech: ["FastAPI", "Tesseract", "Groq LLM", "Flutter / Streamlit"],
    images: [
      "/images/p1.jpg",
      "/images/p2.jpg",
      "/images/p3.jpg",
      "/images/p4.jpg",
      "/images/p5.jpg",
      "/images/p6.jpg",
    ],
    github: "https://github.com/mugil027/land-deed-scrutinizer-MobileAPP",
    demo: "",
  },

  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A full-stack React + Flask application designed for tracking expenses, managing budgets, and visualizing spending analytics. It features secure JWT authentication, automated email alerts powered by APScheduler, and real-time expense summaries. The app is fully responsive and deployed seamlessly on Render.",
    tech: ["React", "Flask", "MongoDB", "JWT", "Render", "Data Visualization"],
    video: "/videos/ExpenseTracker.mp4",
    cover: "/images/ExpenseCover.png",
    github: "https://github.com/mugil027/ExpenseTracker",
    demo: "https://expensetracker-1-hjsa.onrender.com/",
  },

  {
    id: 6,
    title: "Bird Classifier (CNN)",
    description:
      "A fine-tuned DenseNet121 convolutional neural network model built for bird species classification. The system includes a Flask-based API and a responsive front-end for image uploads and real-time predictions. It achieves high accuracy through model fine-tuning and transfer learning, providing a user-friendly interface for species recognition.",
    tech: ["TensorFlow", "Keras", "Machine Learning", "Flask", "Tailwind CSS"],
    video: "/videos/final_link.mp4",
    cover: "/images/image.png",
    github: "https://github.com/mugil027/BirdClassiferCNN_with_WebAPP",
    demo: "",
  },

];