import { Container, Links, Content } from "./style";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tags";
import { ButtonText } from "../../components/buttonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>Introdução ao React</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            maxime, ratione quam accusamus ipsum illum possimus velit unde
            dolorum ex similique nam? Est maxime impedit dolorum odio quis,
            exercitationem vel.
          </p>
          <Section title="Links uteis">
            <Links>
              <li>
                {" "}
                <a href="#">link 1</a>
              </li>
              <li>
                {" "}
                <a href="#">link 2</a>
              </li>
            </Links>
          </Section>
          <Section title="Tags">
            {" "}
            <Tag title="Express" /> <Tag title="Node" />{" "}
          </Section>
          <Button title="Voltar" loading />
        </Content>
      </main>
    </Container>
  );
}
