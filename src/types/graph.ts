export type TagSet = {
  environment: "indoors" | "outdoors" | "both";
  social: "solo" | "social" | "either";
  difficulty: "beginner" | "intermediate" | "advanced";
  cost: "free" | "low" | "medium" | "high";
  timeCommitment: "quick" | "moderate" | "deep";
};

export type Activity = {
  id: string;
  label: string;
  description: string;
  tags: TagSet;
  beginnerTip?: string;
  source: "curated" | "ai-generated" | "ai-reviewed";
};

export type Interest = {
  id: string;
  label: string;
  activityIds: string[];
};

export type HobbyNode = {
  id: string;
  label: string;
  type: "interest" | "activity";
  data: Activity | Interest;
  position: { x: number; y: number };
  color?: string;
};

export type HobbyEdge = {
  id: string;
  source: string;
  target: string;
};

export type GraphState = {
  nodes: HobbyNode[];
  edges: HobbyEdge[];
  selectedNodeId: string | null;
};
