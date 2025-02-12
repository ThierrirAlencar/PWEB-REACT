{/* Resultados filtrados */}
{focus && filterFiltrados.length > 0 && (
  <div className="results-container">
    {filterFiltrados.map((item, index) => (
      <div key={index} className="result-item">
        {item}
      </div>
    ))}
  </div>
)}