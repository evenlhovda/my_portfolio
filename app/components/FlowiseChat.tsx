'use client';

import { useEffect } from 'react';

interface FlowiseTheme {
  button: {
    backgroundColor: string;
    right: number;
    bottom: number;
    size: number;
    dragAndDrop: boolean;
    iconColor: string;
    customIconSrc: string;
    autoWindowOpen: {
      autoOpen: boolean;
      openDelay: number;
      autoOpenOnMobile: boolean;
    };
    className: string;
  };
  tooltip: {
    showTooltip: boolean;
    tooltipMessage: string;
    tooltipBackgroundColor: string;
    tooltipTextColor: string;
    tooltipFontSize: number;
  };
  chatWindow: {
    showTitle: boolean;
    showAgentMessages: boolean;
    title: string;
    titleAvatarSrc: string;
    welcomeMessage: string;
    errorMessage: string;
    backgroundColor: string;
    height: number;
    width: number;
    fontSize: number;
    fontFamily: string;
    starterPrompts: string[];
    botMessage: {
      backgroundColor: string;
      textColor: string;
      showAvatar: boolean;
      avatarSrc: string;
      fontFamily: string;
    };
    userMessage: {
      backgroundColor: string;
      textColor: string;
      showAvatar: boolean;
      avatarSrc: string;
      fontFamily: string;
    };
    textInput: {
      placeholder: string;
      backgroundColor: string;
      textColor: string;
      sendButtonColor: string;
      fontFamily: string;
    };
    feedback: {
      color: string;
    };
    dateTimeToggle: {
      date: boolean;
      time: boolean;
    };
    footer: {
      textColor: string;
      text: string;
      company: string;
      companyLink: string;
    };
  };
  disclaimer: {
    title: string;
    message: string;
    textColor: string;
    buttonColor: string;
    buttonText: string;
    buttonTextColor: string;
    backgroundColor: string;
    fontFamily: string;
  };
}

interface FlowiseConfig {
  chatflowid: string;
  apiHost: string;
  theme: FlowiseTheme;
}

declare global {
  interface Window {
    Chatbot: {
      init: (config: FlowiseConfig) => void;
    };
  }
}

export default function FlowiseChat() {
  useEffect(() => {
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
            backgroundColor: '#374151',
            right: 20,
            bottom: 20,
            size: 58,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: '/icons/chat-icon2.svg',
            autoWindowOpen: {
              autoOpen: false,
              openDelay: 2,
              autoOpenOnMobile: false
            },
            className: 'rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-primary-hover'
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: 'Heisann! 👋',
            tooltipBackgroundColor: '#4F46E5',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
          },
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Rune, Evens assistent',
            titleAvatarSrc: '/icons/bot-icon.svg',
            welcomeMessage: 'Hei! Jeg er Rune, Evens AI-assistent som kan hjelpe deg med spørsmål om Even og hans prosjekter.',
            errorMessage: 'Beklager, noe gikk galt. Vennligst prøv igjen eller send en e-post direkte.',
            backgroundColor: '#374151',
            height: 700,
            width: 400,
            fontSize: 16,
            fontFamily: 'var(--font-geist-sans)',
            starterPrompts: [
              "Hva slags prosjekter jobber du med?",
              "Hvordan kan jeg ta kontakt?"
            ],
            botMessage: {
              backgroundColor: '#4338CA',
              textColor: '#E2E8F0',
              showAvatar: true,
              avatarSrc: '/icons/bot-icon.svg',
              fontFamily: 'var(--font-geist-sans)'
            },
            userMessage: {
              backgroundColor: '#4F46E5',
              textColor: '#ffffff',
              showAvatar: true,
              avatarSrc: '/icons/user-icon.svg',
              fontFamily: 'var(--font-geist-sans)'
            },
            textInput: {
              placeholder: 'Skriv din melding her...',
              backgroundColor: '#1E293B',
              textColor: '#E2E8F0',
              sendButtonColor: '#F97316',
              fontFamily: 'var(--font-geist-sans)'
            },
            feedback: {
              color: '#1F2937'
            },
            dateTimeToggle: {
              date: true,
              time: true
            },
            footer: {
              textColor: '#1F2937',
              text: 'Made by',
              company: 'Even L Hovda',
              companyLink: 'https://www.evenlhovda.com'
            }
          },
          disclaimer: {
            title: 'Disclaimer',
            message: "Ved å bruke denne chatboten godtar du at svarene er AI-genererte og kan inneholde feil.",
            textColor: '#E2E8F0',
            buttonColor: '#F97316',
            buttonText: 'Start Chat',
            buttonTextColor: 'white',
            backgroundColor: '#1E293B',
            fontFamily: 'var(--font-geist-sans)'
          }
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}