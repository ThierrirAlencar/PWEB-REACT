import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Estilizacao/styles.css";

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const image = localStorage.getItem("profileImage");

    setIsAuthenticated(!!token);
    setProfileImage(image || "https://cdn-icons-png.flaticon.com/512/847/847969.png");
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("profileImage");
    window.location.reload();
  }

  return (
    <header className="header">
      <div className="nav-left"></div>

      <nav className="sidebar">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/destaque">Destaques</Link>
          <Link to="/comunidades">Comunidades</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/image">Imagem</Link>
          <Link to="/ajuda">Ajuda</Link>
        </div>
      </nav>

      <div className="nav-right">
        {isAuthenticated ? (
          <>
            <div className="profile-container">
              <img
                src={profileImage}
                alt="Perfil"
                className="profile-icon"
                onClick={toggleMenu}
              />
              {menuVisible && (
                <div className="dropdown-menu">
                  <Link to="/editar-perfil">Editar Perfil</Link>
                  <Link to="/editar-perfil">Favoritos</Link>
                  <Link to="/editar-perfil">Galeira</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}
