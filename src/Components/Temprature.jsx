import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Temperature = ({ setCity, stats }) => {
  const [input, setInput] = useState("islamabad");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    setInput(e.target.value);
    setCity(e.target.value);
  };

  const { isDay = 1, temp = 0, condition = 'Loading...', time = '--:--', location = '---' } = stats || {};

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tempVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center px-4 py-6 md:px-10 md:py-8 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Search Bar */}
      <motion.div 
        className="flex w-full flex-col md:flex-row justify-between items-center gap-4 mb-8"
        variants={itemVariants}
      >
        <div className={`relative flex-1 w-full ${isFocused ? 'ring-2 ring-blue-400' : ''} rounded-lg transition-all`}>
          <input
            value={input}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-label="Search city"
            className="w-full bg-slate-700 border rounded-lg px-4 py-3 border-slate-500 text-base text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
            type="text"
            placeholder="Search for a city..."
          />
          <motion.button 
            onClick={() => setCity(input)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Day/Night Icon */}
      <motion.div 
        className="my-6"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        {isDay === 1 ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-blue-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Temperature */}
      <motion.div 
        className="my-4"
        variants={itemVariants}
        animate="pulse"
      >
        <p className="text-white text-6xl md:text-7xl font-bold">
          {temp}
          <span className="text-white text-4xl md:text-5xl align-top font-medium">
            &deg;C
          </span>
        </p>
      </motion.div>

      {/* Condition */}
      <motion.div 
        className="my-2"
        variants={itemVariants}
      >
        <p className="text-slate-300 text-xl font-medium capitalize">
          {condition}
        </p>
      </motion.div>

      {/* Time & Location */}
      <motion.div 
        className="mt-6"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center text-slate-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span>{time}</span>
          </div>
          <div className="flex items-center text-slate-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Temperature;