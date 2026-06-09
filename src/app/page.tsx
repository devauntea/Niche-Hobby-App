"use client";

import { useState, useMemo } from "react";
import GraphCanvas from "@/components/GraphCanvas";
import LogoAnimation from "@/components/LogoAnimation";
import InterestOnboarding from "@/components/InterestOnboarding";
import { activities, interests, buildGraphNodes } from "@/data/activities";
import { edges } from "@/data/edges";

type Screen = "splash" | "onboarding" | "app";

const INTEREST_COLORS: Record<string, string> = {
  fitness: "#D4537E",
  creative: "#7F77DD",
  outdoor: "#1D9E75",
  tech: "#378ADD",
  social: "#EF9F27",
  culinary: "#D85A30",
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

export default function Home() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function toggleInterest(id: string) {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function handleConfirmInterests() {
    setSelectedId(selectedInterests[0] ?? null);
    setScreen("app");
  }

  // Build filtered graph from selected interests
  const graphNodes = useMemo(
    () => buildGraphNodes(selectedInterests),
    [selectedInterests],
  );

  // Filter edges to only those between visible nodes
  const visibleIds = useMemo(
    () => new Set(graphNodes.map((n) => n.id)),
    [graphNodes],
  );
  const graphEdges = useMemo(
    () =>
      edges.filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target)),
    [visibleIds],
  );

  function handleRandom() {
    const pool = activities.filter((a) =>
      selectedInterests.some((si) =>
        interests.find((i) => i.id === si)?.activityIds.includes(a.id),
      ),
    );
    if (pool.length === 0) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelectedId(pick.id);
  }

  const detail = useMemo(() => {
    if (!selectedId) return null;
    const activity = activities.find((a) => a.id === selectedId);
    if (activity) return { type: "activity" as const, data: activity };
    const interest = interests.find((i) => i.id === selectedId);
    if (interest) return { type: "interest" as const, data: interest };
    return null;
  }, [selectedId]);

  const accentColor = selectedId
    ? (INTEREST_COLORS[selectedId] ??
      graphNodes.find((n) => n.id === selectedId)?.color ??
      "#7F77DD")
    : "#7F77DD";

  return (
    <>
      {/* Splash */}
      {screen === "splash" && (
        <LogoAnimation onComplete={() => setScreen("onboarding")} />
      )}

      {/* Onboarding */}
      {screen === "onboarding" && (
        <InterestOnboarding
          selected={selectedInterests}
          onToggle={toggleInterest}
          onConfirm={handleConfirmInterests}
        />
      )}

      {/* Main app */}
      {screen === "app" && (
        <main className="min-h-screen bg-[#FAF8F2] text-[#1A1916]">
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
            {/* Header */}
            <header className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  aspect<span className="text-[#7F77DD]">·niche</span>
                </h1>
                <p className="text-sm text-[#9A9690] mt-0.5">
                  {selectedInterests
                    .map((id) => interests.find((i) => i.id === id)?.label)
                    .join(" · ")}
                </p>
              </div>
              <button
                onClick={() => setScreen("onboarding")}
                className="text-sm text-[#9A9690] hover:text-[#1A1916] transition-colors"
              >
                change interests
              </button>
            </header>

            <section className="grid flex-1 gap-5 md:grid-cols-[1.4fr_0.85fr]">
              {/* Graph panel */}
              <div className="rounded-3xl border border-[#E8E4DA] bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Explore</h2>
                  <button
                    onClick={handleRandom}
                    className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:opacity-90"
                    style={{ background: "#7F77DD" }}
                  >
                    Random activity
                  </button>
                </div>
                <GraphCanvas
                  nodes={graphNodes}
                  edges={graphEdges}
                  selectedId={selectedId}
                  onSelectNode={setSelectedId}
                />
              </div>

              {/* Detail panel */}
              <div className="rounded-3xl border border-[#E8E4DA] bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold mb-5">Details</h2>

                {!detail ? (
                  <div className="flex flex-col items-center justify-center h-48 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#F0EDE6] flex items-center justify-center mb-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <circle
                          cx="9"
                          cy="9"
                          r="6"
                          stroke="#9A9690"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M9 6v3.5l2 2"
                          stroke="#9A9690"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[#9A9690] text-sm">
                      Tap any node to explore it
                    </p>
                  </div>
                ) : detail.type === "activity" ? (
                  <div className="space-y-4">
                    {/* Color bar */}
                    <div
                      className="h-1 rounded-full w-12"
                      style={{ background: accentColor }}
                    />

                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#9A9690] mb-1">
                        Activity
                      </p>
                      <h3 className="text-xl font-semibold">
                        {detail.data.label}
                      </h3>
                    </div>

                    <p className="text-sm text-[#5A5855] leading-relaxed">
                      {(detail.data as (typeof activities)[0]).description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        diffLabel[
                          (detail.data as (typeof activities)[0]).tags
                            .difficulty
                        ],
                        (detail.data as (typeof activities)[0]).tags
                          .environment,
                        costLabel[
                          (detail.data as (typeof activities)[0]).tags.cost
                        ],
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-xs font-medium capitalize"
                          style={{
                            background: `${accentColor}14`,
                            color: accentColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Beginner tip */}
                    <div
                      className="rounded-2xl p-4"
                      style={{ background: "#FAF8F2" }}
                    >
                      <p className="text-xs uppercase tracking-widest text-[#9A9690] mb-1">
                        First step
                      </p>
                      <p className="text-sm text-[#1A1916] leading-relaxed">
                        {(detail.data as (typeof activities)[0]).beginnerTip}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(detail.data.label + " near me")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105"
                      style={{ background: accentColor }}
                    >
                      Find nearby →
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div
                      className="h-1 rounded-full w-12"
                      style={{ background: accentColor }}
                    />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#9A9690] mb-1">
                        Interest cluster
                      </p>
                      <h3 className="text-xl font-semibold">
                        {detail.data.label}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5A5855] leading-relaxed">
                      Tap any connected activity to explore it, or hit Random
                      activity to get a suggestion.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(detail.data as (typeof interests)[0]).activityIds
                        .slice(0, 4)
                        .map((id) => {
                          const act = activities.find((a) => a.id === id);
                          return act ? (
                            <button
                              key={id}
                              onClick={() => setSelectedId(id)}
                              className="rounded-full px-3 py-1 text-xs font-medium capitalize transition-all hover:scale-105"
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
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
}
