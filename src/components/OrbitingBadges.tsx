import React, { useRef, useEffect } from 'react';

const badges = [
  { text: 'React', color: 'bg-blue-500' },
  { text: 'Py', color: 'bg-purple-500' },
  { text: 'PHP', color: 'bg-indigo-900' },
  { text: 'AI', color: 'bg-green-500' },
  { text: 'Next', color: 'bg-yellow-500' },
  { text: 'JS', color: 'bg-orange-500' },
  { text: 'TS', color: 'bg-cyan-500' },
  { text: 'Node', color: 'bg-green-700' },
  { text: 'SQL', color: 'bg-indigo-700' },
  { text: 'Java', color: 'bg-orange-700' },
  // { text: 'Docker', color: 'bg-blue-700' },
  // { text: 'Cloud', color: 'bg-gray-500' },
  // { text: 'UX', color: 'bg-pink-500' },
];

const OrbitingBadges = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -9999, y: -9999 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const center = { x: container.offsetWidth / 2, y: container.offsetHeight / 2 };
    const orbitRadius = 200;
    const maxDistanceFromCenter = 270;
    const repulsionRadius = 1000;
    const repulsionStrength = 1;
    const gravityStrength = 0.005;

    const badgeData = badgesRef.current.map((_, i) => ({
      angle: (i / badges.length) * 2 * Math.PI,
      speed: 0.002,
      x: center.x + orbitRadius * Math.cos((i / badges.length) * 2 * Math.PI),
      y: center.y + orbitRadius * Math.sin((i / badges.length) * 2 * Math.PI),
      vx: 0,
      vy: 0,
    }));

    let animationFrameId: number;

    const animate = () => {
      badgeData.forEach((badge, i) => {
        const el = badgesRef.current[i];
        if (!el) return;

        // Orbiting motion
        badge.angle += badge.speed;
        const targetX = center.x + orbitRadius * Math.cos(badge.angle);
        const targetY = center.y + orbitRadius * Math.sin(badge.angle);

        // Mouse repulsion
        const dxMouse = badge.x - mousePos.current.x;
        const dyMouse = badge.y - mousePos.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < repulsionRadius) {
          const force = (1 - distMouse / repulsionRadius) * repulsionStrength;
          badge.vx += (dxMouse / distMouse) * force;
          badge.vy += (dyMouse / distMouse) * force;
        }

        // Gravity towards orbit path
        badge.vx += (targetX - badge.x) * gravityStrength;
        badge.vy += (targetY - badge.y) * gravityStrength;

        // Gravity towards center if too far
        const dxCenter = badge.x - center.x;
        const dyCenter = badge.y - center.y;
        const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);

        if (distCenter > maxDistanceFromCenter) {
          const pullForce = (distCenter - maxDistanceFromCenter) * gravityStrength * 2;
          badge.vx -= (dxCenter / distCenter) * pullForce;
          badge.vy -= (dyCenter / dyCenter) * pullForce;
        }

        // Apply friction/damping
        badge.vx *= 0.9;
        badge.vy *= 0.9;

        // Update position
        badge.x += badge.vx;
        badge.y += badge.vy;

        el.style.transform = `translate(${badge.x - el.offsetWidth / 2}px, ${badge.y - el.offsetHeight / 2}px)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {badges.map((badge, i) => (
        <div
          key={badge.text}
          ref={(el) => (badgesRef.current[i] = el)}
          className={'absolute'}
          style={{ willChange: 'transform' }}
        >
          <div className={`${badge.color} bounce text-white px-4 py-2 rounded-lg shadow-lg font-bold select-none cursor-pointer`}
            style={{ animationDelay: `${i * 0.1}s` }}>
            {badge.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrbitingBadges;