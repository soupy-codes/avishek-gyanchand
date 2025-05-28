import { motion } from 'framer-motion';

const Portfolio = () => {
  const poetryProjects = [
    {
      title: "Soupy Writes",
      description: "A collection of original poetry exploring themes of love, life, and human experience.",
      platform: "Instagram",
      link: "https://www.instagram.com/soupy_writes/",
      featured: true
    }
  ];

  const creativeWorks = [
    {
      title: "Poetry Series",
      description: "Regular poetry updates sharing personal stories and observations through verse.",
      platform: "Instagram",
      link: "https://www.instagram.com/soupy_writes/"
    },
    {
      title: "Audio Poetry",
      description: "Spoken word recordings bringing poetry to life through voice and emotion.",
      platform: "Instagram",
      link: "https://www.instagram.com/soupy_writes/"
    },
    {
      title: "TikTok Poetry",
      description: "Short-form poetry videos exploring themes of love, life, and human experience.",
      platform: "TikTok",
      link: "https://www.tiktok.com/@soupy_writes"
    }
  ];

  const poems = [
    {
      title: "The Dance of Time",
      content: "In the quiet moments, time whispers,\nA symphony of seconds,\nEach tick a note in the grand ballet,\nOf life's eternal melody.\n\nMoments pirouette in grace,\nWhile shadows waltz with light,\nIn this dance of time, we find,\nOur fleeting moments bright."
    },
    {
      title: "Whispers of the Wind",
      content: "The breeze carries secrets,\nWhispering through the leaves,\nA symphony of silence,\nIn the rustling trees.\n\nIt speaks of distant lands,\nAnd stories yet untold,\nEach gust a gentle reminder,\nOf the beauty of the cold."
    },
    {
      title: "Echoes of the Soul",
      content: "In the depths of quiet thoughts,\nEchoes of the heart resound,\nEach beat a melody,\nOf life's profound.\n\nSilent whispers,\nOf dreams and fears,\nIn the stillness,\nOur truest selves appear."
    }
  ];

  return (
    <div className="page-content pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Creative Portfolio
        </motion.h1>
        
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Creative Works</h2>
            <p className="text-gray-300 mb-8">Find my creative works on these platforms:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">Instagram Poetry</h3>
                <p className="text-gray-300 mb-4">Follow my poetry journey on Instagram</p>
                <a
                  href="https://www.instagram.com/soupy_writes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12a10 10 0 01-2.828 4.828L14.828 22l-4.828-4.828a10 10 0 01-1.414-1.414L10.172 12l-4.828-4.828a10 10 0 011.414-1.414L12 10.172l4.828-4.828a10 10 0 0114.142 0z" clipRule="evenodd" />
                  </svg>
                  <span>View on Instagram</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">TikTok Poetry</h3>
                <p className="text-gray-300 mb-4">Follow my poetry journey on TikTok</p>
                <a
                  href="https://www.tiktok.com/@soupy_writes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.597 0-1.05.451-1.05 1.05s.453 1.05 1.05 1.05 1.05-.452 1.05-1.05-.453-1.05-1.05-1.05zm3.225 6.45c.597 0 1.05.451 1.05 1.05s-.453 1.05-1.05 1.05-1.05-.452-1.05-1.05.453-1.05 1.05-1.05z" clipRule="evenodd" />
                  </svg>
                  <span>View on TikTok</span>
                </a>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
