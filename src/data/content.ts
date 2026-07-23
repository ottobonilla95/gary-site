export type Service = {
  id: string;
  category: "apartment" | "house" | "office" | "packing" | "cleaning";
  filter: string;
  title: string;
  description: string;
  time: string;
  price: number;
  image: string;
};

export const services: Service[] = [
  {
    id: "cbae0602-7bf1-492e-becd-9dd816917603",
    category: "apartment",
    filter: "Lägenhetsflytt",
    title: "Apartment Relocation",
    description:
      "Efficient and careful moving service for apartments of all sizes. Includes loading, transportation, and unloading of your belongings. Optional packing services available.",
    time: "3-5 hours",
    price: 250,
    image: "/images/apartment.avif",
  },
  {
    id: "37e75ce3-6183-43d2-a52f-b2fbe43fa0e1",
    category: "house",
    filter: "Husflytt",
    title: "Full House Moving",
    description:
      "Comprehensive moving solution for houses, from small homes to large estates. Our team handles everything from disassembling furniture to setting up in your new residence.",
    time: "6-10 hours",
    price: 750,
    image: "/images/house.avif",
  },
  {
    id: "aedde1f4-47a3-4c30-a973-c44103c0f798",
    category: "office",
    filter: "Kontorsflytt",
    title: "Office Relocation",
    description:
      "Specialized moving services for businesses, ensuring minimal downtime. We move office furniture, equipment, and sensitive documents with utmost care and efficiency.",
    time: "1-2 days",
    price: 1200,
    image: "/images/office.avif",
  },
  {
    id: "2f7381a5-1dd2-48e5-beac-0b33cd16c055",
    category: "packing",
    filter: "Packning",
    title: "Professional Packing Service",
    description:
      "Let our experts pack your entire home or specific rooms. We use high-quality packing materials to protect your valuables and ensure safe transit.",
    time: "2-8 hours (depending on size)",
    price: 150,
    image: "/images/packing.avif",
  },
  {
    id: "00cbf27a-cf2f-4a73-b68d-ab6be143575a",
    category: "cleaning",
    filter: "Städning",
    title: "Post-Move Cleaning",
    description:
      "Thorough cleaning service for your old or new home after moving. Includes deep cleaning of kitchens, bathrooms, floors, and general tidying.",
    time: "2-4 hours",
    price: 100,
    image: "/images/cleaning.avif",
  },
];

export const testimonials = [
  {
    quote:
      "Utmärkt service från början till slut! Teamet var punktligt, professionellt och hanterade alla mina tillhörigheter med omsorg. En flytt kan vara stressig, men de gjorde det så enkelt. Rekommenderas starkt!",
    name: "Sarah J.",
    move: "Local Move",
    rating: 5,
  },
  {
    quote:
      "Jag använde deras flyttservice för långdistanstransporter och blev mycket imponerad. Allt kom i tid och i perfekt skick. Kommunikationen under hela processen var fantastisk.",
    name: "Michael P.",
    move: "Long-Distance Move",
    rating: 5,
  },
  {
    quote:
      "Bra service överlag. Några mindre skavanker på en låda, men inget större. Flyttfirmorna var vänliga och arbetade effektivt. Skulle överväga att anlita dem igen.",
    name: "Emily R.",
    move: "Packing and Moving",
    rating: 4,
  },
];

export const pricingPackages = [
  {
    icon: "package",
    title: "Lägenhetsflytt",
    description: "Perfekt för lägenheter upp till 3 rum och kök",
    price: "3 500 kr",
    features: [
      "2 erfarna flyttare",
      "Flyttbil upp till 20 kvm",
      "Grundläggande försäkring",
      "Transport inom 50 km",
      "Montering/demontering av möbler",
    ],
  },
  {
    icon: "house",
    title: "Husflytt",
    description: "För villor och radhus med mer utrymme",
    price: "6 500 kr",
    popular: true,
    features: [
      "3-4 erfarna flyttare",
      "Stor flyttbil upp till 40 kvm",
      "Fullständig försäkring",
      "Transport inom 100 km",
      "Montering/demontering av möbler",
      "Packning av känsliga föremål",
    ],
  },
  {
    icon: "building",
    title: "Kontorsflytt",
    description: "Professionell flytt av kontor och företag",
    price: "8 500 kr",
    features: [
      "Dedikerat flytteam",
      "Flera flyttbilar vid behov",
      "Omfattande försäkring",
      "Flexibel transport",
      "IT-utrustning hantering",
      "Möblering på ny plats",
      "Kvälls/helgflytt tillgänglig",
    ],
  },
];
