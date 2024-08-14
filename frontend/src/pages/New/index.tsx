import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { Container, Form } from "./style";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/buttonText";

export function New() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  async function handleAddNewNote(e: any) {
    if (!title || !description) {
      return alert(
        "Por favor, adicione um título e uma descriçao para sua nota"
      );
    }

    if (newTag) {
      return alert(
        "Clique para adioncar ou deixe o campo vazio para adicionar uma nova tag"
      );
    }

    if (newLink) {
      return alert(
        "Clique para adioncar ou deixe o campo vazio para adicionar um novo link"
      );
    }

    e.preventDefault();
    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });
    console.log(title, description, tags, links);

    alert("Nota criada com sucesso");
    navigate(-1);
  }

  function handleAddLink() {
    const prevLinks = [...links, newLink];

    setLinks(prevLinks);
    setNewLink("");
  }

  function handleRemoveLink(deleted: string) {
    const filteredLinks = links.filter((link) => link !== deleted);
    setLinks(filteredLinks);
  }

  function handleAddTag() {
    const prevTags = [...tags, newTag];
    setTags(prevTags);
    setNewTag("");
  }

  function handleRemoveTag(deleted: string) {
    const filteredTags = tags.filter((tag) => tag !== deleted);
    setTags(filteredTags);
    
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText onClick={() => navigate(-1)} title={"Voltar"}></ButtonText>
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Observações"
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                value={newTag}
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleAddNewNote} />
        </Form>
      </main>
    </Container>
  );
}
