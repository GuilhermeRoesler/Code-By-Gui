import { useEffect, useReducer } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  startDeleting?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

interface AnimationState {
  displayedText: string;
  isDeleting: boolean;
  loopNum: number;
}

type AnimationAction = { type: 'TICK' } | { type: 'RESET'; payload: AnimationState };

const TypingAnimation = ({
  texts,
  className,
  startDeleting = false,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) => {
  const reducer = (state: AnimationState, action: AnimationAction): AnimationState => {
    switch (action.type) {
      case 'TICK': {
        const { isDeleting, loopNum, displayedText } = state;
        const i = loopNum % texts.length;
        const fullText = texts[i];

        let newText;
        if (isDeleting) {
          newText = fullText.substring(0, displayedText.length - 1);
        } else {
          newText = fullText.substring(0, displayedText.length + 1);
        }

        let newIsDeleting = isDeleting;
        let newLoopNum = loopNum;

        if (!isDeleting && newText === fullText) {
          newIsDeleting = true; // Terminou de digitar, começa a apagar após a pausa.
        } else if (isDeleting && newText === '') {
          newIsDeleting = false; // Terminou de apagar, passa para a próxima palavra.
          newLoopNum = loopNum + 1;
        }

        return { ...state, displayedText: newText, isDeleting: newIsDeleting, loopNum: newLoopNum };
      }
      case 'RESET': {
        return action.payload;
      }
      default:
        return state;
    }
  };

  const getInitialState = (): AnimationState => ({
    displayedText: startDeleting ? texts[0] : '',
    isDeleting: startDeleting,
    loopNum: 0,
  });

  const [state, dispatch] = useReducer(reducer, getInitialState());

  // Efeito para reiniciar a animação se as props mudarem.
  useEffect(() => {
    dispatch({ type: 'RESET', payload: getInitialState() });
  }, [texts, startDeleting]);

  // Efeito principal que "dirige" a animação.
  useEffect(() => {
    const { isDeleting, displayedText, loopNum } = state;
    const fullText = texts[loopNum % texts.length];

    let delay;
    if (!isDeleting && displayedText === fullText) {
      // Acabou de digitar a palavra completa, então pausa.
      delay = pauseDuration;
    } else if (isDeleting) {
      delay = deletingSpeed;
    } else {
      delay = typingSpeed;
    }

    const timeoutId = setTimeout(() => {
      dispatch({ type: 'TICK' });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [state, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`${className || ''} typing-cursor-host`}>
      {state.displayedText}
    </span>
  );
};

export default TypingAnimation;