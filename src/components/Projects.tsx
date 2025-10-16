import { projects } from '@/data/projects';
import project1 from '@/assets/project1.png';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Projetos</span> em Destaque
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inovadoras que demonstram expertise técnica e impacto nos negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-project hover-lift fade-in group">
              <div className={`h-48 relative overflow-hidden cursor-pointer`}
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => window.open(project.link, '_blank')}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => window.open(project.link, '_blank')}>
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
                >
                  Ver Repositório
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;