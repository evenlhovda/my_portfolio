const fs = require('fs');
let code = fs.readFileSync('/Users/tyrianlaennister/.openclaw/workspace/my_portfolio/lib/data.ts', 'utf8');

// The new block of projects at the end
const newBlock = `  {
    id: 15,
    title: "POC Voice AI",
    description: "Proof of Concept for stemmestyrt AI i samarbeid med Carglass Hellas. Utforskning av hvordan taleteknologi kan forbedre kundereisen.",
    image: "/images/poc_voice.jpg",
    tags: ["AI", "Voice", "POC", "Innovasjon"],
    role: "Utvikler / Prosjektleder",
    year: "2026",
    client: "Carglass Hellas"
  },
  {
    id: 14,
    title: "Rapid Repair POC",
    description: "Et Proof of Concept prosjekt med Carglass Slovenia for å teste og rulle ut 'Rapid repair' konsepter og verktøy.",
    image: "/images/rapid_repair.jpg",
    tags: ["POC", "Forretningsutvikling", "Innovasjon"],
    role: "Prosjektleder",
    year: "2026",
    client: "Carglass Slovenia"
  },
  {
    id: 13,
    title: "VM predictions game",
    description: "Fundraising for Belron's technical team through a social predictions game for the World Cup.",
    image: "/images/vm_predictions.jpg",
    tags: ["App", "Fundraising", "Gamification"],
    role: "Initiativtaker og utvikler",
    year: "2026",
    client: "Belron Technical Team"
  },
  {
    id: 3,
    title: "Bryne Kitefestival",
    description: ProjectDescriptions.kitefestival,
    image: "/images/bryne_kite.jpg",
    tags: ["Sport", "Community", "Event"],
    role: "Medarrangør & økonomiansvarlig",
    year: "2026",
    client: "Bryne Kitefestival"
  }
];`;

code = code.replace(/\s*\{\s*id:\s*3,\s*title:\s*"Bryne Kitefestival"[\s\S]*?client:\s*"Bryne Kitefestival"\s*\},?/g, '');
code = code.replace(/\s*\{\s*id:\s*13,\s*title:\s*"VM predictions game"[\s\S]*?client:\s*"Belron Technical Team"\s*\},?/g, '');
code = code.replace(/\s*\{\s*id:\s*14,\s*title:\s*"Rapid Repair POC"[\s\S]*?client:\s*"Carglass Slovenia"\s*\},?/g, '');
code = code.replace(/\s*\{\s*id:\s*15,\s*title:\s*"POC Voice AI"[\s\S]*?client:\s*"Carglass Hellas"\s*\}\n\]/g, '');

code = code.replace(/\]\s*$/, '');
// remove trailing comma if present
code = code.replace(/,\s*$/, '');

code = code + ',\n' + newBlock;

fs.writeFileSync('/Users/tyrianlaennister/.openclaw/workspace/my_portfolio/lib/data.ts', code);
