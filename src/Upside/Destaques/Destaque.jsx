import React, { useState } from "react";
import "./Estilizacao/Destaques.css";

export function Destaques() {
  const [noticias] = useState([
    {
      id: 1,
      titulo: "Novo Jogo Revoluciona o Mercado",
      descricao: "O game mais esperado do ano finalmente foi lançado e já bateu recordes de vendas!",
      imagem: "https://f.i.uol.com.br/folha/mundo/images/14345257.jpeg",
    },
    {
      id: 2,
      titulo: "Filme Baseado em Anime é Sucesso",
      descricao: "A nova adaptação live-action de um anime clássico conquista fãs e críticos.",
      imagem: "https://f.i.uol.com.br/folha/mundo/images/14345257.jpeg",
    },
    {
      id: 3,
      titulo: "Campeonato de E-sports Milionário",
      descricao: "O torneio deste ano tem o maior prêmio da história dos e-sports.",
      imagem: "https://f.i.uol.com.br/folha/mundo/images/14345257.jpeg",
    },
  ]);

  const [personagens] = useState([
    {
      id: 1,
      nome: "Kazuto Kirigaya (Kirito)",
      descricao: "Protagonista de Sword Art Online, um jogador habilidoso e destemido.",
      imagem: "https://source.unsplash.com/200x200/?anime",
    },
    {
      id: 2,
      nome: "Lara Croft",
      descricao: "Ícone dos games, protagonista da franquia Tomb Raider.",
      imagem: "https://source.unsplash.com/200x200/?lara-croft",
    },
    {
      id: 3,
      nome: "Geralt de Rivia",
      descricao: "O caçador de monstros de The Witcher, conhecido por sua força e sabedoria.",
      imagem: "https://source.unsplash.com/200x200/?the-witcher",
    },
  ]);

  const [curiosidades] = useState([
    {
      id: 1,
      titulo: "O Primeiro Jogo Eletrônico",
      descricao: "O primeiro jogo eletrônico da história foi criado em 1958 e se chamava 'Tennis for Two'.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/50/Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg",
    },
    {
      id: 2,
      titulo: "Recorde de Maior Maratona de Games",
      descricao: "Um jogador entrou para o Guinness jogando mais de 35 horas seguidas!",
    },
  ]);

  const [topFandoms] = useState([
    {
      id: 1,
      nome: "Harry Potter",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/50/Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg",
    },
    {
      id: 2,
      nome: "Star Wars",
      imagem: "https://source.unsplash.com/200x200/?starwars",
    },
    {
      id: 3,
      nome: "Marvel Universe",
      imagem: "https://source.unsplash.com/200x200/?marvel",
    },
  ]);

  return (
    <div className="container3">

      <section className="noticias">
        <h2>Últimas Notícias</h2>
        <div className="noticias-grid">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="noticia-card">
              <img className="noticia-img" src={noticia.imagem} alt={noticia.titulo} />
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="personagens">
        <h2>Personagens Famosos</h2>
        <div className="personagens-grid">
          {personagens.map((personagem) => (
            <div key={personagem.id} className="personagem-card">
              <img className="personagem-img" src={personagem.imagem} alt={personagem.nome} />
              <h3>{personagem.nome}</h3>
              <p>{personagem.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="curiosidades">
        <h2>Curiosidades do Mundo Geek</h2>
        <ul>
          {curiosidades.map((curiosidade) => (
            <li key={curiosidade.id} className="curiosidade-item">
              <h3>{curiosidade.titulo}</h3>
              <p>{curiosidade.descricao}</p>
              <img className="curiosidade-img" src={curiosidade.imagem}/>
            </li>
          ))}
        </ul>
      </section>

      <section className="top-fandoms">
        <h2>Fandoms Mais Populares</h2>
        <div className="fandoms-grid">
          {topFandoms.map((fandom) => (
            <div key={fandom.id} className="fandom-card">
              <img className="fandom-img" src={fandom.imagem} alt={fandom.nome} />
              <h3>{fandom.nome}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
