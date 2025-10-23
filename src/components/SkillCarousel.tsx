import React, { useState, useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import './SkillCarousel.css';

interface SkillCarouselProps {
  initialIndex: number;
  onClose: () => void;
}

const SkillCarousel = ({ initialIndex, onClose }: SkillCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const touchStartX = useRef(0);

  const updateCarousel = (newIndex: number) => {
    if (isAnimating || newIndex === currentIndex) return;

    const nextIndex = (newIndex + skills.length) % skills.length;

    setIsAnimating(true);
    setIsTextVisible(false); // 1. Começa a esconder o texto atual

    setCurrentIndex(nextIndex); // 2. Dispara a animação dos cards imediatamente

    // 3. Após um atraso, mostra o novo texto
    setTimeout(() => {
      setIsTextVisible(true);
    }, 400);

    // 4. Libera para a próxima animação após a transição completar
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1); // Deslize para a esquerda
      } else {
        updateCarousel(currentIndex - 1); // Deslize para a direita
      }
    }
  };

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + skills.length) % skills.length;
    switch (offset) {
      case 0: return 'center';
      case 1: return 'right-1';
      case 2: return 'right-2';
      case skills.length - 1: return 'left-1';
      case skills.length - 2: return 'left-2';
      default: return 'hidden';
    }
  };

  const currentSkill = skills[currentIndex];

  return (
    <div className="skill-carousel-overlay animate-fade-in" onClick={onClose}>
      <div className="skill-carousel-container" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <h1 className="carousel-about-title">Competências</h1>

        <div className="carousel-track-container">
          <div className="carousel-track">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`carousel-card ${getCardClass(i)}`}
                onClick={() => updateCarousel(i)}
              >
                <div className="card-content">
                  <i className={`${skill.icon} text-8xl`}></i>
                  <h3 className="text-2xl font-bold mt-4">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}><ArrowLeft /></button>
        <button className="carousel-nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}><ArrowRight /></button>
        <button onClick={onClose} className="carousel-close-btn">
          <X className="w-6 h-6" />
        </button>

        <div className={`skill-info ${isTextVisible ? 'visible' : ''}`}>
          <h2 className="skill-name">{currentSkill.name}</h2>
          <p className="skill-level">{currentSkill.level} - {currentSkill.proficiency}% de Proficiência</p>
          <div className="skill-details">
            <div className="detail-item">
              <h4>Como Aprendi</h4>
              <p>{currentSkill.howILearned}</p>
            </div>
            <div className="detail-item">
              <h4>Tempo de Habilidade</h4>
              <p className='!text-accent !text-2xl font-bold'>{currentSkill.time}</p>
            </div>
            <div className="detail-item full-width">
              <h4>Onde Usei</h4>
              <div className="project-tags">
                {currentSkill.whereIUsed.map((project, index) => (
                  <span key={index} className="skill-badge text-xs">{project}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          {skills.map((_, i) => (
            <div
              key={i}
              className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => updateCarousel(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;