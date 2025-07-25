import React from 'react';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Bus Reservation System",
      description: "A comprehensive Java-based bus reservation system that simulates real-world booking functionalities including user registration, seat booking, cancellation, and schedule viewing.",
      technologies: ["Java", "OOP", "Data Structures"],
      features: [
        "User registration and authentication",
        "Seat booking and cancellation",
        "Schedule viewing and management",
        "Modular design with real-world reservation logic"
      ],
      icon: <Code className="h-8 w-8 text-blue-600" />,
      category: "Desktop Application"
    },
    {
      title: "Mentor Connecting Website",
      description: "A full-stack web application developed as a final year project featuring mentor-mentee connections with comprehensive user management and session scheduling capabilities.",
      technologies: ["HTML", "CSS", "JavaScript", "Database"],
      features: [
        "Mentor registration and profile management",
        "Mentee sign-up and matching system",
        "Session scheduling and management",
        "User-friendly interface design"
      ],
      icon: <Globe className="h-8 w-8 text-green-600" />,
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development projects demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm continuously working on new projects to expand my portfolio. 
              Check back soon for updates on my latest work in Java development, 
              Spring Boot applications, and full-stack solutions.
            </p>
            <a
              href="https://github.com/Santhoshabi473"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;