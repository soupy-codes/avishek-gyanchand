import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Technical Leadership',
    'Mobile Infrastructure',
    'Full-Stack Development',
    'Scalable Systems',
    'Team Management',
    'Agile Methodologies',
    'Performance Optimization',
    'AI & Generative AI',
    'Cross-Functional Leadership',
    'Mentorship & Coaching'
  ];

  const technologies = [
    'JavaScript/Node.js',
    'Java',
    'Mobile Development',
    'Web Development',
    'REST APIs',
    'Spring Framework',
    'SQL',
    'XML',
    'JSON',
    'HTML5',
    'LESS',
    'jQuery'
  ];

  return (
    <div className="max-w-4xl mx-auto pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert max-w-none mb-12"
      >
        <p>
          Senior Engineering Manager at LinkedIn, leading the Mobile Infrastructure team for iOS and Android. Passionate about building scalable applications and mentoring the next generation of technical leaders.
        </p>
        <p>
          With extensive experience in full-stack development, mobile infrastructure, and team leadership, I specialize in solving complex technical challenges while maintaining high performance standards.
        </p>
        <p>
          I'm dedicated to fostering technical excellence through mentorship and coaching, helping students, kids, and peers achieve their full potential in the tech industry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4">Technologies</h2>
        <div className="grid grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
