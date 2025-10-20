import { useState, useEffect } from 'react';
import heroProfile from '@/assets/hero-profile.jpg';
import TextFlyIn from './TextFlyIn';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const [animationPhase, setAnimationPhase] = useState('waiting');

  useEffect(() => {
    const startTimer = setTimeout(() => setAnimationPhase('flyIn'), 2000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (animationPhase === 'flyIn') {
      const flyInDuration = 1560 + 2500;
      const pauseDuration = 5000;
      const timer = setTimeout(() => setAnimationPhase('fadingOut'), flyInDuration + pauseDuration);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  useEffect(() => {
    if (animationPhase === 'fadingOut') {
      const fadeOutDuration = 500;
      const timer = setTimeout(() => setAnimationPhase('typing'), fadeOutDuration);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight h-[9.5rem] lg:h-[12rem] flex flex-col justify-center">
                <div
                  className={`
                    ${animationPhase === 'typing' ? 'animation-hidden' : ''}
                    ${animationPhase === 'fadingOut' ? 'hero-fade-out' : ''}
                  `}
                >
                  <TextFlyIn>Desenvolvedor</TextFlyIn>
                  <TextFlyIn>Full-Stack & AI</TextFlyIn>
                </div>
                <div
                  className={`
                    ${animationPhase !== 'typing' ? 'animation-hidden' : ''}
                    ${animationPhase === 'typing' ? 'hero-fade-in' : ''}
                  `}
                >
                  <TypingAnimation
                    texts={["Desenvolvedor", "Guilherme"]}
                    startDeleting={true}
                    className="gradient-text"
                  />
                  <TypingAnimation
                    texts={["Full-Stack & AI", "Roesler"]}
                    startDeleting={true}
                    className="gradient-text"
                  />
                </div>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed slide-top" style={{ animationDelay: '2.2s' }}>
              Transformando ideias em <span className="text-primary font-semibold">soluções digitais</span> seguras e escaláveis
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn-hero slide-top"
                style={{ animationDelay: '2.3s' }}
              >
                Ver Projetos
              </button>
              <a
                href="https://wa.me/5551989354834?text=Olá GUilherme, bom dia! Vim aqui pelo seu portfólio, será que podemos conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary slide-top"
                style={{ animationDelay: '2.4s' }}
              >
                Entrar em Contato
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/GuilhermeRoesler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 slide-top"
                style={{ animationDelay: '2.5s' }}
              >
                <svg className="w-6 h-6 hover:animate-rotate-hor-center" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/guilherme-hubner-roesler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 slide-top"
                style={{ animationDelay: '2.7s' }}
              >
                <svg className="w-6 h-6 hover:animate-rotate-hor-center" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/guilherme_roesler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 slide-top"
                style={{ animationDelay: '2.9s' }}
              >
                <svg className="w-6 h-6 hover:animate-rotate-hor-center" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center slide-fwd-left" style={{ animationDelay: '2s' }}>
            <div className="relative bounce">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-card rounded-[9999px] p-4 shadow-large lg:scale-[1.2]">
                <img
                  src={heroProfile}
                  alt="Guilherme Roesler - Desenvolvedor Full-Stack"
                  className="w-80 h-80 object-cover rounded-[9999px]"
                />
              </div>
              {/* Bouncing Tech Badges */}
              <div
                className="absolute top-10 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg subtle-bounce font-bold"
                style={{ animationDelay: '0s' }}
              >
                React
              </div>
              <div
                className="absolute top-1/2 -left-8 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg subtle-bounce font-bold"
                style={{ animationDelay: '0.5s' }}
              >
                Py
              </div>
              <div
                className="absolute bottom-12 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg subtle-bounce font-bold"
                style={{ animationDelay: '1s' }}
              >
                AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;