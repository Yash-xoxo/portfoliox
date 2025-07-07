import React from 'react';
import { Target, Users, Heart, TrendingUp } from 'lucide-react';

const Aspirations = () => {
  const aspirations = [
    {
      title: 'Launch a Cloud-native DevOps Product',
      description: 'Build and launch a SaaS platform that simplifies DevOps workflows for development teams.',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Teach DevOps via LinkedIn/YouTube',
      description: 'Share knowledge through educational content, tutorials, and live sessions to help others learn DevOps.',
      icon: Users,
      color: 'bg-[#00ADB5]'
    },
    {
      title: 'Contribute to Arch Linux/Open Source',
      description: 'Actively contribute to open source projects, especially in the Linux and DevOps ecosystem.',
      icon: Heart,
      color: 'bg-green-500'
    },
    {
      title: 'Expand into GitOps & AI-based Infrastructure',
      description: 'Explore the intersection of AI and infrastructure management, focusing on intelligent automation.',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-[#393E46] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Future <span className="text-[#00ADB5]">Aspirations</span>
          </h2>
          <p className="text-[#EEEEEE]/70 text-lg">
            Goals and visions for the next chapter of my journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aspirations.map((aspiration, index) => (
            <div
              key={index}
              className="bg-[#222831] p-8 rounded-xl hover:bg-[#222831]/80 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 group"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${aspiration.color}/20 group-hover:${aspiration.color}/30 transition-colors duration-300`}>
                  <aspiration.icon className={`w-8 h-8 ${aspiration.color.replace('bg-', 'text-')}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {aspiration.title}
                  </h3>
                  <p className="text-[#EEEEEE]/80 leading-relaxed">
                    {aspiration.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#EEEEEE]/60 text-lg italic">
            "The best way to predict the future is to create it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aspirations;