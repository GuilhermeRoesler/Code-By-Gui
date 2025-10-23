import { Link } from "react-router-dom";
import SkillCarousel from "./SkillCarousel";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Competências</span> Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise técnica desenvolvida através de projetos reais e aprendizado contínuo
          </p>
        </div>

        <SkillCarousel />

        <div className="mt-16 text-center bounce">
          <Link to="/skills" className="btn-hero">
            Ver Todas as Habilidades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;