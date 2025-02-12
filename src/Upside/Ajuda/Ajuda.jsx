import { useState } from "react";
import "./Ajuda.css";

export function HelpPage() {
  const faqs = [
    { question: "Como posso publicar uma notícia?", answer: "Para publicar uma notícia, clique no botão 'Escrever' e preencha os detalhes." },
    { question: "Posso editar ou excluir uma notícia?", answer: "Sim! Você pode editar ou excluir suas postagens na seção 'Minhas notícias'." },
    { question: "Como entro em contato com o suporte?", answer: "Envie um e-mail para suporte@exemplo.com ou clique no botão abaixo." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-wrapper">
      <div className="help-container">
        <h1 className="help-title">Página de Ajuda</h1>
        <p className="help-description">Encontre respostas para as dúvidas mais comuns.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <a href="mailto:luluzitaslevk@gmail.com" className="contact-button">
            Entrar em contato
          </a>
        </div>
      </div>
    </div>
  );
}
