import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      text: 'GitHub',
      href: 'https://github.com/soupy-codes',
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="text-2xl font-bold">
            Avishek Gyanchand
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                  </a>
                ) : (
                  <Link to={item.href}>{item.text}</Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute top-full left-0 w-full md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 ${
              isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-[-100%]'
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer hover:text-blue-400 transition-colors"
                  >
                    {item.href.startsWith('http') ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        className="block text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
