import { skills } from "@/data/skills";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

interface SkillDetailModalProps {
  skillIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const SkillDetailModal = ({ skillIndex, onClose, onNext, onPrev }: SkillDetailModalProps) => {
  const skill = skills[skillIndex];

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Banner */}
        <div className="relative h-40 bg-secondary/50 flex items-center justify-center rounded-t-2xl">
          <i className={`${skill.icon} text-6xl text-primary`}></i>
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
          <h2 className="absolute bottom-4 text-3xl font-bold text-foreground">{skill.name}</h2>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="card-elevated p-4">
              <h4 className="font-semibold text-primary mb-1">Como Aprendi</h4>
              <p className="text-sm text-muted-foreground">{skill.howILearned}</p>
            </div>
            <div className="card-elevated p-4">
              <h4 className="font-semibold text-primary mb-1">Tempo de Habilidade</h4>
              <p className="text-sm text-muted-foreground">{skill.time}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2 text-center">Onde Usei</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.whereIUsed.map((project, index) => (
                <span key={index} className="skill-badge text-xs">
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-lg border border-border"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-lg border border-border"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SkillDetailModal;