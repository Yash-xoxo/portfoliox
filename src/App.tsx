import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Aspirations from './components/Aspirations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'Yash Gupta – DevOps Engineer Portfolio';
    
    // Add meta tags for SEO
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', 'Yash Gupta | DevOps Engineer Portfolio Website');
    updateMetaTag('keywords', 'DevOps, Linux, CI/CD, Kubernetes, Jenkins, Docker, Terraform, Portfolio, Yash Gupta, Automation');
    
    // Add Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOGTag('og:title', 'Yash Gupta – DevOps Portfolio');
    updateOGTag('og:description', 'DevOps Engineer specializing in CI/CD, Kubernetes, and Cloud Technologies');
    updateOGTag('og:type', 'website');
    
    // Add Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', 'Yash Gupta – DevOps Portfolio');
    updateTwitterTag('twitter:description', 'DevOps Engineer specializing in CI/CD, Kubernetes, and Cloud Technologies');
    
    // Scroll-based fade-in-blur animation
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            ref.classList.add('visible');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Helper to assign refs
  const setSectionRef = (el: HTMLDivElement | null, idx: number) => {
    sectionRefs.current[idx] = el;
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="background-animate" />
      <div ref={el => setSectionRef(el, 0)} className="fade-in-blur"><Hero /></div>
      <div ref={el => setSectionRef(el, 1)} className="fade-in-blur"><Timeline /></div>
      <div ref={el => setSectionRef(el, 2)} className="fade-in-blur"><Skills /></div>
      {/* Creative Task Section */}
      <div className="fade-in-blur">
        <section className="py-10 sm:py-20 bg-[#222831] text-[#EEEEEE]">
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Hands-On</span> Tasks
              </h2>
              <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
                Explore practical DevOps, Linux, and coding challenges
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Docker Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">Docker</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Run any tool or technology in Docker.</li>
                  <li>Set up and configure Apache webserver in Docker.</li>
                  <li>Run the <span className="font-mono bg-[#222831]/60 px-1 rounded">systemctl</span> command inside a Docker container.</li>
                  <li>Run graphical software inside a Docker container.</li>
                  <li>Give sound card access to programs inside Docker.</li>
                  <li>Set up Docker inside Docker (DIND).</li>
                  <li>Install Firefox Browser inside Docker (GUI setup).</li>
                  <li>Play VLC inside Docker (use X11 or VNC for GUI).</li>
                  <li>Set up Apache Server inside Docker.</li>
                </ul>
              </div>
              {/* Python + Docker Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">Python + Docker</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Run a Linear Regression Model inside Docker.</li>
                  <li>Run a Flask App inside Docker.</li>
                  <li>Run a Menu-Based Python Project inside Docker.</li>
                </ul>
              </div>
              {/* Terminal Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">Terminal</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Write a blog post on companies using Linux and their benefits.</li>
                  <li>Identify commands behind GUI programs in Linux.</li>
                  <li>Change the logo or icon of any program in Linux.</li>
                  <li>Add more terminals and GUI interfaces in Linux.</li>
                  <li>Send email, WhatsApp messages, tweets, and SMS via the Linux terminal.</li>
                  <li>Investigate the commands behind <span className="font-mono bg-[#222831]/60 px-1 rounded">Ctrl+C</span> and <span className="font-mono bg-[#222831]/60 px-1 rounded">Ctrl+Z</span> interrupts.</li>
                </ul>
              </div>
              {/* Python Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">Python</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Create an automation panel using Streamlit.</li>
                  <li>Create an automation panel using Gradio.</li>
                </ul>
              </div>
              {/* GitHub Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">GitHub</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Create a folder, initialize Git, add a file, and commit with a message.</li>
                  <li>Push changes to a new GitHub repository, create a <span className="font-mono bg-[#222831]/60 px-1 rounded">feature1</span> branch, make changes, and merge.</li>
                  <li>Fork a repository, clone it, make changes, and create a pull request.</li>
                </ul>
              </div>
              {/* JavaScript Card */}
              <div className="bg-[#393E46] rounded-xl p-6 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform group">
                <h3 className="text-xl font-bold mb-4 text-[#00ADB5] group-hover:underline">JavaScript</h3>
                <ul className="space-y-2 list-disc list-inside text-[#EEEEEE]/90">
                  <li>Capture a photo using JavaScript.</li>
                  <li>Send an email using JavaScript or an API.</li>
                  <li>Send a captured photo via email.</li>
                  <li>Record video on button click and send via email.</li>
                  <li>Send a WhatsApp message using JavaScript.</li>
                  <li>Fetch the last email info from Gmail using the Gmail API.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div ref={el => setSectionRef(el, 3)} className="fade-in-blur"><Projects /></div>
      <div ref={el => setSectionRef(el, 4)} className="fade-in-blur"><Certifications /></div>
      <div ref={el => setSectionRef(el, 5)} className="fade-in-blur"><Blog /></div>
      <div ref={el => setSectionRef(el, 6)} className="fade-in-blur"><Aspirations /></div>
      <div ref={el => setSectionRef(el, 7)} className="fade-in-blur"><Contact /></div>
      <div ref={el => setSectionRef(el, 8)} className="fade-in-blur"><Footer /></div>
    </div>
  );
}

export default App;