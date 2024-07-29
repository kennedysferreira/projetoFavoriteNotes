import { FiPlus, FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../components/input";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Favorite Notes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos" isActive={true} /></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar por um titulo" icon={FiSearch}/>
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}
