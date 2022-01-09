import { MotionBox } from "./motion/MotionBox";

interface AnimatedProps {
  delay?: number;
}

export const Animated: React.FC<AnimatedProps> = ({
  children,
  delay = 0.4,
}) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

  return (
    <MotionBox
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
      h="full"
    >
      {children}
    </MotionBox>
  );
};
