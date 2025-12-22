import { formatSecondToMinute } from "../../utils/formatSecondToMinute";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskActionModel,
  action: TaskActionModel
): TaskActionModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask ? newTask.duration * 60 : 0;

      return {
        ...state,
        activeTask: newTask,
        secondsRemaining: secondsRemaining,
        currentCycle: nextCycle,
        formattedSecondsRemaining: formatSecondToMinute(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK:
      // lógica para interromper a tarefa
      return state;
    default:
      return state;
  }
}
