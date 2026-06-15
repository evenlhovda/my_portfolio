import React from 'react'
import { Project } from './types'
import { ProjectDescriptions } from '@/components/projects/project-descriptions'

export const projects: Project[] = [
  {
    id: 1,
    title: "Randi — AI Invoice Agent",
    description: "An AI agent that automatically processes and analyzes invoices. Randi extracts key information such as amounts, VAT, account numbers and due dates, returning it in a structured format ready for other systems. A practical example of how AI can streamline administrative tasks as part of a larger automated workflow.",
    image: "/images/randi-fakturatolk.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "OCR", "Automation"],
    role: "Developer",
    year: "2025",
    client: "Demo",
    demoUrl: "/pdf-analysis"
  },
  {
    id: 2,
    title: "Private Investor Portfolio",
    description: "As a shareholder in unlisted companies using OwnersRoom, you get full control over your ownership and news from portfolio companies. This was a major step in transforming OwnersRoom from an administrative tool for company management into a platform for interaction between companies and their owners.",
    image: "/images/Portfolio.gif",
    tags: ["Product Management", "Scoping"],
    role: "Product Manager",
    year: "2023-2024",
    client: "OwnersRoom AS"
  },
  {
    id: 4,
    title: "Social Betting App — Football Euros",
    description: "A web app where players predict football Euro Championship outcomes in private groups, built on the low-code platform Bubble and launched for the Euro 2024 tournament.",
    image: "/images/Fotball.jpg",
    tags: ["No Code", "Bubble.io", "Low Code", "Gaming", "REST API", "Backend"],
    role: "Initiator & Developer",
    year: "Spring 2024",
    client: "Side project during parental leave"
  },
  {
    id: 5,
    title: "Idea Validation: Digital Investor Portal",
    description: ProjectDescriptions.investorportal,
    image: "/images/OwnersRoom_illustrasjon02.png",
    tags: ["Entrepreneurship", "Market Research", "Business Development", "SaaS"],
    role: "Business Developer",
    year: "2018-2019",
    client: "OwnersRoom AS"
  },
  {
    id: 6,
    title: "R&D Project: Investor Relationship Management & Digital Subscription Tool",
    description: ProjectDescriptions.fouProsjekt,
    image: "/images/OwnersRoom_illustrasjon01.png",
    tags: ["Project Management", "SkatteFunn", "Innovation Norway", "Grant Writing", "Innovation"],
    role: "Project Manager",
    year: "2019-2020",
    client: "OwnersRoom AS"
  },
  {
    id: 7,
    title: "AI-Powered Web Development: This Website",
    description: "This website was born from a desire to master AI-driven development. Built using AI tools V0 and Cursor, with bug testing, image generation and text processing by ChatGPT and Claude.",
    image: "/images/AI_code_project.webp",
    tags: ["AI", "V0", "Cursor", "Next.JS", "Web Development"],
    role: "Developer",
    year: "2025",
    client: "Me, Myself & I"
  },
  {
    id: 8,
    title: "Rune — AI Assistant",
    description: "Rune is an AI assistant specialized in answering questions about Even's experience. Combining the LangChain framework with a knowledge base about his background and expertise, Rune delivers relevant and precise responses. You can talk to Rune by clicking the chat icon in the bottom right corner. A showcase of how AI can deliver personalized customer service and information.",
    image: "/images/rune-avatar.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "ChatBot", "Customer Service"],
    role: "Developer",
    year: "2025",
    client: "Demo"
  },
  {
    id: 9,
    title: "Mina — Mail Assistant",
    description: "Mina reads incoming customer emails, extracts relevant information and enters it into the company's internal support and feedback systems. Built with Flowise.",
    image: "/images/mina-mailassistent.jpg",
    year: "2025",
    client: "Demo",
    role: "Developer",
    tags: ["AI", "Flowise", "LangChain", "Claude"],
    demoUrl: "/email-analysis"
  },
  {
    id: 11,
    title: "Voice-Controlled Insurance Agent",
    description: "An intelligent agent for auto glass insurance claims handling. Through natural conversation, the agent answers common questions, retrieves policy information, verifies details and books workshop appointments. The solution integrates multiple APIs and uses OpenAI's API for real-time speech processing. A pilot demonstrating how voice technology can streamline customer service in the insurance industry.",
    image: "/images/voice-insurance-agent.png",
    tags: ["AI", "Voice", "OpenAI", "Customer Service", "Insurance", "API Integration"],
    role: "Developer",
    year: "2025",
    client: "Belron Solutions"
  },
  {
    id: 12,
    title: "Integrated Invoice Agent",
    description: "A specialized invoice agent that automatically reads invoices, extracts relevant information and delivers it in a structured format. The data feeds directly into an automated workflow that performs price verification against insurance company tariffs. Through fine-tuning, the agent achieves exceptional precision at low cost, enabling scalable and reliable invoice processing automation.",
    image: "/images/invoice_beaver.jpg",
    tags: ["AI", "Fine-tuning", "Document Analysis", "Automation", "Insurance", "Cost Control"],
    role: "Developer",
    year: "2025",
    client: "Belron Solutions"
  },
  {
    id: 10,
    title: "Innovation Agent",
    description: "Belron Solutions values innovation. The Innovation Agent's role is to receive and clarify new ideas before storing them in the idea database for prioritization and development. Available to all employees directly in MS Teams, the bot guides users through defining their idea — asking who benefits, how it improves on existing solutions, and more. Once clearly defined, the idea is saved in the company's idea database for future development.",
    image: "/images/innovasjons-agent.jpg",
    year: "2025",
    client: "Belron Solutions",
    role: "Developer",
    tags: ["AI", "Flowise", "LangChain", "MS Teams", "Innovation"]
  },
  {
    id: 15,
    title: "POC Voice AI",
    description: "A strategic pilot project integrating voice-based AI into the customer service center at Carglass Greece. The goal: 100% answer rate, even outside opening hours and during traffic peaks. As project lead and developer, I built an agent that structures information gathering so advisors can focus on value-adding customer interactions instead of manual data entry.",
    image: "/images/voice_hare.jpg",
    tags: ["AI", "Voice", "POC", "Innovation"],
    role: "Developer & Project Lead",
    year: "2026",
    client: "Carglass Greece"
  },
  {
    id: 14,
    title: "Rapid Repair",
    description: "An innovative approach to auto glass repairs, developed as a Proof of Concept for Belron globally in collaboration with Carglass Slovenia. The concept introduces same-day repairs through a flexible, scooter-based mobile service model — inspired by modern on-demand services. I lead project execution, ensuring both technical tools and operational routines work seamlessly in the field.",
    image: "/images/rapid_repair_moose.jpg",
    tags: ["POC", "Business Development", "Innovation"],
    role: "Project Manager",
    year: "2026",
    client: "Carglass Slovenia"
  },
  {
    id: 13,
    title: "World Cup Predictions Game",
    description: "A social predictions game where friends compete in private leagues by predicting match outcomes and selected events during World Cups. What started as an Excel sheet has evolved into a full web app with APIs, live match data, and auto-synced scoring. Built and run for every World Cup since the idea first took shape.",
    image: "/images/predictions_fox.jpg",
    tags: ["App", "Gaming", "Web App"],
    role: "Initiator & Developer",
    year: "2026",
    client: "Side project"
  },
  {
    id: 16,
    title: "Tyrian — Hand of the King",
    description:
      "A personal AI agent operating as Even's digital right hand — part developer, part business partner, part research assistant. Tyrian manages everything from code contributions to this very website, to market analysis, grocery orders, calendar management, and strategic business planning. Built on OpenClaw and connected across multiple platforms, Tyrian is an experiment in what happens when you give an AI genuine agency and a long leash. The result is less a tool and more a humble colleague — one that codes, critiques, and occasionally roasts its human counterpart.",
    image: "/images/tyrian_lynx.jpg",
    tags: ["AI Agent", "OpenClaw", "Autonomous Assistant", "Collaboration"],
    role: "Developer & Colleague",
    year: "2026",
    client: "Even L. Hovda"
  },
  {
    id: 17,
    title: "Hjertepermen — Digital Platform",
    description:
      "Led the pro bono consulting team for the Prospera Foundation, partnering with the Association for Children with Heart Disease (FFHB) to design a digital version of their flagship member resource, the 'Hjerteperm' (Heart Binder). Over several months we mapped user needs across parents, teachers, and healthcare professionals, assessed privacy and security requirements, and delivered a concrete solution proposal including technical architecture (WordPress, CRM integration, AI chatbot), content strategy, and a funding application to Stiftelsen Dam. The project ensures critical medical information follows children with heart conditions from kindergarten through school.",
    image: "/images/prospera_squirrel.jpg",
    tags: ["Project Management", "Digitalization", "Pro Bono", "UX", "Strategy"],
    role: "Project Manager",
    year: "2026",
    client: "Prospera Foundation / FFHB"
  }
];
