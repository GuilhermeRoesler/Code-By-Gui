import React, { useState, useEffect } from 'react';
import { skills } from '@/data/skills';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface SkillCarouselProps {
  initialIndex: number;
  onClose: () => void;
}

// Constantes para as posições e estilos dos cards
// A lógica de transform foi unificada para incluir a centralização (-50%)
const POSITIONS = {
  center: { transform: 'translateX(-50%) translateY(-50%) scale(1.1) translateZ(0)', opacity: 1, zIndex: 10 },
  left1: { transform: 'translateX(calc(-50% - 240px)) translateY(-50%) scale(0.9) perspective(1100px) translateZ(-150px) rotateY(30deg)', opacity: 0.8, zIndex: 5 },
  left2: { transform: 'translateX(calc(-50% - 400px)) translateY(-50%) scale(0.8) perspective(1100px) translateZ(-300px) rotateY(45deg)', opacity: 0.5, zIndex: 1 },
  right1: { transform: 'translateX(calc(-50% + 240px)) translateY(-50%) scale(0.9) perspective(1100px) translateZ(-150px) rotateY(-30deg)', opacity: 0.8, zIndex: 5 },
  right2: { transform: 'translateX(calc(-50% + 400px)) translateY(-50%) scale(0.8) perspective(1100px) translateZ(-300px) rotateY(-45deg)', opacity: 0.5, zIndex: 1 },
  hidden: { transform: 'translateX(-50%) translateY(-50%) scale(0.5)', opacity: 0, zIndex: 0 },
};

const SkillCarousel = ({ initialIndex, onClose }: SkillCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const updateCarousel = (newIndex: number) => {
    setCurrentIndex((newIndex + skills.length) % skills.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
      else if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  const getCardStyle = (index: number) => {
    const offset = (index - currentIndex + skills.length) % skills.length;
    switch (offset) {
      case 0: return POSITIONS.center;
      case 1: return POSITIONS.right1;
      case 2: return POSITIONS.right2;
      case skills.length - 1: return POSITIONS.left1;
      case skills.length - 2: return POSITIONS.left2;
      default: return POSITIONS.hidden;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <h1 className="absolute top-[5%] text-6xl md:text-8xl font-black uppercase text-primary/10 select-none">Competências</h1>

        <div className="relative w-full h-[450px] perspective-[1200px]">
          <div className="absolute w-full h-full transform-style-3d">
            {skills.map((skill, i) => {
              const isCenter = i === currentIndex;
              const currentSkill = skills[currentIndex];
              return (
                <div
                  key={i}
                  style={getCardStyle(i)}
                  className="absolute top-1/2 left-1/2 w-[280px] h-[380px] transition-all duration-700 ease-in-out cursor-pointer"
                  onClick={() => updateCarousel(i)}
                >
                  <div className={`relative w-full h-full bg-card border rounded-2xl shadow-lg p-6 overflow-hidden transition-all duration-500 ${isCenter ? 'border-primary' : 'border-border'}`}>
                    {/* Collapsed View */}
                    <div className={`flex flex-col items-center justify-center h-full text-center transition-opacity duration-500 ${isCenter ? 'opacity-0' : 'opacity-100'}`}>
                      <i className={`${skill.icon} text-8xl text-muted-foreground`}></i>
                      <h3 className="text-2xl font-bold mt-4 text-card-foreground">{skill.name}</h3>
                    </div>

                    {/* Expanded View (Center Card) */}
                    {isCenter && (
                      <div className="absolute inset-0 p-6 flex flex-col items-center text-center animate-fade-in">
                        <i className={`${currentSkill.icon} text-6xl gradient-text`}></i>
                        <h2 className="text-2xl font-bold mt-2 text-card-foreground">{currentSkill.name}</h2>
                        <p className="text-sm font-medium text-muted-foreground mb-3">{currentSkill.level}</p>
                        <div className="w-full bg-border rounded-full h-2 mb-4">
                          <div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${currentSkill.proficiency}%` }}></div>
                        </div>
                        <div className="text-xs text-left space-y-2 w-full">
                          <div>
                            <h4 className="font-semibold text-primary">Como Aprendi:</h4>
                            <p className="text-muted-foreground leading-tight">{currentSkill.howILearned}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary">Onde Usei:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {currentSkill.whereIUsed.slice(0, 3).map(proj => <span key={proj} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full">{proj}</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="absolute top-1/2 -translate-y-1/2 left-4 md:left-16 z-20 w-12 h-12 rounded-full bg-card/60 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" onClick={() => updateCarousel(currentIndex - 1)}><ArrowLeft /></button>
        <button className="absolute top-1/2 -translate-y-1/2 right-4 md:right-16 z-20 w-12 h-12 rounded-full bg-card/60 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" onClick={() => updateCarousel(currentIndex + 1)}><ArrowRight /></button>
        <button onClick={onClose} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-card/60 border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all hover:rotate-90"><X /></button>

        <div className="absolute bottom-8 flex justify-center gap-2">
          {skills.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${i === currentIndex ? 'bg-primary scale-125' : 'bg-border'}`} onClick={() => updateCarousel(i)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;