import React from "react";

export function CharacterDetail({ characters }) {
  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return <h2>Personagem não encontrado</h2>;
  }

  return (
    <div className="character-detail-page">
      <div className="character-detail">
        <img src={character.image} alt={character.name} className="character-detail-image" />
        <div className="character-detail-info">
          <h1>{character.name}</h1>
          <p><strong>Tipo:</strong> {character.type || "Desconhecido"}</p>
          <p><strong>Gênero:</strong> {character.gender || "Desconhecido"}</p>
          <p><strong>Espécie:</strong> {character.species || "Desconhecido"}</p>
          <p><strong>Habilidades:</strong> {character.abilities.length > 0 ? character.abilities.join(", ") : "Nenhuma"}</p>
          <p className="character-description">{character.description || "Sem descrição disponível."}</p>
        </div>
      </div>
    </div>
  );
}
