import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2020',
      title: 'Class 10 – Delhi Public School',
      type: 'education',
      icon: GraduationCap,
      description: 'Completed Class 10 from Delhi Public School.'
    },
    {
      year: '2022',
      title: 'Class 12 (PCM with CS) – Uttarakhand',
      type: 'education',
      icon: GraduationCap,
      description: 'Completed Class 12 (PCM with Computer Science) from Uttarakhand.'
    },
    {
      year: '2022-2026',
      title: 'B.Tech in Computer Science',
      type: 'education',
      icon: GraduationCap,
      description: 'Pursuing Bachelor of Technology in Computer Science Engineering with focus on DevOps and Cloud Technologies.'
    },
    {
      year: 'May 2025',
      title: 'Techvyom Pen Plotter Project',
      type: 'project',
      icon: Award,
      description: 'Presented innovative pen plotter project at college tech fest, demonstrating automation and control systems.'
    },
    {
      year: 'Recent',
      title: 'DevOps Internship @ Linux World',
      type: 'work',
      icon: Briefcase,
      description: 'Gained hands-on experience in cloud technologies, CI/CD pipelines, and automation tools.'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'education': return 'text-blue-400';
      case 'project': return 'text-[#00ADB5]';
      case 'work': return 'text-green-400';
      default: return 'text-[#00ADB5]';
    }
  };

  return (
    <section className="py-10 sm:py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#00ADB5]">Journey</span> Timeline
          </h2>
          <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
            My academic and professional milestones
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-[#00ADB5]/30"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-start mb-8 sm:mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#393E46] rounded-full border-4 border-[#00ADB5]/30 mr-0 sm:mr-8 mb-4 sm:mb-0">
                <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${getIconColor(item.type)}`} />
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-[#393E46] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Calendar className="w-4 h-4 text-[#00ADB5]" />
                  <span className="text-[#00ADB5] font-medium text-sm sm:text-base">{item.year}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-[#EEEEEE]/80 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;