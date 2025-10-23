import { skills } from "@/data/skills";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SkillDetailModalProps {
  skillIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const SkillDetailModal = ({ skillIndex, onClose, onNext, onPrev }: SkillDetailModalProps) => {
  const skill = skills[skillIndex];
  const [animationClass, setAnimationClass] = useState("");
  const prevSkillIndexRef = useRef<number | null>(null);

  useEffect(() => {
    // Don't run animation on initial mount
    if (prevSkillIndexRef.current === null) {
      prevSkillIndexRef.current = skillIndex;
      return;
    }

    if (prevSkillIndexRef.current !== skillIndex) {
      let direction = skillIndex > prevSkillIndexRef.current ? "next" : "prev";

      // Handle wrapping around
      const lastIndex = skills.length - 1;
      if (prevSkillIndexRef.current === lastIndex && skillIndex === 0) {
        direction = "next";
      } else if (prevSkillIndexRef.current === 0 && skillIndex === lastIndex) {
        direction = "prev";
      }

      setAnimationClass(
        direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
      );
    }

    prevSkillIndexRef.current = skillIndex;
  }, [skillIndex]);

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-card border border-border rounded-2xl w-full max-w-xl max-h-[90vh] animate-scale-up overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div key={skillIndex} className={animationClass}>
          {/* Header with Banner */}
          <div className="relative h-40 bg-secondary/50 flex items-center justify-center rounded-t-2xl">
            <i className={`${skill.icon} text-6xl text-primary`}></i>
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            <h2 className="absolute bottom-4 text-3xl font-bold text-foreground">{skill.name}</h2>
          </div>

          {/* Content */}
          <div className="p-12 space-y-6">
            <div className="">
              <h4 className="font-semibold text-primary mb-1">Como Aprendi</h4>
              <p className="text-sm text-muted-foreground">{skill.howILearned}</p>
              <h4 className="font-semibold text-primary mb-1 mt-6 text-center">Tempo de Habilidade</h4>
              <p className="font-bold text-md text-accent text-center">{skill.time}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 text-center">Onde Usei</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.whereIUsed.map((project, index) => (
                  <span key={index} className="skill-badge text-xs">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 -left-6 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-lg border border-border"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 -right-6 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-lg border border-border"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SkillDetailModal;