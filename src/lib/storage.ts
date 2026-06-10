const STORAGE_KEY = "aspect-niche-saved";

export function getSaved(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSaved(id: string): string[] {
  const current = getSaved();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function isSaved(saved: string[], id: string): boolean {
  return saved.includes(id);
}
