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
      open?: () => void;
    };
  }
}

export function openChat() {
  if (window.Chatbot?.open) {
    window.Chatbot.open()
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
            backgroundColor: '#8FA77C',
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
            className: 'rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-brand-hover'
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: 'Heisann! 👋',
            tooltipBackgroundColor: '#8FA77C',
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
            backgroundColor: '#FFFFFF',
            height: 600,
            width: 400,
            fontSize: 16,
            fontFamily: 'var(--font-inter)',
            starterPrompts: [
              "Hva slags prosjekter jobber du med?",
              "Hvordan kan jeg ta kontakt?"
            ],
            botMessage: {
              backgroundColor: '#E6EDDF',
              textColor: '#232A2F',
              showAvatar: true,
              avatarSrc: '/icons/bot-icon.svg',
              fontFamily: 'var(--font-inter)'
            },
            userMessage: {
              backgroundColor: '#8FA77C',
              textColor: '#ffffff',
              showAvatar: true,
              avatarSrc: '/icons/user-icon.svg',
              fontFamily: 'var(--font-inter)'
            },
            textInput: {
              placeholder: 'Skriv din melding her…',
              backgroundColor: '#FAFBF8',
              textColor: '#232A2F',
              sendButtonColor: '#8FA77C',
              fontFamily: 'var(--font-inter)'
            },
            feedback: {
              color: '#5F6B73'
            },
            dateTimeToggle: {
              date: true,
              time: true
            },
            footer: {
              textColor: '#5F6B73',
              text: 'Made by',
              company: 'Even L. Hovda',
              companyLink: 'https://www.evenlhovda.com'
            }
          },
          disclaimer: {
            title: 'Disclaimer',
            message: "Ved å bruke denne chatboten godtar du at svarene er AI-genererte og kan inneholde feil.",
            textColor: '#232A2F',
            buttonColor: '#8FA77C',
            buttonText: 'Start chat',
            buttonTextColor: 'white',
            backgroundColor: '#FFFFFF',
            fontFamily: 'var(--font-inter)'
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