import { HTMLMotionProps, motion } from "framer-motion";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
