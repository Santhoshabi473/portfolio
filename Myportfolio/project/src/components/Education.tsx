import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (CSE)",
      institution: "Sir Issac Newton College Of Engineering & Technology",
      location: "Nagapattinam",
      duration: "2021 - 2025",
      status: "Current",
      description: "Pursuing Computer Science and Engineering with focus on software development, algorithms, and system design."
    },
    {
      degree: "Higher Secondary School (12th)",
      institution: "Government Higher Secondary School",
      location: "Peralam",
      duration: "2020 - 2021",
      status: "Completed",
      description: "Completed higher secondary education with strong foundation in mathematics and science."
    },
    {
      degree: "Secondary School (10th)",
      institution: "Government Higher Secondary School",
      location: "Mananthakudi, Ayyanpettai",
      duration: "2017 - 2018",
      status: "Completed",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  const certifications = [
    {
      title: "Java Fullstack Certification",
      provider: "Softlogic Chennai",
      description: "Comprehensive certification covering Java development, Spring Boot, and full-stack technologies."
    }
  ];

  const activities = [
    "Participated in college-level coding hackathons and coding contests",
    "Precedent of the Computer Science Department Association",
    "Helped in organizing all department events and technical workshops",
    "Active member in coding clubs and technical societies"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional certifications that shaped my technical expertise
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{cert.title}</h4>
                    <p className="text-gray-600 font-medium">{cert.provider}</p>
                  </div>
                </div>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Extra-Curricular Activities</h3>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Leadership & Activities</h4>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">Department Association President</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">Event Organization Leadership</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-gray-700">Coding Competition Participant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;