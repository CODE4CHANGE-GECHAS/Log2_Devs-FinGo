// import React from 'react';
// import { CircleDollarSign } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-12 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-center mb-12">
//           <div className="flex items-center justify-center space-x-2 mb-6 md:mb-0">
//             <CircleDollarSign className="h-8 w-8 text-[#FF1493]" />
//             <span className="text-2xl font-bold">FinGo</span>
//           </div>
//         </div>
//         <div className="border-t border-[#8F00FF] pt-8 text-center text-sm text-gray-400">
//           <p className="mb-2">Team: Log2-Devs | JSS Science and Technology University, Mysore</p>
//           <p>Project: CODE4Change 2025</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 

import React from 'react';
import { CircleDollarSign, Github, Linkedin, TwitterIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo with Animation */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <CircleDollarSign className="h-10 w-10 text-pink-500" />
            </motion.div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              FinGo
            </span>
          </div>
          <p className="text-gray-400 mt-2 text-sm">Simplifying Financial Management with AI</p>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          className="border-t border-pink-600 opacity-50"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Team and Event Info */}
        <motion.div 
          className="pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="mb-2">
            Team: <span className="text-pink-400 font-medium">Log2-Devs</span> | JSS Science and Technology University, Mysore
          </p>
          <p>Project: <span className="text-pink-400 font-medium">CODE4Change 2025</span></p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="flex justify-center space-x-6 mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Github className="h-6 w-6 hover:text-pink-500" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Linkedin className="h-6 w-6 hover:text-pink-500" />
          </motion.a>
          <motion.a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TwitterIcon className="h-6 w-6 hover:text-pink-500" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.p 
          className="text-center text-gray-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © 2025 FinGo. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
};

export default Footer;
