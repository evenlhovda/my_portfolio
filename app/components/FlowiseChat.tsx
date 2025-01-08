'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Chatbot: {
      init: (config: any) => void;
    };
  }
}

export default function FlowiseChat() {
  useEffect(() => {
    // Load Flowise script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.type = 'module';
    script.async = true;

    script.onload = () => {
      window.Chatbot?.init({
        chatflowid: "cda3cd72-96e4-4c29-8622-630484eba075",
        apiHost: "https://flowise-p9jk.onrender.com",
        theme: {
          button: {
            backgroundColor: '#3B81F6',
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
            autoWindowOpen: {
              autoOpen: true,
              openDelay: 2,
              autoOpenOnMobile: false
            }
          },
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Flowise Bot',
            titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
            welcomeMessage: 'Hello! This is custom welcome message',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            height: 700,
            width: 400,
            fontSize: 16,
            fontFamily: 'var(--font-geist-sans)', // Using your custom font
            starterPrompts: [
              "What is a bot?",
              "Who are you?"
            ],
            botMessage: {
              backgroundColor: '#f7f8ff',
              textColor: '#303235',
              showAvatar: true,
              avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
              fontFamily: 'var(--font-geist-sans)'
            },
            userMessage: {
              backgroundColor: '#3B81F6',
              textColor: '#ffffff',
              showAvatar: true,
              avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
              fontFamily: 'var(--font-geist-sans)'
            },
            textInput: {
              placeholder: 'Type your question',
              backgroundColor: '#ffffff',
              textColor: '#303235',
              sendButtonColor: '#3B81F6',
              fontFamily: 'var(--font-geist-sans)'
            }
          },
          disclaimer: {
            title: 'Disclaimer',
            message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
            textColor: '#303235',
            buttonColor: '#3b82f6',
            buttonText: 'Start Chatting',
            buttonTextColor: 'white',
            backgroundColor: 'white',
            fontFamily: 'var(--font-geist-sans)'
          }
        }
      });
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything directly
}