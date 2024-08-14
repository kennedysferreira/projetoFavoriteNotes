import { FiPlus, FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const [tags, setTags] = useState<any[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<any[]>([]);

  function handleTagSelected(tagName: string) {
    const alreadySelected = tagsSelected.includes(tagName);

    if (tagName === "all") {
      return setTagsSelected([]);
    }
    if (alreadySelected) {
      const removeSelected = tagsSelected.filter((tag) => tag !== tagName);
      return setTagsSelected(removeSelected);
    }
    const prevTagsSelected = [...tagsSelected, tagName];
    setTagsSelected(prevTagsSelected);
  }

  function handleDetails(id: string) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function getTags() {
      const response = await api.get("/tags");
      const { data } = response;
      setTags(data);
    }
    getTags();
  }, []);

  useEffect(() => {
    async function getNotes() {
      const response = await api.get(
        `notes?title=${search}&tags=${tagsSelected}`
      );
      const { data } = response;
      setNotes(data);
    }
    getNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Favorite Notes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar por um titulo"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note data={note} key={String(note.id)} onClick={() => handleDetails(note.id)}/>
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
