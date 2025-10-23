import { useState } from "react";
import { skills } from "@/data/skills";
import { Link } from "react-router-dom";
import SkillDetailModal from "./SkillDetailModal";

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const featuredSkills = skills.slice(0, 12);

  const handleOpenModal = (index: number) => {
    setSelectedSkillIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextSkill = () => {
    setSelectedSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrevSkill = () => {
    setSelectedSkillIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Avançado": return "from-green-500 to-emerald-600";
      case "Intermediário": return "from-blue-500 to-indigo-600";
      case "Básico": return "from-orange-500 to-amber-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <div
                key={index}
                className="slide-rotate-hor-top cursor-pointer"
                style={{ animationDelay: `${index % 3 * 0.1}s` }}
                onClick={() => handleOpenModal(index)}
              >
                <div className="card-skill shimmer-card h-full" style={{ '--delay': `${Math.random() * 5}s` } as React.CSSProperties}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-card-foreground">{skill.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getSkillColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Proficiência</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bounce">
            <Link to="/skills" className="btn-hero">
              Ver Todas as Habilidades
            </Link>
          </div>
        </div>
      </section>

      {modalOpen && (
        <SkillDetailModal
          skillIndex={selectedSkillIndex}
          onClose={handleCloseModal}
          onNext={handleNextSkill}
          onPrev={handlePrevSkill}
        />
      )}
    </>
  );
};

export default Skills;