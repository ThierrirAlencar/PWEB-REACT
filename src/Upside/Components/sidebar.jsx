import React, { useState } from "react";
import "./Estilizacao/sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
  }  

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <button class="menu-button" onclick="toggleMenu()">Menu</button>
      </button>
        
      <nav className="menu">
      </nav>
    </>
  );
};