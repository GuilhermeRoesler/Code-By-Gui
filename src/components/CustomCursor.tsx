import { useMousePosition } from '@/hooks/use-mouse-position';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="hidden lg:block fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        x: x ?? -100,
        y: y ?? -100,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;