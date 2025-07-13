import React, { useEffect, useRef, useState } from 'react';
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
      <div ref={el => setSectionRef(el, 3)} className="fade-in-blur">
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
            {(() => {
              const filters = [
                'All',
                'Docker',
                'Python + Docker',
                'Linux Terminal',
                'Python',
                'GitHub',
                'JavaScript',
              ];
              const [activeFilter, setActiveFilter] = useState('All');
              // Task data with new color logic
              const taskData = [
                // Docker
                { title: 'Run any tool or technology in Docker.', category: 'Docker' },
                { title: 'Set up and configure Apache webserver in Docker.', category: 'Docker' },
                { title: 'Run the systemctl command inside a Docker container.', category: 'Docker' },
                { title: 'Run graphical software inside a Docker container.', category: 'Docker' },
                { title: 'Give sound card access to programs inside Docker.', category: 'Docker' },
                { title: 'Set up Docker inside Docker (DIND).', category: 'Docker' },
                { title: 'Install Firefox Browser inside Docker (GUI setup).', category: 'Docker' },
                { title: 'Play VLC inside Docker (use X11 or VNC for GUI).', category: 'Docker' },
                { title: 'Set up Apache Server inside Docker.', category: 'Docker' },
                // Python + Docker
                { title: 'Run a Linear Regression Model inside Docker.', category: 'Python + Docker' },
                { title: 'Run a Flask App inside Docker.', category: 'Python + Docker' },
                { title: 'Run a Menu-Based Python Project inside Docker.', category: 'Python + Docker' },
                // Linux Terminal
                { title: 'Write a blog post on companies using Linux and their benefits.', category: 'Linux Terminal' },
                { title: 'Identify commands behind GUI programs in Linux.', category: 'Linux Terminal' },
                { title: 'Change the logo or icon of any program in Linux.', category: 'Linux Terminal' },
                { title: 'Add more terminals and GUI interfaces in Linux.', category: 'Linux Terminal' },
                { title: 'Send email, WhatsApp messages, tweets, and SMS via the Linux terminal.', category: 'Linux Terminal' },
                { title: 'Investigate the commands behind Ctrl+C and Ctrl+Z interrupts.', category: 'Linux Terminal' },
                // Python
                { title: 'Create an automation panel using Streamlit.', category: 'Python' },
                { title: 'Create an automation panel using Gradio.', category: 'Python' },
                { title: 'A menu based project in Python', category: 'Python' },
                // GitHub
                { title: 'Create a folder, initialize Git, add a file, and commit with a message.', category: 'GitHub' },
                { title: 'Push changes to a new GitHub repository, create a feature1 branch, make changes, and merge.', category: 'GitHub' },
                { title: 'Fork a repository, clone it, make changes, and create a pull request.', category: 'GitHub' },
                // JavaScript
                { title: 'Capture a photo using JavaScript.', category: 'JavaScript' },
                { title: 'Send an email using JavaScript or an API.', category: 'JavaScript' },
                { title: 'Send a captured photo via email.', category: 'JavaScript' },
                { title: 'Record video on button click and send via email.', category: 'JavaScript' },
                { title: 'Send a WhatsApp message using JavaScript.', category: 'JavaScript' },
                { title: 'Fetch the last email info from Gmail using the Gmail API.', category: 'JavaScript' },
              ];
              // Color logic for cards and filter highlights
              const categoryStyles: { [key: string]: { card: string; highlight: string } } = {
                'Docker': {
                  card: 'bg-blue-600 text-white',
                  highlight: 'bg-cyan-400 text-white', // aqua
                },
                'Python + Docker': {
                  card: 'bg-purple-700 text-white',
                  highlight: 'bg-purple-300 text-purple-900', // light-purple
                },
                'Linux Terminal': {
                  card: 'bg-[#4D4D4D] text-[#00FF00]',
                  highlight: 'bg-gray-500 text-[#00FF00]',
                },
                'Python': {
                  card: 'bg-[#306998] text-[#FFD43B]',
                  highlight: 'bg-[#FFD43B] text-[#306998]',
                },
                'GitHub': {
                  card: 'bg-[#181717] text-white',
                  highlight: 'bg-[#6CC644] text-[#181717]',
                },
                'JavaScript': {
                  card: 'bg-yellow-500 text-[#323330]',
                  highlight: 'bg-[#323330] text-[#F7DF1E]',
                },
                'All': {
                  card: '',
                  highlight: 'bg-[#00ADB5] text-white',
                },
              };
              const filteredTasks = activeFilter === 'All' ? taskData : taskData.filter(t => t.category === activeFilter);
              return (
                <>
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {filters.map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base border border-[#00ADB5]/30 ${
                          activeFilter === filter
                            ? categoryStyles[filter]?.highlight || 'bg-[#00ADB5] text-white shadow'
                            : 'bg-[#222831] text-[#EEEEEE]/70 hover:bg-[#00ADB5]/20 hover:text-[#00ADB5]'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task, idx) => (
                      <div key={idx} className={`${categoryStyles[task.category]?.card || ''} rounded-xl p-5 shadow-lg border border-[#00ADB5]/20 hover:scale-105 transition-transform flex flex-col justify-between h-full`}>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <a
                            href="https://github.com/Yash-xoxo/Internship_Task"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-block font-medium transition-colors text-center px-4 py-2 rounded-lg ${categoryStyles[task.category]?.highlight || 'bg-[#00ADB5] text-white'}`}
                          >
                            View on GitHub
                          </a>
                          {/* Show Run Live button only for executable tasks */}
                          {(() => {
                            const handleRunLive = () => {
                              switch (task.title) {
                                case 'Capture a photo using JavaScript.':
                                  // Open camera and capture photo
                                  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                                    navigator.mediaDevices.getUserMedia({ video: true })
                                      .then(stream => {
                                        const video = document.createElement('video');
                                        video.srcObject = stream;
                                        video.play();
                                        setTimeout(() => {
                                          const canvas = document.createElement('canvas');
                                          canvas.width = video.videoWidth;
                                          canvas.height = video.videoHeight;
                                          const ctx = canvas.getContext('2d');
                                          ctx?.drawImage(video, 0, 0);
                                          const link = document.createElement('a');
                                          link.download = 'captured-photo.png';
                                          link.href = canvas.toDataURL();
                                          link.click();
                                          stream.getTracks().forEach(track => track.stop());
                                        }, 2000);
                                      })
                                      .catch(err => alert('Camera access denied: ' + err.message));
                                  } else {
                                    alert('Camera not available');
                                  }
                                  break;
                                case 'Send an email using JavaScript or an API.':
                                  // Open email client
                                  window.open('mailto:?subject=Test Email&body=This is a test email from the portfolio task.', '_blank');
                                  break;
                                case 'Send a captured photo via email.':
                                  alert('This feature requires backend integration. Please check the GitHub repository for implementation.');
                                  break;
                                case 'Record video on button click and send via email.':
                                  alert('This feature requires backend integration. Please check the GitHub repository for implementation.');
                                  break;
                                case 'Send a WhatsApp message using JavaScript.':
                                  // Open WhatsApp with pre-filled message
                                  const message = encodeURIComponent('Hello! This message was sent from the portfolio task.');
                                  window.open(`https://wa.me/?text=${message}`, '_blank');
                                  break;
                                case 'Fetch the last email info from Gmail using the Gmail API.':
                                  alert('This requires Gmail API setup. Please check the GitHub repository for implementation.');
                                  break;
                                case 'Create an automation panel using Streamlit.':
                                  window.open('https://streamlit.io/', '_blank');
                                  break;
                                case 'Create an automation panel using Gradio.':
                                  window.open('https://gradio.app/', '_blank');
                                  break;
                                case 'A menu based project':
                                  window.open('https://github.com/Yash-xoxo/DAY1-8_Project.git', '_blank');
                                  break;
                                default:
                                  alert('This task requires local environment setup. Please check the GitHub repository for instructions.');
                              }
                            };
                            
                            // Only show Run Live for certain tasks
                            const executableTasks = [
                              'Capture a photo using JavaScript.',
                              'Send an email using JavaScript or an API.',
                              'Send a captured photo via email.',
                              'Record video on button click and send via email.',
                              'Send a WhatsApp message using JavaScript.',
                              'Fetch the last email info from Gmail using the Gmail API.',
                              'Create an automation panel using Streamlit.',
                              'Create an automation panel using Gradio.',
                              'A menu based project'
                            ];
                            
                            if (executableTasks.includes(task.title)) {
                              return (
                                <button
                                  onClick={handleRunLive}
                                  className={`flex-1 inline-block font-medium transition-colors text-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white`}
                                >
                                  Run Live
                                </button>
                              );
                            }
                            return null;
                          })()}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>
      </div>

      <div ref={el => setSectionRef(el, 4)} className="fade-in-blur"><Projects /></div>
      <div ref={el => setSectionRef(el, 5)} className="fade-in-blur"><Certifications /></div>
      <div ref={el => setSectionRef(el, 6)} className="fade-in-blur"><Blog /></div>
      <div ref={el => setSectionRef(el, 7)} className="fade-in-blur"><Aspirations /></div>
      <div ref={el => setSectionRef(el, 8)} className="fade-in-blur"><Contact /></div>
      <div ref={el => setSectionRef(el, 9)} className="fade-in-blur"><Footer /></div>
    </div>
  );
}

export default App;