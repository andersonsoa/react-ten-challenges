import { Variants } from "framer-motion";

export const screenTransitionVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 10 },
};

export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20, x: 0 },
  visible: { opacity: 1, y: 0, x: 0 },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 0, x: -20 },
  visible: { opacity: 1, y: 0, x: 0 },
};

export const codeVariants: Variants = {
  hidden: { opacity: 0, y: 20, x: 0 },
  visible: { opacity: 1, y: 0, x: 0 },
};
