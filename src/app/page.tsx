"use client";

import { useState, useMemo, useCallback } from "react";
import GraphCanvas from "@/components/GraphCanvas";
import LogoAnimation from "@/components/LogoAnimation";
import InterestOnboarding from "@/components/InterestOnboarding";
import { activities, interests } from "@/data/activities";
import {
  buildInterestNodes,
  buildActivityNodes,
  buildVisibleEdges,
} from "@/lib/graphUtils";

type Screen = "splash" | "onboarding" | "app";

const INTEREST_COLORS: Record<string, string> = {
  fitness: "#D4537E",
  creative: "#7F77DD",
  outdoor: "#1D9E75",
  tech: "#378ADD",
  social: "#EF9F27",
  culinary: "#D85A30",
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
};

const costLabel: Record<string, string> = {
  free: "Free",
  low: "Low cost",
  medium: "Some gear",
  high: "Investment",
};
const diffLabel: Record<string, string> = {
  beginner: "Beginner-friendly",
  intermediate: "Some experience",
  advanced: "Experienced",
};
const envLabel: Record<string, string> = {
  indoors: "Indoors",
  outdoors: "Outdoors",
  both: "In or out",
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedInterests, setExpandedInterests] = useState<Set<string>>(
    new Set(),
  );

  // ── Onboarding ────────────────────────────────────────
  function toggleInterest(id: string) {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function handleConfirmInterests() {
    setExpandedInterests(new Set());
    setSelectedId(null);
    setScreen("app");
  }

  // ── Graph node/edge construction ──────────────────────
  const interestNodes = useMemo(
    () => buildInterestNodes(selectedInterests),
    [selectedInterests],
  );

  // Map interest id → its position (needed for fan layout)
  const interestPosMap = useMemo(() => {
    const map: Record<string, { x: number; y: number }> = {};
    for (const n of interestNodes) map[n.id] = n.position;
    return map;
  }, [interestNodes]);

  const activityNodes = useMemo(() => {
    const nodes = [];
    for (const id of expandedInterests) {
      const pos = interestPosMap[id];
      if (pos) nodes.push(...buildActivityNodes(id, pos, 300, 260));
    }
    // Deduplicate by id (activities shared across interests)
    const seen = new Set<string>();
    return nodes.filter((n) => {
      if (seen.has(n.id)) return false;
      seen.add(n.id);
      return true;
    });
  }, [expandedInterests, interestPosMap]);

  const allNodes = useMemo(
    () => [...interestNodes, ...activityNodes],
    [interestNodes, activityNodes],
  );

  const visibleIds = useMemo(
    () => new Set(allNodes.map((n) => n.id)),
    [allNodes],
  );

  const graphEdges = useMemo(
    () => buildVisibleEdges(visibleIds, selectedInterests),
    [visibleIds, selectedInterests],
  );

  // ── Node tap: interests expand, activities select ─────
  const handleSelectNode = useCallback((id: string) => {
    const isInterest = interests.some((i) => i.id === id);
    if (isInterest) {
      setExpandedInterests((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
      setSelectedId(id);
    } else {
      setSelectedId(id);
    }
  }, []);

  // ── Random activity from expanded interests ───────────
  function handleRandom() {
    const pool =
      expandedInterests.size > 0
        ? activityNodes
        : activities.filter((a) =>
            selectedInterests.some((si) =>
              interests.find((i) => i.id === si)?.activityIds.includes(a.id),
            ),
          );
    if (pool.length === 0) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    // Make sure the interest is expanded so we can see it
    const parentInterest = interests.find(
      (i) =>
        i.activityIds.includes(pick.id) && selectedInterests.includes(i.id),
    );
    if (parentInterest && !expandedInterests.has(parentInterest.id)) {
      setExpandedInterests((prev) => new Set([...prev, parentInterest.id]));
    }
    setSelectedId(pick.id);
  }

  // ── Detail panel data ─────────────────────────────────
  const detail = useMemo(() => {
    if (!selectedId) return null;
    const activity = activities.find((a) => a.id === selectedId);
    if (activity) return { type: "activity" as const, data: activity };
    const interest = interests.find((i) => i.id === selectedId);
    if (interest) return { type: "interest" as const, data: interest };
    return null;
  }, [selectedId]);

  const accentColor = selectedId
    ? (INTEREST_COLORS[selectedId] ?? ACTIVITY_COLORS[selectedId] ?? "#7F77DD")
    : "#7F77DD";

  const isExpanded = selectedId ? expandedInterests.has(selectedId) : false;

  // ── Hint copy ─────────────────────────────────────────
  const hintText = useMemo(() => {
    if (expandedInterests.size === 0)
      return "Tap an interest to explore its activities";
    if (!selectedId || interests.some((i) => i.id === selectedId))
      return "Now tap an activity to learn more";
    return null;
  }, [expandedInterests, selectedId]);

  return (
    <>
      {screen === "splash" && (
        <LogoAnimation onComplete={() => setScreen("onboarding")} />
      )}

      {screen === "onboarding" && (
        <InterestOnboarding
          selected={selectedInterests}
          onToggle={toggleInterest}
          onConfirm={handleConfirmInterests}
        />
      )}

      {screen === "app" && (
        <main className="min-h-screen bg-[#FAF8F2] text-[#1A1916]">
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-7">
            {/* Header */}
            <header className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setScreen("onboarding")}
                className="flex items-center gap-2 group"
              >
                <span className="text-lg font-semibold tracking-tight text-[#1A1916]">
                  aspect<span className="text-[#7F77DD]">·niche</span>
                </span>
              </button>
              <div className="flex items-center gap-2">
                {selectedInterests.map((id) => {
                  const color = INTEREST_COLORS[id] ?? "#7F77DD";
                  const label = interests.find((i) => i.id === id)?.label;
                  return (
                    <span
                      key={id}
                      className="rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{ background: `${color}14`, color }}
                    >
                      {label}
                    </span>
                  );
                })}
                <button
                  onClick={() => setScreen("onboarding")}
                  className="text-xs text-[#B0ADA8] hover:text-[#1A1916] transition-colors ml-1"
                >
                  edit
                </button>
              </div>
            </header>

            <section className="grid flex-1 gap-4 md:grid-cols-[1.45fr_0.85fr]">
              {/* Graph panel */}
              <div className="rounded-3xl border border-[#E8E4DA] bg-white p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-[#1A1916]">
                      Explore
                    </h2>
                    {hintText && (
                      <p className="text-xs text-[#B0ADA8] mt-0.5">
                        {hintText}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleRandom}
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105 hover:opacity-90 active:scale-95"
                    style={{
                      background: "#7F77DD",
                      boxShadow: "0 2px 10px #7F77DD35",
                    }}
                  >
                    Surprise me
                  </button>
                </div>

                <GraphCanvas
                  nodes={allNodes}
                  edges={graphEdges}
                  selectedId={selectedId}
                  onSelectNode={handleSelectNode}
                />
              </div>

              {/* Detail panel */}
              <div className="rounded-3xl border border-[#E8E4DA] bg-white p-5 shadow-sm flex flex-col">
                <h2 className="text-base font-semibold text-[#1A1916] mb-5">
                  Details
                </h2>

                {!detail ? (
                  /* Empty state */
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-8 gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "#F0EDE6" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="7"
                          stroke="#B0ADA8"
                          strokeWidth="1.5"
                        />
                        <circle cx="10" cy="10" r="2.5" fill="#B0ADA8" />
                        <line
                          x1="10"
                          y1="3"
                          x2="10"
                          y2="5"
                          stroke="#B0ADA8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="10"
                          y1="15"
                          x2="10"
                          y2="17"
                          stroke="#B0ADA8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="3"
                          y1="10"
                          x2="5"
                          y2="10"
                          stroke="#B0ADA8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="15"
                          y1="10"
                          x2="17"
                          y2="10"
                          stroke="#B0ADA8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-[#5A5855]">
                      Nothing selected yet
                    </p>
                    <p className="text-xs text-[#B0ADA8] leading-relaxed max-w-[180px]">
                      Tap an interest node to expand it, then tap an activity to
                      explore it.
                    </p>
                  </div>
                ) : detail.type === "interest" ? (
                  /* Interest selected */
                  <div className="flex-1 flex flex-col gap-4">
                    <div
                      className="h-0.5 rounded-full w-8"
                      style={{ background: accentColor }}
                    />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                        Interest
                      </p>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {detail.data.label}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5A5855] leading-relaxed">
                      {isExpanded
                        ? `${(detail.data as (typeof interests)[0]).activityIds.length} activities are now visible in the graph. Tap any to explore it.`
                        : "Tap this node in the graph to reveal its activities."}
                    </p>

                    {/* Activity quick-tap pills */}
                    {isExpanded && (
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-2">
                          Activities
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {(
                            detail.data as (typeof interests)[0]
                          ).activityIds.map((id) => {
                            const act = activities.find((a) => a.id === id);
                            return act ? (
                              <button
                                key={id}
                                onClick={() => setSelectedId(id)}
                                className="rounded-full px-2.5 py-1 text-xs font-medium transition-all hover:scale-105 active:scale-95"
                                style={{
                                  background: `${accentColor}14`,
                                  color: accentColor,
                                }}
                              >
                                {act.label}
                              </button>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => handleSelectNode(detail.data.id)}
                      className="mt-auto rounded-2xl py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: accentColor }}
                    >
                      {isExpanded ? "Collapse activities" : "Show activities →"}
                    </button>
                  </div>
                ) : (
                  /* Activity selected */
                  <div className="flex-1 flex flex-col gap-4">
                    <div
                      className="h-0.5 rounded-full w-8"
                      style={{ background: accentColor }}
                    />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                        Activity
                      </p>
                      <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                        {detail.data.label}
                      </h3>
                    </div>

                    <p className="text-sm text-[#5A5855] leading-relaxed">
                      {(detail.data as (typeof activities)[0]).description}
                    </p>

                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        diffLabel[
                          (detail.data as (typeof activities)[0]).tags
                            .difficulty
                        ],
                        envLabel[
                          (detail.data as (typeof activities)[0]).tags
                            .environment
                        ],
                        costLabel[
                          (detail.data as (typeof activities)[0]).tags.cost
                        ],
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                          style={{
                            background: `${accentColor}12`,
                            color: accentColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Beginner tip */}
                    <div
                      className="rounded-xl p-3.5 flex gap-3"
                      style={{ background: "#FAF8F2" }}
                    >
                      <span className="text-base flex-shrink-0 mt-0.5">💡</span>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-[#B0ADA8] mb-1">
                          First step
                        </p>
                        <p className="text-xs text-[#1A1916] leading-relaxed">
                          {(detail.data as (typeof activities)[0]).beginnerTip}
                        </p>
                      </div>
                    </div>

                    {/* Find nearby */}
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(
                        detail.data.label + " near me",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto rounded-2xl py-3 text-sm font-semibold text-white text-center transition-all hover:opacity-90 active:scale-95"
                      style={{
                        background: accentColor,
                        boxShadow: `0 4px 14px ${accentColor}35`,
                        display: "block",
                      }}
                    >
                      Find nearby →
                    </a>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
}
