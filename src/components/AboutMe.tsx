import React from 'react';


const styles = {
  backgroundContainer: {
    backgroundImage: "url('your-background-image-url.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '3rem 1rem',
    boxShadow: '',
    backgroundColor: '', 
  },
  contentWrapper: {
    backgroundColor: '#00008B', 
    borderRadius: '0.5rem',
    boxShadow: 'black 0px 0px 10px',
    maxWidth: '42rem',
    margin: '0 auto',
    padding: '1.5rem',
  }
};

const AboutMe = () => {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.contentWrapper}>
        <div className="flex flex-col items-center mb-6">
          <img 
            src="../assets/projects/Avatar.png" 
            alt="Developer" 
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800">Jermaine Strand</h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Full-Stack Developer specializing in scalable web applications and intuitive user experiences. I combine modern frontend frameworks with robust backend solutions to deliver impactful digital products.
        </p>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800">Core Competencies:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Frontend Development: React, JavaScript, HTML5, CSS3</li>
            <li>Backend Development: Node.js, AWS Cloud Services</li>
            <li>Database Design: PostgreSQL, SQL</li>
            <li>Version Control & Collaboration: GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;