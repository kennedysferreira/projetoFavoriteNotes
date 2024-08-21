import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import avatarProfile from "../../assets/avatarProfile.svg";

import { Container, Form, Avatar } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarProfile;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(e: any) {
    e.preventDefault();
    const updatedUser = {
      name,
      email,
      password,
      old_password: oldPassword,
    };

    await updateProfile({ user: updatedUser, avatarFile });
    window.location.reload();
  }
  function handleAvatar(e: any) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
   
  }

  return (
    <Container>
      <header>
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Salvar" type="submit" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
