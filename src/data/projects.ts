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
      "Implemented FAISS vector search with embedding-based retrieval, improving response relevance by ~25 percent.",
      "Built a LoRA fine-tuning workflow using PEFT on flan-t5-small.",
      "Packaged the pipeline as an explainable demo with clear inputs and outputs.",
    ],
    stack: ["Python", "FAISS", "Hugging Face", "PEFT", "Sentence-Transformers", "Pandas"],
    links: [{ label: "GitHub", href: "https://github.com/BenYadala-BCKY/EB5_KnowledgeRAG.git" }],
  },
  {
    title: "Trump Gold Card, EB-5 Investor Segmentation Report",
    slug: "gold-card-report",
    oneLiner: "Executive one-pager summarizing investor personas and regional opportunities using verified datasets.",
    impact: [
      "Synthesized market and public datasets into an executive narrative.",
      "Created persona mapping and regional opportunity indexing for leadership decisions.",
    ],
    stack: ["Analytics", "Reporting", "Canva", "Stakeholder Communication"],
  },
  {
    title: "Fan Sentiment Analysis",
    slug: "fan-sentiment-analysis",
    oneLiner: "NLP pipeline to analyze fan emotion trends and summarize key themes across teams and games.",
    impact: [
      "Cleaned and processed text data to generate sentiment signals and themes.",
      "Created a repeatable analysis flow suitable for weekly reporting.",
      "Summarized insights so they can feed dashboards or stakeholder updates.",
    ],
    stack: ["Python", "NLP", "Text processing", "Visualization"],
  },
  {
    title: "Road Damage Detection with YOLOv8 (RDD2022)",
    slug: "yolov8-road-damage-detection",
    oneLiner: "Object detection pipeline to identify road damage classes using YOLOv8, optimized for accuracy and faster training.",
    impact: [
      "Trained and evaluated a YOLOv8 object detector on the RDD2022 dataset for road damage classification.",
      "Improved detection performance through dataset preparation, augmentation, and hyperparameter tuning.",
      "Documented an end-to-end workflow from labeling format, training runs, and inference to results review.",
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
      "Built an end-to-end object detection workflow to detect and classify road damage types using YOLOv8, with a focus on practical training speed and usable inference outputs.",
    visuals: [
      // Add once you place images in public/images/yolov8-road-damage-detection/
      // { label: "Training metrics", src: "/images/yolov8-road-damage-detection/training.png", alt: "YOLOv8 training curves" },
      // { label: "Sample detections", src: "/images/yolov8-road-damage-detection/predictions.png", alt: "Example road damage detections" },
    ],
  },
  {
    title: "Intelligent Agents and Decision Making (AI 533) RL Comparison",
    slug: "iadm-reinforcement-learning-comparison",
    oneLiner: "Implemented and compared tabular SARSA, Q-learning, SARSA(λ), and Actor-Critic, including grid search hyperparameter tuning and reward analysis.",
    impact: [
      "Implemented tabular SARSA, Q-learning, and SARSA(λ) with epsilon-greedy action selection and automated grid search over alpha and epsilon values.",
      "Implemented an Actor-Critic agent with linear function approximation and compared mean reward performance across methods.",
      "Reported learning curves and a final comparison showing Actor-Critic achieving the highest mean reward in the stochastic gridworld experiments.",
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
      "Built a small RL benchmark study by implementing multiple agents and comparing their learning dynamics and final rewards, emphasizing reproducible tuning and clear visualization.",
    visuals: [
      // Add once you place images in public/images/iadm-reinforcement-learning-comparison/
      // { label: "Learning curve (SARSA)", src: "/images/iadm-reinforcement-learning-comparison/sarsa.png", alt: "SARSA learning curve" },
      // { label: "Learning curve (Q-learning)", src: "/images/iadm-reinforcement-learning-comparison/qlearning.png", alt: "Q-learning learning curve" },
      // { label: "Mean reward comparison", src: "/images/iadm-reinforcement-learning-comparison/mean-reward.png", alt: "Mean reward comparison chart" },
    ],
  },

];