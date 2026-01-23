export type Project = {
  title: string;
  slug: string;
  oneLiner: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];

  overview?: string;
  visuals?: { label: string; src: string; alt: string}[];
};

export const projects: Project[] = [
  {
    title: "EB5 KnowledgeRAG",
    slug: "eb5-knowledgerag",
    oneLiner: "RAG pipeline with FAISS retrieval and LoRA fine-tuning for concise, grounded answers.",
    impact: [
      "Designed an end-to-end RAG pipeline with document chunking, embedding generation, and FAISS-based vector retrieval.",
      "Integrated retrieval results into prompt construction to constrain generation and reduce hallucinations.",
      "Applied LoRA fine-tuning using PEFT to adapt a lightweight language model to domain-specific query patterns.",
      "Packaged the system as an explainable demo with clear inputs, retrieved context, and generated outputs.",
    ],
    stack: ["Python", "FAISS", "Hugging Face", "PEFT", "Sentence-Transformers", "Pandas"],
    links: [{ label: "GitHub", href: "https://github.com/BenYadala-BCKY/EB5_KnowledgeRAG.git" }],
    overview:
      "Built to explore practical RAG design trade-offs, focusing on controllability, explainability, and deployment-friendly model sizes rather than raw benchmark scores.",
  },
  {
    title: "Trump Gold Card, EB-5 Investor Segmentation Report",
    slug: "gold-card-report",
    oneLiner: "Executive-style analysis summarizing EB-5 investor personas, regional demand patterns, and behavioral drivers.",
    impact: [
      "Synthesized publicly available and licensed datasets into a concise, decision-oriented narrative.",
      "Segmented investors by geography, motivation, and investment behavior to support strategic planning.",
      "Translated analytical findings into a one-page executive report with clear visuals and takeaways.",
    ],
    stack: ["Analytics", "Reporting", "Canva", "Stakeholder Communication"],
    overview:
      "Emphasized clarity, interpretability, and decision relevance over model complexity, mirroring real stakeholder-facing analytics work.",
  },
  {
    title: "Fan Sentiment Analysis",
    slug: "fan-sentiment-analysis",
    oneLiner: "NLP pipeline for extracting sentiment trends and recurring themes from large volumes of fan-generated text.",
    impact: [
      "Built a text processing pipeline to clean, normalize, and tokenize fan-generated content.",
      "Applied sentiment analysis and keyword-based theme extraction to identify recurring discussion patterns.",
      "Structured outputs to support downstream dashboards, reports, and recurring analytics workflows.",
    ],
    stack: ["Python", "NLP", "Text processing", "Visualization"],
    overview:
      "Focused on turning unstructured fan feedback into repeatable analytical signals suitable for weekly reporting and stakeholder consumption.",
  },
  {
    title: "Road Damage Detection with YOLOv8 (RDD2022)",
    slug: "YOLOv8-road-damage-detection",
    oneLiner: "Computer vision pipeline for detecting and classifying road damage using YOLOv8.",
    impact: [
      "Prepared and validated the RDD2022 dataset for object detection training.",
      "Trained a YOLOv8 model and iterated on augmentation and hyperparameters to stabilize learning.",
      "Evaluated detection outputs qualitatively and quantitatively to assess model behavior.",
      "Documented an end-to-end workflow covering training, inference, and result inspection.",
    ],
    stack: [
      "Python",
      "YOLOv8",
      "Ultralytics",
      "PyTorch",
      "Computer Vision",
      "Object Detection",
      "OpenCV",
    ],
    links: [{ label: "GitHub", href: "https://github.com/BenYadala-BCKY/YoloV8-Road-Damage-Detection.git" }],
    // Optional, start light now, expand later
    overview:
      "Implemented as a practical exploration of modern object detection workflows rather than a benchmark-chasing exercise.",
    visuals: [
      // Add once you place images in public/images/yolov8-road-damage-detection/
      // { label: "Training metrics", src: "/images/yolov8-road-damage-detection/training.png", alt: "YOLOv8 training curves" },
      // { label: "Sample detections", src: "/images/yolov8-road-damage-detection/predictions.png", alt: "Example road damage detections" },
    ],
  },
  {
    title: "Intelligent Agents and Decision Making (AI 533) RL Comparison",
    slug: "iadm-reinforcement-learning-comparison",
    oneLiner: "Comparative study of reinforcement learning algorithms in a stochastic gridworld environment.",
    impact: [
      "Implemented tabular SARSA, Q-learning, and SARSA(λ) with epsilon-greedy exploration.",
      "Implemented an Actor-Critic agent using linear function approximation.",
      "Conducted systematic hyperparameter tuning and analyzed learning curves across agents.",
      "Compared stability, convergence behavior, and reward trends across methods.",
    ],
    stack: [
      "Python",
      "Reinforcement Learning",
      "SARSA",
      "Q-learning",
      "Eligibility Traces",
      "Actor-Critic",
      "Policy Gradients",
      "Hyperparameter Search",
    ],
    links: [
      // Optional: if you have a repo, link it
      // { label: "GitHub", href: "https://github.com/BenYadala-BCKY/<repo>" },
      // Optional: add the PDF as a public asset later
      // { label: "Report (PDF)", href: "/docs/iadm-mp2.pdf" },
    ],
    overview:
      "Focused on understanding algorithmic trade-offs and learning dynamics rather than optimizing for a single score.",
    visuals: [
      // Add once you place images in public/images/iadm-reinforcement-learning-comparison/
      // { label: "Learning curve (SARSA)", src: "/images/iadm-reinforcement-learning-comparison/sarsa.png", alt: "SARSA learning curve" },
      // { label: "Learning curve (Q-learning)", src: "/images/iadm-reinforcement-learning-comparison/qlearning.png", alt: "Q-learning learning curve" },
      // { label: "Mean reward comparison", src: "/images/iadm-reinforcement-learning-comparison/mean-reward.png", alt: "Mean reward comparison chart" },
    ],
  },

];