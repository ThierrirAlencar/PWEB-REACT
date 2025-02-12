import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Noticias.css";
import api from "../services/api";

export function NoticiaDetalhe() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNoticia();
  }, []);

  const fetchNoticia = async () => {
    if (!id) return; // Evita requests desnecessários caso o ID não esteja definido  
    try {
      const response = await api.get(`/noticias/${id}`);
      setArticle(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) return <p>Carregando notícia...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="news-detail">
      <h1>{article.titulo}</h1>
      <img className="article-image" src={article.url_noticia || "https://via.placeholder.com/600x300"} alt={article.titulo} />
      <p>{article.conteudo}</p>
      <Link to="/noticias" className="back-button">← Voltar</Link>
    </div>
  );
}
