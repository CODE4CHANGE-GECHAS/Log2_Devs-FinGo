import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://supply-chain-ai-chatbot.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;  