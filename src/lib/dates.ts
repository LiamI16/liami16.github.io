/** "Sep 2026". Frontmatter dates are parsed as UTC midnight, so format in UTC. */
export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
