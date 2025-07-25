import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Eclipse", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Concepts & Knowledge",
      skills: [
        { name: "OOP", level: 90 },
        { name: "Appian", level: 70 },
        { name: "UI/UX", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Object-Oriented Programming",
              "Software Development Life Cycle",
              "Database Design",
              "API Development",
              "Code Review",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;