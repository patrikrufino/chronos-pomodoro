import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask: Record<string, React.ReactNode> = {
    workTime: <span>Hora de focar!Evite distrações durante este período de {state.config.workTime}min.</span>,
    shortBreakTime: <span>Pausa rápida! Levante-se, alongue-se e relaxe por {state.config.shortBreakTime}min.</span>,
    longBreakTime: <span>Pausa longa! Aproveite para fazer algo que goste ou descansar um pouco mais por {state.config.longBreakTime}min.</span>,
  };

  const tipsForNoActiveTask: Record<string, React.ReactNode> = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: <span>Próxima pausa é de {state.config.shortBreakTime}min.</span>,
    longBreakTime: <span>Próxima pausa longa é de {state.config.longBreakTime}min.</span>,
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  )
}