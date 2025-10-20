import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  startDeleting?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingAnimation = ({
  texts,
  className,
  startDeleting = false,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState(startDeleting ? texts[0] : '');

  // Usamos useRef para armazenar o estado da animação.
  // Isso evita que a lógica da animação seja reiniciada a cada renderização
  // e resolve o problema de "stale state" nos timeouts.
  const animationState = useRef({
    textIndex: 0,
    charIndex: startDeleting ? texts[0].length : 0,
    isDeleting: startDeleting,
    timeoutId: null as number | null,
  });

  useEffect(() => {
    const tick = () => {
      const state = animationState.current;
      const currentFullText = texts[state.textIndex % texts.length];

      if (state.isDeleting) {
        // Lógica para apagar
        state.charIndex--;
      } else {
        // Lógica para digitar
        state.charIndex++;
      }

      const newText = currentFullText.substring(0, state.charIndex);
      setDisplayedText(newText);

      let delay = state.isDeleting ? deletingSpeed : typingSpeed;

      if (!state.isDeleting && newText === currentFullText) {
        // Terminou de digitar, pausa e começa a apagar
        state.isDeleting = true;
        delay = pauseDuration;
      } else if (state.isDeleting && newText === '') {
        // Terminou de apagar, passa para o próximo texto
        state.isDeleting = false;
        state.textIndex++;
        // charIndex já será 0 na próxima iteração de digitação
      }

      state.timeoutId = setTimeout(tick, delay);
    };

    // Inicia o loop da animação
    animationState.current.timeoutId = setTimeout(tick, typingSpeed);

    // Função de limpeza para parar a animação quando o componente for desmontado
    return () => {
      if (animationState.current.timeoutId) {
        clearTimeout(animationState.current.timeoutId);
      }
    };
    // As dependências garantem que a animação reinicie se as props mudarem.
  }, [texts, typingSpeed, deletingSpeed, pauseDuration, startDeleting]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {displayedText}
    </span>
  );
};

export default TypingAnimation;