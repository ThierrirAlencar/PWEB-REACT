import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Header } from '../Components/Post.jsx';  // Certifique-se de que o caminho está correto
import { Searcher } from '../Components/Search.jsx';  // Certifique-se de que o caminho está correto
import { Footer } from '../Components/footer.jsx';  // Certifique-se de que o caminho está correto
import "./PostDetail.css";

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data); // Carrega o post específico
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await api.get("/imagens");
        setImages(response.data); // Carrega todas as imagens
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    fetchPost();
    fetchImages();

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [id]);

  if (!post) return <p>Carregando post...</p>;
  const image = images.find((img) => String(img.id) === String(post.id_imagem));

  return (
    <div className="post-detail-container">
      <Header /> 
      <Searcher />
      <div className="main-content"> 
        <div className="content">
          <div className="post-detail">
            <div className="back-button">
              <button onClick={() => navigate("/comunidades")}>Voltar para a lista de posts</button>
            </div>

            <h3>{post.titulo}</h3>
            <p>{post.conteudo}</p>
            <p><strong>Categoria:</strong> {post.categoria}</p>

            {image?.url_post ? (
              <img src={image.url_post} alt="Imagem do post" className="post-image" />
            ) : (
              <p>Imagem não disponível</p>
            )}
          </div>
        </div>
      </div>
      <Footer />  {/* Inclui o Footer */}
    </div>
  );
};
