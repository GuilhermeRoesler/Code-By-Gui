import { useState, useEffect } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
      }`}>
      <nav className="container-max p-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          Guilherme Roesler
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Início
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projetos
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Competências
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            Experiência
          </button>
          {/* <button onClick={() => scrollToSection('testimonials')} className="nav-link">
            Depoimentos
          </button> */}
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contato
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a
            href="mailto:guiroesler2@gmail.com"
            className="btn-secondary py-2 px-6 text-sm"
          >
            Fale Comigo
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;