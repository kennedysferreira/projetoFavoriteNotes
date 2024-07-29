import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Favorite Notes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  );
}
