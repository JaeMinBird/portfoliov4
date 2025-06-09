import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ArticleProps {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  readTime: string;
  content: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  date,
  author,
  readTime,
  content
}) => {
  // Navigation sidebar links
  const navLinks = [
    { title: 'Design Goals', href: '#design-goals' },
    { title: 'Component Architecture', href: '#component-architecture' },
    { title: 'Responsive Considerations', href: '#responsive-considerations' },
    { title: 'Animation with Framer Motion', href: '#animation' },
    { title: 'State Management Challenges', href: '#state-management' },
    { title: 'Next Steps', href: '#next-steps' },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 py-8 gap-8">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-1/4 md:sticky md:top-24 self-start">
        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block text-gray-600 hover:text-red-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main article content */}
      <main className="w-full md:w-3/4">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-red-600 mb-8 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="uppercase tracking-wider font-medium">Back to the main blog</span>
        </Link>

        {/* Article header */}
        <div className="mb-12">
          <div className="text-gray-500 mb-2">{date}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
          
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Posted By {author}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Article divider */}
        <div className="border-b border-gray-200 mb-8"></div>

        {/* Article introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700">
            Creating an intuitive chat interface for our calendar app, Timely, presented several design challenges that had to balance
            functionality with user experience. This article explores our approach to building the chat page that serves as the central
            interaction point for our scheduling assistant.
          </p>
        </section>

        {/* Article divider */}
        <div className="border-b border-gray-200 mb-12"></div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </main>
    </div>
  );
};

export default Article;