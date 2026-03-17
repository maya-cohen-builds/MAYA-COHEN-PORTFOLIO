import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import khCover from "@/assets/kh-cover.jpeg";
import pipexPersonas from "@/assets/pipex-personas.png";
import pipexTimeline from "@/assets/pipex-timeline.png";
import pipexRoadmap from "@/assets/pipex-roadmap.png";
import pipexWorkflow from "@/assets/pipex-workflow.png";
import pipexTrollsEmail from "@/assets/pipex-trolls-email.png";
import pipexLaunchLetter from "@/assets/pipex-launch-letter.png";
import pipexHappyHour from "@/assets/pipex-happy-hour.png";
import pipexTrollsHoliday from "@/assets/pipex-trolls-holiday.jpg";
import pipexCardCover from "@/assets/pipex-card-cover.webp";
import khGallery1 from "@/assets/kh-gallery-1.png";
import khGallery2 from "@/assets/kh-gallery-2.jpeg";
import khGallery3 from "@/assets/kh-gallery-3.jpg";
import khGallery4 from "@/assets/kh-gallery-4.png";
import khGallery5 from "@/assets/kh-gallery-5.jpeg";
import khCaseComp from "@/assets/kh-case-comp.png";
import bizhacksCover from "@/assets/bizhacks-cover.jpg";
import bizhacksGallery1 from "@/assets/bizhacks-gallery-1.jpg";
import bizhacksGallery2 from "@/assets/bizhacks-gallery-2.jpg";
import bizhacksGallery3 from "@/assets/bizhacks-gallery-3.jpg";
import bizhacksGallery4 from "@/assets/bizhacks-gallery-4.jpg";
import bizhacksGallery5 from "@/assets/bizhacks-gallery-5.jpg";
import bizhacksGallery6 from "@/assets/bizhacks-gallery-6.jpg";
import infosysCover from "@/assets/infosys-cover.jpeg";
import becomingTourPoster from "@/assets/becoming-tour-poster.jpg";
import becomingGlamourStage from "@/assets/becoming-glamour-stage.png";
import becomingGlamourWoty from "@/assets/becoming-glamour-woty.jpg";
import becomingBookDisplay from "@/assets/becoming-book-display.jpg";
import becomingTimesup from "@/assets/becoming-timesup.webp";
import becomingWomenIllustration from "@/assets/becoming-women-illustration.jpeg";
import becomingTourDates from "@/assets/becoming-tour-dates.jpg";
import becomingGlamourTracee from "@/assets/becoming-glamour-tracee.jpg";
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
import gwibGallery8 from "@/assets/gwib-gallery-8.png";
import henryTourBanner from "@/assets/henry-tour-banner.gif";
import henryHelloSign from "@/assets/henry-hello-sign.png";
import henrySethMeyers from "@/assets/henry-seth-meyers.png";
import henryFanexpo from "@/assets/henry-fanexpo.webp";
import henrySeatedBook from "@/assets/henry-seated-book.jpg";
import henryHodaJenna from "@/assets/henry-hoda-jenna.png";
import barryFinalSeason from "@/assets/barry-final-season.jpg";
import barryEmmys75 from "@/assets/barry-emmys-75.jpg";
import barryPeacockTheater from "@/assets/barry-peacock-theater.webp";
import barryRichEisen from "@/assets/barry-rich-eisen.jpg";
import barrySundayToday from "@/assets/barry-sunday-today.png";
import humanitasBeverlyWilshire from "@/assets/humanitas-beverly-wilshire.webp";
import humanitasDga from "@/assets/humanitas-dga.jpg";
import humanitasWinners from "@/assets/humanitas-winners.webp";
import tsrComplexconFloor from "@/assets/tsr-complexcon-floor.webp";
import tsrLogo from "@/assets/tsr-logo.jpg";
import tsrSxsw from "@/assets/tsr-sxsw.jpg";
import tsrTechcrunch from "@/assets/tsr-techcrunch.jpg";
import tsrAfrotech from "@/assets/tsr-afrotech.webp";
import tsrBeautycon from "@/assets/tsr-beautycon.jpg";
import tsrComplexconLogo from "@/assets/tsr-complexcon-logo.png";

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
  cardImage?: string;
  context: string;
  role: string;
  impact: string;
  press?: string;
  gallery: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "becoming-memoir-launch",
    brand: "Tracee Ellis Ross x Michelle Obama",
    title: "Becoming: Messaging Strategy for Michelle Obama's Memoir Launch",
    description: "Freelance creative strategist supporting Tracee Ellis Ross's press role in the Becoming campaign, including NYT interview prep with Michelle Obama.",
    tag: "Content",
    image: becomingTourPoster,
    context: "In 2018, Michelle Obama launched Becoming, one of the best-selling memoirs in publishing history. Tracee Ellis Ross, coming off a viral Glamour Women of the Year speech, was selected as a key press figure in the Becoming campaign, including a high-profile New York Times interview with Obama herself. To prepare for this role Ross needed a strategic creative partner to help shape her approach to the material.",
    role: "As a freelance creative strategist working directly with Tracee Ellis Ross, I supported her across multiple engagements during the Becoming campaign period. I contributed copyediting, messaging and positioning input, and strategy advising on her Glamour Women of the Year speech, which went viral following the event. For the Michelle Obama Becoming press work, I built messaging and positioning frameworks by selecting and organizing key content from the memoir, synthesizing themes for Tracee, and structuring talking points and media training materials used in her press appearances including her New York Times interview with Obama. Our working sessions took place across Los Angeles including on the set of Black-ish and at Soho House. In parallel, I worked with the Times Up movement and SAG-AFTRA C-suite, transforming live executive meeting notes into messaging and positioning frameworks for the GTM enablement of their 15 million dollar legal defense fund.",
    impact: "Contributed to the press infrastructure behind one of the most culturally significant book launches of the decade. The Becoming tour sold out The Forum in Inglewood. Tracee Ellis Ross's Glamour Women of the Year speech went viral. Her New York Times interview with Michelle Obama became one of the defining press moments of the Becoming campaign. Times Up legal fund messaging reached national scale through C-suite GTM enablement across the entertainment industry.",
    press: "Michelle Obama, Becoming, Crown Publishing, 2018, sold-out national arena tour including The Forum in Inglewood. Tracee Ellis Ross, Glamour Women of the Year. New York Times Books interview with Michelle Obama, November 2018. Times Up Movement, SAG-AFTRA C-suite GTM communications, 15 million dollar legal defense fund.",
    gallery: [becomingGlamourTracee, becomingBookDisplay, becomingWomenIllustration, becomingGlamourWoty, becomingTourDates, becomingTimesup],
  },
  {
    id: "being-henry-book-tour",
    brand: "Henry Winkler x Celadon Books",
    title: "Being Henry: National Book Tour GTM",
    description: "Chief of Staff behind the national GTM launch of a NYT Bestselling memoir across 15+ US markets.",
    tag: "Live Events",
    image: henryTourBanner,
    cardImage: henryTourBanner,
    context: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution.",
    role: "As Chief of Staff to Henry Winkler, I served as the operational and creative lead behind the tour's execution. I owned end-to-end logistics and travel coordination across all tour markets, managed talent scheduling and green room to stage management, led media prep and developed talking points used across press appearances, coordinated PR outreach and fan convention integrations, produced social content including on-camera video announcements for Winkler's speaker series, and contributed copyediting and ghostwriting to supporting materials for the book itself.",
    impact: "The tour spanned 15+ cities across the US with multiple sold-out stops including Cambridge MA, Long Island NY, and Naperville IL. The memoir debuted as a New York Times Bestseller. The paperback release generated a second full tour leg in 2024, anchored by a stop at the Smithsonian Museum of Natural History in Washington DC.",
    press: "\"Being Henry\" New York Times Bestseller, Celadon Books 2023. Tour venues included The Town Hall NYC, Harvard Bookstore, and the Smithsonian Institution.",
    gallery: [henryHelloSign, henrySethMeyers, henryFanexpo, henrySeatedBook, henryHodaJenna],
  },
  {
    id: "hbo-barry-emmys",
    brand: "Henry Winkler x HBO",
    title: "HBO Barry Season 4 Emmy Awards Campaign",
    description: "Managed Henry Winkler's full press and Emmy Awards campaign for Barry's final season across primetime, syndicated, podcast, and speaker series.",
    tag: "Content",
    image: barryFinalSeason,
    context: "HBO's Barry, the critically acclaimed dark comedy starring Bill Hader and Henry Winkler, entered its fourth and final season in 2023 as one of television's most decorated comedies. The season finale press and awards campaign ran parallel to the 75th Annual Emmy Awards cycle, requiring a coordinated multi-platform promotional push to close out the show's legacy run. The GTM strategy was built around intimacy, audience closeness, and deep relationship-driven press rather than a broad spray approach, honoring both the series and Henry Winkler's decades-long legacy in television.",
    role: "As Chief of Staff to Henry Winkler, I supported his full Barry Season 4 press and Emmy Awards campaign across all four tour formats. I managed scheduling and logistics across primetime, syndicated, podcast, and speaker series appearances, coordinated press and PR outreach, developed media training materials and talking points for Winkler's on-camera and on-stage appearances, and created social content supporting the campaign across platforms. A core part of my role was ensuring every press touchpoint upheld the standard of care that both the series and Winkler's reputation deserved, selecting appearances and framing media training materials to reflect the intimacy and authenticity that defined the show's relationship with its audience.",
    impact: "Barry Season 4 averaged 3.4 million viewers per episode across linear and streaming, with the Season 4 premiere reaching 3.1 million viewers, a 10% increase over the Season 3 premiere at the same point in time. Delayed viewing on streaming drove a 289% increase over premiere night numbers. The season successfully closed out one of HBO's most critically acclaimed series with 11 Emmy nominations at the 75th Annual Emmy Awards, spanning every major media format simultaneously.",
    press: "HBO Barry Season 4, 2023. 75th Annual Emmy Awards, 11 nominations including Outstanding Comedy Series and Outstanding Supporting Actor in a Comedy Series for Henry Winkler. Season 4 averaged 3.4 million viewers per episode across platforms, per Warner Bros. Discovery and Nielsen. Season 4 premiere viewership up 10% over Season 3 premiere at same point in time. Barry accumulated 9 Emmy wins across its first three seasons prior to its final run. Rich Eisen Show, Sunday Today with Willie Geist, multi-platform press campaign spanning primetime, syndicated, podcast, and speaker series formats.",
    gallery: [barryEmmys75, barryPeacockTheater, barryRichEisen, barrySundayToday],
  },
  {
    id: "pipex-virtual-launch",
    brand: "DreamWorks Animation",
    title: "PipeX Virtual Launch Activations",
    description: "Co-led virtual brand activations for a cloud-native pipeline launch featuring Trolls IP during peak pandemic Zoom fatigue.",
    tag: "Enterprise",
    image: pipexTrollsHoliday,
    cardImage: pipexCardCover,
    context: "During the pandemic era production shutdown, DreamWorks Animation undertook a major infrastructure transformation, migrating its film pipeline to PipeX, a proprietary cloud-native production system. With in-person events off the table entirely, the studio needed to build internal excitement, drive adoption, and mark key milestones through virtual experiences that could actually cut through widespread Zoom fatigue.",
    role: "As Production Coordinator on the PipeX launch team, I co-led two flagship virtual brand activations tied directly to the pipeline's rollout. The first was a milestone launch celebration marking Trolls' migration onto PipeX, the second a completed film demo and celebration showcasing the finished production running fully on the new system. Across both events I owned the run of show, end-to-end logistics, platform production, and created original media content to support the programming. Audiences ranged from 50 to 150 studio staff and stakeholders per event.",
    impact: "Successfully activated internal adoption and enthusiasm around a complex technical product launch during one of the most challenging periods for live engagement in the industry. The activations served as proof of concept that PipeX could support not just production workflows but the cultural moments that matter to a creative studio.",
    press: "PipeX powered production on Trolls: Holiday in Harmony, which premiered on NBC primetime November 26, 2021, featuring Anna Kendrick and Justin Timberlake. The underlying pipeline system, PipelineX, was published at ACM SIGGRAPH DigiPro 2017 and cited as a foundational industry reference at DigiPro 2022. DreamWorks presented the system's evolution at the 2022 SIGGRAPH Pipeline Conference. The collaboration was featured on UX Planet and covered in CIO Magazine as a model for cloud-native studio infrastructure. DreamWorks SVP-level representation of the work appeared at Web Summit 2021.",
    gallery: [pipexPersonas, pipexTimeline, pipexRoadmap, pipexTrollsEmail, pipexTrollsHoliday, pipexLaunchLetter, pipexHappyHour],
  },
  {
    id: "executive-brand-activations",
    brand: "The Shade Room",
    title: "Executive Brand Activations Across the Conference Circuit",
    description: "Chief of Staff managing CEO appearances across SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon.",
    tag: "Live Events",
    image: tsrComplexconFloor,
    context: "The Shade Room is one of the most influential digital media brands in Black culture, reaching 32 million people weekly with 1.5 billion impressions, described by the New York Times as the TMZ of Instagram. As the brand expanded its executive presence across the tech and culture conference circuit, its CEO required a strategic operational partner to manage high-stakes appearances across some of the most competitive stages in the industry.",
    role: "As Chief of Staff to the CEO of The Shade Room, I coordinated executive appearances across a portfolio of major tech and culture conventions including SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon. I owned end-to-end vendor coordination and event logistics for each appearance, and contributed to messaging and positioning work including talking points developed for the CEO's on-stage presence. Each activation required translating the TSR brand voice into a professional conference context while maintaining the cultural authenticity the brand is known for.",
    impact: "Successfully managed a multi-event executive activation calendar spanning tech, media, and culture verticals simultaneously. Supported the CEO's visibility across both the mainstream tech conference circuit and culturally specific platforms, reinforcing The Shade Room's positioning as a serious media business operating at eight-figure revenue scale, not just a social media account.",
    press: "The Shade Room, 28M+ Instagram followers, 32 million weekly reach, 1.5 billion weekly impressions. Named the TMZ of Instagram by the New York Times. Eight-figure annual revenue per investor disclosure. Second most popular publisher on Instagram by likes and comments. Founder Angie Nwandu named to Campaign's 2023 Inspiring Women list. Conferences include SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon.",
    gallery: [tsrLogo, tsrSxsw, tsrTechcrunch, tsrAfrotech, tsrBeautycon, tsrComplexconLogo],
  },
  {
    id: "humanitas-prize-42",
    brand: "The Humanitas Prize",
    title: "42nd Annual Humanitas Prizes Awards Show & Toast",
    description: "Freelance Event Producer managing live production, vendor coordination, real-time IT troubleshooting, and live social coverage at a Hollywood awards ceremony.",
    tag: "Live Events",
    image: humanitasBeverlyWilshire,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, described by Barbara Walters as what the Nobel Prize is to literature and the Pulitzer Prize is to journalism. The 42nd Annual Humanitas Prizes Awards Show and Toast recognized film and television writers whose work affirms the human condition, drawing industry attendees spanning network executives, writers, and producers from every major studio. The ceremony required a production team capable of managing both the high-visibility public-facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Freelance Event Producer, I owned multiple workstreams simultaneously across the full event lifecycle. Pre-event I managed social media strategy, content creation, copy, and scheduling across platforms. During the live event I coordinated directly with vendors on the ground, resolved live technical and IT issues in real time, executed live social media coverage on X, and contributed to red carpet photography at the step and repeat.",
    impact: "Successfully produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "42nd Annual Humanitas Prizes Awards Show and Toast, Four Seasons Beverly Hills. Winning projects at the ceremony included Hidden Figures, Hacksaw Ridge, Ava DuVernay's 13th, Black-ish, and This Is Us. The Humanitas Prize has been covered annually by Variety, The Hollywood Reporter, Los Angeles Times, Deadline, and The Wrap. The organization has dispensed over 1.8 million dollars in prize money to television and film writers since 1974.",
    gallery: [humanitasDga, humanitasWinners],
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
    gallery: [infosysGallery1, infosysCover, infosysGallery3, infosysGallery4, infosysGallery6, infosysGallery5],
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
    id: "usc-marshall-gwib",
    brand: "USC Marshall GWIB",
    title: "USC Marshall Graduate Women in Business",
    description: "VP of Marketing who led a full brand overhaul, social strategy, and 200% engagement growth for a USC Marshall student organization.",
    tag: "Campus",
    image: gwibCover,
    context: "Graduate Women in Business at USC Marshall is a student-led organization serving the Marshall MBA community with a focus on professional development, community building, and gender equity in business. As the organization grew its presence and partnerships, it needed a complete brand overhaul and a modern social media strategy to match its ambitions.",
    role: "As VP of Marketing I led a full brand refresh from the ground up, redesigning the brand guidelines and logo from scratch. I owned social media strategy, content creation, posting, and reels production end to end. I created the SpotlightHER campaign with original messaging and positioning collateral to showcase board members, developed decks for internal and external use, and mentored two members including an Associate VP and an undergraduate GWIB member. I enabled and promoted brand partnerships with the LA Sparks, Nike, Kiehl's, Pickle, and Lo & Sons, and produced activations across 15+ events including the LA Sparks Suite Night, Nike x FitLab Workout Mixer, Pickle Fashion Showcase, plus numerous Lo & Sons and other branded giveaways.",
    impact: "Drove 200% growth in social engagement and inbound partnership requests as a direct result of the brand overhaul, new visual identity system, and campaign programming. Delivered a complete brand identity overhaul including a new logo that became official organization collateral. Secured five brand partnerships and produced 15+ events serving 500+ members across all Marshall graduate programs. Mentored two emerging marketing professionals simultaneously while managing the full marketing function independently.",
    press: "\"She re-vamped our logo, our campaigns, and our posts. Everything became cohesive. GWiB has been reached out to by major conferences, brands, and professionals to collaborate primarily because of our increased social media presence and engagement.\" Jasmine Kaur, GWIB President 2025-2026, LinkedIn Recommendation, November 2025.",
    gallery: [gwibGallery1, gwibGallery2, gwibGallery3, gwibGallery4, gwibGallery5, gwibGallery6, gwibGallery8],
    links: [
      { text: "LA Sparks", url: "https://sparks.wnba.com" },
      { text: "Nike x FitLab", url: "https://www.nike.com" },
      { text: "Nike", url: "https://www.nike.com" },
      { text: "Kiehl's", url: "https://www.kiehls.com" },
      { text: "Pickle", url: "https://www.picklepickleball.com" },
      { text: "Lo & Sons", url: "https://www.loandsons.com" },
    ],
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
    press: "USC Elevate Summit, inaugural edition. Brand partners: Lo & Sons, Coca-Cola. Keynote: Andy Muir, CFO of SKIMS. Fireside chat: Karina Martinez, Co-Founder and CEO of DRAFTED.\n\n\"Maya's flavor of public speaking is unlike anything I've ever seen. She has all the makings of a confident and strategic thinker, but blends it with a background in stand-up comedy and public advocacy.\" John Shehan, Customer & Digital Strategy, Deloitte Consulting, LinkedIn Recommendation, August 2025.\n\n\"Out of all the speakers, I distinctly remember your part of the presentation around AI influencers. You did such a great job. Thank you for teaching me something new.\" Tomas Babucci, Manager, AI & Data Practice, Agentic AI, EY.",
    gallery: [elevateGallery5, elevateGallery1, elevateGallery2, elevateGallery3, elevateGallery4, elevateCover],
    links: [
      { text: "SKIMS", url: "https://skims.com" },
      { text: "DRAFTED", url: "https://www.wearedrafted.co/about-us" },
      { text: "Lo & Sons", url: "https://www.loandsons.com/" },
    ],
  },
  {
    id: "kings-hawaiian-case-competition",
    brand: "King's Hawaiian x USC GMA",
    title: "King's Hawaiian 75th Anniversary Case Competition",
    description: "Produced a branded graduate marketing case competition around King's Hawaiian's 75th anniversary milestone as Associate VP of Case Competitions.",
    tag: "Campus",
    image: khCaseComp,
    context: "King's Hawaiian, the beloved bread and rolls brand, celebrated its 75th anniversary as one of America's most recognizable family food brands. The USC Graduate Marketing Association created a branded case competition around the milestone, challenging graduate marketing students from USC Marshall and UCLA Anderson School of Management to develop real strategic solutions for a legacy consumer brand navigating modern market pressures.",
    role: "As Associate VP of Case Competitions for the USC Graduate Marketing Association, I produced the full competition experience end to end. I owned event logistics and production, recruited and coordinated judges from the marketing industry, recruited competing teams, and managed all marketing and promotions for the event to drive participation and visibility across the USC Marshall graduate community.",
    impact: "Successfully produced a branded case competition experience anchored around a 75th anniversary milestone for a nationally recognized consumer brand. Delivered a professional competition format that gave graduate marketers real exposure to senior industry judges while creating a branded activation moment for King's Hawaiian within the USC Marshall ecosystem. Prizes were awarded to the top three teams: $500 for first place, $250 for second place, and $125 for third place.",
    gallery: [khGallery5, khGallery1, khGallery3, khCover],
  },
];

export const filterTags = ["All", "Enterprise", "Live Events", "Campus", "Content"] as const;
