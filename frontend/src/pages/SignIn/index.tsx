import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { Container, Form, Background } from "./style";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e: any) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Favorite Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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

        <Button onClick={handleSignIn} title="Entrar" />

        <Link to="/sign-up">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
