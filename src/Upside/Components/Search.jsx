import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './modelos/Icon.png';

const filter = ['comunidade', 'noticias', 'image'];

export function Searcher() {
  const [busca, setBusca] = useState('');
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  // Função de redirecionamento para a página correspondente com parâmetro de busca
  const handleSelectOption = (item) => {
    setBusca(item);
    setFocus(false);

    // Redireciona para a página correspondente com o parâmetro de busca
    if (item === 'comunidade') {
      navigate(`/comunidades?search=${item}`);
    } else if (item === 'noticias') {
      navigate(`/noticias?search=${item}`);
    } else if (item === 'image') {
      navigate(`/image?search=${item}`);
    }
  };

  const filterFiltrados = filter.filter((item) =>
    item.toLowerCase().startsWith(busca.toLowerCase())
  );

  return (
    <div className="container-pesquisar">
      <div className="Super-container-pesquisar">
        <div className="logo-container">
          <img src={Icon} alt="Luluzinha Logo" className="logo" />
          <h1 className="title">LULUZINHA</h1>
        </div>
      </div>

      <div className="search-container">
        <div className="Pesquisar">
          <div className="search-icon"></div>
          <input
            id="search-input"
            type="text"
            value={busca}
            placeholder="Pesquisar"
            onChange={(ev) => setBusca(ev.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 200)}
            className="search-input"
          />
        </div>
        {focus && filterFiltrados.length > 0 && (
          <div className="results-container">
            {filterFiltrados.map((item, index) => (
              <div
                key={index}
                className="result-item"
                onMouseDown={() => handleSelectOption(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
