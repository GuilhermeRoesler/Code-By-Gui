import { useState } from "react";
import { skills } from "@/data/skills";
import { Link } from "react-router-dom";
import SkillCarousel from "./SkillCarousel";
import SkillsCarousel3D from "./SkillsCarousel3D";
import ViewSwitcher from "./ViewSwitcher";

const Skills = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const [view, setView] = useState<'grid' | '3d'>('grid');

  const featuredSkills = skills.slice(0, 12);

  const handleOpenCarousel = (index: number) => {
    setSelectedSkillIndex(index);
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
  };

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Avançado": return "from-green-500 to-emerald-600";
      case "Intermediário": return "from-blue-500 to-indigo-600";
      case "Básico": return "from-orange-500 to-amber-600";
      case "Básico+": return "from-orange-500 to-red-600";
      case "Intermediário+": return "from-indigo-500 to-violet-600";
      case "Avançado+": return "from-emerald-500 to-fuchsia-600";
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

          <div className="flex justify-center mb-8">
            <ViewSwitcher view={view} setView={setView} />
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ display: view === 'grid' ? 'grid' : 'none' }}
          >
            {featuredSkills.map((skill, index) => (
              <div
                key={index}
                className="slide-rotate-hor-top cursor-pointer"
                style={{ animationDelay: `${index % 3 * 0.1}s` }}
                onClick={() => handleOpenCarousel(skills.findIndex(s => s.name === skill.name))}
              >
                <div className="card-skill shimmer-card h-full" style={{ '--delay': `${Math.random() * 10}s`, '--time': `${Math.random() * 4 + 8}s` } as React.CSSProperties}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <i className={`${skill.icon} text-4xl text-primary`}></i>
                      <h3 className="font-semibold text-lg text-card-foreground">{skill.name}</h3>
                    </div>
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

          {view === '3d' && <SkillsCarousel3D skills={featuredSkills} />}

          <div className="mt-16 text-center bounce">
            <Link to="/skills" className="btn-hero">
              Ver Todas as Habilidades
            </Link>
          </div>
        </div>
      </section>

      {carouselOpen && (
        <SkillCarousel
          skills={featuredSkills}
          initialIndex={selectedSkillIndex}
          onClose={handleCloseCarousel}
        />
      )}
    </>
  );
};

export default Skills;