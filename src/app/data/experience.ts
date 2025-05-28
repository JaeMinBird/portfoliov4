import { ReactNode } from "react";

export type Tag = {
  label: string;
};

export type ExperienceData = {
  id: string;
  company: string;
  role: string;
  quote: string;
  when: string;
  where: string;
  tags: Tag[];
};

export const experienceData: Record<string, ExperienceData> = {
  peacock: {
    id: "peacock",
    company: "Peacock TV",
    role: "Design Partnership",
    quote: "Peacock has an incredible design team. Our partnership brings the best out of one other, and this relationship has shaped much about how RM thinks.",
    when: "Jun - Aug 2024",
    where: "New York, New York",
    tags: [
      { label: "PRODUCT & UX" },
      { label: "ENTERTAINMENT" },
    ],
  },
  // Add more experiences here
  netflix: {
    id: "netflix",
    company: "Netflix",
    role: "Senior Designer",
    quote: "Working at Netflix taught me the importance of data-driven design decisions and global scalability.",
    when: "Jan - May 2024",
    where: "Los Angeles, California",
    tags: [
      { label: "STREAMING" },
      { label: "UI/UX" },
      { label: "RESEARCH" },
    ],
  },
};

// Helper function to get experience by ID
export function getExperienceById(id: string): ExperienceData | undefined {
  return experienceData[id];
}

// Helper function to get all experience IDs
export function getAllExperienceIds(): string[] {
  return Object.keys(experienceData);
}

// Helper function to get all experiences as an array
export function getAllExperiences(): ExperienceData[] {
  return Object.values(experienceData);
}