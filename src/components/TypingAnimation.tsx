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
  pauseDuration = 5000,
}: TypingAnimationProps) => {
  const [text, setText] = useState(startDeleting ? texts[0] : '');
  const [isDeleting, setIsDeleting] = useState(startDeleting);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(startDeleting ? deletingSpeed : typingSpeed);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(deletingSpeed);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(pauseDuration);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(typingSpeed);
      }
    };

    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => {
      clearTimeout(ticker);
    };
  }, [text, delta]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {text}
    </span>
  );
};

export default TypingAnimation;