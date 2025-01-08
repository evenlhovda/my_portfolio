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
            backgroundColor: '#374151', // primary color
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
            backgroundColor: '#374151', // bg-background
            height: 700,
            width: 400,
            fontSize: 16,
            fontFamily: 'var(--font-geist-sans)',
            starterPrompts: [
              "Hva slags prosjekter jobber du med?",
              "Hvordan kan jeg ta kontakt?"
            ],
            botMessage: {
              backgroundColor: '#4338CA', // primary hover
              textColor: '#E2E8F0', // text-slate-200
              showAvatar: true,
              avatarSrc: '/icons/bot-icon.svg', // We'll create this
              fontFamily: 'var(--font-geist-sans)'
            },
            userMessage: {
              backgroundColor: '#4F46E5', // primary
              textColor: '#ffffff',
              showAvatar: true,
              avatarSrc: '/icons/user-icon.svg', // We'll create this
              fontFamily: 'var(--font-geist-sans)'
            },
            textInput: {
              placeholder: 'Skriv din melding her...',
              backgroundColor: '#1E293B', // bg-secondary
              textColor: '#E2E8F0', // text-slate-200
              sendButtonColor: '#F97316', // contrast color
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
            textColor: '#E2E8F0', // text-slate-200
            buttonColor: '#F97316', // contrast
            buttonText: 'Start Chat',
            buttonTextColor: 'white',
            backgroundColor: '#1E293B', // bg-secondary
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