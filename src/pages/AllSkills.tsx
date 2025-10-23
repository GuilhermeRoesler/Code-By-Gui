import { Link } from 'react-router-dom';
import { skills } from '@/data/skills';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const AllSkills = () => {
  const getSkillColor = (level: string) => {
    switch (level) {
      case "Avançado": return "from-green-500 to-emerald-600";
      case "Intermediário": return "from-blue-500 to-indigo-600";
      case "Básico": return "from-orange-500 to-amber-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <Link to="/" className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium mb-8">
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
            {skills.map((skill, index) => (
              <div key={index} className="fade-in visible">
                <div className="card-elevated h-full">
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
      </main>
      <Footer />
    </div>
  );
};

export default AllSkills;