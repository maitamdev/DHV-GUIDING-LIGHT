export function easeInOut(t: number): number { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
export function easeOutBounce(t: number): number {
  if (t < 1/2.75) return 7.5625 * t * t;
  if (t < 2/2.75) return 7.5625 * (t -= 1.5/2.75) * t + 0.75;
  if (t < 2.5/2.75) return 7.5625 * (t -= 2.25/2.75) * t + 0.9375;
  return 7.5625 * (t -= 2.625/2.75) * t + 0.984375;
}
export function spring(t: number, damping: number = 0.5): number { return 1 - Math.exp(-damping * t * 10) * Math.cos(t * 10); }
export function smoothStep(edge0: number, edge1: number, x: number): number { const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); }
