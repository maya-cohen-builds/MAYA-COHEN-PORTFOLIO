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
    id: "pipex-virtual-launch",
    brand: "DreamWorks Animation",
    title: "PipeX Virtual Launch Activations",
    description: "Co-led virtual brand activations for a cloud-native pipeline launch featuring Trolls IP during peak pandemic Zoom fatigue.",
    tag: "Enterprise",
    image: card2,
    context: "During the pandemic era production shutdown, DreamWorks Animation undertook a major infrastructure transformation, migrating its film pipeline to PipeX, a proprietary cloud-native production system. With in-person events off the table entirely, the studio needed to build internal excitement, drive adoption, and mark key milestones through virtual experiences that could actually cut through widespread Zoom fatigue.",
    role: "As Production Coordinator on the PipeX launch team, I co-led two flagship virtual brand activations tied directly to the pipeline's rollout. The first was a milestone launch celebration marking Trolls' migration onto PipeX, the second a completed film demo and celebration showcasing the finished production running fully on the new system. Across both events I owned the run of show, end-to-end logistics, platform production, and created original media content to support the programming. Audiences ranged from 50 to 150 studio staff and stakeholders per event.",
    impact: "Successfully activated internal adoption and enthusiasm around a complex technical product launch during one of the most challenging periods for live engagement in the industry. The activations served as proof of concept that PipeX could support not just production workflows but the cultural moments that matter to a creative studio.",
    press: "PipeX cloud-native pipeline, DreamWorks Animation. Featured IP: Trolls franchise.",
    gallery: [card2, card4, card5],
  },
  {
    id: "executive-brand-activations",
    brand: "The Shade Room",
    title: "Executive Brand Activations Across the Conference Circuit",
    description: "Chief of Staff managing CEO appearances across SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon.",
    tag: "Live Events",
    image: card6,
    context: "The Shade Room is one of the most influential digital media brands in Black culture, with over 28 million Instagram followers and a reputation for setting the agenda across entertainment, politics, and pop culture. As the brand expanded its executive presence across the tech and culture conference circuit, its CEO required a strategic operational partner to manage high-stakes appearances across some of the most competitive stages in the industry.",
    role: "As Chief of Staff to the CEO of The Shade Room, I coordinated executive appearances across a portfolio of major tech and culture conventions including SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon. I owned end-to-end vendor coordination and event logistics for each appearance, and contributed to messaging and positioning work including talking points developed for the CEO's on-stage presence. Each activation required translating the TSR brand voice into a professional conference context while maintaining the cultural authenticity the brand is known for.",
    impact: "Successfully managed a multi-event executive activation calendar spanning tech, media, and culture verticals simultaneously. Supported the CEO's visibility across both the mainstream tech conference circuit and culturally specific platforms, reinforcing The Shade Room's positioning as a serious media business and not just a social media account.",
    press: "The Shade Room, 28M+ Instagram followers. Conferences include SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon.",
    gallery: [card6, card1, card3],
  },
  {
    id: "infosys-instep-25",
    brand: "Infosys",
    title: "Infosys InStep 25th Anniversary Activation",
    description: "Created live AI product demos and wrote main stage keynote content for a Fortune 500 milestone celebration.",
    tag: "Enterprise",
    image: card4,
    context: "In 2025, Infosys celebrated the 25th anniversary of its InStep global internship program, one of the largest and most recognized internship programs in enterprise technology. The milestone required internal activations that could communicate the program's legacy and future direction across a diverse employee audience ranging from associates to C-suite executives.",
    role: "As PMM MBA Intern on the AI Applications team, I contributed directly to the anniversary activation across multiple workstreams. I created live product demos showcasing Azure-native AI agent capabilities, developed sales enablement decks used across the event, presented to internal audiences spanning associates through C-suite, and wrote live keynote content for the main stage presentation at the celebration.",
    impact: "Contributed to a flagship internal brand activation marking a 25-year program milestone at a Fortune 500 enterprise technology company. Keynote content and demo materials reached the full internal InStep audience across seniority levels.",
    press: "Infosys InStep 25th Anniversary, 2025. Infosys is a global enterprise technology leader with 300,000+ employees.",
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
