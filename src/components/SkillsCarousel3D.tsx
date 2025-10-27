import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsCarousel3DProps {
  skills: Skill[];
}

const SkillsCarousel3D: React.FC<SkillsCarousel3DProps> = ({ skills }) => {
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const odrag = dragContainerRef.current;
    const ospin = spinContainerRef.current;
    const ground = groundRef.current;

    if (!odrag || !ospin || !ground) return;

    const aEle = Array.from(ospin.children) as HTMLElement[];

    // Configuration
    let radius = 240;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;

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
      clearInterval(timer);
      sX = e.clientX;
      sY = e.clientY;

      const handlePointerMove = (e: PointerEvent) => {
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
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      return false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const d = e.deltaY / 20 || -e.detail;
      radius += d;
      if (radius < 120) radius = 120;
      if (radius > 480) radius = 480;
      init(0);
    };

    odrag.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      odrag.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('wheel', handleWheel);
      clearInterval(timer);
    };
  }, [skills]);

  return (
    <div className="carousel-3d-body">
      <div id="drag-container" ref={dragContainerRef}>
        <div id="spin-container" ref={spinContainerRef}>
          {skills.map((skill) => (
            <div key={skill.name} className="carousel-3d-item">
              <i className={`${skill.icon} text-6xl`}></i>
              <p className="mt-2 font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
        <div id="ground-3d" ref={groundRef}></div>
      </div>
    </div>
  );
};

export default SkillsCarousel3D;