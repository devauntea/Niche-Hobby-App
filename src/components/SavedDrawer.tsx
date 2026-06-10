"use client";

import { activities } from "../data/activities";

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

interface Props {
  savedIds: string[];
  onSelect: (id: string) => void;
  onUnsave: (id: string) => void;
  onClose: () => void;
}

export default function SavedDrawer({
  savedIds,
  onSelect,
  onUnsave,
  onClose,
}: Props) {
  const savedActivities = savedIds
    .map((id) => activities.find((a) => a.id === id))
    .filter(Boolean) as typeof activities;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#E8E4DA]">
          <div>
            <h2 className="text-base font-semibold text-[#1A1916]">Saved</h2>
            <p className="text-xs text-[#B0ADA8] mt-0.5">
              {savedIds.length === 0
                ? "Nothing saved yet"
                : `${savedIds.length} activit${savedIds.length === 1 ? "y" : "ies"}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F0EDE6] flex items-center justify-center hover:bg-[#E8E4DA] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="#5A5855"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {savedActivities.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center pb-16">
              <div className="w-12 h-12 rounded-2xl bg-[#F0EDE6] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 3h10a1 1 0 011 1v13l-6-3-6 3V4a1 1 0 011-1z"
                    stroke="#B0ADA8"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-[#5A5855]">
                No saved activities
              </p>
              <p className="text-xs text-[#B0ADA8] max-w-[200px] leading-relaxed">
                Tap the bookmark on any activity to save it here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {savedActivities.map((activity) => {
                const color = ACTIVITY_COLORS[activity.id] ?? "#7F77DD";
                return (
                  <div
                    key={activity.id}
                    className="rounded-2xl border border-[#E8E4DA] p-4 flex items-center gap-3 hover:border-[#D3D0C8] transition-colors"
                  >
                    {/* Color dot */}
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: color }}
                    />

                    {/* Info */}
                    <button
                      className="flex-1 text-left"
                      onClick={() => {
                        onSelect(activity.id);
                        onClose();
                      }}
                    >
                      <p className="text-sm font-medium text-[#1A1916]">
                        {activity.label}
                      </p>
                      <p className="text-xs text-[#B0ADA8] mt-0.5 capitalize">
                        {activity.tags.difficulty} · {activity.tags.environment}
                      </p>
                    </button>

                    {/* Unsave */}
                    <button
                      onClick={() => onUnsave(activity.id)}
                      className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#F0EDE6] transition-colors flex-shrink-0"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.5 2h9a.5.5 0 01.5.5v10l-5-2.5-5 2.5V2.5a.5.5 0 01.5-.5z"
                          fill={color}
                          stroke={color}
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
