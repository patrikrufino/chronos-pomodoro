import type { TaskModel } from "../models/TaskModel";

/**
 * Determines the next cycle type based on the current cycle number.
 * @param currentCycle - The current cycle number.
 * @returns The type of the next cycle: "workTime", "shortBreakTime", or "longBreakTime".
 */
export function getNextCycleType(currentCycle: number): TaskModel["type"] {
  if (currentCycle % 8 === 0) return "longBreakTime";
  if (currentCycle % 2 === 0) return "workTime";
  return "shortBreakTime";
}
