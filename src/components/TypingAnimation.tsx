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
  const [text, setText] = useState(startDeleting ? texts[0] : '');

  // Refs para manter o estado da animação sem causar re-renderizações desnecessárias
  // e para evitar problemas com "stale closures" nos timeouts.
  const loopNum = useRef(0);
  const isDeleting = useRef(startDeleting);

  useEffect(() => {
    let ticker: number;

    const tick = () => {
      const i = loopNum.current % texts.length;
      const fullText = texts[i];
      let updatedText = '';

      if (isDeleting.current) {
        // Lógica para apagar
        updatedText = fullText.substring(0, text.length - 1);
      } else {
        // Lógica para digitar
        updatedText = fullText.substring(0, text.length + 1);
      }

      setText(updatedText);

      let delta = isDeleting.current ? deletingSpeed : typingSpeed;

      if (!isDeleting.current && updatedText === fullText) {
        // Terminou de digitar a palavra -> pausa e começa a apagar
        isDeleting.current = true;
        delta = pauseDuration;
      } else if (isDeleting.current && updatedText === '') {
        // Terminou de apagar a palavra -> passa para a próxima
        isDeleting.current = false;
        loopNum.current = loopNum.current + 1;
        delta = typingSpeed;
      }

      ticker = setTimeout(() => {
        tick();
      }, delta);
    };

    // Inicia a animação
    ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    // Função de limpeza para parar a animação quando o componente for desmontado
    return () => {
      clearTimeout(ticker);
    };
  // A dependência `text` é crucial aqui para que o useEffect possa ler o valor mais recente do texto
  // e calcular o próximo passo corretamente. As outras props garantem que a animação reinicie se elas mudarem.
  }, [text, texts, startDeleting, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {text}
    </span>
  );
};

export default TypingAnimation;