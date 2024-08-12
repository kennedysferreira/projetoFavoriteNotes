import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container, Form, Background } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e: any) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Preencha todos os campos");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usário criado com sucesso");
        navigate("/");
      })
      .catch((error: { response: { data: { message: string } } }) => {
        if (error.response) {
          alert(error.response.data.message);
          return;
        }
        alert("Nao foi possivel criar o usuario");
        return;
      });
  }
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignUp} title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
