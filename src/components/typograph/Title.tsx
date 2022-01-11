import { Text, TextProps } from "@chakra-ui/react";
import { titleVariants } from "../../config/constants";
import { MotionBox } from "../motion/MotionBox";

interface TitleProps extends TextProps {
  delay?: number;
}

export const Title: React.FC<TitleProps> = ({
  children,
  delay = 0.2,
  ...props
}) => {
  return (
    <MotionBox
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, type: "easeInOut", delay }}
    >
      <Text as="h1" fontSize="3xl" fontWeight="bold" mb="8" {...props}>
        {children}
      </Text>
    </MotionBox>
  );
};
