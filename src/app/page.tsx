"use client";

import { useState } from "react";
import GraphCanvas from "@/components/GraphCanvas";

type Activity = {
  id: string;
  title: string;
  category: string;
  summary: string;
  beginnerTip: string;
};

const activityMap: Record<string, Activity> = {
  fitness: {
    id: "fitness",
    title: "Fitness",
    category: "Interest",
    summary:
      "A starting point for active hobbies that build energy and confidence.",
    beginnerTip: "Pick something fun first so you stay consistent.",
  },
  "rock-climbing": {
    id: "rock-climbing",
    title: "Rock Climbing",
    category: "Fitness",
    summary:
      "A fun activity that combines movement, focus, and problem solving.",
    beginnerTip:
      "Start with indoor bouldering and rent gear for your first visit.",
  },
  zumba: {
    id: "zumba",
    title: "Zumba",
    category: "Fitness",
    summary:
      "A high-energy dance workout that feels more like a party than exercise.",
    beginnerTip: "Wear comfortable shoes and focus on following the rhythm.",
  },
  cycling: {
    id: "cycling",
    title: "Cycling",
    category: "Fitness",
    summary:
      "A flexible hobby for fitness, commuting, and outdoor exploration.",
    beginnerTip:
      "Start with a short flat route and get used to braking and turning.",
  },
};

export default function Home() {
  const [selectedId, setSelectedId] = useState("rock-climbing");
  const selected = activityMap[selectedId];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Hobby Graph</h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Discover new hobbies through an interactive graph of interests,
            activities, and nearby experiences.
          </p>
        </header>

        <section className="grid flex-1 gap-6 md:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Explore Graph</h2>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105">
                Random Activity
              </button>
            </div>

            <GraphCanvas onSelectNode={setSelectedId} />
          </div>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold">Activity Details</h2>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-500">
                  Selected Activity
                </p>
                <h3 className="mt-1 text-xl font-semibold">{selected.title}</h3>
              </div>

              <p className="text-zinc-400">{selected.summary}</p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                  {selected.category}
                </span>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                  Explore
                </span>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                  Beginner-friendly
                </span>
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4">
                <p className="text-sm text-zinc-500">Beginner tip</p>
                <p className="mt-1 text-zinc-300">{selected.beginnerTip}</p>
              </div>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  selected.title + " near me",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-purple-500 px-4 py-2 font-medium text-white transition hover:scale-105"
              >
                Find nearby
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
