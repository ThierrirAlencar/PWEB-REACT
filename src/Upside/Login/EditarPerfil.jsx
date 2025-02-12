import React, { useState } from "react";
import './EditarPerfil.css'

export const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perfil atualizado:", formData);
  };

  return (
    <div className="edit-profile-container">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Avatar URL:
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};