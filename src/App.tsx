import "./styles/theme.css";
import "./styles/globals.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>{" "}
      <Container>
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
              <button>Adicionar</button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
