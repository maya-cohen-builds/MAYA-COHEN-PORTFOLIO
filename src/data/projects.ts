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
    role: "As MBA Intern directly supporting the Global Head of Brand at Infosys, I contributed to the anniversary activation across multiple workstreams. I created live product demos showcasing Azure-native AI agent capabilities, developed sales enablement decks used across the event, presented to internal audiences spanning associates through C-suite, and wrote live keynote content for the main stage presentation at the celebration.",
    impact: "Contributed to a flagship internal brand activation marking a 25-year program milestone at a Fortune 500 enterprise technology company. Keynote content and demo materials reached the full internal InStep audience across seniority levels.",
    press: "Infosys InStep 25th Anniversary, 2025. Infosys is a global enterprise technology leader with 300,000+ employees.",
    gallery: [card4, card5, card2],
  },
  {
    id: "bizhacks-2025",
    brand: "Infosys InStep",
    title: "Infosys InStep BizHacks 2025",
    description: "Brought an independent Azure AI agent project to a competitive internal hackathon while mentoring undergraduate engineers through their first build.",
    tag: "Enterprise",
    image: card5,
    context: "The Infosys InStep BizHacks 2025 was an internal hackathon challenging undergraduate software engineers to build and deploy AI-powered business solutions. For many participants it was their first hackathon experience, requiring both technical guidance and strategic marketing mentorship to bring their products to life.",
    role: "As MBA Intern supporting the Global Head of Brand at Infosys, I independently built and pressure tested Azure-native AI agents as part of my internship project automating marketing operations workflows. I brought this project into the BizHacks competition and also served as a mentor to undergraduate software engineers, guiding them through both the technical build process and the product marketing framing of their solutions.",
    impact: "Competed and mentored simultaneously, demonstrating technical depth unusual for a marketing intern. The underlying project delivered a working AI agent solution for marketing ops automation using Microsoft Azure infrastructure.",
    press: "Infosys InStep BizHacks 2025. Infosys InStep global internship program.",
    gallery: [card5, card1, card3],
  },
  {
    id: "becoming-memoir-launch",
    brand: "Tracee Ellis Ross x Michelle Obama",
    title: "Becoming: Messaging Strategy for Michelle Obama's Memoir Launch",
    description: "Freelance creative strategist supporting Tracee Ellis Ross's press role in the Becoming campaign, including NYT interview prep with Michelle Obama.",
    tag: "Content",
    image: card3,
    context: "In 2018, Michelle Obama launched Becoming, one of the best-selling memoirs in publishing history. Tracee Ellis Ross, coming off a viral Glamour Women of the Year speech, was selected as a key press figure in the Becoming campaign, including a high-profile New York Times interview with Obama herself. To prepare for this role Ross needed a strategic creative partner to help shape her approach to the material.",
    role: "As a freelance creative strategist working directly with Tracee Ellis Ross, I supported her across multiple engagements during this period. I contributed copyediting, messaging and positioning input, and strategy advising on her Glamour Women of the Year speech. For the Michelle Obama Becoming press work specifically, I built messaging and positioning frameworks by selecting and organizing key content from the memoir, synthesizing those themes for Tracee, and helping structure talking points and media training materials she used in her press appearances including her NYT interview with Obama. Our working sessions took place across Los Angeles, including on the set of Black-ish and at Soho House.",
    impact: "Contributed to the press infrastructure behind one of the most culturally significant book launches of the decade. Tracee Ellis Ross's Glamour Women of the Year speech went viral. Her NYT interview with Michelle Obama became one of the defining press moments of the Becoming campaign.",
    press: "Michelle Obama, Becoming, Crown Publishing 2018. Tracee Ellis Ross, Glamour Women of the Year. New York Times Books interview, November 2018.",
    gallery: [card3, card1, card6],
  },
];

export const filterTags = ["All", "Gaming", "Enterprise", "Live Events", "Campus", "Content"] as const;
