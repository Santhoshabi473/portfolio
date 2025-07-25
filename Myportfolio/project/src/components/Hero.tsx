import React from 'react';
import { Github, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-300">Santhosh M.</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 text-blue-100">
              Java Full Stack Developer
            </h2>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed">
              Motivated Computer Science graduate with expertise in Java programming, 
              Spring Boot, and modern web technologies. Passionate about creating 
              innovative software solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:santhosh473abi@gmail.com"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </a>
              <button className="flex items-center space-x-2 border border-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 py-3 rounded-lg transition-colors">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Thiruvarur, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 7539941810</span>
              </div>
              <a
                href="https://github.com/Santhoshabi473"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                <img
                  src="/WhatsApp Image 2025-06-20 at 7.31.48 AM.jpeg"
                  alt="Santhosh M."
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;