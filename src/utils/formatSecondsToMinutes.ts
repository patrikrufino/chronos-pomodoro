/**
 * Formats seconds into a MM:SS string format.
 * @param seconds - The total number of seconds to format.
 * @returns A string representing the time in MM:SS format.

*/
export function formatSecondsToMinutes(seconds: number): string {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsMod = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secondsMod}`;
}
