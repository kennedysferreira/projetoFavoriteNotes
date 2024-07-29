import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/kennedysferreira.png"
          alt="kennedy ferreira"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Kennedy Ferreira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
