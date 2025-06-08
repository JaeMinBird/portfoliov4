import StickyHeader from './components/nav';
import Header from './components/header';
import Projects from './components/projects';
import Connect from './components/connect';
import Metro from './components/metro';
import Logo from './components/logo';
import Footer from './components/footer';
import About from './components/about';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white md:px-25">
      <StickyHeader />
      {/* This is a blank slate site with Black Han Sans and Fredoka fonts applied */}
      <div className="container mx-auto py-20 px-4">
        <section id="about" className="mb-24">
          <div>
            <Logo />
          </div>
          <div className="mt-10 md:mt-6">
            <About />
          </div>
        </section>
        
        <section id="experience" className="mb-24">
          <div className="mt-10 md:mt-16">
            <Header id={1} total={3} title="experience" color="#6ABF6F" />
          </div>
          <div className="mt-10 md:mt-6">
            <Metro />
          </div>
        </section>
        
        <section id="projects" className="mb-24">
          <div className="mt-10 md:mt-16">
            <Header id={2} total={3} title="projects" color="#5a9bd5" />
          </div>
          <div className="mt-10 md:mt-6 px-4">
            <Projects />
          </div>
        </section>
        
        <section id="connect">
          <div className="mt-10 md:mt-16">
            <Header id={3} total={3} title="connect" color="#ff6b6b" />
          </div>
          <div className="mt-6">
            <Connect />
          </div>
        </section>
      </div>
      <div className="container mx-auto px-4">
        <Footer className="mt-16 md:mt-24" />
      </div>
    </div>
  );
}
