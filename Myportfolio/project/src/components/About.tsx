import React from 'react';
import { Target, Award, Users, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Full Stack Development",
      description: "Proficient in Java, Spring Boot, and modern web technologies"
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Problem Solver",
      description: "Strong analytical skills with focus on efficient solutions"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Certified Developer",
      description: "Java Fullstack certification from Softlogic Chennai"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Team Player",
      description: "Experience in collaborative development and code reviews"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Computer Science graduate with a strong foundation in Java programming 
            and software development principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Objective</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Motivated and detail-oriented Computer Science graduate with a strong foundation 
              in Java programming, object-oriented design, and software development principles. 
              Eager to start a career as a Java Developer to contribute to innovative and 
              impactful software projects.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I have hands-on experience with modern frameworks like Spring Boot, web technologies 
              including HTML, CSS, and JavaScript, and database management with SQL. My recent 
              internship at Fantasy Solutions has provided me with practical experience in 
              software development lifecycle and collaborative coding practices.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Java Developer
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Spring Boot
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Full Stack
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;