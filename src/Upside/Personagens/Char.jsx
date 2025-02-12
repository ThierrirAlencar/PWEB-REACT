import React from "react";
import "./Char.css";
import { Link, useNavigate } from "react-router-dom";

export function Character({ character }) {
  
  const navigate = useNavigate();
  
  return (
    <div className="character-page">
      <aside className="character-sidebar">
        <div className="sidebar-header">
          <img src={character.image} alt={character.name} className="character-image" />
          <h2>{character.name}</h2>
        </div>
        <div className="sidebar-info">
          <p><strong>Type:</strong> {character.type || "Unknown"}</p>
          <p><strong>Gender:</strong> {character.gender || "Unknown"}</p>
          <p><strong>Species:</strong> {character.species || "Unknown"}</p>
          <p><strong>Abilities:</strong> {character.abilities.length > 0 ? character.abilities.join(", ") : "None"}</p>
        </div>
      </aside>

      <main className="character-content">
        <div className="character-header">
          <h1>{character.name}</h1>
          <Link to = "/characterdetail" className="character-tag">Ler mais</Link>
        </div>
        <p className="character-description">{character.description || "No description available."}</p>
      </main>
    </div>
  );
}
