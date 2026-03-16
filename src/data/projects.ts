import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";

export type Project = {
  id: string;
  brand: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  context: string;
  role: string;
  impact: string;
  press?: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "being-henry-book-tour",
    brand: "Henry Winkler x Celadon Books",
    title: "Being Henry: National Book Tour GTM",
    description: "Chief of Staff behind the national GTM launch of a NYT Bestselling memoir across 15+ US markets.",
    tag: "Live Events",
    image: card1,
    context: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution.",
    role: "As Chief of Staff to Henry Winkler, I served as the operational and creative lead behind the tour's execution. I owned end-to-end logistics and travel coordination across all tour markets, managed talent scheduling and green room to stage management, led media prep and developed talking points used across press appearances, coordinated PR outreach and fan convention integrations, produced social content including on-camera video announcements for Winkler's speaker series, and contributed copyediting and ghostwriting to supporting materials for the book itself.",
    impact: "The tour spanned 15+ cities across the US with multiple sold-out stops including Cambridge MA, Long Island NY, and Naperville IL. The memoir debuted as a New York Times Bestseller. The paperback release generated a second full tour leg in 2024, anchored by a stop at the Smithsonian Museum of Natural History in Washington DC.",
    press: "\"Being Henry\" New York Times Bestseller, Celadon Books 2023. Tour venues included The Town Hall NYC, Harvard Bookstore, and the Smithsonian Institution.",
    gallery: [card1, card3, card6],
  },
  {
    id: "beauty-pop-up",
    brand: "Glossier",
    title: "Sensory Pop-Up",
    description: "Multi-city retail activation blending digital and physical.",
    tag: "Live Events",
    image: card2,
    context: "Glossier wanted to create a physical expression of their digital-first brand across four major cities. The pop-up needed to feel like stepping inside their Instagram feed.",
    role: "Conceptualized the spatial narrative and managed production across NYC, LA, London, and Toronto. Coordinated local permitting, influencer programming, and real-time social content strategy.",
    impact: "45,000 visitors across four cities. 300% increase in local sales during activation windows. Over 8,000 pieces of user-generated content.",
    gallery: [card2, card4, card5],
  },
  {
    id: "enterprise-summit",
    brand: "Salesforce",
    title: "Enterprise Innovation Summit",
    description: "Three-day conference reimagined as an interactive experience.",
    tag: "Enterprise",
    image: card6,
    context: "Salesforce sought to evolve their annual summit from a traditional conference into a hands-on innovation playground for 5,000 enterprise decision-makers.",
    role: "Served as Creative Director for the experiential track. Designed interactive demo environments, managed stage production, and coordinated C-suite speaker programming.",
    impact: "Pipeline influenced: $200M+. NPS score 15 points above previous year. 40% increase in demo-to-meeting conversion.",
    gallery: [card6, card1, card3],
  },
  {
    id: "campus-tour",
    brand: "Google",
    title: "Campus Innovation Tour",
    description: "University roadshow bringing AI tools to the next generation.",
    tag: "Campus",
    image: card4,
    context: "Google needed a scalable activation format to introduce their AI development tools to computer science students across 20 universities in a single semester.",
    role: "Designed the modular activation format and managed the touring logistics. Built and trained a team of 12 brand ambassadors. Created the measurement framework.",
    impact: "15,000+ student interactions. 8,000 API signups during tour. Program renewed for three additional semesters.",
    gallery: [card4, card5, card2],
  },
  {
    id: "content-studio",
    brand: "Red Bull",
    title: "Creator Studio Residency",
    description: "Content creation program embedded within live activations.",
    tag: "Content",
    image: card5,
    context: "Red Bull wanted to build a content engine that lived inside their events—turning every activation into a media production opportunity with emerging creators.",
    role: "Architected the creator residency program from scratch. Managed talent scouting, production workflows, and distribution partnerships across TikTok, YouTube, and Instagram.",
    impact: "50M+ total views across creator content. 24 creators onboarded. Content cost-per-view 60% below benchmark.",
    gallery: [card5, card1, card3],
  },
  {
    id: "gaming-arena",
    brand: "Xbox",
    title: "Arena Championship",
    description: "Esports tournament merged with immersive brand world.",
    tag: "Gaming",
    image: card3,
    context: "Xbox wanted to blur the line between competitive gaming and experiential marketing, creating an event that felt as epic in person as it looked on Twitch.",
    role: "Produced the live event experience layer on top of the esports tournament. Managed spatial design, crowd engagement programming, and broadcast integration.",
    impact: "2.3M peak concurrent Twitch viewers. 5,000 in-person attendees. Highest-rated Xbox event in brand tracker history.",
    gallery: [card3, card1, card6],
  },
];

export const filterTags = ["All", "Gaming", "Enterprise", "Live Events", "Campus", "Content"] as const;
