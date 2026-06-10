import type { Activity } from "@/types/graph";
import { activities, interests } from "@/data/activities";

// Deterministic "why this fits" — no AI needed
export function getWhyItFits(
  activity: Activity,
  selectedInterestIds: string[],
): string {
  const reasons: string[] = [];

  if (activity.tags.cost === "free" || activity.tags.cost === "low") {
    reasons.push("easy to start without spending much");
  }
  if (activity.tags.difficulty === "beginner") {
    reasons.push("no experience needed");
  }
  if (activity.tags.environment === "outdoors") {
    reasons.push("gets you outside");
  }
  if (activity.tags.environment === "indoors") {
    reasons.push("works any time, any weather");
  }
  if (activity.tags.social === "social") {
    reasons.push("great way to meet people");
  }
  if (activity.tags.social === "solo") {
    reasons.push("perfect for solo time");
  }
  if (activity.tags.timeCommitment === "quick") {
    reasons.push("fits into a short window");
  }
  if (activity.tags.timeCommitment === "deep") {
    reasons.push("something to really sink into");
  }

  // Interest match reason
  const matchingInterests = interests
    .filter(
      (i) =>
        selectedInterestIds.includes(i.id) &&
        i.activityIds.includes(activity.id),
    )
    .map((i) => i.label.toLowerCase());

  if (matchingInterests.length > 0) {
    reasons.push(
      `connects to your interest in ${matchingInterests.join(" and ")}`,
    );
  }

  if (reasons.length === 0) return "A solid pick based on your interests.";
  if (reasons.length === 1) return `It's ${reasons[0]}.`;

  const last = reasons.pop();
  return `It's ${reasons.join(", ")} — and ${last}.`;
}

// Beginner checklist — curated per activity tag profile
export function getBeginnerChecklist(activity: Activity): string[] {
  const steps: string[] = [];

  steps.push(`Look up "${activity.label} for beginners" on YouTube`);

  if (activity.tags.cost === "medium" || activity.tags.cost === "high") {
    steps.push("Borrow or rent gear before buying anything");
  } else {
    steps.push("You likely have everything you need — just start");
  }

  if (activity.tags.social === "social") {
    steps.push("Find a local club, class, or group to join");
  } else {
    steps.push("Block 30 minutes this week to try it solo");
  }

  if (activity.tags.environment === "outdoors") {
    steps.push("Pick a specific nearby spot using Google Maps or AllTrails");
  }

  if (activity.tags.difficulty === "beginner") {
    steps.push("Don't overthink it — show up once and see how it feels");
  } else {
    steps.push("Find a beginner class or intro workshop near you");
  }

  return steps;
}

// Similar activities — same interest cluster or matching tags
export function getSimilarActivities(
  activity: Activity,
  selectedInterestIds: string[],
  count = 4,
): Activity[] {
  const parentInterestIds = interests
    .filter((i) => i.activityIds.includes(activity.id))
    .map((i) => i.id);

  const scored = activities
    .filter((a) => a.id !== activity.id)
    .map((a) => {
      let score = 0;
      // Same interest cluster
      const sharedInterests = interests.filter(
        (i) =>
          i.activityIds.includes(a.id) &&
          parentInterestIds.includes(i.id) &&
          selectedInterestIds.includes(i.id),
      );
      score += sharedInterests.length * 3;
      // Matching tags
      if (a.tags.environment === activity.tags.environment) score += 2;
      if (a.tags.social === activity.tags.social) score += 2;
      if (a.tags.difficulty === activity.tags.difficulty) score += 1;
      if (a.tags.cost === activity.tags.cost) score += 1;
      return { activity: a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.activity);

  return scored;
}
