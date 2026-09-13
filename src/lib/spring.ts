// Site-wide motion is the unit step response of a second-order system,
// normalized so the response envelope settles to within 0.1% at t = 1. The
// curve is baked into a CSS `linear()` easing, so an animation's duration
// sets the time scale and ζ alone sets the character of every transition.

const SETTLE = Math.log(1000); // envelope e^(-rt) reaches 0.1% at t = 1

export const DEFAULT_ZETA = 1;
export const ZETA_MIN = 0.2;
export const ZETA_MAX = 1.6;

/** Natural frequency ωₙ (rad per unit duration) that settles by t = 1. */
export function naturalFrequency(zeta: number): number {
  if (zeta < 0.999) return SETTLE / zeta;
  if (zeta <= 1.001) return 9.23; // critically damped: solves (1 + ω)e^(-ω) = 0.001
  return SETTLE / (zeta - Math.sqrt(zeta * zeta - 1)); // slow pole sets the settle time
}

export function stepResponse(zeta: number, t: number): number {
  const w = naturalFrequency(zeta);
  if (zeta < 0.999) {
    const root = Math.sqrt(1 - zeta * zeta);
    const wd = w * root;
    return 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + (zeta / root) * Math.sin(wd * t));
  }
  if (zeta <= 1.001) return 1 - (1 + w * t) * Math.exp(-w * t);
  const disc = Math.sqrt(zeta * zeta - 1);
  const p1 = w * (zeta - disc);
  const p2 = w * (zeta + disc);
  return 1 - (p2 * Math.exp(-p1 * t) - p1 * Math.exp(-p2 * t)) / (p2 - p1);
}

/** Peak overshoot as a fraction (0 for ζ ≥ 1). */
export function overshoot(zeta: number): number {
  return zeta < 1 ? Math.exp((-Math.PI * zeta) / Math.sqrt(1 - zeta * zeta)) : 0;
}

export function springSamples(zeta: number, samples = 64): number[] {
  const out: number[] = [];
  for (let i = 0; i <= samples; i++) out.push(i === samples ? 1 : stepResponse(zeta, i / samples));
  return out;
}

export function springEasing(zeta: number, samples = 64): string {
  return `linear(${springSamples(zeta, samples)
    .map((v) => Number(v.toFixed(4)))
    .join(', ')})`;
}
