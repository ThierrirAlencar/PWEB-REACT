import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Poste.css";
import api from "../services/api";

export const Post = () => {
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    titulo: "",
    conteudo: "",
    categoria: "",
    id_imagem: "",
    id_usuario: localStorage.getItem("usuarioId") || "",
  });  
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        console.log("Posts carregados:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await api.get("/imagens");
        console.log("Imagens carregadas:", response.data);
        setImages(response.data);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    fetchPosts();
    fetchImages();

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    console.log("meu token:", token)
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dados do novo post", newPost);
  
    const usuarioId = localStorage.getItem("usuarioId");
    if (!usuarioId) {
      alert("Erro: usuário não identificado. Faça login novamente.");
      return;
    }
    console.log(usuarioId)

  
    if (!newPost.titulo || !newPost.conteudo || !newPost.categoria) {
      alert("Título, conteúdo e categoria são obrigatórios!");
      return;
    }
  
    console.log("ID do usuário recuperado:", usuarioId);

    setNewPost((prevPost) => ({
      ...prevPost,
      id_usuario: usuarioId,
    }));    
  
    try {
      const response = await api.post("/posts", {
        ...newPost,
        id_usuario: usuarioId,
      });
      console.log("Resposta da API ao criar post:", response.data);
      setPosts((prevPosts) => [...prevPosts, response.data]);
      setNewPost({ titulo: "", conteudo: "", categoria: "", id_imagem: "", id_usuario: usuarioId });
      setShowForm(false);
      alert("Postado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error.response || error);
      alert("Erro ao postar!");
    }
  };

  const handleWriteClick = () => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para postar!");
      navigate("/login");
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="posts-container">
      <div className="write-button">
        <button onClick={handleWriteClick} className="button">Escrever</button>
        <span>Algo para compartilhar? Espalhe agora! ✍️</span>
      </div>

      {showForm && (
        <div className="post-form-container">
          <form onSubmit={handleSubmit} className="post-form">
            <input type="text" name="titulo" placeholder="Título" value={newPost.titulo} onChange={handleInputChange} className="post-input" required />
            <textarea name="conteudo" placeholder="Escreva seu post..." value={newPost.conteudo} onChange={handleInputChange} className="post-textarea" required></textarea>
            <input type="text" name="categoria" placeholder="Categoria" value={newPost.categoria} onChange={handleInputChange} className="post-input" required />
            <select name="id_imagem" value={newPost.id_imagem} onChange={handleInputChange} className="post-input">
              <option value="">Selecione uma imagem</option>
              {images.map((img) => (
                <option key={img.id} value={img.id}>{img.nome || `Imagem ${img.id}`}</option>
              ))}
            </select>
            <button type="submit" className="post-submit-button">Publicar</button>
          </form>
        </div>
      )}

      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => {
            const image = images.find((img) => String(img.id) === String(post.id_imagem));
            console.log(`Post ID: ${post.id}, ID Imagem: ${post.id_imagem}, URL encontrada:`, image?.url_post);
            return (
              <div key={post.id} onClick={() => navigate(`/post/${post.id}`)}className="post-item">
                <h3>{post.titulo}</h3>
                <p>aperte para ver mais</p>
                {image?.url_post ? (
                  <img src={image.url_post} alt="Imagem do post" className="post-image" />
                ) : (
                  <p>Imagem não disponível</p>
                )}
              </div>
            );
          })
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </div>
    </div>
  );
};