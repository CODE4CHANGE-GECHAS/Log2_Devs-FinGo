import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, ArrowRight } from 'lucide-react';

const TargetUsers = () => {
  const userTypes = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Small Businesses",
      description: "Companies with 1-50 employees looking to streamline their financial operations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Startups",
      description: "Fast-growing companies needing automated financial management solutions"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Entrepreneurs",
      description: "Business owners seeking AI-powered insights for better financial decisions"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <div className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF1493] to-[#8F00FF] text-transparent bg-clip-text"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Who Benefits from FinGo?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our AI-powered financial management solution is designed for businesses of all sizes, 
            helping them make smarter financial decisions and grow their operations.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {userTypes.map((user, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF00C8] to-[#4B0082] rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 0.7,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="relative bg-black p-8 rounded-xl border border-[#4B0082] h-full"
                whileHover={{ 
                  backgroundColor: "rgba(75, 0, 130, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="mb-6 text-[#FF1493]"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { 
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }
                  }}
                >
                  {user.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {user.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {user.description}
                </motion.p>

                <motion.div
                  className="flex items-center text-[#FF1493] cursor-pointer"
                  whileHover={{ 
                    x: 15,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5
          }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#FF00C8] to-[#4B0082] rounded-full text-white font-medium text-lg"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(255, 0, 200, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            See if FinGo is Right for You
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TargetUsers; 