import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="task"
          placeholder="Coloque sua tarefa aqui"
          label="Tarefa"
        />
        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
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
