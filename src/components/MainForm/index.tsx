import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent) {
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
      duration: 25,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
      activeTaskId: newTask,
      currentCycle: 1,
      secondsRemaining,
      formattedTime: `${String(Math.floor(secondsRemaining / 60)).padStart(
        2,
        "0"
      )}:${String(secondsRemaining % 60).padStart(2, "0")}`,
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="task"
          placeholder="Coloque sua tarefa aqui"
          label="Tarefa"
          ref={taskNameInput}
        />
        <div className="formRow">
          <p>Próximo intervalor é de 25 minutos.</p>
        </div>{" "}
        <div className="formRow">
          <p>Ciclos:</p>
          <p>0 - 0 - 0 - 0 </p>
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </div>
    </form>
  );
}
