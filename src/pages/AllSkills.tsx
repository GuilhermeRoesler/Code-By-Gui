import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { skills as allSkills } from '@/data/skills';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import SkillCarousel from '@/components/SkillCarousel';

const AllSkills = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const sortedSkills = useMemo(() => {
    return [...allSkills].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const handleOpenCarousel = (index: number) => {
    setSelectedSkillIndex(index);
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
  };

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Dominante": return "from-emerald-500 to-fuchsia-600";
      case "Aplicando": return "from-green-500 to-emerald-600";
      case "Familiarizado": return "from-blue-500 to-indigo-600";
      case "Explorando": return "from-orange-500 to-red-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <Link to="/#skills" className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Início
            </Link>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Todas as</span> Competências
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Um panorama completo das minhas habilidades técnicas e ferramentas que utilizo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSkills.map((skill) => (
              <div key={skill.name} className="fade-in visible cursor-pointer"
                onClick={() => handleOpenCarousel(sortedSkills.findIndex(s => s.name === skill.name))}>
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
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {carouselOpen && (
          <SkillCarousel
            skills={sortedSkills}
            initialIndex={selectedSkillIndex}
            onClose={handleCloseCarousel}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AllSkills;