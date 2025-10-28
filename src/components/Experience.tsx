import { experiences } from "@/data/experiences";
import { goals } from "@/data/goals";
import ExperienceCard from "./ExperienceCard";

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
                  <ExperienceCard experience={exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Metas Profissionais</h3>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="slide-fwd-left">
                  <div className="flex items-start space-x-4 card-elevated hover-lift">
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

            <div className="mt-8 card-elevated slide-fwd-left">
              <h4 className="text-lg font-bold mb-4 gradient-text">Visão de Futuro</h4>
              <p className="text-muted-foreground leading-relaxed">
                Comprometido com a excelência técnica e o impacto social da tecnologia, tenho como propósito desenvolver soluções que melhorem a eficiência das organizações e ampliem o alcance da inovação no Brasil.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center slide-rotate-hor-top">
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

export default Experience;