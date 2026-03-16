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
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "gpu-launch-24",
    brand: "Nvidia",
    title: "GPU Launch Experience",
    description: "Immersive product reveal for next-gen graphics architecture.",
    tag: "Gaming",
    image: card1,
    context: "Nvidia needed a launch moment that matched the scale of their most ambitious GPU release. The brief: make 3,000 developers feel like they're inside the architecture itself.",
    role: "Led end-to-end production from concept through execution. Managed a cross-functional team of 40+ across spatial design, AV engineering, and talent coordination. Owned vendor relationships, budget, and timeline.",
    impact: "12M+ social impressions in 48 hours. 98% attendee satisfaction score. Featured in Wired, The Verge, and TechCrunch as 'the product launch of the year.'",
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
