import { useState, useEffect } from 'react';

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
  pauseDuration = 2000, // Reduzido para uma melhor experiência
}: TypingAnimationProps) => {
  const [text, setText] = useState(startDeleting ? texts[0] : '');
  const [isDeleting, setIsDeleting] = useState(startDeleting);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
    };

    let timeoutId: number;

    if (!isDeleting && text === texts[loopNum % texts.length]) {
      // Finished typing, pause then start deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text === '') {
      // Finished deleting, start typing next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      // Continue typing/deleting
      timeoutId = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {text}
    </span>
  );
};

export default TypingAnimation;