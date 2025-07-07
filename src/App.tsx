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