export const projects = [
  {
    id: 1,
    title: "Land Deed Scrutinizer",
    description:
      "An AI-powered system for extracting key legal details from Indian land deeds using OCR and LLM summarization. It automates document analysis with FastAPI, Python, and Tesseract, allowing users to upload PDFs or scan physical deeds directly through their device’s camera. The app enhances OCR accuracy through image cropping and uses Groq’s LLaMA3-70B-8192 model to intelligently process text. It identifies deed types, parties, property details, and other document classifications. The extracted information is presented in a structured summary, streamlining legal document review and improving efficiency. Even non-deed documents are summarized clearly for easier understanding.",
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
    tech: ["React", "Flask", "MongoDB", "JWT", "Render"],
    video: "/videos/ExpenseTracker.mp4",
    github: "https://github.com/mugil027/ExpenseTracker",
    demo: "",
  },
  {
    id: 3,
    title: "Bird Classifier (CNN)",
    description:
      "A fine-tuned DenseNet121 convolutional neural network model built for bird species classification. The system includes a Flask-based API and a responsive front-end for image uploads and real-time predictions. It achieves high accuracy through model fine-tuning and transfer learning, providing a user-friendly interface for species recognition.",
    tech: ["TensorFlow", "Keras", "Flask", "Tailwind CSS"],
    video: "/videos/final_link.mp4",
    github: "https://github.com/mugil027/BirdClassiferCNN_with_WebAPP",
    demo: "",
  },
];
