"use client";

import { interests } from "@/data/activities";

interface Props {
  selected: string[];
  onToggle: (id: string) => void;
  onConfirm: () => void;
}

const INTEREST_COLORS: Record<string, string> = {
  fitness: "#D4537E",
  creative: "#7F77DD",
  outdoor: "#1D9E75",
  tech: "#378ADD",
  social: "#EF9F27",
  culinary: "#D85A30",
};

export default function InterestOnboarding({
  selected,
  onToggle,
  onConfirm,
}: Props) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FAF8F2] px-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-[#9A9690] mb-3">
            step 1 of 1
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1A1916] mb-3">
            What pulls you in?
          </h1>
          <p className="text-[#9A9690] text-base">
            Pick a few areas. Your graph builds from these.
          </p>
        </div>

        {/* Interest tiles */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {interests.map((interest) => {
            const isSelected = selected.includes(interest.id);
            const color = INTEREST_COLORS[interest.id] ?? "#7F77DD";
            return (
              <button
                key={interest.id}
                onClick={() => onToggle(interest.id)}
                className="relative rounded-2xl border-2 p-5 text-left transition-all duration-200"
                style={{
                  borderColor: isSelected ? color : "#E8E4DA",
                  background: isSelected ? `${color}14` : "#FFFFFF",
                  transform: isSelected ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Color dot */}
                <div
                  className="w-3 h-3 rounded-full mb-3"
                  style={{ background: color }}
                />
                <p className="font-semibold text-[#1A1916] capitalize text-base">
                  {interest.label}
                </p>
                <p className="text-xs text-[#9A9690] mt-1">
                  {interest.activityIds.length} activities
                </p>
                {isSelected && (
                  <div
                    className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: color }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={onConfirm}
          disabled={selected.length === 0}
          className="w-full rounded-2xl py-4 font-semibold text-base transition-all duration-200"
          style={{
            background: selected.length > 0 ? "#7F77DD" : "#E8E4DA",
            color: selected.length > 0 ? "white" : "#9A9690",
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
          }}
        >
          {selected.length === 0
            ? "Pick at least one"
            : `Explore ${selected.length === 1 ? "this" : "these"} ${selected.length > 1 ? selected.length + " " : ""}interest${selected.length > 1 ? "s" : ""} →`}
        </button>
      </div>
    </div>
  );
}
