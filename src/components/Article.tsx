import { HTMLMotionProps, motion } from "framer-motion";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export const Article: React.FC = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
      h="full"
    >
      {children}
    </MotionBox>
  );
};
