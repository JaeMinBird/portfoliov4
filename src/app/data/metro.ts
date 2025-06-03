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
    company: 'Upstate Accounting & Tax',
    what: 'Web Developer Intern',
    when: 'May 2024 - Aug 2024',
    where: 'Albany, NY',
    description: 'Designed 5+ interactive UI/UX prototypes in Figma, developed mobile-optimized website with JavaScript and REST API integration, and built 10+ dynamic PHP modules with Docker containerization and CI/CD automation.'
  },
  {
    id: '4',
    line: 'I',
    company: 'Mindburn Solutions',
    what: 'Support Technician',
    when: 'Jul 2021 - Aug 2023',
    where: 'Harrisburg, PA',
    description: 'Maintained MySQL databases with 600+ inventory records, assisted disaster recovery for 100,000+ customer records, and deployed secure server environments for 5+ business clients.'
  }
];