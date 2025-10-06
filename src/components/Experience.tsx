import { experiences } from "@/data/experiences";
import { goals } from "@/data/goals";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Experiência</span> Profissional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trajetória de crescimento contínuo com resultados mensuráveis e impacto real
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Histórico Profissional</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item fade-in">
                  <div className="card-elevated">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-primary">{exp.role}</h4>
                      <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                    </div>
                    <h5 className="text-md font-semibold text-card-foreground mb-3">{exp.company}</h5>
                    <div className="bg-accent/10 border-l-4 border-accent p-3 rounded mb-3">
                      {exp.achievements.map((achievement, index) => (
                        <p className="text-sm font-medium text-accent">• {achievement}</p>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Metas Profissionais</h3>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="card-elevated hover-lift fade-in">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">{goal.term}</h4>
                      <p className="text-muted-foreground">{goal.goal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-elevated">
              <h4 className="text-lg font-bold mb-4 gradient-text">Visão de Futuro</h4>
              <p className="text-muted-foreground leading-relaxed">
                Comprometido com a excelência técnica e o impacto social da tecnologia, tenho como propósito desenvolver soluções que melhorem a eficiência das organizações e ampliem o alcance da inovação no Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;