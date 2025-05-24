import StickyHeader from './components/nav';
import { ExperienceById } from './components/experience';
import Header from './components/header';
import Projects from './components/projects';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <StickyHeader />
      {/* This is a blank slate site with Black Han Sans and Fredoka fonts applied */}
      <div className="container mx-auto py-20 px-4">
        <section id="experience" className="mb-24">
          <div className="mt-10 md:mt-16">
            <Header id={1} total={3} title="experience" color="#5a9bd5" />
          </div>
          <div className="mt-10 md:mt-16">
            <ExperienceById id="peacock" color="#5a9bd5"/>
          </div>
        </section>
        
        <section id="projects" className="mb-24">
          <div className="mt-10 md:mt-16">
            <Header id={2} total={3} title="projects" color="#6ABF6F" />
          </div>
          <div className="mt-6">
            <Projects />
          </div>
        </section>
        
        <section id="connect" className="mb-24">
          <div className="mt-10 md:mt-16">
            <Header id={3} total={3} title="connect" color="#ff6b6b" />
          </div>
          <p className="mb-4">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
          <div className="h-96 bg-gray-100 rounded-lg"></div>
        </section>
      </div>
    </div>
  );
}
