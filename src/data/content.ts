import type { Language } from "@/lib/i18n";

export type Service = { slug: string; title: string; short: string; description: string; image: string; message: string };

const services: Record<Language, Service[]> = {
  sv: [
    {slug:"bostadsflytt",title:"Bostadsflytt",short:"För lägenheter, villor och radhus.",description:"En lugn och välplanerad flytt där vi tar hand om dina ägodelar från dörr till dörr.",image:"/images/apartment.avif",message:"Hej Flyttiva! Jag vill gärna få en offert för en bostadsflytt."},
    {slug:"kontorsflytt",title:"Kontorsflytt",short:"Smidigt för företag och arbetsplatser.",description:"Strukturerad flytthjälp med fokus på kontinuitet, varsam hantering och minimal avbrottstid.",image:"/images/office.avif",message:"Hej Flyttiva! Jag vill gärna få en offert för en kontorsflytt."},
    {slug:"packning",title:"Packning",short:"Omsorgsfullt packat och klart.",description:"Vi packar hela hemmet eller utvalda rum med rätt material och tydlig märkning.",image:"/images/packing.avif",message:"Hej Flyttiva! Jag vill gärna få en offert för packhjälp."},
    {slug:"flyttstadning",title:"Flyttstädning",short:"Lämna bostaden skinande ren.",description:"Noggrann flyttstädning som gör överlämningen enkel och ger dig en sak mindre att tänka på.",image:"/images/cleaning.avif",message:"Hej Flyttiva! Jag vill gärna få en offert för flyttstädning."},
  ],
  en: [
    {slug:"bostadsflytt",title:"Home moves",short:"For apartments, houses and townhouses.",description:"A calm, well-planned move where we care for your belongings from door to door.",image:"/images/apartment.avif",message:"Hello Flyttiva! I would like a quote for a home move."},
    {slug:"kontorsflytt",title:"Office moves",short:"Smooth moves for businesses and workplaces.",description:"Structured moving help focused on continuity, careful handling and minimal downtime.",image:"/images/office.avif",message:"Hello Flyttiva! I would like a quote for an office move."},
    {slug:"packning",title:"Packing",short:"Carefully packed and ready to go.",description:"We pack your entire home or selected rooms with the right materials and clear labelling.",image:"/images/packing.avif",message:"Hello Flyttiva! I would like a quote for packing help."},
    {slug:"flyttstadning",title:"Move-out cleaning",short:"Leave your home spotless.",description:"Thorough move-out cleaning for an easy handover and one less thing to think about.",image:"/images/cleaning.avif",message:"Hello Flyttiva! I would like a quote for move-out cleaning."},
  ]
};

const faqs = {
  sv: [
    {question:"Hur snabbt får jag svar?",answer:"Vi svarar normalt inom några timmar under våra öppettider och alltid inom 24 timmar."},
    {question:"Är flytten försäkrad?",answer:"Ja. Dina ägodelar är försäkrade under hela flytten och hanteras av ett erfaret team."},
    {question:"Flyttar ni på helger?",answer:"Ja, vi utför flyttar alla dagar i veckan efter överenskommelse."},
    {question:"Kan ni hjälpa till med packning?",answer:"Absolut. Vi kan ordna både packmaterial och fullständig packhjälp inför flytten."},
  ],
  en: [
    {question:"How quickly will I get a reply?",answer:"We normally reply within a few hours during opening hours and always within 24 hours."},
    {question:"Is the move insured?",answer:"Yes. Your belongings are insured throughout the move and handled by an experienced team."},
    {question:"Do you move at weekends?",answer:"Yes, we carry out moves every day of the week by arrangement."},
    {question:"Can you help with packing?",answer:"Absolutely. We can provide both packing materials and a complete packing service before your move."},
  ]
} as const;

export const getServices = (language: Language) => services[language];
export const getFrequentlyAskedQuestions = (language: Language) => faqs[language];
