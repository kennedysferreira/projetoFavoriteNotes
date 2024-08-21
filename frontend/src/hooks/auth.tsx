import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({} as any);


function AuthProvider({ children }: any) {
  const [data, setData] = useState({} as any);

  async function signIn({ email, password }: any) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });
      const { token, user } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }

      alert("Não foi possível entrar");
    }
  }

  function signOut() {
   
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");
    
    setData({} as any);

  }

  async function updateProfile({ user, avatarFile }: any) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const { data } = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = data.avatar;
      }
      await api.put(`/users`, user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      alert("Perfil atualizado com sucesso!");

      setData({
        token: data.token,
        user: data.user,
      });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
