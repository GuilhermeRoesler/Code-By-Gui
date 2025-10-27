import { useState } from 'react';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCardClass = (index: number) => {
    if (hoveredIndex === null) {
      return '';
    }
    if (index === hoveredIndex) {
      return 'scale-up';
    }
    if (index < hoveredIndex) {
      return 'rotate-right';
    }
    if (index > hoveredIndex) {
      return 'rotate-left';
    }
    return '';
  };

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

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-container"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="slide-top"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div
                className={`card-project overflow-hidden group project-card-3d ${getCardClass(index)}`}
              >
                <div className={`h-48 relative overflow-hidden cursor-pointer`}
                  onClick={() => window.open(project.link, '_blank')}>
                  <div className="absolute inset-0 bg-primary/5 overflow-hidden transform-gpu">
                    <img src={project.image} alt={project.name} className='group-hover:scale-110 transition-transform duration-300 ease-in-out object-cover w-full h-full object-top' />
                  </div>
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
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bounce">
          <Link to="/projects" className="btn-hero">
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;