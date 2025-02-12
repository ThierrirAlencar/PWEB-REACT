import React from "react";
import "./Estilizacao/footer.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h2>AS ÚLTIMAS TENDÊNCIAS, ENVIADAS DIRETAMENTE PARA O SEU E-MAIL.</h2>
          <p>Fique por dentro de todas as novidades em jogos e entretenimento.</p>
          <input type="email" placeholder="Endereço de E-mail" />
          <button>INSCREVER-SE</button>
        </div>

        <div className="footer-links">
          <div className="column">
            <h3>EXPLORAR PROPRIEDADES</h3>
            <ul>
              <li><a href="#">Fandom</a></li>
              <li><a href="#">Muthead</a></li>
              <li><a href="#">Fanatical</a></li>
            </ul>
          </div>

          <div className="column">
            <h3>VISÃO GERAL</h3>
            <ul>
              <li><a href="#">O que é Fandom?</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Lei dos Serviços Digitais</a></li>
              <li><a href="#">Mapa Global do Site</a></li>
              <li><a href="#">Definições de Cookies</a></li>
            </ul>
          </div>

          <div className="column">
            <h3>COMUNIDADE</h3>
            <ul>
              <li><a href="#">Central da Comunidade</a></li>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </div>

          <div className="column">
            <h3>APPS FANDOM</h3>
            <p>Leve seus fandoms favoritos com você e não perca nada.</p>
            <div className="app-buttons">
              <img src="https://logospng.org/download/play-store/logo-play-store-2048.png" alt="App Store" />
              <img src="https://img.icons8.com/?size=512&id=63788&format=png" alt="Google Play" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2025 Fandom, Inc.</p>
        </div>
      </div>
    </footer>
  );
};
