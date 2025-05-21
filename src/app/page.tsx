import StickyHeader from './components/nav';
import Experience, { PeacockExperience } from './components/experience';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <StickyHeader />
      {/* This is a blank slate site with Black Han Sans and Fredoka fonts applied */}
      <div className="container mx-auto py-20 px-4">
        <section className="mb-24">
          <h1 className="text-4xl font-bold mb-8">Experience</h1>
          <p className="mb-4">Check out some of our key partnerships and client relationships.</p>
          <PeacockExperience />
        </section>
        
        <section className="mb-24">
          <h1 className="text-4xl font-bold mb-8">Section 2</h1>
          <p className="mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <div className="h-96 bg-gray-100 rounded-lg"></div>
        </section>
        
        <section className="mb-24">
          <h1 className="text-4xl font-bold mb-8">Section 3</h1>
          <p className="mb-4">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
          <div className="h-96 bg-gray-100 rounded-lg"></div>
        </section>
      </div>
    </div>
  );
}