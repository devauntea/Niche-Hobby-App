import type { Activity, Interest, HobbyNode } from "@/types/graph";

export const interests: Interest[] = [
  {
    id: "fitness",
    label: "Fitness",
    activityIds: [
      "rock-climbing",
      "zumba",
      "cycling",
      "yoga",
      "running",
      "surfing",
      "skateboarding",
      "archery",
      "fencing",
      "parkour",
    ],
  },
  {
    id: "creative",
    label: "Creative",
    activityIds: [
      "photography",
      "drawing",
      "music",
      "pottery",
      "calligraphy",
      "bookbinding",
      "glassblowing",
      "leatherwork",
      "weaving",
      "blacksmithing",
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    activityIds: [
      "hiking",
      "rock-climbing",
      "cycling",
      "kayaking",
      "foraging",
      "birdwatching",
      "geology",
      "mycology",
      "urban-exploration",
      "surfing",
    ],
  },
  {
    id: "tech",
    label: "Tech",
    activityIds: [
      "coding",
      "3d-printing",
      "electronics",
      "astronomy",
      "marine-biology",
    ],
  },
  {
    id: "social",
    label: "Social",
    activityIds: [
      "board-games",
      "improv",
      "cooking-club",
      "zumba",
      "volunteering",
      "chess",
    ],
  },
  {
    id: "culinary",
    label: "Culinary",
    activityIds: [
      "cooking",
      "baking",
      "coffee",
      "fermentation",
      "cooking-club",
    ],
  },
  {
    id: "adventure",
    label: "Adventure",
    activityIds: [
      "surfing",
      "skateboarding",
      "parkour",
      "archery",
      "fencing",
      "kayaking",
      "urban-exploration",
      "rock-climbing",
    ],
  },
  {
    id: "nature",
    label: "Nature",
    activityIds: [
      "birdwatching",
      "foraging",
      "geology",
      "mycology",
      "marine-biology",
      "astronomy",
      "hiking",
    ],
  },
  {
    id: "craft",
    label: "Craft",
    activityIds: [
      "pottery",
      "calligraphy",
      "bookbinding",
      "glassblowing",
      "leatherwork",
      "weaving",
      "blacksmithing",
      "drawing",
    ],
  },
  {
    id: "mind",
    label: "Mind",
    activityIds: [
      "chess",
      "philosophy",
      "language-learning",
      "journaling",
      "meditation",
      "investing",
      "genealogy",
    ],
  },
  {
    id: "community",
    label: "Community",
    activityIds: [
      "volunteering",
      "improv",
      "board-games",
      "cooking-club",
      "language-learning",
    ],
  },
];

export const activities: Activity[] = [
  // ── Fitness ──
  {
    id: "rock-climbing",
    label: "Rock Climbing",
    description:
      "A full-body workout combining strength, problem-solving, and community.",
    tags: {
      environment: "both",
      social: "social",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Most gyms offer a free intro class — bouldering (no ropes) is the easiest entry.",
    source: "curated",
  },
  {
    id: "zumba",
    label: "Zumba",
    description:
      "A high-energy dance workout that feels more like a party than exercise.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Wear comfortable shoes and follow the rhythm, not perfect technique.",
    source: "curated",
  },
  {
    id: "cycling",
    label: "Cycling",
    description:
      "A flexible hobby for fitness, commuting, and outdoor exploration.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Start with a short flat route and get comfortable with braking before hills.",
    source: "curated",
  },
  {
    id: "yoga",
    label: "Yoga",
    description:
      "Build flexibility, strength, and mindfulness through movement.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "YouTube has hundreds of free beginner flows — 20 minutes is plenty.",
    source: "curated",
  },
  {
    id: "running",
    label: "Running",
    description: "A simple, accessible cardio workout you can do anywhere.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip: "Start with a 20-min walk/run mix 3x a week.",
    source: "curated",
  },
  {
    id: "surfing",
    label: "Surfing",
    description:
      "Ride waves and connect with the ocean — physical, meditative, addictive.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Take a 2-hour lesson at a local surf school — soft-top boards are safest to start.",
    source: "curated",
  },
  {
    id: "skateboarding",
    label: "Skateboarding",
    description:
      "Street, park, or vert — skating is creative self-expression on wheels.",
    tags: {
      environment: "outdoors",
      social: "social",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Start on flat ground mastering your stance and pushing before attempting any tricks.",
    source: "curated",
  },
  {
    id: "archery",
    label: "Archery",
    description:
      "Meditative focus meets physical skill — one of the oldest sports alive.",
    tags: {
      environment: "both",
      social: "either",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Most archery ranges rent equipment and offer beginner clinics for under $30.",
    source: "curated",
  },
  {
    id: "fencing",
    label: "Fencing",
    description:
      "Fast, tactical, and surprisingly fun — the chess of combat sports.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip: "Most fencing clubs provide loaner gear for intro classes.",
    source: "curated",
  },
  {
    id: "parkour",
    label: "Parkour",
    description:
      "Move through your environment fluidly — jumps, vaults, climbs.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Learn basic safety rolls and precision jumps first — never skip fundamentals.",
    source: "curated",
  },

  // ── Creative ──
  {
    id: "photography",
    label: "Photography",
    description:
      "Capture the world around you — your phone camera is enough to start.",
    tags: {
      environment: "both",
      social: "solo",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "quick",
    },
    beginnerTip:
      "Start with the rule of thirds — instantly makes photos look intentional.",
    source: "curated",
  },
  {
    id: "drawing",
    label: "Drawing",
    description: "A meditative skill that changes how you see the world.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "quick",
    },
    beginnerTip: "Draw objects around your home for 10 minutes a day.",
    source: "curated",
  },
  {
    id: "music",
    label: "Music",
    description: "Learn an instrument, produce beats, or just explore sound.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Ukulele or keyboard are the most beginner-friendly first instruments.",
    source: "curated",
  },
  {
    id: "pottery",
    label: "Pottery",
    description:
      "Get your hands in clay — meditative, tactile, and surprisingly social.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip: "Most studios offer a beginner's wheel class for under $50.",
    source: "curated",
  },
  {
    id: "calligraphy",
    label: "Calligraphy",
    description:
      "Turn writing into art — slow, deliberate, and deeply satisfying.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "quick",
    },
    beginnerTip:
      "Start with a brush pen — easier than a nib and more forgiving on paper.",
    source: "curated",
  },
  {
    id: "bookbinding",
    label: "Bookbinding",
    description: "Craft books by hand — covers, signatures, and stitching.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "A Coptic stitch journal is the perfect first project — exposed spine, no glue needed.",
    source: "curated",
  },
  {
    id: "glassblowing",
    label: "Glassblowing",
    description:
      "Shape molten glass into art — one of the most dramatic crafts.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "advanced",
      cost: "high",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Book a studio intro session — most places let you make a paperweight or ornament.",
    source: "curated",
  },
  {
    id: "leatherwork",
    label: "Leatherwork",
    description:
      "Cut, stamp, and stitch leather into bags, wallets, and belts.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "A leather card wallet is a great first project — small, useful, and forgiving.",
    source: "curated",
  },
  {
    id: "weaving",
    label: "Weaving",
    description: "Create textiles on a loom — rhythmic, creative, and tactile.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "deep",
    },
    beginnerTip:
      "A small frame loom lets you weave wall art without a full floor loom.",
    source: "curated",
  },
  {
    id: "blacksmithing",
    label: "Blacksmithing",
    description:
      "Shape metal with heat and hammer — ancient craft, timeless skill.",
    tags: {
      environment: "both",
      social: "social",
      difficulty: "advanced",
      cost: "high",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Find a local smithing guild or maker space with open forge nights.",
    source: "curated",
  },

  // ── Outdoor ──
  {
    id: "hiking",
    label: "Hiking",
    description:
      "Explore trails at your own pace — from easy walks to serious treks.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "AllTrails shows rated trails near you with photos and reviews.",
    source: "curated",
  },
  {
    id: "kayaking",
    label: "Kayaking",
    description:
      "Explore waterways at your own pace — rivers, lakes, coastlines.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Rent before you buy — most outfitters offer half-day rentals.",
    source: "curated",
  },
  {
    id: "foraging",
    label: "Foraging",
    description: "Find edible plants, mushrooms, and berries in the wild.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Go with an experienced forager the first time — never eat anything unidentified.",
    source: "curated",
  },
  {
    id: "birdwatching",
    label: "Birdwatching",
    description:
      "Discover the surprisingly rich world of birds in your backyard and beyond.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "quick",
    },
    beginnerTip:
      "Merlin Bird ID app is free and instantly identifies birds by sound or photo.",
    source: "curated",
  },
  {
    id: "geology",
    label: "Geology",
    description: "Read the Earth's history in rocks, minerals, and formations.",
    tags: {
      environment: "outdoors",
      social: "solo",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Get a field guide for your region and start at road cuts or riverbeds.",
    source: "curated",
  },
  {
    id: "mycology",
    label: "Mycology",
    description:
      "The hunt for fungi — foraging, identifying, and marveling at mushrooms.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "intermediate",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "iNaturalist and a regional mushroom guide are your two essential tools.",
    source: "curated",
  },
  {
    id: "urban-exploration",
    label: "Urban Exploration",
    description:
      "Document abandoned and hidden spaces — history through decay.",
    tags: {
      environment: "outdoors",
      social: "social",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Start with legal locations like rooftop bars or open industrial heritage sites.",
    source: "curated",
  },

  // ── Tech ──
  {
    id: "coding",
    label: "Coding",
    description:
      "Build things with software — from simple scripts to full apps.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Start with Python or JavaScript — both have massive free learning resources.",
    source: "curated",
  },
  {
    id: "3d-printing",
    label: "3D Printing",
    description: "Design and print physical objects from your imagination.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Thingiverse has thousands of free models to print before you start designing.",
    source: "curated",
  },
  {
    id: "electronics",
    label: "Electronics",
    description:
      "Build circuits, tinker with Arduinos, and make things that blink.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "An Arduino starter kit is the best $30 you can spend to get hooked.",
    source: "curated",
  },
  {
    id: "astronomy",
    label: "Astronomy",
    description: "Explore galaxies, nebulae, and planets from your backyard.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Stellarium is a free app that shows exactly what's in the sky tonight.",
    source: "curated",
  },
  {
    id: "marine-biology",
    label: "Marine Biology",
    description:
      "Discover the ocean's biodiversity through snorkeling, diving, or study.",
    tags: {
      environment: "outdoors",
      social: "either",
      difficulty: "intermediate",
      cost: "medium",
      timeCommitment: "deep",
    },
    beginnerTip:
      "iNaturalist's ocean projects let you contribute real observations to science.",
    source: "curated",
  },

  // ── Social ──
  {
    id: "board-games",
    label: "Board Games",
    description:
      "Strategy, storytelling, and laughter — games for every kind of group.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Ticket to Ride and Catan are perfect gateway games for new players.",
    source: "curated",
  },
  {
    id: "improv",
    label: "Improv",
    description:
      "Say yes and figure it out — comedy and confidence building in one.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Most improv theaters offer drop-in beginner workshops for under $20.",
    source: "curated",
  },
  {
    id: "volunteering",
    label: "Volunteering",
    description: "Give time to causes you care about and build real community.",
    tags: {
      environment: "both",
      social: "social",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "VolunteerMatch and Idealist list hundreds of local opportunities near you.",
    source: "curated",
  },
  {
    id: "chess",
    label: "Chess",
    description:
      "Infinite depth in a 64-square world — the ultimate strategy game.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Chess.com's free lessons teach you tactics through puzzles, not just theory.",
    source: "curated",
  },

  // ── Culinary ──
  {
    id: "cooking",
    label: "Cooking",
    description:
      "Transform ingredients into meals — endlessly learnable, always useful.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Master 5 techniques (sauté, roast, braise, simmer, bake) and you can cook almost anything.",
    source: "curated",
  },
  {
    id: "baking",
    label: "Baking",
    description:
      "The chemistry of flour, sugar, and heat — precise, satisfying.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Banana bread is the perfect first bake — forgiving and always impressive.",
    source: "curated",
  },
  {
    id: "coffee",
    label: "Coffee",
    description:
      "From pour-over to espresso — coffee is a surprisingly deep rabbit hole.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "medium",
      timeCommitment: "quick",
    },
    beginnerTip:
      "A hand grinder and V60 are all you need to brew better than most cafes.",
    source: "curated",
  },
  {
    id: "fermentation",
    label: "Fermentation",
    description:
      "Make kombucha, kimchi, sourdough, and more with live cultures.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "low",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Start with yogurt or simple sauerkraut — both are nearly impossible to mess up.",
    source: "curated",
  },
  {
    id: "cooking-club",
    label: "Cooking Club",
    description: "Cook together, eat together — social cooking at its best.",
    tags: {
      environment: "indoors",
      social: "social",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Assign each person a dish from the same cuisine — keeps it cohesive and fun.",
    source: "curated",
  },

  // ── Mind ──
  {
    id: "language-learning",
    label: "Language Learning",
    description:
      "Open entire cultures through their language — one of the best long-term hobbies.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Duolingo for vocabulary + Language Transfer for grammar is a powerful free combo.",
    source: "curated",
  },
  {
    id: "philosophy",
    label: "Philosophy",
    description:
      "Think more carefully about everything — ancient questions, modern relevance.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "intermediate",
      cost: "free",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Start with Plato's Republic or Marcus Aurelius's Meditations — both are short and readable.",
    source: "curated",
  },
  {
    id: "journaling",
    label: "Journaling",
    description:
      "Write to think — daily pages build clarity, memory, and self-knowledge.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "quick",
    },
    beginnerTip:
      "Three pages longhand every morning — don't edit, just write whatever comes.",
    source: "curated",
  },
  {
    id: "meditation",
    label: "Meditation",
    description:
      "Train your attention — the simplest and most underrated mental skill.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "beginner",
      cost: "free",
      timeCommitment: "quick",
    },
    beginnerTip:
      "10 minutes a day with Insight Timer (free) is genuinely enough to notice results.",
    source: "curated",
  },
  {
    id: "investing",
    label: "Investing",
    description:
      "Grow wealth through markets, real estate, or other assets over time.",
    tags: {
      environment: "indoors",
      social: "solo",
      difficulty: "intermediate",
      cost: "low",
      timeCommitment: "moderate",
    },
    beginnerTip:
      "Start with index funds — JL Collins's 'The Simple Path to Wealth' is the clearest intro.",
    source: "curated",
  },
  {
    id: "genealogy",
    label: "Genealogy",
    description:
      "Trace your family's history through records, DNA, and stories.",
    tags: {
      environment: "indoors",
      social: "either",
      difficulty: "beginner",
      cost: "low",
      timeCommitment: "deep",
    },
    beginnerTip:
      "Ancestry and FamilySearch both have free tiers — start with what you already know.",
    source: "curated",
  },
];

const INTEREST_COLORS: Record<string, string> = {
  fitness: "#D4537E",
  creative: "#7F77DD",
  outdoor: "#1D9E75",
  tech: "#378ADD",
  social: "#EF9F27",
  culinary: "#D85A30",
  adventure: "#D4537E",
  nature: "#1D9E75",
  craft: "#7F77DD",
  mind: "#378ADD",
  community: "#EF9F27",
};

const ACTIVITY_COLORS: Record<string, string> = {
  "rock-climbing": "#D4537E",
  zumba: "#EF9F27",
  cycling: "#1D9E75",
  yoga: "#7F77DD",
  running: "#D85A30",
  hiking: "#1D9E75",
  photography: "#7F77DD",
  drawing: "#D4537E",
  music: "#EF9F27",
  pottery: "#D85A30",
  kayaking: "#378ADD",
  coding: "#378ADD",
  "3d-printing": "#639922",
  electronics: "#EF9F27",
  "board-games": "#D4537E",
  improv: "#EF9F27",
  cooking: "#D85A30",
  baking: "#EF9F27",
  coffee: "#D85A30",
  fermentation: "#1D9E75",
  "cooking-club": "#D4537E",
  surfing: "#378ADD",
  skateboarding: "#D85A30",
  archery: "#639922",
  fencing: "#7F77DD",
  parkour: "#D4537E",
  astronomy: "#7F77DD",
  geology: "#D85A30",
  mycology: "#639922",
  foraging: "#1D9E75",
  birdwatching: "#378ADD",
  "marine-biology": "#378ADD",
  calligraphy: "#7F77DD",
  bookbinding: "#D85A30",
  glassblowing: "#EF9F27",
  leatherwork: "#D85A30",
  blacksmithing: "#D85A30",
  weaving: "#D4537E",
  "language-learning": "#378ADD",
  philosophy: "#7F77DD",
  chess: "#1A1916",
  investing: "#639922",
  journaling: "#D4537E",
  meditation: "#7F77DD",
  volunteering: "#1D9E75",
  genealogy: "#EF9F27",
  "urban-exploration": "#D85A30",
};

export function buildGraphNodes(selectedIds: string[]): HobbyNode[] {
  const interestNodes: HobbyNode[] = interests
    .filter((i) => selectedIds.includes(i.id))
    .map((i, idx) => ({
      id: i.id,
      label: i.label,
      type: "interest" as const,
      data: i,
      color: INTEREST_COLORS[i.id] ?? "#7F77DD",
      position: getInterestPosition(idx, selectedIds.length),
    }));
  const visibleActivityIds = new Set(
    interests
      .filter((i) => selectedIds.includes(i.id))
      .flatMap((i) => i.activityIds),
  );
  const activityNodes: HobbyNode[] = activities
    .filter((a) => visibleActivityIds.has(a.id))
    .map((a, idx) => ({
      id: a.id,
      label: a.label,
      type: "activity" as const,
      data: a,
      color: ACTIVITY_COLORS[a.id] ?? "#7F77DD",
      position: getActivityPosition(idx, [...visibleActivityIds].length),
    }));
  return [...interestNodes, ...activityNodes];
}

function getInterestPosition(idx: number, total: number) {
  const angle = (idx / Math.max(total, 1)) * Math.PI * 2 - Math.PI / 2;
  const r = total === 1 ? 0 : total <= 3 ? 180 : 220;
  return { x: 320 + Math.cos(angle) * r, y: 280 + Math.sin(angle) * r };
}
function getActivityPosition(idx: number, total: number) {
  const angle = (idx / Math.max(total, 1)) * Math.PI * 4;
  const r = 100 + (idx / Math.max(total, 1)) * 240;
  return { x: 320 + Math.cos(angle) * r, y: 280 + Math.sin(angle) * r };
}
