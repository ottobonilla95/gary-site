export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  message: string;
};

export const services: Service[] = [
  {
    slug: "bostadsflytt",
    title: "Bostadsflytt",
    short: "För lägenheter, villor och radhus.",
    description: "En lugn och välplanerad flytt där vi tar hand om dina ägodelar från dörr till dörr.",
    image: "/images/apartment.avif",
    message: "Hej Flyttiva! Jag vill gärna få en offert för en bostadsflytt.",
  },
  {
    slug: "kontorsflytt",
    title: "Kontorsflytt",
    short: "Smidigt för företag och arbetsplatser.",
    description: "Strukturerad flytthjälp med fokus på kontinuitet, varsam hantering och minimal avbrottstid.",
    image: "/images/office.avif",
    message: "Hej Flyttiva! Jag vill gärna få en offert för en kontorsflytt.",
  },
  {
    slug: "packning",
    title: "Packning",
    short: "Omsorgsfullt packat och klart.",
    description: "Vi packar hela hemmet eller utvalda rum med rätt material och tydlig märkning.",
    image: "/images/packing.avif",
    message: "Hej Flyttiva! Jag vill gärna få en offert för packhjälp.",
  },
  {
    slug: "flyttstadning",
    title: "Flyttstädning",
    short: "Lämna bostaden skinande ren.",
    description: "Noggrann flyttstädning som gör överlämningen enkel och ger dig en sak mindre att tänka på.",
    image: "/images/cleaning.avif",
    message: "Hej Flyttiva! Jag vill gärna få en offert för flyttstädning.",
  },
];

export const frequentlyAskedQuestions = [
  {
    question: "Hur snabbt får jag svar?",
    answer: "Vi svarar normalt inom några timmar under våra öppettider och alltid inom 24 timmar.",
  },
  {
    question: "Är flytten försäkrad?",
    answer: "Ja. Dina ägodelar är försäkrade under hela flytten och hanteras av ett erfaret team.",
  },
  {
    question: "Flyttar ni på helger?",
    answer: "Ja, vi utför flyttar alla dagar i veckan efter överenskommelse.",
  },
  {
    question: "Kan ni hjälpa till med packning?",
    answer: "Absolut. Vi kan ordna både packmaterial och fullständig packhjälp inför flytten.",
  },
];
