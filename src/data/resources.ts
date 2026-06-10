export type Resource = {
  type: "youtube" | "reddit" | "reference";
  title: string;
  url: string;
  description: string;
};

export const resources: Record<string, Resource[]> = {
  "rock-climbing": [
    {
      type: "youtube",
      title: "Lattice Training",
      url: "https://www.youtube.com/@LatticeTraining",
      description: "Science-based climbing training",
    },
    {
      type: "reddit",
      title: "r/climbing",
      url: "https://reddit.com/r/climbing",
      description: "1.2M climbers — beta, gear, trip reports",
    },
    {
      type: "reference",
      title: "8a.nu Grade Calculator",
      url: "https://www.8a.nu",
      description: "Route database and grade tracker",
    },
  ],
  yoga: [
    {
      type: "youtube",
      title: "Yoga With Adriene",
      url: "https://www.youtube.com/@yogawithadriene",
      description: "Best free beginner yoga on YouTube",
    },
    {
      type: "reddit",
      title: "r/yoga",
      url: "https://reddit.com/r/yoga",
      description: "Practice questions, sequencing, philosophy",
    },
    {
      type: "reference",
      title: "Ashtanga Yoga Confluence",
      url: "https://ashtangayogaconfluence.com",
      description: "The official Ashtanga resource",
    },
  ],
  running: [
    {
      type: "youtube",
      title: "Seth James DeMoor",
      url: "https://www.youtube.com/@SethJamesDeMoor",
      description: "Elite runner vlog and training insight",
    },
    {
      type: "reddit",
      title: "r/running",
      url: "https://reddit.com/r/running",
      description: "2M runners — training plans, races, gear",
    },
    {
      type: "reference",
      title: "Jack Daniels Running Formula",
      url: "https://runsmarter.online/daniels-calculator",
      description: "VDOT-based training pace calculator",
    },
  ],
  cycling: [
    {
      type: "youtube",
      title: "Global Cycling Network",
      url: "https://www.youtube.com/@globalcyclingnetwork",
      description: "Training tips, tech, and race coverage",
    },
    {
      type: "reddit",
      title: "r/cycling",
      url: "https://reddit.com/r/cycling",
      description: "General cycling community",
    },
    {
      type: "reference",
      title: "Strava",
      url: "https://www.strava.com",
      description: "Track rides, find routes, join segments",
    },
  ],
  photography: [
    {
      type: "youtube",
      title: "Peter McKinnon",
      url: "https://www.youtube.com/@PeterMcKinnon",
      description: "Photography and filmmaking technique",
    },
    {
      type: "reddit",
      title: "r/photography",
      url: "https://reddit.com/r/photography",
      description: "Critique, technique, and gear discussion",
    },
    {
      type: "reference",
      title: "Photons to Photos",
      url: "https://www.photonstophotos.net",
      description: "Camera sensor measurement database",
    },
  ],
  drawing: [
    {
      type: "youtube",
      title: "Proko",
      url: "https://www.youtube.com/@ProkoTV",
      description: "Figure drawing and anatomy for artists",
    },
    {
      type: "reddit",
      title: "r/learnart",
      url: "https://reddit.com/r/learnart",
      description: "Critique, resources, and structured learning",
    },
    {
      type: "reference",
      title: "Watts Atelier",
      url: "https://www.wattsatelier.com",
      description: "Online atelier drawing curriculum",
    },
  ],
  music: [
    {
      type: "youtube",
      title: "Adam Neely",
      url: "https://www.youtube.com/@AdamNeely",
      description: "Music theory and jazz bass deep dives",
    },
    {
      type: "reddit",
      title: "r/musictheory",
      url: "https://reddit.com/r/musictheory",
      description: "Theory Q&A, analysis, ear training",
    },
    {
      type: "reference",
      title: "Musictheory.net",
      url: "https://www.musictheory.net",
      description: "Free interactive theory lessons and exercises",
    },
  ],
  hiking: [
    {
      type: "youtube",
      title: "Darwin Onthetrail",
      url: "https://www.youtube.com/@DarwinOnthetrail",
      description: "Thru-hiking gear reviews and trip vlogs",
    },
    {
      type: "reddit",
      title: "r/ultralight",
      url: "https://reddit.com/r/ultralight",
      description: "Ultralight backpacking gear and philosophy",
    },
    {
      type: "reference",
      title: "AllTrails",
      url: "https://www.alltrails.com",
      description: "Trail maps, reviews, and GPS tracking",
    },
  ],
  cooking: [
    {
      type: "youtube",
      title: "Ethan Chlebowski",
      url: "https://www.youtube.com/@EthanChlebowski",
      description: "Evidence-based cooking science and recipes",
    },
    {
      type: "reddit",
      title: "r/cooking",
      url: "https://reddit.com/r/cooking",
      description: "Recipes, technique questions, plating advice",
    },
    {
      type: "reference",
      title: "Serious Eats",
      url: "https://www.seriouseats.com",
      description: "The most science-forward recipe site",
    },
  ],
  coffee: [
    {
      type: "youtube",
      title: "James Hoffmann",
      url: "https://www.youtube.com/@jameshoffmann",
      description: "World barista champion's methodical coffee science",
    },
    {
      type: "reddit",
      title: "r/Coffee",
      url: "https://reddit.com/r/Coffee",
      description: "Brewing methods, equipment, and sourcing",
    },
    {
      type: "reference",
      title: "Scott Rao Coffee",
      url: "https://www.scottrao.com",
      description: "Professional-level roasting and brewing resources",
    },
  ],
  chess: [
    {
      type: "youtube",
      title: "GothamChess",
      url: "https://www.youtube.com/@GothamChess",
      description: "Instructive games and opening breakdowns",
    },
    {
      type: "reddit",
      title: "r/chess",
      url: "https://reddit.com/r/chess",
      description: "Games, puzzles, and tournament discussion",
    },
    {
      type: "reference",
      title: "Lichess",
      url: "https://lichess.org",
      description: "Free, open-source chess with engine analysis",
    },
  ],
  coding: [
    {
      type: "youtube",
      title: "Fireship",
      url: "https://www.youtube.com/@Fireship",
      description: "Fast-paced web dev concepts in 100 seconds",
    },
    {
      type: "reddit",
      title: "r/learnprogramming",
      url: "https://reddit.com/r/learnprogramming",
      description: "Structured advice for beginners",
    },
    {
      type: "reference",
      title: "The Odin Project",
      url: "https://www.theodinproject.com",
      description: "Free full-stack curriculum with projects",
    },
  ],
  meditation: [
    {
      type: "youtube",
      title: "Yuttadhammo Bhikkhu",
      url: "https://www.youtube.com/@yuttadhammo",
      description: "Theravada vipassana instruction from a monk",
    },
    {
      type: "reddit",
      title: "r/meditation",
      url: "https://reddit.com/r/Meditation",
      description: "Technique Q&A, experience sharing, resources",
    },
    {
      type: "reference",
      title: "Insight Timer",
      url: "https://insighttimer.com",
      description: "Free guided meditations and timer",
    },
  ],
  astronomy: [
    {
      type: "youtube",
      title: "Scott Manley",
      url: "https://www.youtube.com/@scottmanley",
      description: "Space science and astrophysics explainers",
    },
    {
      type: "reddit",
      title: "r/astrophotography",
      url: "https://reddit.com/r/astrophotography",
      description: "Images, equipment, and processing technique",
    },
    {
      type: "reference",
      title: "Stellarium",
      url: "https://stellarium.org",
      description: "Free planetarium — shows tonight's sky in real time",
    },
  ],
  birdwatching: [
    {
      type: "youtube",
      title: "Lesley The Bird Nerd",
      url: "https://www.youtube.com/@LesleyTheBirdNerd",
      description: "ID tips, field skills, and backyard birding",
    },
    {
      type: "reddit",
      title: "r/whatsthisbird",
      url: "https://reddit.com/r/whatsthisbird",
      description: "Identify birds from photos with community help",
    },
    {
      type: "reference",
      title: "eBird",
      url: "https://ebird.org",
      description: "Cornell's global birding database and checklists",
    },
  ],
  surfing: [
    {
      type: "youtube",
      title: "Kale Brock",
      url: "https://www.youtube.com/@KaleBrock",
      description: "Surf travel, technique, and ocean mindfulness",
    },
    {
      type: "reddit",
      title: "r/surfing",
      url: "https://reddit.com/r/surfing",
      description: "Conditions, gear, and spot recommendations",
    },
    {
      type: "reference",
      title: "Surfline",
      url: "https://www.surfline.com",
      description: "The most accurate surf forecasting platform",
    },
  ],
  skateboarding: [
    {
      type: "youtube",
      title: "SkateSupport",
      url: "https://www.youtube.com/@SkateSupport",
      description: "Progressive trick tutorials with clear breakdown",
    },
    {
      type: "reddit",
      title: "r/NewSkaters",
      url: "https://reddit.com/r/NewSkaters",
      description: "Beginner questions, progress posts, encouragement",
    },
    {
      type: "reference",
      title: "Skatespot",
      url: "https://skatespot.com",
      description: "Crowdsourced map of skate spots worldwide",
    },
  ],
  "language-learning": [
    {
      type: "youtube",
      title: "Dreaming Spanish",
      url: "https://www.youtube.com/@DreamingSpanish",
      description: "Comprehensible input Spanish for all levels",
    },
    {
      type: "reddit",
      title: "r/languagelearning",
      url: "https://reddit.com/r/languagelearning",
      description: "Methods, resources, and progress discussion",
    },
    {
      type: "reference",
      title: "Anki",
      url: "https://apps.ankiweb.net",
      description: "Free spaced repetition flashcard system",
    },
  ],
  pottery: [
    {
      type: "youtube",
      title: "Florian Gadsby",
      url: "https://www.youtube.com/@floriangadsby",
      description: "Quiet, precise studio pottery — meditative to watch",
    },
    {
      type: "reddit",
      title: "r/Pottery",
      url: "https://reddit.com/r/Pottery",
      description: "Techniques, critiques, and kiln talk",
    },
    {
      type: "reference",
      title: "Digitalfire",
      url: "https://digitalfire.com",
      description: "The most comprehensive glaze chemistry database",
    },
  ],
  fermentation: [
    {
      type: "youtube",
      title: "Bon Appétit Fermentation",
      url: "https://www.youtube.com/@bonappetit",
      description: "Accessible fermentation projects for home cooks",
    },
    {
      type: "reddit",
      title: "r/fermentation",
      url: "https://reddit.com/r/fermentation",
      description: "Troubleshooting, recipes, and wild ferment logs",
    },
    {
      type: "reference",
      title: "Cultures for Health",
      url: "https://www.culturesforhealth.com",
      description: "Starters, guides, and equipment",
    },
  ],
  mycology: [
    {
      type: "youtube",
      title: "Mycology with Matthew",
      url: "https://www.youtube.com/@MycologyWithMatthew",
      description: "Field identification and cultivation guides",
    },
    {
      type: "reddit",
      title: "r/mycology",
      url: "https://reddit.com/r/mycology",
      description: "ID requests, grows, and foraging finds",
    },
    {
      type: "reference",
      title: "iNaturalist Fungi",
      url: "https://www.inaturalist.org/taxa/47170-Fungi",
      description: "Photo-based ID with expert community verification",
    },
  ],
  foraging: [
    {
      type: "youtube",
      title: "Learn Your Land",
      url: "https://www.youtube.com/@LearnYourLand",
      description: "Plant and mushroom ID by region",
    },
    {
      type: "reddit",
      title: "r/foraging",
      url: "https://reddit.com/r/foraging",
      description: "ID help, regional tips, and ethical harvesting",
    },
    {
      type: "reference",
      title: "Eat The Weeds",
      url: "https://www.eattheweeds.com",
      description: "Deep plant profiles with edibility and preparation notes",
    },
  ],
  philosophy: [
    {
      type: "youtube",
      title: "Kane B",
      url: "https://www.youtube.com/@KaneB",
      description: "Clear academic philosophy lectures",
    },
    {
      type: "reddit",
      title: "r/philosophy",
      url: "https://reddit.com/r/philosophy",
      description: "Articles, questions, and reading recommendations",
    },
    {
      type: "reference",
      title: "Stanford Encyclopedia of Philosophy",
      url: "https://plato.stanford.edu",
      description: "Peer-reviewed philosophy reference — the gold standard",
    },
  ],
  investing: [
    {
      type: "youtube",
      title: "Ben Felix",
      url: "https://www.youtube.com/@BenFelixCSI",
      description:
        "Evidence-based investing — factor models and portfolio theory",
    },
    {
      type: "reddit",
      title: "r/Bogleheads",
      url: "https://reddit.com/r/Bogleheads",
      description: "Index fund investing philosophy and discussion",
    },
    {
      type: "reference",
      title: "Portfolio Visualizer",
      url: "https://www.portfoliovisualizer.com",
      description: "Backtest and optimize any portfolio allocation",
    },
  ],
};

// Fallback resources for activities without specific entries
export const defaultResources: Resource[] = [
  {
    type: "youtube",
    title: "Search on YouTube",
    url: "https://www.youtube.com/results?search_query=",
    description: "Find beginner tutorials and deep dives",
  },
  {
    type: "reddit",
    title: "Find on Reddit",
    url: "https://www.reddit.com/search/?q=",
    description: "Join the community discussion",
  },
  {
    type: "reference",
    title: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/",
    description: "Start with the overview",
  },
];

export function getResources(
  activityId: string,
  activityLabel: string,
): Resource[] {
  const specific = resources[activityId];
  if (specific) return specific;
  // Build fallback URLs with the activity name
  return defaultResources.map((r) => ({
    ...r,
    url: r.url + encodeURIComponent(activityLabel),
  }));
}
