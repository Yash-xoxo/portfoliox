import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const skills = [
    { name: 'Docker', category: 'DevOps', level: 'Advanced' },
    { name: 'Kubernetes', category: 'DevOps', level: 'Intermediate' },
    { name: 'Jenkins', category: 'DevOps', level: 'Advanced' },
    { name: 'AWS', category: 'DevOps', level: 'Intermediate' },
    { name: 'GitHub', category: 'DevOps', level: 'Advanced' },
    { name: 'Terraform', category: 'Infra', level: 'Intermediate' },
    { name: 'Ansible', category: 'Infra', level: 'Intermediate' },
    { name: 'Flask', category: 'Code', level: 'Intermediate' },
    { name: 'Git', category: 'Code', level: 'Advanced' },
    { name: 'Linux', category: 'Code', level: 'Advanced' },
    { name: 'Bash', category: 'Code', level: 'Advanced' },
    { name: 'CI/CD', category: 'DevOps', level: 'Advanced' },
    { name: 'Systemd', category: 'Code', level: 'Intermediate' },
    { name: 'Server Monitoring', category: 'Monitoring', level: 'Intermediate' },
    { name: 'Log Analysis', category: 'Monitoring', level: 'Intermediate' },
    { name: 'Troubleshooting', category: 'Monitoring', level: 'Advanced' }
  ];

  const filters = ['All', 'DevOps', 'Monitoring', 'Code', 'Infra'];
  
  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-green-500';
      case 'Intermediate': return 'bg-[#00ADB5]';
      default: return 'bg-yellow-500';
    }
  };

  return (
    <section className="py-10 sm:py-20 bg-[#393E46] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-[#00ADB5]">Skills</span>
          </h2>
          <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
            Technologies and tools I work with
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeFilter === filter
                  ? 'bg-[#00ADB5] text-white'
                  : 'bg-[#222831] text-[#EEEEEE]/70 hover:bg-[#00ADB5]/20 hover:text-[#00ADB5]'
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#222831] p-4 sm:p-6 rounded-xl hover:bg-[#222831]/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#00ADB5]/10 hover:border-[#00ADB5]/30"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                <span className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)}`}></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#EEEEEE]/60 text-xs sm:text-sm">{skill.category}</span>
                <span className="text-[#00ADB5] text-xs sm:text-sm font-medium">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;