# AI i UI: Konsept og Fremtidsvisjon

## Bakgrunn
Å ha en ren chat-agent i hjørnet ("Rune" etc.) har lenge vært standarden for å integrere AI i eksisterende løsninger. For å ta opplevelsen til neste nivå og tilby en opplevelse mer i tråd med Ashley Brooke sin rene stil, foreslås det å bake AI direkte inn i selve grensesnittet (UI).

## Konsepter for direkte UI-integrasjon

### 1. Kontekstuell Bakgrunnstekst / Lokasjonsspeiling
I stedet for at brukeren må spørre "Hva kan Even hjelpe meg med i Oslo?", kan frontend hente brukerens lokasjon eller kontekst, og sende dette i bakgrunnen til AI-en. Nettsiden kan da automatisk tilpasse overskrifter og tekster:
- **Før:** "AI, automatisering og forretningsutvikling."
- **Etter (AI generert basert på kontekst):** "Hjelper selskaper i Oslo-området med å bygge smarte, AI-drevne arbeidsflyter."

### 2. Dynamiske Prosjekt-fremhevinger
Dersom vi vet at brukeren navigerer fra en spesifikk plattform (f.eks. LinkedIn fra en teknisk artikkel), kan AI sortere og fremheve prosjektene i sanntid, f.eks. "Fordi du er opptatt av AI og automatisering, her er mine mest relevante prosjekter for deg:".

### 3. Usynlig Interaksjon (Ambient AI)
UI-et oppdateres fluid. Hvis brukeren stopper opp ved "Innovasjonsagent", glir et lite informasjonskort frem med en generert, presis pitch skrevet om det spesifikke prosjektet ut fra den samlede tidsbruken på siden.

### 4. Inline Forespørsler
I stedet for chat, benyttes inline "magic inputs" i avsnittene. Brukeren kan markere en tekst og trykke "Utdyp", og teksten ekspanderer sømløst skrevet av AI i riktig tone-of-voice.

## Neste Steg
1. Bytte ut faste tekstblokker med React-komponenter som støtter streaming av AI-tekst.
2. Sette opp kontekst-håndtering for hver besøkende i Next.js rutingen.
3. Teste utkastene mot ytelsesmetrikker for å sikre at lastetiden ikke forringes nevneverdig.