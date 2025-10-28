import { useRef } from 'react';
import { useGlowEffect } from '@/hooks/useGlowEffect';

type Experience = {
    role: string;
    company: string;
    period: string;
    achievements: string[];
    description: string;
};

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    useGlowEffect(cardRef);

    return (
        <div ref={cardRef} className="glow-card h-full">
            <span className="glow"></span>
            <div className="glow-card-inner p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-primary">{experience.role}</h4>
                    <span className="text-sm text-muted-foreground font-medium">{experience.period}</span>
                </div>
                <h5 className="text-md font-semibold text-card-foreground mb-3">{experience.company}</h5>
                <div className="bg-accent/10 border-l-4 border-accent p-3 rounded mb-3">
                    {experience.achievements.map((achievement, i) => (
                        <p key={i} className="text-sm font-medium text-accent">• {achievement}</p>
                    ))}
                </div>
                <p className="text-muted-foreground text-sm">{experience.description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;