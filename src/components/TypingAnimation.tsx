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

  // useRef armazena o estado da animação. Este objeto persiste durante toda a vida do componente.
  const state = useRef({
    textIndex: 0,
    charIndex: startDeleting ? texts[0].length : 0,
    isDeleting: startDeleting,
    timeoutId: null as NodeJS.Timeout | null,
  });

  useEffect(() => {
    // Reinicia o estado da animação se as props mudarem.
    state.current.textIndex = 0;
    state.current.charIndex = startDeleting ? texts[0].length : 0;
    state.current.isDeleting = startDeleting;
    setDisplayedText(startDeleting ? texts[0] : '');

    const tick = () => {
      const { textIndex, isDeleting } = state.current;
      const currentFullText = texts[textIndex % texts.length];

      // Atualiza o índice de caracteres
      if (isDeleting) {
        state.current.charIndex -= 1;
      } else {
        state.current.charIndex += 1;
      }
      
      // Atualiza o texto exibido, o que causa uma re-renderização
      setDisplayedText(currentFullText.substring(0, state.current.charIndex));

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      // Lógica de transição de estado da animação
      if (!isDeleting && state.current.charIndex === currentFullText.length) {
        // Terminou de digitar, pausa e começa a apagar
        state.current.isDeleting = true;
        delay = pauseDuration;
      } else if (isDeleting && state.current.charIndex === 0) {
        // Terminou de apagar, passa para o próximo texto
        state.current.isDeleting = false;
        state.current.textIndex += 1;
      }

      // Agenda o próximo "tick" da animação
      state.current.timeoutId = setTimeout(tick, delay);
    };

    // Inicia a animação
    state.current.timeoutId = setTimeout(tick, typingSpeed);

    // Função de limpeza para parar a animação quando o componente for desmontado
    return () => {
      if (state.current.timeoutId) {
        clearTimeout(state.current.timeoutId);
      }
    };
    // A dependência do useEffect está correta agora: ele só será executado novamente
    // se as props que controlam a animação mudarem, e não a cada letra.
  }, [texts, typingSpeed, deletingSpeed, pauseDuration, startDeleting]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {displayedText}
    </span>
  );
};

export default TypingAnimation;