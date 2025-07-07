import React from 'react';
import { Download, Mail, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-transparent text-[#EEEEEE] flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#00ADB5]">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Arch Linux</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#00ADB5]">Yash</span> Gupta
            </h1>
            <p className="text-xl text-[#EEEEEE]/80">
              DevOps Engineer · B.Tech CSE Student
            </p>
            <p className="text-[#EEEEEE]/70 text-lg leading-relaxed">
              Passionate about automating everything, building scalable infrastructure, 
              and creating efficient CI/CD pipelines. Currently mastering cloud-native 
              technologies and DevOps best practices.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://yash-xoxo.github.io/yash-portfolio/assets/resume/resumeyash.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 btn-hover"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <button className="border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 btn-hover">
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/Yash-xoxo" target="_blank" rel="noopener noreferrer" 
               className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yash-gupta-4285b8312" target="_blank" rel="noopener noreferrer"
               className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Right Content - Profile Picture in Circle with Simple Animation */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#00ADB5] flex items-center justify-center animate-float bg-[#222831]/80">
            <video
              src="https://github.com/Yash-xoxo/Personal/raw/main/Profile%20Picture.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>
          {/* Subtle animated dots for extra calm effect */}
          <div className="absolute -top-6 -right-6 w-10 h-10 bg-[#00ADB5]/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#00ADB5]/10 rounded-full animate-pulse delay-1000" />
        </div>
      </div>
      {/* Scroll Down Guide Arrow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center z-10 select-none">
        <span className="text-[#EEEEEE]/60 text-sm mb-1">Scroll Down</span>
        <ChevronDown className="w-8 h-8 text-[#00ADB5] animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;