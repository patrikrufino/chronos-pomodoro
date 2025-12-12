/**
 * Returns the next cycle number based on the current cycle.
 * If the current cycle is 0 or 8, it returns 1. Otherwise, it increments the cycle by 1.
 *
 * @param currentCycle - The current cycle number.
 * @returns The next cycle number.
 */
export function getNextCycle(currentCycle: number): number {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
