import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with Formspree or similar)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-10 sm:py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-[#00ADB5]">Connect</span>
          </h2>
          <p className="text-[#EEEEEE]/70 text-base sm:text-lg">
            Have a project in mind or want to discuss DevOps? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-[#393E46] p-4 sm:p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-[#00ADB5]">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#00ADB5]/20 rounded-lg">
                    <Mail className="w-5 h-5 text-[#00ADB5]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <a href="mailto:yashg5577@gmail.com" className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition-colors text-xs sm:text-base">
                      yashg5577@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#00ADB5]/20 rounded-lg">
                    <Phone className="w-5 h-5 text-[#00ADB5]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <a href="tel:+917839491779" className="text-[#EEEEEE]/70 hover:text-[#00ADB5] transition-colors text-xs sm:text-base">
                      +91 78394 91779
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#00ADB5]/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#00ADB5]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">System</p>
                    <p className="text-[#EEEEEE]/70 text-xs sm:text-base">Arch Linux</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow me on</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Yash-xoxo" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/yash-gupta-4285b8312" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/60 hover:text-[#00ADB5] transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#393E46] p-4 sm:p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[#00ADB5]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#222831] border border-[#00ADB5]/20 rounded-lg focus:outline-none focus:border-[#00ADB5] transition-colors text-xs sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#222831] border border-[#00ADB5]/20 rounded-lg focus:outline-none focus:border-[#00ADB5] transition-colors text-xs sm:text-base"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#222831] border border-[#00ADB5]/20 rounded-lg focus:outline-none focus:border-[#00ADB5] transition-colors resize-none text-xs sm:text-base"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;