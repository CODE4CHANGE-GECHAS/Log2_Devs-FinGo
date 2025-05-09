import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';
import BrainCircuit from './BrainCircuit';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "AI Chat",
      description: "Personalized financial advice based on user behavior."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Automated Invoice Tracking",
      description: "Fetches invoices from accounting tools, extracts details, categorizes as Paid, Due, or Overdue."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Users by Payment Status",
      description: "Enables segmented follow-ups (Paid, Due, Overdue)."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Automated Email/WhatsApp Reminders",
      description: "Reduces missed payments, improves cash flow."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Cash Flow Insights",
      description: "AI forecasts trends, suggests better decisions."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Debt Risk Alerts",
      description: "Detects risks and prioritizes payment suggestions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Features
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-[#FF00C8] to-[#4B0082] p-[1px] rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="bg-black p-6 rounded-xl h-full"
                whileHover={{ 
                  backgroundColor: "rgba(75, 0, 130, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="mr-4 text-[#FF1493]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </motion.div>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 