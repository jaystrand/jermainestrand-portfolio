import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <img 
          src="/api/placeholder/150/150" 
          alt="Developer" 
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800">Jermaine Strand</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">
        I'm a full-stack developer with a passion for creating responsive and user-friendly web applications. With
        experience in React, Node.js, and modern web technologies, I focus on writing clean, maintainable code that solves
        real-world problems.
      </p>
    </div>
  );
};

export default AboutMe;