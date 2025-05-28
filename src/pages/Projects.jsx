import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "A responsive e-commerce platform",
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
    },
    {
      title: "Project 3",
      description: "A real-time collaborative app",
      tech: ["React", "Firebase", "Socket.io"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        My Projects
      </motion.h1>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
