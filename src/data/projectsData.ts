interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  coverImage?: string;
  tags: string[];
  link?: string;
  date?: string;
}

export const projectsData: Project[] = [
  {
    id: "viranova",
    title: "Viranova",
    subtitle: "AI-Powered Content Extraction Platform",
    description: "An AI platform for automatically extracting and converting long-form videos into engaging short-form content. Built with state-of-the-art ML models for topic detection and saliency analysis.",
    image: "https://via.placeholder.com/600x400",
    coverImage: "https://via.placeholder.com/1200x600",
    tags: ["AI", "Machine Learning", "Video Processing", "Python", "React", "Kubernetes", "AWS"],
    link: "https://www.viranova.io",
    date: "2022-2023"
  },
  {
    id: "conventa",
    title: "Conventa",
    subtitle: "Duolingo meets Psychology Books",
    description: "A mobile-first learning platform for psychology and soft skills, designed to make professional development more accessible and engaging. Built with React and Firebase, featuring PWA capabilities for offline learning.",
    image: "/src/assets/conventa/dashboard.png",
    coverImage: "/src/assets/conventa/landing-page.png",
    tags: ["React", "Firebase", "PWA", "Figma", "User Research", "Mobile First"],
    link: "https://www.conventa.net",
    date: "2021-2022"
  },
  {
    id: "project2",
    title: "Project Two",
    description: "A machine learning platform for automated decision making. Leveraged AI models and data analytics.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Python", "Machine Learning", "AI", "React"],
    link: "https://example.com"
  },
  {
    id: "project3",
    title: "Project Three",
    description: "Mobile application for on-demand services. Built with React Native and Firebase.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "https://example.com"
  },
  {
    id: "project4",
    title: "Project Four",
    description: "Blockchain-based identity verification system using Ethereum smart contracts.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Blockchain", "Ethereum", "Solidity", "Web3"],
    link: "https://example.com"
  }
]; 