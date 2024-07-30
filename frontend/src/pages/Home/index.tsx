import { FiPlus, FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";

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
      
      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React",
            tags: [
              {id: '1', name: "React"},
              {id: '1', name: "rockeseat"}
            ]
          }}/>
        </Section>

      </Content>

      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}
