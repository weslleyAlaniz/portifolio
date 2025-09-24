import React from "react";
import "./style.css";
import Avatar from "../../assets/Avatar.png";

const Inicio: React.FC = () => (
  <main className="content">
    <section className="intro-section">
      <div className="text-block">
        <img src={Avatar} alt="Minha Foto" className="profile-image" />
      </div>

      <div className="text-block">
        <h2>Sobre mim</h2>
        <p>
          Sou Desenvolvedor Full Stack com experiência sólida em criação de
          sites e sistemas web completos, atuando desde o frontend até a
          infraestrutura. Tenho como especialidade a integração de APIs
          complexas, incluindo sistemas bancários (Sicoob, Banco do Brasil) e
          plataformas de serviços (como iFood e similares). Ao longo da minha
          trajetória, já desenvolvi soluções que automatizam processos
          financeiros, otimizam fluxos de pedidos e conectam diferentes
          plataformas, sempre com foco em performance, segurança e
          escalabilidade. Trabalho com stacks modernas como
          JavaScript/TypeScript, Node.js, React, SQL/NoSQL e Docker, aplicando
          práticas de desenvolvimento ágil, CI/CD e deploy em nuvem. Meu
          objetivo é transformar ideias e necessidades de negócio em soluções
          digitais que realmente geram valor, sempre entregando projetos bem
          estruturados, eficientes e prontos para crescer junto com o cliente.
        </p>
      </div>
    </section>
  </main>
);

export default Inicio;
