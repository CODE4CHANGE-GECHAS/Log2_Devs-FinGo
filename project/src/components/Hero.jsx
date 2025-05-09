// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import aiChat from '../hero.png';

// const Hero = () => {
//   useEffect(() => {
//     document.title = 'FinGo - AI-Powered Financial Management';
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   return (
//     <div className="bg-black text-white py-16 md:py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <motion.div
//           className="flex flex-col md:flex-row items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
//             <motion.div
//               className="mb-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <p className="text-sm">AI-Powered Financial Management for Small Businesses</p>
//             </motion.div>

//             <motion.h1
//               className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF1493] to-[#8F00FF] text-transparent bg-clip-text"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
//             >
//               Track,<br />
//               Predict and<br />
//               Optimize
//             </motion.h1>

//             <motion.p
//               className="mb-8 text-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               Streamline your financial management and boost cash flow with AI-powered insights
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               <motion.button
//                 className="px-6 py-3 bg-gradient-to-r from-[#FF00C8] to-[#4B0082] rounded-full font-medium text-white hover:opacity-90 transition-opacity"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore
//               </motion.button>
//               <motion.button
//                 className="px-6 py-3 border border-[#FF1493] rounded-full font-medium hover:bg-[#4B0082] transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Chat Assistant
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="md:w-1/2 flex justify-center md:justify-end relative"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
//             >
//               {/* <motion.div
//                 className="absolute -left-24 top-12 bg-[#4B0082] rounded-lg px-4 py-2 shadow-lg flex items-center text-white"
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
//               >
//                 <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center text-white mr-2">
//                   <span className="text-xs">£</span>
//                 </div>
//                 <span className="font-medium">2,000 GBP</span>
//               </motion.div>

//               <motion.div
//                 className="absolute -right-24 top-0 bg-[#4B0082] rounded-lg px-4 py-2 shadow-lg flex items-center text-white"
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
//               >
//                 <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center text-white mr-2">
//                   <span className="text-xs">$</span>
//                 </div>
//                 <span className="font-medium">3,400 USD</span>
//               </motion.div> */}


//               <motion.div
//                 className="bg-gradient-to-br from-[#FF00C8] to-[#4B0082] rounded-3xl p-1 shadow-xl"
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-black rounded-3xl overflow-hidden w-80 h-[28rem] flex flex-col items-center justify-between">
//                   <div className="w-full h-[22rem]">
//                     <img
//                       src={aiChat}
//                       alt="Chat with AI"
//                       className="object-contain w-full h-full"
//                     />
//                   </div>

//                   <div className="pb-6">
//                     <p className="text-white text-lg font-medium text-center">Chat with AI</p>
//                   </div>
//                 </div>
//               </motion.div>




//               {/* <motion.div 
//                 className="bg-gradient-to-br from-[#FF00C8] to-[#4B0082] rounded-3xl p-1 shadow-xl"
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}>
//                 <div className="bg-black rounded-3xl overflow-hidden w-64 md:w-72">
//                   <div className="bg-[#8F00FF] p-4 border-b border-[#FF1493]">
//                     <p className="text-white font-medium">Send Payment</p>
//                   </div>

//                   <div className="p-4 text-white">
//                     <motion.div 
//                       className="mb-4"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1 }}
//                     >
//                       <p className="text-xs text-gray-300 mb-1">PAYMENT AMOUNT</p>
//                       <div className="flex justify-between items-center bg-[#4B0082] p-2 rounded-lg">
//                         <span className="font-medium">2,000</span>
//                         <span className="text-sm bg-[#FF1493] text-white px-2 py-1 rounded">GBP</span>
//                       </div>
//                     </motion.div>

//                     <motion.div 
//                       className="mb-4"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.2 }}
//                     >
//                       <p className="text-xs text-gray-300 mb-1">RECIPIENT RECEIVES</p>
//                       <div className="flex justify-between items-center bg-[#4B0082] p-2 rounded-lg">
//                         <span className="font-medium">3,400</span>
//                         <span className="text-sm bg-[#FF1493] text-white px-2 py-1 rounded">USD</span>
//                       </div>
//                     </motion.div>

//                     <motion.div 
//                       className="mb-4 bg-[#4B0082] p-2 rounded-lg flex justify-between items-center"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.4 }}
//                     >
//                       <span className="text-sm">Processing fee</span>
//                       <span className="text-sm font-medium">1.50% only</span>
//                     </motion.div>

//                     <motion.button 
//                       className="w-full bg-gradient-to-r from-[#FF00C8] to-[#4B0082] py-3 rounded-full text-white hover:opacity-90 transition-opacity"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.6 }}
//                     >
//                       Send Instantly
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div> */}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero; 


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aiChat from '../hero.png';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'FinGo - AI-Powered Financial Management';
  }, []);

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full -z-10"
        options={{
          background: { color: "#000" },
          particles: {
            color: { value: "#FF1493" },
            links: { enable: true, color: "#8F00FF", distance: 100 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: 2 }
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm">AI-Powered Financial Management for Small Businesses</p>
            </motion.div>

            <motion.h1
              className="text-2xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF1493] to-[#8F00FF] text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              From Invoice <br />
              To Insight - <br />
              FinGo Has You
            </motion.h1>

            {/* Typewriter effect */}
            <div className="text-pink-400 font-semibold text-md mb-4 h-6">
              <Typewriter
                options={{
                  strings: ['Analyzing Transactions...', 'Forecasting Cash Flow...', 'Optimizing Expenses...'],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </div>

            <motion.p
              className="mb-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Streamline your financial management and boost cash flow with AI-powered insights
            </motion.p>

            {/* Trust Stats */}
            <div className="flex space-x-8 text-pink-300 mb-8">
              <div>
                <h3 className="text-2xl font-bold">
                  <CountUp end={5000} duration={3} separator="," />+
                </h3>
                <p className="text-sm">Businesses Served</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <CountUp end={99.9} duration={2} decimals={1} />%
                </h3>
                <p className="text-sm">Prediction Accuracy</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  $<CountUp end={12000000} duration={3} separator="," />
                </h3>
                <p className="text-sm">Cash Flow Optimized</p>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#FF00C8] to-[#4B0082] rounded-full font-medium text-white hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-[#FF1493] rounded-full font-medium hover:bg-[#4B0082] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/chat')}
              >
                Chat Assistant
              </motion.button>
            </motion.div>

            {/* Testimonial */}
            <blockquote className="mt-6 italic text-sm text-gray-400 border-l-4 pl-4 border-pink-500">
              “FinGo helped us increase our savings by 20% in the first month.” – Happy Client
            </blockquote>
          </motion.div>

          {/* AI Chat Card */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end relative"
            variants={itemVariants}
          >


            {/* AI Chat Card with pulse */}
            <div
              className="w-96 h-[32rem] relative"
              style={{ perspective: '1500px' }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg)';
                }}
              >
                {/* Front Side - AI Bot Image with border */}
                <div
                  className="absolute w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-pink-500"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src={aiChat}
                    alt="AI Bot"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Back Side - Chat UI */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-[#FF00C8] to-[#4B0082] rounded-3xl p-1 shadow-xl"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <div className="bg-black rounded-3xl overflow-hidden w-full h-full flex flex-col justify-start p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#4B0082] pb-2">
                      <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex flex-col space-y-3 overflow-y-auto max-h-[22rem] scrollbar-hide">
                      <div className="self-start bg-[#4B0082] text-white px-4 py-2 rounded-xl max-w-[80%]">
                        Hello! How can I help with your finances today?
                      </div>
                      <div className="self-end bg-[#FF1493] text-white px-4 py-2 rounded-xl max-w-[80%]">
                        Can you summarize my April cash flow?
                      </div>
                      <div className="self-start bg-[#4B0082] text-white px-4 py-2 rounded-xl max-w-[80%]">
                        Sure! You had +$12,000 income, -$8,200 in expenses. Net savings: <span className="text-green-300">$3,800</span>.
                      </div>
                      <div className="self-end bg-[#FF1493] text-white px-4 py-2 rounded-xl max-w-[80%]">
                        That’s helpful, thanks!
                      </div>
                    </div>

                    {/* Input field */}
                    <div className="flex items-center mt-auto bg-[#1a1a1a] rounded-full px-4 py-2 border border-[#4B0082]">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="bg-transparent text-white flex-grow outline-none placeholder-gray-400 text-sm"
                        disabled
                      />
                      <span className="text-pink-500">🎤</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
