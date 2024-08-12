import { createContext, useContext, useState } from "react";
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
    
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });

    } catch (error: any) {
      if(error.response) {
        alert(error.response.data.message);
        return
      }

      alert("Não foi possível entrar");
    }
    
  }
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
