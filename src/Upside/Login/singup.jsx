import React, { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import api from "../services/api"

export const SingUp = () => {
  async function getUser(){
    user = await api.post('/registro')
    console.log(user)
  }
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setnome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function createUser(user) {
    try {
      console.log("Enviando usuário:", user);
      const response = await api.post("/registro", user);
      console.log("Usuário cadastrado com sucesso:", response.data);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
      const user = {
        email,
        nome,
        senha
      }
      console.log(user)
      await createUser(user)
    
    if (senha !== confirmarSenha) {
      window.alert("Os campos precisam ser os mesmos!");
    }
  };
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
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label>Confirmar Email</label>
          <input
            type="text"
            placeholder="Confirmar Email"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
          />
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </div>
  );
};
