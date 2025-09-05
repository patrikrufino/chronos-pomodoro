import "./styles/theme.css";
import "./styles/globals.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
