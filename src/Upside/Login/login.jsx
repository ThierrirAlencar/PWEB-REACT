import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../services/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
  
    try {
      const response = await api.post("/login", { email, senha });
      
      console.log("Resposta do login:", response.data);
  
      if (response.data.token) {
        const { token, userId, profileImage } = response.data;
        localStorage.setItem("usuarioId",token)
        // if (!id) {
        //   throw new Error("ID do usuário não foi retornado pela API.");
        // }
  
        localStorage.setItem("token", token);
        localStorage.setItem("usuarioId", userId);
        // localStorage.setItem("profileImage", profileImage || "");
  
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        throw new Error("Nenhum token retornado pelo servidor.");
      }
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      setError("Erro ao autenticar. Verifique seus dados e tente novamente.");
    }
  }  

  return (
    <div className="container-login">
      <div className="left-section">
        <div className="icon-background">
          <img
            src="https://cdn-icons-png.flaticon.com/512/115/115757.png"
            alt="Email Icon"
            className="icon"
          />
        </div>
      </div>
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Confirmar</button>
          <a href="#">Esqueceu a senha?</a>
          <a href="/signup" onClick={(e) => { e.preventDefault(); navigate("/signup"); }}>
            Inscrever-se
          </a>
        </form>
      </div>
    </div>
  );
};
