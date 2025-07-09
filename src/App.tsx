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
        <section className="py-6 sm:py-10 bg-[#222831] text-[#EEEEEE] border-t border-b border-[#00ADB5]/10">
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-[#00ADB5]">Hands-On</span> Tasks
              </h2>
              <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
                Explore practical DevOps, Linux, and coding challenges
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Individual Task Cards */}
              {[
                { title: 'Run any tool or technology in Docker.' },
                { title: 'Set up and configure Apache webserver in Docker.' },
                { title: 'Run the systemctl command inside a Docker container.' },
                { title: 'Run graphical software inside a Docker container.' },
                { title: 'Give sound card access to programs inside Docker.' },
                { title: 'Set up Docker inside Docker (DIND).' },
                { title: 'Install Firefox Browser inside Docker (GUI setup).' },
                { title: 'Play VLC inside Docker (use X11 or VNC for GUI).' },
                { title: 'Set up Apache Server inside Docker.' },
                { title: 'Run a Linear Regression Model inside Docker.' },
                { title: 'Run a Flask App inside Docker.' },
                { title: 'Run a Menu-Based Python Project inside Docker.' },
                { title: 'Write a blog post on companies using Linux and their benefits.' },
                { title: 'Identify commands behind GUI programs in Linux.' },
                { title: 'Change the logo or icon of any program in Linux.' },
                { title: 'Add more terminals and GUI interfaces in Linux.' },
                { title: 'Send email, WhatsApp messages, tweets, and SMS via the Linux terminal.' },
                { title: 'Investigate the commands behind Ctrl+C and Ctrl+Z interrupts.' },
                { title: 'Create an automation panel using Streamlit.' },
                { title: 'Create an automation panel using Gradio.' },
                { title: 'Create a folder, initialize Git, add a file, and commit with a message.' },
                { title: 'Push changes to a new GitHub repository, create a feature1 branch, make changes, and merge.' },
                { title: 'Fork a repository, clone it, make changes, and create a pull request.' },
                { title: 'Capture a photo using JavaScript.' },
                { title: 'Send an email using JavaScript or an API.' },
                { title: 'Send a captured photo via email.' },
                { title: 'Record video on button click and send via email.' },
                { title: 'Send a WhatsApp message using JavaScript.' },
                { title: 'Fetch the last email info from Gmail using the Gmail API.' },
              ].map((task, idx) => (
                <div key={idx} className="bg-[#393E46] rounded-xl p-5 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#00ADB5]">{task.title}</h3>
                  </div>
                  <a href="https://github.com/Yash-xoxo/Internship_Task" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[#EEEEEE] bg-[#00ADB5] hover:bg-[#00ADB5]/90 px-4 py-2 rounded-lg font-medium transition-colors text-center">View on GitHub</a>
                </div>
              ))}
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