import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Santhosh M.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Java Full Stack Developer passionate about creating innovative 
              software solutions and contributing to impactful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Thiruvarur, Tamil Nadu</p>
              <p>+91 7539941810</p>
              <a
                href="mailto:santhosh473abi@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                santhosh473abi@gmail.com
              </a>
              <a
                href="https://github.com/Santhoshabi473"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Santhosh M. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;