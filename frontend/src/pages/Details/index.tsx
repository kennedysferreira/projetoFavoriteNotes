import { Container, Links, Content } from "./style";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tags";
import { ButtonText } from "../../components/buttonText";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  type DataType = {
    note: {
      id: string;
      title: string;
      description: string;
    };
    links: {
      id: string;
      url: string;
    }[];
    tags: {
      id: string;
      name: string;
    }[];
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<DataType | null>(null);

  async function handleRemove() {
    const confirm = window.confirm("Tem certeza que deseja excluir esta nota?");

    if (confirm) {
      await api.delete(`/notes/${id}`);
      navigate(-1)
    }
    
    return
  }

  useEffect(() => {
    async function getNote() {
      const response = await api.get(`/notes/${id}`);
      const { data } = response;
      setData(data);

    }
    getNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemove}></ButtonText>

            <h1>{data.note.title}</h1>
            <p>{data.note.description}</p>

            {data.links && (
              <Section title="Links uteis">
                <Links>
                  {data.links.map((link: any) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Tags">
                {data.tags.map((tag: any) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={() => navigate(-1)} />
          </Content>
        </main>
      )}
    </Container>
  );
}
