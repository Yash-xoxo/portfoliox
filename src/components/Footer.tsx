import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#393E46] text-[#EEEEEE] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-[#EEEEEE]/80 flex items-center gap-2 justify-center md:justify-start text-xs sm:text-base">
              © 2025 Yash Gupta — Built with 
              <Heart className="w-4 h-4 text-red-500" /> 
              on Arch Linux
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/Yash-xoxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yash-gupta-4285b8312"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:flex gap-2 sm:gap-4 text-[#EEEEEE]/40 text-xs sm:text-sm">
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;