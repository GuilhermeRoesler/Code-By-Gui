import { useState, useEffect, useCallback } from "react";
import { skills } from "@/data/skills";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

interface SkillDetailModalProps {
  skillIndex: number;
  onClose: () => void;
}

const SkillDetailModal = ({ skillIndex, onClose }: SkillDetailModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(skillIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((newIndex + skills.length) % skills.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Duração da transição
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    updateCarousel(currentIndex - 1);
  }, [currentIndex, updateCarousel]);

  const handleNext = useCallback(() => {
    updateCarousel(currentIndex + 1);
  }, [currentIndex, updateCarousel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext, onClose]);

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + skills.length) % skills.length;
    const baseClass = "skill-carousel-card";

    switch (offset) {
      case 0:
        return `${baseClass} center`;
      case 1:
        return `${baseClass} right-1`;
      case 2:
        return `${baseClass} right-2`;
      case skills.length - 1:
        return `${baseClass} left-1`;
      case skills.length - 2:
        return `${baseClass} left-2`;
      default:
        return `${baseClass} hidden`;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="skill-carousel-container w-full h-[600px]" onClick={(e) => e.stopPropagation()}>
        <div className="skill-carousel-track">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={getCardClass(index)}
              onClick={() => updateCarousel(index)}
            >
              <div className="w-full h-full bg-card rounded-2xl overflow-y-auto p-6 flex flex-col">
                <div className="text-center border-b border-border pb-4 mb-4">
                  <i className={`${skill.icon} text-6xl text-primary`}></i>
                  <h2 className="mt-2 text-3xl font-bold text-foreground">{skill.name}</h2>
                </div>
                <div className="space-y-4 text-center">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Como Aprendi</h4>
                    <p className="text-sm text-muted-foreground">{skill.howILearned}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Tempo de Habilidade</h4>
                    <p className="text-sm font-bold text-accent">{skill.time}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Onde Usei</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.whereIUsed.map((project, i) => (
                        <span key={i} className="skill-badge text-xs">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={handlePrev} className="nav-arrow left">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button onClick={handleNext} className="nav-arrow right">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-50"
      >
        <X className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SkillDetailModal;