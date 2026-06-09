import type { Activity, Interest, HobbyNode } from "../types/graph";

export const interests: Interest[] = [
  {
    id: "fitness",
    label: "Fitness",
    activityIds: ["rock-climbing", "zumba", "cycling", "yoga", "running"],
  },
  {
    id: "creative",
    label: "Creative",
    activityIds: ["photography", "drawing", "music", "pottery"],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    activityIds: ["hiking", "rock-climbing", "cycling", "kayaking"],
  },
  {
    id: "tech",
    label: "Tech",
    activityIds: ["coding", "3d-printing", "electronics"],
  },
  {
    id: "social",
    label: "Social",
    activityIds: ["board-games", "improv", "cooking-club", "zumba"],
  },
  {
    id: "culinary",
    label: "Culinary",
    activityIds: ["cooking", "baking", "coffee", "fermentation"],
  },
];

export const activities: Activity[] = [
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
      "Most gyms offer a free intro class — bouldering (no ropes) is the easiest entry point.",
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
      "Wear comfortable shoes and follow the rhythm, not perfect moves.",
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
      "Build circuits, tinker with Arduinos, and make things that blink and beep.",
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
      "The chemistry of flour, sugar, and heat — precise, satisfying, and delicious.",
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
      "A hand grinder and a V60 are all you need to brew better than most cafes.",
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
];

const INTEREST_COLORS: Record<string, string> = {
  fitness: "#D4537E",
  creative: "#7F77DD",
  outdoor: "#1D9E75",
  tech: "#378ADD",
  social: "#EF9F27",
  culinary: "#D85A30",
};

const NODE_COLORS: Record<string, string> = {
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
};

export function buildGraphNodes(selectedInterestIds: string[]): HobbyNode[] {
  // Always show selected interest nodes
  const interestNodes: HobbyNode[] = interests
    .filter((i) => selectedInterestIds.includes(i.id))
    .map((i, idx) => ({
      id: i.id,
      label: i.label,
      type: "interest" as const,
      data: i,
      color: INTEREST_COLORS[i.id] ?? "#7F77DD",
      position: getInterestPosition(idx, selectedInterestIds.length),
    }));

  // Only show activities that belong to selected interests
  const visibleActivityIds = new Set(
    interests
      .filter((i) => selectedInterestIds.includes(i.id))
      .flatMap((i) => i.activityIds),
  );

  const activityNodes: HobbyNode[] = activities
    .filter((a) => visibleActivityIds.has(a.id))
    .map((a, idx) => ({
      id: a.id,
      label: a.label,
      type: "activity" as const,
      data: a,
      color: NODE_COLORS[a.id] ?? "#7F77DD",
      position: getActivityPosition(idx, [...visibleActivityIds].length),
    }));

  return [...interestNodes, ...activityNodes];
}

function getInterestPosition(idx: number, total: number) {
  const angle = (idx / total) * Math.PI * 2 - Math.PI / 2;
  const r = total === 1 ? 0 : 180;
  return { x: 300 + Math.cos(angle) * r, y: 260 + Math.sin(angle) * r };
}

function getActivityPosition(idx: number, total: number) {
  // Spiral layout for activities
  const angle = (idx / total) * Math.PI * 4;
  const r = 80 + (idx / total) * 220;
  return { x: 300 + Math.cos(angle) * r, y: 260 + Math.sin(angle) * r };
}
