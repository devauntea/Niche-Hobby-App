import type { HobbyEdge } from "../types/graph";

export const edges: HobbyEdge[] = [
  // Fitness cluster
  { id: "e-fitness-climbing", source: "fitness", target: "rock-climbing" },
  { id: "e-fitness-zumba", source: "fitness", target: "zumba" },
  { id: "e-fitness-cycling", source: "fitness", target: "cycling" },
  { id: "e-fitness-yoga", source: "fitness", target: "yoga" },
  { id: "e-fitness-running", source: "fitness", target: "running" },
  // Creative cluster
  { id: "e-creative-photo", source: "creative", target: "photography" },
  { id: "e-creative-drawing", source: "creative", target: "drawing" },
  { id: "e-creative-music", source: "creative", target: "music" },
  // Outdoor cluster
  { id: "e-outdoor-hiking", source: "outdoor", target: "hiking" },
  { id: "e-outdoor-cycling", source: "outdoor", target: "cycling" },
  { id: "e-outdoor-climbing", source: "outdoor", target: "rock-climbing" },
  // Cross-links (what makes the graph interesting)
  { id: "e-photo-hiking", source: "photography", target: "hiking" },
];
