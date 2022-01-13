import { screenTransitionVariants } from "../config/constants";
import { MotionBox } from "./motion/MotionBox";

interface AnimatedProps {
  delay?: number;
}

export const Animated: React.FC<AnimatedProps> = ({ children }) => {
  return (
    <MotionBox
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={screenTransitionVariants}
      transition={{ duration: 0.3, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </MotionBox>
  );
};
