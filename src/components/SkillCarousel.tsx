import { useState, useEffect, useCallback } from 'react';
import { skills } from '@/data/skills';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SkillCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [infoVisible, setInfoVisible] = useState(true);

  const updateCarousel = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setInfoVisible(false);

    const newCurrentIndex = (newIndex + skills.length) % skills.length;
    setCurrentIndex(newCurrentIndex);

    setTimeout(() => {
      setInfoVisible(true);
    }, 300); // Fade in new info

    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Corresponds to the CSS transition duration
  }, [isAnimating]);

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + skills.length) % skills.length;
    switch (offset) {
      case 0:
        return 'center';
      case 1:
        return 'right-1';
      case 2:
        return 'right-2';
      case skills.length - 1:
        return 'left-1';
      case skills.length - 2:
        return 'left-2';
      default:
        return 'hidden';
    }
  };

  const currentSkill = skills[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    const carouselElement = document.querySelector('.carousel-container');
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', handleTouchStart as EventListener);
      carouselElement.addEventListener('touchend', handleTouchEnd as EventListener);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (carouselElement) {
        carouselElement.removeEventListener('touchstart', handleTouchStart as EventListener);
        carouselElement.removeEventListener('touchend', handleTouchEnd as EventListener);
      }
    };
  }, [currentIndex, updateCarousel]);

  return (
    <div className="skill-carousel-body">
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>
          <ArrowLeft size={24} />
        </button>
        <div className="carousel-track">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card ${getCardClass(index)}`}
              onClick={() => updateCarousel(index)}
            >
              <div className="card-content">
                <i className={`${skill.icon} text-8xl`}></i>
                <h3 className="text-2xl font-bold mt-4">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>
          <ArrowRight size={24} />
        </button>
      </div>

      <div className={`member-info transition-opacity duration-300 ${infoVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="member-name">{currentSkill.name}</h2>
        <p className="member-role">{currentSkill.level}</p>
      </div>
      
      <div className={`skill-details-container transition-opacity duration-300 ${infoVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="detail-item">
          <h4>Como Aprendi</h4>
          <p>{currentSkill.howILearned}</p>
        </div>
        <div className="detail-item">
          <h4>Tempo de Habilidade</h4>
          <p>{currentSkill.time}</p>
        </div>
        <div className="detail-item">
          <h4>Onde Usei</h4>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {currentSkill.whereIUsed.map((project, index) => (
              <span key={index} className="skill-badge text-xs">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="dots">
        {skills.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => updateCarousel(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;