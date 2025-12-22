import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { Cycles } from "../cycles";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert("Por favor, insira um nome para a tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: { ...newTask } });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="task"
          placeholder="Coloque sua tarefa aqui"
          label="Tarefa"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
        <div className="formRow">
          <p>Próximo intervalor é de 25 minutos.</p>
        </div>{" "}
        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}
        <div className="formRow">
          {!state.activeTask && (
            <DefaultButton
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type="submit"
              icon={<PlayCircleIcon />}
              key="start"
            />
          )}

          {state.activeTask && (
            <DefaultButton
              aria-label="Interromper tarefa em andamento"
              title="Interromper tarefa em andamento"
              type="button"
              color="error"
              icon={<StopCircleIcon />}
              onClick={handleInterruptTask}
              key="stop"
            />
          )}
        </div>
      </div>
    </form>
  );
}
