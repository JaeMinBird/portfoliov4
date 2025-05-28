export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "rsam",
    title: "RSAM",
    description: "Sentiment analysis model that scrapes professor reviews, processes data, trains ML models, and provides interactive data visualization dashboard for students to explore insights and trends.",
    company: "Machine Learning, Data Analysis",
    year: "April 2025",
    image: "/images/first-draft.png"
  },
  {
    id: "timely",
    title: "Timely",
    description: "AI calendar assistant built in 24 hours that leverages LLMs for conversation-based schedule management, cross-device chat, and multi-model support with Google Calendar integration.",
    company: "Prompt Engineering, Hackathon Project",
    year: "March 2025",
    image: "/images/notifications.png"
  },
  {
    id: "ecommerce",
    title: "263 Studios",
    description: "Built a modern e-commerce platform from scratch with a custom CMS, real-time inventory syncing, secure payment processing, and a scalable backend architecture.",
    company: "Full Stack Development",
    year: "March 2025",
    image: "/images/design-system.png"
  }
];