// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios'; // <-- Use default axios

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = {
//       role: 'user',
//       content: input,
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const queryParams = new URLSearchParams({
//         host: 'aws-0-ap-southeast-1.pooler.supabase.com',
//         port: '5432',
//         user: 'postgres.ekpildqeeleokboouqod',
//         password: '8618978068',
//         database: 'postgres',
//         query: input,
//       });

//       console.log('Sending request with query params:', queryParams.toString());

//       // Use a relative URL for local development
//       const response = await axios.post(
//         `/chat?${queryParams.toString()}`, // Use relative path, proxy will handle it
//         null,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('API Response:', response.data);

//       const botMessage = {
//         role: 'assistant',
//         content: response.data.summary || 'Sorry, I could not process your request.',
//       };

//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       console.error('Error details:', error.response || error);

//       let errorMessage = {
//         role: 'assistant',
//         content: 'Failed to connect to the AI service. Please try again later.',
//       };

//       if (error.response?.data?.detail) {
//         const details = Array.isArray(error.response.data.detail)
//           ? error.response.data.detail.map(d => d.msg).join('\n')
//           : error.response.data.detail;
//         errorMessage.content = `Error: ${details}`;
//       }

//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-4xl mx-auto p-6"
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="bg-white rounded-lg shadow-xl overflow-hidden"
//       >
//         {/* Chat Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
//           <h2 className="text-white text-xl font-semibold">FinGo Assistant</h2>
//         </div>

//         {/* Chat Messages */}
//         <div className="h-[500px] overflow-y-auto p-4 space-y-4">
//           {messages.map((message, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div
//                 className={`max-w-[70%] rounded-lg p-3 ${
//                   message.role === 'user'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-800'
//                 }`}
//               >
//                 {message.content}
//               </div>
//             </motion.div>
//           ))}
//           {isLoading && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="flex justify-start"
//             >
//               <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
//                 <div className="flex space-x-2">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Chat Input */}
//         <form onSubmit={handleSubmit} className="border-t p-4">
//           <div className="flex space-x-4">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Send
//             </motion.button>
//           </div>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ChatBot;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { DollarSign, Send, Search, MessageSquare, Folder, PlusCircle } from 'lucide-react';

// function ChatBot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const folders = [
//     { id: '1', name: 'Work chats' },
//     { id: '2', name: 'Life chats' },
//     { id: '3', name: 'Projects chats' },
//     { id: '4', name: 'Clients chats' }
//   ];

//   const chats = [
//     { id: '1', title: 'Plan a 3-day trip', preview: 'A step by step guide for planning weekend getaway...' },
//     { id: '2', title: 'Ideas for a customer loyalty program', preview: 'New and proven tactics for customer loyalty...' },
//     { id: '3', title: 'Help me pick', preview: 'You are a shoe and I need advice for your hiking boots...' }
//   ];

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = {
//       role: 'user',
//       content: input,
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const queryParams = new URLSearchParams({
//         host: 'aws-0-ap-southeast-1.pooler.supabase.com',
//         port: '5432',
//         user: 'postgres.ekpildqeeleokboouqod',
//         password: '8618978068',
//         database: 'postgres',
//         query: input,
//       });

//       const response = await axios.post(
//         `/chat?${queryParams.toString()}`,
//         null,
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       const botMessage = {
//         role: 'assistant',
//         content: response.data.summary || 'Sorry, I could not process your request.',
//       };

//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       const errorMessage = {
//         role: 'assistant',
//         content: error.response?.data?.detail 
//           ? `Error: ${Array.isArray(error.response.data.detail)
//               ? error.response.data.detail.map(d => d.msg).join('\n')
//               : error.response.data.detail}`
//           : 'Failed to connect to the AI service. Please try again later.',
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="flex h-[calc(100vh-80px)]">
//         {/* Sidebar */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col"
//         >
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <MessageSquare size={20} className="text-fuchsia-500 mr-2" />
//                 <h3 className="font-medium">My Chats</h3>
//               </div>
//             </div>

//             <div className="relative mb-4">
//               <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full bg-gray-800 text-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
//               />
//             </div>

//             <div className="mb-4">
//               <div className="text-xs font-medium text-gray-500 uppercase mb-2">Folders</div>
//               {folders.map(folder => (
//                 <div key={folder.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
//                   <Folder size={16} className="text-gray-400 mr-2" />
//                   <span className="text-gray-300 text-sm">{folder.name}</span>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <div className="text-xs font-medium text-gray-500 uppercase mb-2">Chats</div>
//               {chats.map(chat => (
//                 <div key={chat.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
//                   <MessageSquare size={16} className="text-gray-400 mr-2" />
//                   <div className="flex-1 overflow-hidden">
//                     <div className="text-gray-300 text-sm truncate">{chat.title}</div>
//                     <div className="text-gray-500 text-xs truncate">{chat.preview}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-auto p-4 border-t border-gray-800">
//             <button className="flex items-center justify-center w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md py-2 px-4">
//               <PlusCircle size={16} className="mr-2" />
//               New chat
//             </button>
//           </div>
//         </motion.div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col bg-black">
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-full text-center">
//                 <MessageSquare size={48} className="text-fuchsia-500 mb-4" />
//                 <h3 className="text-xl font-medium text-gray-300 mb-2">How can I help you today?</h3>
//                 <p className="text-gray-500 max-w-md">Ask me anything about your finances or your business.</p>
//               </div>
//             ) : (
//               messages.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`max-w-[70%] rounded-lg p-3 ${message.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-gray-800 text-gray-200'}`}>
//                     {message.content}
//                   </div>
//                 </motion.div>
//               ))
//             )}

//             {isLoading && (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
//                 <div className="bg-gray-800 rounded-lg p-3">
//                   <div className="flex space-x-2">
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" />
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-100" />
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-200" />
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           <form onSubmit={handleSendMessage} className="border-t border-gray-800 p-4">
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
//                 disabled={isLoading}
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-fuchsia-500 text-white p-2 rounded-full hover:bg-fuchsia-600 disabled:opacity-50"
//               >
//                 <Send size={20} />
//               </motion.button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatBot;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { DollarSign, Send, Search, MessageSquare, Folder, PlusCircle } from 'lucide-react';

// function ChatBot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const folders = [
//     { id: '1', name: 'Work chats' },
//     { id: '2', name: 'Life chats' },
//     { id: '3', name: 'Projects chats' },
//     { id: '4', name: 'Clients chats' }
//   ];

//   const chats = [
//     { id: '1', title: 'Plan a 3-day trip', preview: 'A step by step guide for planning weekend getaway...' },
//     { id: '2', title: 'Ideas for a customer loyalty program', preview: 'New and proven tactics for customer loyalty...' },
//     { id: '3', title: 'Help me pick', preview: 'You are a shoe and I need advice for your hiking boots...' }
//   ];

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = {
//       role: 'user',
//       content: input,
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const queryParams = new URLSearchParams({
//         host: 'aws-0-ap-southeast-1.pooler.supabase.com',
//         port: '5432',
//         user: 'postgres.ekpildqeeleokboouqod',
//         password: '8618978068',
//         database: 'postgres',
//         query: input,
//       });

//       const response = await axios.post(
//         `/chat?${queryParams.toString()}`,
//         null,
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       const botMessage = {
//         role: 'assistant',
//         content: response.data.summary || 'Sorry, I could not process your request.',
//       };

//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       const errorMessage = {
//         role: 'assistant',
//         content: error.response?.data?.detail 
//           ? `Error: ${Array.isArray(error.response.data.detail)
//               ? error.response.data.detail.map(d => d.msg).join('\n')
//               : error.response.data.detail}`
//           : 'Failed to connect to the AI service. Please try again later.',
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleNewChat = () => {
//     setMessages([]);
//     setInput('');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="flex h-[calc(100vh-80px)]">
//         {/* Sidebar */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col"
//         >
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <MessageSquare size={20} className="text-fuchsia-500 mr-2" />
//                 <h3 className="font-medium">My Chats</h3>
//               </div>
//             </div>

//             <div className="mb-4">
//               <div className="text-xs font-medium text-gray-500 uppercase mb-2">Folders</div>
//               {folders.map(folder => (
//                 <div key={folder.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
//                   <Folder size={16} className="text-gray-400 mr-2" />
//                   <span className="text-gray-300 text-sm">{folder.name}</span>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <div className="text-xs font-medium text-gray-500 uppercase mb-2">Chats</div>
//               {chats.map(chat => (
//                 <div key={chat.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
//                   <MessageSquare size={16} className="text-gray-400 mr-2" />
//                   <div className="flex-1 overflow-hidden">
//                     <div className="text-gray-300 text-sm truncate">{chat.title}</div>
//                     <div className="text-gray-500 text-xs truncate">{chat.preview}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-auto p-4 border-t border-gray-800">
//             <button
//               onClick={handleNewChat}
//               className="flex items-center justify-center w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md py-2 px-4"
//             >
//               <PlusCircle size={16} className="mr-2" />
//               New chat
//             </button>
//           </div>
//         </motion.div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col bg-black">
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-full text-center">
//                 <MessageSquare size={48} className="text-fuchsia-500 mb-4" />
//                 <h3 className="text-xl font-medium text-gray-300 mb-2">How can I help you today?</h3>
//                 <p className="text-gray-500 max-w-md">Ask me anything about your finances or your business.</p>
//               </div>
//             ) : (
//               messages.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`max-w-[70%] rounded-lg p-3 ${message.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-gray-800 text-gray-200'}`}>
//                     {message.content}
//                   </div>
//                 </motion.div>
//               ))
//             )}

//             {isLoading && (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
//                 <div className="bg-gray-800 rounded-lg p-3">
//                   <div className="flex space-x-2">
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" />
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-100" />
//                     <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-200" />
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           <form onSubmit={handleSendMessage} className="border-t border-gray-800 p-4">
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
//                 disabled={isLoading}
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-fuchsia-500 text-white p-2 rounded-full hover:bg-fuchsia-600 disabled:opacity-50"
//               >
//                 <Send size={20} />
//               </motion.button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatBot;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { DollarSign, Send, Search, MessageSquare, Folder, PlusCircle, Mic } from 'lucide-react';
import doodleBg from '../doodle.png';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);  // State for tracking voice input
  const [isVoiceError, setIsVoiceError] = useState(false); // Flag to track voice error

  const folders = [
    { id: '1', name: 'Spending Insights' },
    { id: '2', name: 'Goals & Savings' },
    { id: '3', name: 'Smart Suggestions' },
    { id: '4', name: 'Subscriptions & Bills' }
  ];
  

  const chats = [
    {
      id: '1',
      title: 'View Overdue Invoices',
      preview: '“FinEase, show me all overdue invoices for April 2025.”'
    },
    {
      id: '2',
      title: 'Generate Invoice Reminder',
      preview: '“Create a WhatsApp reminder for invoice #INV-2345 due in 2 days.”'
    },
    {
      id: '3',
      title: 'Cash Flow Analysis',
      preview: '“Give me a cash flow summary for Q1 2025.”'
    },
    {
      id: '4',
      title: 'Personalized AI Advice',
      preview: '“What can I do this month to shorten my accounts receivable cycle?”'
    }
  ];
  

  // Voice recognition function
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      setIsVoiceError(true);
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;  // Stops after one phrase
    recognition.lang = 'en-US';      // Set the language

    recognition.onstart = () => {
      setIsListening(true);
      setIsVoiceError(false);
    };  // Indicator when listening starts

    recognition.onend = () => {
      setIsListening(false);
    };   // Indicator when listening ends

    // When speech is recognized, update input state with the transcript
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);  // Update the input field with the transcribed text
    };

    // Error handling
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      setIsVoiceError(true); // Display error if there's an issue
    };

    recognition.start();  // Start the recognition
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const queryParams = new URLSearchParams({
        host: 'aws-0-ap-southeast-1.pooler.supabase.com',
        port: '5432',
        user: 'postgres.ekpildqeeleokboouqod',
        password: '8618978068',
        database: 'postgres',
        query: input,
      });

      const response = await axios.post(
        `/chat?${queryParams.toString()}`,
        null,
        { headers: { 'Content-Type': 'application/json' } }
      );

      const botMessage = {
        role: 'assistant',
        content: response.data.summary || 'Sorry, I could not process your request.',
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: error.response?.data?.detail
          ? `Error: ${Array.isArray(error.response.data.detail)
            ? error.response.data.detail.map(d => d.msg).join('\n')
            : error.response.data.detail}`
          : 'Failed to connect to the AI service. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MessageSquare size={20} className="text-fuchsia-500 mr-2" />
                <h3 className="font-medium">My Chats</h3>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-500 uppercase mb-2">Chats</div>
              {chats.map(chat => (
                <div key={chat.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                  <MessageSquare size={16} className="text-gray-400 mr-2" />
                  <div className="flex-1 overflow-hidden">
                    <div className="text-gray-300 text-sm truncate">{chat.title}</div>
                    <div className="text-gray-500 text-xs truncate">{chat.preview}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto p-4 border-t border-gray-800">
            <button
              onClick={handleNewChat}
              className="flex items-center justify-center w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md py-2 px-4"
            >
              <PlusCircle size={16} className="mr-2" />
              New chat
            </button>
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-black"
           style={{
            backgroundImage: `url(${doodleBg})`,
          }}
        >
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <MessageSquare size={48} className="text-fuchsia-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-300 mb-2">How can I help you today?</h3>
                <p className="text-gray-300 max-w-md">Ask me anything about your finances or your business.</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] rounded-lg p-3 ${message.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-gray-800 text-gray-200'}`}>
                    {message.content}
                  </div>
                </motion.div>
              ))
            )}

            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Show error message if voice is not detected */}
            {isVoiceError && (
              <div className="text-red-500 text-sm">
                <p>There was an error with voice detection. Please ensure your microphone is working.</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-800 p-4">
            <div className="flex space-x-2 items-center">
              <button
                type="button"
                onClick={startListening}
                className={`p-2 rounded-full ${isListening ? 'bg-fuchsia-700' : 'bg-gray-800'} hover:bg-fuchsia-600 text-white`}
              >
                <Mic size={20} />
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type or speak your message..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                disabled={isLoading}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="bg-fuchsia-500 text-white p-2 rounded-full hover:bg-fuchsia-600 disabled:opacity-50"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
