import React from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline with Jenkins',
      description: 'Automated deployment pipeline with Jenkins, Docker, and Kubernetes for seamless application delivery.',
      tags: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      type: 'linkedin'
    },
    {
      title: 'Menu-Based Python Automation',
      description: 'Interactive Python automation tool with menu-driven interface for various DevOps tasks.',
      tags: ['Python', 'Automation', 'CLI', 'DevOps'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      type: 'linkedin'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive visualizations and data processing pipelines.',
      tags: ['Python', 'Flask', 'Analytics', 'Dashboard'],
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      type: 'linkedin'
    },
    {
      title: 'Stepper Motor Control with PS3 Joystick',
      description: 'Hardware control project using PS3 joystick for precise stepper motor movements.',
      tags: ['Hardware', 'Python', 'IoT', 'Control'],
      link: 'https://github.com/Yash-xoxo',
      type: 'github'
    },
    {
      title: 'Custom Compiler in Python',
      description: 'Built a custom programming language compiler with lexical analysis and code generation.',
      tags: ['Python', 'Compiler', 'Language Design', 'Parsing'],
      link: 'https://github.com/Yash-xoxo',
      type: 'github'
    },
    {
      title: 'Messaging Automation Tool',
      description: 'Multi-platform messaging CLI tool supporting WhatsApp, Twitter, Gmail, and SMS automation.',
      tags: ['Python', 'Automation', 'CLI', 'API Integration'],
      link: 'https://github.com/Yash-xoxo',
      type: 'github'
    }
  ];

  const getIcon = (type: string) => {
    return type === 'github' ? Github : Linkedin;
  };

  const getTagColor = (tag: string) => {
    const colors = {
      'Jenkins': 'bg-red-500/20 text-red-400',
      'Docker': 'bg-blue-500/20 text-blue-400',
      'Kubernetes': 'bg-purple-500/20 text-purple-400',
      'Python': 'bg-green-500/20 text-green-400',
      'CI/CD': 'bg-[#00ADB5]/20 text-[#00ADB5]',
      'Automation': 'bg-yellow-500/20 text-yellow-400',
      'Flask': 'bg-gray-500/20 text-gray-400',
      'Analytics': 'bg-pink-500/20 text-pink-400',
      'Hardware': 'bg-orange-500/20 text-orange-400',
      'IoT': 'bg-indigo-500/20 text-indigo-400',
      'Compiler': 'bg-teal-500/20 text-teal-400',
      'CLI': 'bg-violet-500/20 text-violet-400'
    };
    return colors[tag as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section className="py-10 sm:py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-[#00ADB5]">Projects</span>
          </h2>
          <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
            Showcasing my latest work and contributions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.type);
            return (
              <div
                key={index}
                className="bg-[#393E46] p-4 sm:p-6 rounded-xl hover:bg-[#393E46]/80 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 group"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[#00ADB5] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-[#EEEEEE]/80 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors duration-300 font-medium"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;