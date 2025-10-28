import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: string;
  proficiency: number;
  icon: string;
  time: string;
  tags: string[];
  about: string;
  projects: { alias: string; link: string; }[];
  achievements: { titulo: string; descricao: string; };
  // roadmap: string[];
}

interface SkillsCarousel3DProps {
  skills: Skill[];
}

const getSkillColor = (level: string) => {
  switch (level) {
    case "Avançado": return "from-green-500 to-emerald-600";
    case "Intermediário": return "from-blue-500 to-indigo-600";
    case "Básico": return "from-orange-500 to-amber-600";
    case "Básico+": return "from-orange-500 to-red-600";
    case "Intermediário+": return "from-indigo-500 to-violet-600";
    case "Avançado+": return "from-emerald-500 to-fuchsia-600";
    default: return "from-gray-500 to-gray-600";
  }
};

const SkillsCarousel3D: React.FC<SkillsCarousel3DProps> = ({ skills }) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = carouselContainerRef.current;
    const odrag = dragContainerRef.current;
    const ospin = spinContainerRef.current;
    const ground = groundRef.current;

    if (!odrag || !ospin || !ground) return;

    const aEle = Array.from(ospin.children) as HTMLElement[];

    let radius = 320;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 140;
    const imgHeight = 200;

    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;

    const init = (delayTime: number) => {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
      }
    };

    setTimeout(() => init(0), 100);

    let sX: number, sY: number, nX: number, nY: number, desX = 0, desY = 0, tX = 0, tY = 10;
    let timer: ReturnType<typeof setInterval>;
    let isDragging = false;

    const applyTransform = (obj: HTMLElement) => {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const playSpin = (yes: boolean) => {
      ospin.style.animationPlayState = yes ? 'running' : 'paused';
    };

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = false;
      clearInterval(timer);
      sX = e.clientX;
      sY = e.clientY;

      const handlePointerMove = (e: PointerEvent) => {
        isDragging = true;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      const handlePointerUp = () => {
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
        if (!isDragging) {
          // This was a click, not a drag
          const target = e.target as HTMLElement;
          const item = target.closest('.carousel-3d-item');
          if (item) {
            const index = parseInt(item.getAttribute('data-index') || '-1', 10);
            if (index >= 0) {
              setSelectedSkillIndex(prevIndex => prevIndex === index ? null : index);
            }
          }
        } else {
          // This was a drag
          timer = setInterval(() => {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
              clearInterval(timer);
              playSpin(true);
            }
          }, 17);
        }
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const d = e.deltaY / 20 || -e.detail;
      radius += d;
      if (radius < 280) radius = 280;
      if (radius > 480) radius = 400;
      init(0);
    };

    odrag.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      odrag.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('wheel', handleWheel);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="carousel-3d-body" ref={carouselContainerRef}>
      <div id="drag-container" ref={dragContainerRef}>
        <div id="spin-container" ref={spinContainerRef}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn("carousel-3d-item", { 'is-flipped': selectedSkillIndex === index })}
              data-index={index}
            >
              <div className="card-flipper">
                {/* Front Face */}
                <div className="carousel-3d-item-face">
                  <i className={`${skill.icon} text-6xl`}></i>
                  <p className="mt-2 font-bold">{skill.name}</p>
                </div>
                {/* Back Face */}
                <div className="carousel-3d-item-face carousel-3d-item-back">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedSkillIndex(null); }}
                    className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all"
                  >
                    <X size={16} />
                  </button>
                  <div className="w-full flex flex-col items-center justify-center text-center">
                    {/* <div className="flex items-center gap-3 mb-2"> */}
                    <i className={`${skill.icon} text-3xl gradient-text`}></i>
                    <h3 className="text-xl font-bold text-card-foreground">{skill.name}</h3>
                    {/* </div> */}
                    <span className={`px-2 mt-2 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getSkillColor(skill.level)}`}>
                      {skill.level}
                    </span>
                    <div className="w-full bg-border rounded-full h-1.5 my-3">
                      <div className={`h-1.5 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`} style={{ width: `${skill.proficiency}%` }}></div>
                    </div>
                    {/* <div className="text-xs space-y-2 w-full text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-primary text-sm">Como Aprendi:</h4>
                        <p className="leading-tight">{skill.howILearned}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm">Onde Usei:</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.dd.slice(0, 2).map(proj => <span key={proj} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full">{proj}</span>)}
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="ground-3d" ref={groundRef}></div>
      </div>
    </div>
  );
};

export default SkillsCarousel3D;