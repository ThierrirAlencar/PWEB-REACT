import React, { useEffect, useState } from "react";
import "./Noticias.css";
import api from '../services/api';

export function Noticias() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para o formulário de criação
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [urlNoticia, setUrlNoticia] = useState("");
  const [formError, setFormError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await api.get("/noticias");
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Função para criar a notícia
  async function createPost(e) {
    e.preventDefault();
    
    if (!titulo || !conteudo) {
      setFormError("Todos os campos são obrigatórios!");
      return;
    }
    
    setFormError("");
    setLoading(true);

    const novaNoticia = { titulo, conteudo, url_noticia: urlNoticia };

    try {
      await api.post("/noticias", novaNoticia);
      setTitulo("");
      setConteudo("");
      setUrlNoticia("");
      setIsFormVisible(false);

      // Atualiza automaticamente a lista de notícias
      fetchNoticias();
    } catch (err) {
      console.error("Erro ao criar notícia:", err);
      setError("Erro ao criar notícia. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  // Função para deletar a notícia
  async function deletePost(id) {
    setLoading(true);
    try {
      await api.delete(`/noticias/${id}`);
      fetchNoticias();
    } catch (err) {
      console.error("Erro ao deletar notícia:", err);
      setError("Erro ao deletar notícia. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Carregando notícias...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="news-container">
      <h1 className="title1">
        <span role="img" aria-label="news">📰</span> Fandom News
        <span role="img" aria-label="fire">🔥</span>
      </h1>

      <button 
        className="toggle-form-button" 
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Cancelar" : "Escrever Notícia"}
      </button>

      {/* Formulário de criação de notícia */}
      <div className={isFormVisible ? "create-post-form show" : "create-post-form"}>
        <h2>Criar Nova Notícia</h2>
        {formError && <p className="error">{formError}</p>}
        <form onSubmit={createPost}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Conteúdo:</label>
            <textarea
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>URL da Imagem (opcional):</label>
            <input
              type="text"
              value={urlNoticia}
              onChange={(e) => setUrlNoticia(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Criando..." : "Criar Notícia"}
          </button>
        </form>
      </div>

      {/* Lista de artigos */}
      <div className="articles">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img
              className="article-image"
              src={article.url_noticia || "https://via.placeholder.com/300x180"}
              alt={article.titulo}
            />
            <div className="article-content">
              <h2>{article.titulo}</h2>
              <p>{article.conteudo}</p>
              <button className="read-more">Leia Mais</button>
              <button 
                className="delete-button" 
                onClick={() => deletePost(article.id)}
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
