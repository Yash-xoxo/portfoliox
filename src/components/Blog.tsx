import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable CI/CD Pipelines',
      excerpt: 'Learn how to design and implement robust CI/CD pipelines using Jenkins, Docker, and Kubernetes.',
      tags: ['DevOps', 'CI/CD', 'Docker'],
      readTime: '5 min read',
      date: 'Coming Soon',
      status: 'draft'
    },
    {
      title: 'Linux System Administration Tips',
      excerpt: 'Essential Linux commands and practices for system administrators and DevOps engineers.',
      tags: ['Linux', 'System Admin', 'Tips'],
      readTime: '7 min read',
      date: 'Coming Soon',
      status: 'draft'
    },
    {
      title: 'Monitoring and Observability in DevOps',
      excerpt: 'Comprehensive guide to implementing monitoring solutions for production environments.',
      tags: ['Monitoring', 'DevOps', 'Observability'],
      readTime: '6 min read',
      date: 'Coming Soon',
      status: 'draft'
    }
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      'DevOps': 'bg-[#00ADB5]/20 text-[#00ADB5]',
      'CI/CD': 'bg-blue-500/20 text-blue-400',
      'Docker': 'bg-purple-500/20 text-purple-400',
      'Linux': 'bg-green-500/20 text-green-400',
      'System Admin': 'bg-yellow-500/20 text-yellow-400',
      'Tips': 'bg-pink-500/20 text-pink-400',
      'Monitoring': 'bg-orange-500/20 text-orange-400',
      'Observability': 'bg-indigo-500/20 text-indigo-400'
    };
    return colors[tag as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section className="py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-[#00ADB5]">Blog</span>
          </h2>
          <p className="text-[#EEEEEE]/70 text-lg">
            Sharing knowledge and insights from my DevOps journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#393E46] p-6 rounded-xl hover:bg-[#393E46]/80 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#00ADB5]/10 hover:border-[#00ADB5]/30 group relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-[#00ADB5]/20 text-[#00ADB5] px-3 py-1 rounded-full text-xs font-medium">
                🚧 Coming Soon
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-[#00ADB5] transition-colors duration-300 pr-20">
                  {post.title}
                </h3>
                
                <p className="text-[#EEEEEE]/80 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#00ADB5]/10">
                  <div className="flex items-center gap-4 text-[#EEEEEE]/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors duration-300 opacity-50 cursor-not-allowed">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#EEEEEE]/60 text-lg">
            Blog posts will be published soon. Stay tuned for technical insights and tutorials!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;