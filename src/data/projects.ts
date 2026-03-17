import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import bizhacksCover from "@/assets/bizhacks-cover.jpg";
import bizhacksGallery1 from "@/assets/bizhacks-gallery-1.jpg";
import bizhacksGallery2 from "@/assets/bizhacks-gallery-2.jpg";
import bizhacksGallery3 from "@/assets/bizhacks-gallery-3.jpg";
import bizhacksGallery4 from "@/assets/bizhacks-gallery-4.jpg";
import bizhacksGallery5 from "@/assets/bizhacks-gallery-5.jpg";
import bizhacksGallery6 from "@/assets/bizhacks-gallery-6.jpg";
import infosysCover from "@/assets/infosys-cover.jpeg";
import infosysGallery1 from "@/assets/infosys-gallery-1.jpeg";
import infosysGallery3 from "@/assets/infosys-gallery-3.jpeg";
import infosysGallery4 from "@/assets/infosys-gallery-4.jpeg";
import infosysGallery5 from "@/assets/infosys-gallery-5.jpeg";
import infosysGallery6 from "@/assets/infosys-gallery-6.jpeg";
import elevateCover from "@/assets/elevate-cover.jpeg";
import elevateGallery1 from "@/assets/elevate-gallery-1.jpg";
import elevateGallery2 from "@/assets/elevate-gallery-2.jpg";
import elevateGallery3 from "@/assets/elevate-gallery-3.jpg";
import elevateGallery4 from "@/assets/elevate-gallery-4.jpg";
import elevateGallery5 from "@/assets/elevate-gallery-5.jpg";
import gwibGallery1 from "@/assets/gwib-gallery-1.jpg";
import gwibGallery2 from "@/assets/gwib-gallery-2.png";
import gwibGallery3 from "@/assets/gwib-gallery-3.png";
import gwibGallery4 from "@/assets/gwib-gallery-4.png";
import gwibGallery5 from "@/assets/gwib-gallery-5.png";
import gwibGallery6 from "@/assets/gwib-gallery-6.png";
import gwibCover from "@/assets/gwib-cover.jpeg";
import gwibGallery7 from "@/assets/gwib-gallery-7.png";
import gwibGallery8 from "@/assets/gwib-gallery-8.png";

export type ProjectLink = {
  text: string;
  url: string;
};

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
  links?: ProjectLink[];
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
    image: infosysCover,
    context: "In 2025, Infosys celebrated the 25th anniversary of its InStep global internship program, one of the largest and most recognized internship programs in enterprise technology. The milestone required internal activations that could communicate the program's legacy and future direction across a diverse employee audience ranging from associates to C-suite executives.",
    role: "As MBA Intern directly supporting the Global Head of Brand at Infosys, I contributed to the anniversary activation across multiple workstreams. I created live product demos showcasing Azure-native AI agent capabilities, developed sales enablement decks used across the event, presented to internal audiences spanning associates through C-suite, and wrote live keynote content for the main stage presentation at the celebration.",
    impact: "Contributed to a flagship internal brand activation marking a 25-year program milestone at a Fortune 500 enterprise technology company. Keynote content and demo materials reached the full internal InStep audience across seniority levels.",
    press: "Infosys InStep 25th Anniversary, 2025. Infosys is a global enterprise technology leader with 300,000+ employees.",
    gallery: [infosysGallery1, infosysCover, infosysGallery3, infosysGallery4, infosysGallery5, infosysGallery6],
  },
  {
    id: "bizhacks-2025",
    brand: "Infosys InStep",
    title: "Infosys InStep BizHacks 2025",
    description: "Brought an independent Azure AI agent project to a competitive internal hackathon while mentoring undergraduate engineers through their first build.",
    tag: "Enterprise",
    image: bizhacksCover,
    context: "The Infosys InStep BizHacks 2025 was an internal hackathon challenging undergraduate software engineers to build and deploy AI-powered business solutions. For many participants it was their first hackathon experience, requiring both technical guidance and strategic marketing mentorship to bring their products to life.",
    role: "As MBA Intern supporting the Global Head of Brand at Infosys, I independently built and pressure tested Azure-native AI agents as part of my internship project automating marketing operations workflows. I brought this project into the BizHacks competition and also served as a mentor to undergraduate software engineers, guiding them through both the technical build process and the product marketing framing of their solutions.",
    impact: "Competed and mentored simultaneously, demonstrating technical depth unusual for a marketing intern. The underlying project delivered a working AI agent solution for marketing ops automation using Microsoft Azure infrastructure.",
    press: "Infosys InStep BizHacks 2025. Infosys InStep global internship program.",
    gallery: [bizhacksGallery1, bizhacksGallery2, bizhacksGallery3, bizhacksGallery4, bizhacksGallery5, bizhacksGallery6],
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
  {
    id: "humanitas-prize-42",
    brand: "The Humanitas Prize",
    title: "42nd Annual Humanitas Prize Awards",
    description: "Freelance Event Producer managing live production, vendor coordination, real-time IT troubleshooting, and live social coverage at a Hollywood awards ceremony.",
    tag: "Live Events",
    image: card1,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, recognizing film and television writers whose work affirms the human condition. The 42nd Annual event required a production team capable of managing both the high-visibility public facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Freelance Event Producer, I owned multiple workstreams simultaneously across the full event lifecycle. Pre-event I managed social media strategy, content creation, copy, and scheduling across platforms. During the live event I coordinated directly with vendors on the ground, resolved live technical and IT issues in real time, executed live social media coverage on X, and contributed to red carpet photography at the step and repeat.",
    impact: "Successfully produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "42nd Annual Humanitas Prize. Industry attendees spanning film and television writers, producers, and network executives.",
    gallery: [card1, card4, card6],
  },
  {
    id: "usc-marshall-gwib",
    brand: "USC Marshall GWIB",
    title: "USC Marshall Graduate Women in Business",
    description: "VP of Marketing who led a full brand overhaul, social strategy, and 20% engagement growth for a USC Marshall student organization.",
    tag: "Campus",
    image: gwibCover,
    context: "Graduate Women in Business at USC Marshall is a student-led organization serving the Marshall MBA community with a focus on professional development, community building, and gender equity in business. As the organization grew its presence and partnerships, it needed a complete brand overhaul and a modern social media strategy to match its ambitions.",
    role: "As VP of Marketing I led a full brand refresh from the ground up, redesigning the brand guidelines and logo from scratch. I owned social media strategy, content creation, posting, and reels production end to end. I created a spotlight campaign with original messaging and positioning collateral to showcase board members, developed decks for internal and external use, and mentored two members including an Associate VP and an undergraduate GWIB member. I also drove partnership growth and expanded the organization's social reach.",
    impact: "Grew social engagement and partnerships by 20%. Delivered a complete brand identity overhaul including a new logo that became official organization collateral. Mentored two emerging marketing professionals simultaneously while managing the full marketing function independently.",
    press: "USC Marshall Graduate Women in Business. USC Marshall School of Business, class of 2026.",
    gallery: [gwibGallery1, gwibGallery2, gwibGallery3, gwibGallery4, gwibGallery5, gwibGallery6, gwibGallery8],
  },
  {
    id: "usc-elevate-summit",
    brand: "USC GWIB x Marshall Pride",
    title: "USC Elevate Summit, Inaugural Conference",
    description: "Elected organizing committee member who created the brand identity, produced the full event, and emceed the inaugural co-branded conference featuring the CFO of SKIMS.",
    tag: "Campus",
    image: elevateCover,
    context: "The USC Elevate Summit was the inaugural partnership conference between USC GWIB's Elevate Her and Marshall Pride's Spotlight Summit, two distinct student organizations coming together for the first time to produce a unified brand experience. The event featured brand partnerships with Lo & Sons and Coca-Cola, keynote talent including the CFO of SKIMS and the Co-Founder and CEO of DRAFTED, and a community session spotlighting a student-led nonprofit.",
    role: "As an elected member of the organizing committee I operated as the de facto creative and brand director for the conference. I created the blended logo for the inaugural partnership which became official merch and high-quality sticker giveaways. I developed all marketing materials, live deck templates for mainstage and breakout sessions, and messaging and positioning frameworks for the community session spotlighting SELA nonprofit. I selected and coordinated workshop panelists, advised speakers on their session framing, and led the brand activation of networking bingo and the Lo & Sons bag raffle giveaway. The Lo & Sons partnership was nurtured through a dedicated social campaign that included product highlights, giveaway promotions, and integrated event marketing across platforms. I coordinated the closing group photo and ushered attendees to the post-conference mixer in DTLA. I also emceed the entire conference including introducing the keynote address from Andy Muir, CFO of SKIMS, and the fireside chat with Karina Martinez, Co-Founder and CEO of DRAFTED.",
    impact: "Successfully launched an inaugural co-branded conference from zero, creating a unified brand identity across two distinct student organizations. Brand partnerships with Lo & Sons and Coca-Cola. Two original logos became official conference merch. Live brand activation via networking bingo and a product giveaway drove audience engagement throughout the event. Community session amplified a student-founded nonprofit to a professional audience.",
    press: "USC Elevate Summit, inaugural edition. Brand partners: Lo & Sons, Coca-Cola. Keynote: Andy Muir, CFO of SKIMS. Fireside chat: Karina Martinez, Co-Founder and CEO of DRAFTED.",
    gallery: [elevateGallery5, elevateGallery1, elevateGallery2, elevateGallery3, elevateGallery4, elevateCover],
    links: [
      { text: "SKIMS", url: "https://skims.com" },
      { text: "DRAFTED", url: "https://www.wearedrafted.co/about-us" },
      { text: "Lo & Sons", url: "https://www.loandsons.com/" },
    ],
  },
  {
    id: "hbo-barry-emmys",
    brand: "Henry Winkler x HBO",
    title: "HBO Barry Season 4 Emmy Awards Campaign",
    description: "Managed Henry Winkler's full press and Emmy Awards campaign for Barry's final season across primetime, syndicated, podcast, and speaker series.",
    tag: "Content",
    image: card4,
    context: "HBO's Barry, the critically acclaimed dark comedy starring Bill Hader and Henry Winkler, entered its fourth and final season in 2023 as one of television's most decorated comedies. The season finale press and awards campaign ran parallel to the 75th Annual Emmy Awards cycle, requiring a coordinated multi-platform promotional push across primetime, syndicated, podcast, and speaker series touchpoints to close out the show's legacy run.",
    role: "As Chief of Staff to Henry Winkler, I supported his full Barry Season 4 press and Emmy Awards campaign across all four tour formats. I managed scheduling and logistics across primetime, syndicated, podcast, and speaker series appearances, coordinated press and PR outreach, developed media training materials and talking points for Winkler's on-camera and on-stage appearances, and created social content supporting the campaign across platforms.",
    impact: "Barry Season 4 received 11 Emmy nominations at the 75th Annual Emmy Awards including Outstanding Comedy Series and an individual nomination for Henry Winkler for Outstanding Supporting Actor in a Comedy Series. The season successfully closed out one of HBO's most critically acclaimed series with a press campaign that spanned every major media format simultaneously.",
    press: "HBO Barry Season 4. 75th Annual Emmy Awards, 11 nominations including Outstanding Comedy Series. Henry Winkler, nominated Outstanding Supporting Actor in a Comedy Series.",
    gallery: [card4, card2, card6],
  },
  {
    id: "kings-hawaiian-case-competition",
    brand: "King's Hawaiian x USC GMA",
    title: "King's Hawaiian 75th Anniversary Case Competition",
    description: "Produced a branded graduate marketing case competition around King's Hawaiian's 75th anniversary milestone as Associate VP of Case Competitions.",
    tag: "Campus",
    image: card1,
    context: "King's Hawaiian, the beloved bread and rolls brand, celebrated its 75th anniversary as one of America's most recognizable family food brands. The USC Graduate Marketing Association created a branded case competition around the milestone, challenging graduate marketing students to develop real strategic solutions for a legacy consumer brand navigating modern market pressures.",
    role: "As Associate VP of Case Competitions for the USC Graduate Marketing Association, I produced the full competition experience end to end. I owned event logistics and production, recruited and coordinated judges from the marketing industry, recruited competing teams, and managed all marketing and promotions for the event to drive participation and visibility across the USC Marshall graduate community.",
    impact: "Successfully produced a branded case competition experience anchored around a 75th anniversary milestone for a nationally recognized consumer brand. Delivered a professional competition format that gave graduate marketers real exposure to senior industry judges while creating a branded activation moment for King's Hawaiian within the USC Marshall ecosystem.",
    press: "King's Hawaiian 75th Anniversary Marketing Case Competition. USC Graduate Marketing Association, USC Marshall School of Business.",
    gallery: [card1, card3, card5],
  },
];

export const filterTags = ["All", "Enterprise", "Live Events", "Campus", "Content"] as const;
