export type Project = {
  title: string;
  slug: string;
  oneLiner: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];
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
    links: [{ label: "GitHub", href: "https://github.com/your-username/your-repo" }],
  },
  {
    title: "Trump Gold Card, EB-5 Investor Segmentation Report",
    slug: "gold-card-report",
    oneLiner: "Executive one-pager summarizing investor personas and regional opportunities using verified datasets.",
    impact: [
      "Synthesized market and public datasets into an executive narrative.",
      "Created persona mapping and regional opportunity indexing for leadership decisions.",
    ],
    stack: ["Analytics", "Reporting", "Canva", "Stakeholder communication"],
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
];
