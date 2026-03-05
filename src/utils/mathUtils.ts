export function lerp(start: number, end: number, t: number): number { return start + (end - start) * t; }
export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number { return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin; }
export function average(numbers: number[]): number { return numbers.length ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0; }
export function median(numbers: number[]): number {
  if (!numbers.length) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
export function standardDeviation(numbers: number[]): number {
  const avg = average(numbers);
  const squareDiffs = numbers.map(n => Math.pow(n - avg, 2));
  return Math.sqrt(average(squareDiffs));
}
export function fibonacci(n: number): number[] { const fib = [0, 1]; for (let i = 2; i < n; i++) fib.push(fib[i-1] + fib[i-2]); return fib.slice(0, n); }
