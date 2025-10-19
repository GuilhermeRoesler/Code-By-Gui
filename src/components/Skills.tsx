import { skills } from "@/data/skills";

const Skills = () => {
  const getSkillColor = (level: string) => {
    switch (level) {
      case "Avançado": return "from-green-500 to-emerald-600";
      case "Intermediário": return "from-blue-500 to-indigo-600";
      case "Básico": return "from-orange-500 to-amber-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card-elevated hover-lift slide-rotate-hor-top"
              style={{ animationDelay: `${index * 0.1}s` }}>
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
          ))}
        </div>

        <div className="mt-16 text-center slide-rotate-hor-top" style={{ animationDelay: '1.3s' }}>
          <div className="card-elevated max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Proposta de Valor</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-primary">Empresas de tecnologia e startups</span> que buscam
              inovar e expandir negócios através de <span className="font-semibold text-accent">soluções digitais
                seguras e escaláveis</span>. Especialização em integração de IA e desenvolvimento full-stack
              para maximizar eficiência operacional e resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;