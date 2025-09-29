import React from "react";
import "./style.css";

const projetos = [
  {
    titulo: "Projeto 1",
    descricao: "Descrição breve do projeto 1.",
    imagem: "https://via.placeholder.com/180x100.png?text=Projeto+1",
    github: "#",
    site: "#",
  },
  {
    titulo: "Projeto 2",
    descricao: "Descrição breve do projeto 2.",
    imagem: "https://via.placeholder.com/180x100.png?text=Projeto+2",
    github: "#",
    site: "#",
  },
  {
    titulo: "Projeto 3",
    descricao: "Descrição breve do projeto 3.",
    imagem: "https://via.placeholder.com/180x100.png?text=Projeto+3",
    github: "#",
    site: "#",
  },
  {
    titulo: "Projeto 4",
    descricao: "Descrição breve do projeto 4.",
    imagem: "https://via.placeholder.com/180x100.png?text=Projeto+4",
    github: "#",
    site: "#",
  },
];

const Projetos: React.FC = () => (
  <section className="projetos-section">
    <h2>Sites Web</h2>
    <div className="projetos-grid">
      {projetos.map((proj, idx) => (
        <div className="projeto-card" key={idx}>
          <img src={proj.imagem} alt={proj.titulo} className="projeto-image" />
          <h3>{proj.titulo}</h3>
          <p>{proj.descricao}</p>
          <div className="projeto-buttons">
            <a
              href={proj.github}
              className="btn-proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={proj.site}
              className="btn-proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projetos;
