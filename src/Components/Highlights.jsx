import React from 'react';
import { motion } from 'framer-motion';

const Highlights = ({ status, stats }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const progressBarVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${stats.humidity}%`,
      transition: { duration: 1, delay: 0.3 }
    }
  };

  const windIconVariants = {
    rotate: {
      rotate: 360,
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-2xl text-center flex flex-col items-center w-full max-w-xs mx-auto sm:max-w-sm md:w-48 lg:max-w-full"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      {status === 'wind status' && (
        <>
          <h2 className="text-slate-100 text-lg font-semibold mb-4">Wind Status</h2>
          <div className="mt-2 flex justify-center items-baseline text-slate-100 font-bold gap-2">
            <span className="text-4xl">{stats.speed}</span>
            <span className="text-lg">mph</span>
          </div>
          <motion.div 
            className="mt-6 flex justify-center items-center text-sm text-slate-200 font-medium"
            variants={windIconVariants}
            animate="rotate"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L6 12Zm0 0h7.5" 
              />
            </svg>
            <span className="ml-2">{stats.dir}</span>
          </motion.div>
        </>
      )}

      {status === 'humidity' && (
        <>
          <h2 className="text-slate-100 text-lg font-semibold mb-4">Humidity</h2>
          <div className="mt-2 flex justify-center items-baseline text-slate-100 font-bold gap-2">
            <span className="text-4xl">{stats.humidity}</span>
            <span className="text-lg">%</span>
          </div>
          <div className="mt-6 w-full bg-slate-500 bg-opacity-30 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-cyan-400 to-blue-600 h-3 rounded-full"
              variants={progressBarVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="mt-2 text-xs text-slate-300 flex justify-between w-full">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </>
      )}

      {status === 'visibility' && (
        <>
          <h2 className="text-slate-100 text-lg font-semibold mb-4">Visibility</h2>
          <div className="mt-2 flex justify-center items-baseline text-slate-100 font-bold gap-2">
            <span className="text-4xl">{stats.vis}</span>
            <span className="text-lg">miles</span>
          </div>
          <div className="mt-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-slate-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              />
            </svg>
          </div>
        </>
      )}

      {status === 'Air pressure' && (
        <>
          <h2 className="text-slate-100 text-lg font-semibold mb-4">Air Pressure</h2>
          <div className="mt-2 flex justify-center items-baseline text-slate-100 font-bold gap-2">
            <span className="text-4xl">{stats.pres}</span>
            <span className="text-lg">mb</span>
          </div>
          <div className="mt-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-slate-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
              />
            </svg>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Highlights;