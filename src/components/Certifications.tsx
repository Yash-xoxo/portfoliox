import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'RedHat RHCSA – System Administration',
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      color: 'bg-red-500'
    },
    {
      title: 'Azure Cognitive Services',
      platform: 'Microsoft / Coursera',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      color: 'bg-blue-500'
    },
    {
      title: 'AWS Technical Essentials',
      platform: 'AWS via LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      color: 'bg-orange-500'
    },
    {
      title: 'Hands-on Challenges in DevOps Tools',
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      color: 'bg-[#00ADB5]'
    },
    {
      title: 'Ultimate Linux Troubleshooting Training (2025)',
      platform: 'Udemy',
      link: 'https://linkedin.com/in/yash-gupta-4285b8312',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-[#393E46] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#00ADB5]">Certifications</span> & Training
          </h2>
          <p className="text-[#EEEEEE]/70 text-lg">
            Professional certifications and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#222831] p-6 rounded-xl hover:bg-[#222831]/80 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${cert.color}/20 group-hover:${cert.color}/30 transition-colors duration-300`}>
                  <Award className={`w-6 h-6 ${cert.color.replace('bg-', 'text-')}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[#EEEEEE]/60 text-sm mb-4">{cert.platform}</p>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors duration-300 font-medium text-sm"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;