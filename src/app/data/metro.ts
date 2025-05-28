export interface Experience {
  id: string;
  line: 'I' | 'R' | 'S';
  company: string;
  what: string;
  when: string;
  where: string;
  description: string;
}

export interface LineConfig {
  label: string;
  color: string;
  letter: 'I' | 'R' | 'S';
}

export const lineConfigs: Record<string, LineConfig> = {
  I: { label: 'Internship', color: '#5a9bd5', letter: 'I' }, // blue
  R: { label: 'Research', color: '#ff6b6b', letter: 'R' }, // red
  S: { label: 'Startup', color: '#6ABF6F', letter: 'S' }, // green
};

export const experiences: Experience[] = [
  {
    id: '1',
    line: 'R',
    company: 'Google',
    what: 'Software Engineer Intern',
    when: 'Summer 2024',
    where: 'Mountain View, CA',
    description: 'Developed machine learning models for Google Search, improving query understanding by 15%. Collaborated with senior engineers on large-scale distributed systems serving billions of users daily.'
  },
  {
    id: '2',
    line: 'S',
    company: 'Meta',
    what: 'Frontend Engineer Intern',
    when: 'Summer 2023',
    where: 'Menlo Park, CA',
    description: 'Built React components for Instagram web platform, focusing on accessibility and performance optimization. Implemented new features that increased user engagement by 8%.'
  },
  {
    id: '3',
    line: 'I',
    company: 'Stanford AI Lab',
    what: 'Research Assistant',
    when: '2023-2024',
    where: 'Stanford, CA',
    description: 'Conducted research on computer vision and natural language processing. Published 2 papers in top-tier conferences (CVPR, ICLR) on multimodal learning architectures.'
  },
  {
    id: '4',
    line: 'I',
    company: 'MIT CSAIL',
    what: 'Undergraduate Researcher',
    when: '2022-2023',
    where: 'Cambridge, MA',
    description: 'Developed novel algorithms for robotic perception and manipulation. Work contributed to a Nature Robotics publication on autonomous assembly systems.'
  }
];