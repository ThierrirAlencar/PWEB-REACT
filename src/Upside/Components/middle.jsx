import React, { useState } from 'react';
import './Estilizacao/styles1.css';

export function Mid() {
  const topics = [
    { title: "Gênero mais pesquisado", name: "Nome1", image: "https://pa1.aminoapps.com/6714/44b86a6b50808f8d08d063b801237a2c2c59742c_hq.gif" },
    { title: "Personagem mais buscado", name: "Nome2", image: "https://pa1.aminoapps.com/6714/942b1f21e6b4aeac616fc3dc269316df0bdcaa1d_hq.gif" },
    { title: "Filme/Série mais buscada", name: "Nome3", image: "https://i.pinimg.com/originals/3c/80/36/3c80363c0c2aea38673b3f0cfefa9180.gif" },
  ];

  const [currentTopic, setCurrentTopic] = useState(0);

  const handleNext = () => {
    setCurrentTopic((prev) => (prev + 1) % topics.length);
  };

  const handlePrev = () => {
    setCurrentTopic((prev) => (prev - 1 + topics.length) % topics.length);
  };

  return (
    <div className="background">
      <div className="overlay"></div>
      <div id="characters-section">
        <div className="image-container">
          <div className="title-container">
            <h2>{topics[currentTopic].title}</h2>
            <h3>{topics[currentTopic].name}</h3>
          </div>
          
          <img
            className="image char active"
            src={topics[currentTopic].image}
            alt={topics[currentTopic].name}
          />

          <button id="prev-button" className="nav-button" onClick={handlePrev}></button>
          <button id="next-button" className="nav-button" onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
}
