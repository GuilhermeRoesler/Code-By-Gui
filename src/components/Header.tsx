import { useState, useEffect } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Home, User, Code, Wrench, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Início', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'Sobre', icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: 'Projetos', icon: <Code className="w-4 h-4" /> },
    { id: 'skills', label: 'Competências', icon: <Wrench className="w-4 h-4" /> },
    { id: 'experience', label: 'Experiência', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'contact', label: 'Contato', icon: <Mail className="w-4 h-4" /> },
  ];

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
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="nav-link flex items-center gap-2">
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a
            href="https://wa.me/5551989354834?text=Olá GUilherme, bom dia! Vim aqui pelo seu portfólio, será que podemos conversar?"
            target="_blank"
            rel="noopener noreferrer"
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