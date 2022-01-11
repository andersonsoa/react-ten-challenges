import { Text, TextProps } from "@chakra-ui/react";
import { paragraphVariants } from "../../config/constants";
import { MotionBox } from "../motion/MotionBox";

interface ParagraphProps extends TextProps {
  delay?: number;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  delay = 0.2,
  ...props
}) => {
  return (
    <MotionBox
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, type: "easeInOut", delay }}
    >
      <Text
        as="p"
        lineHeight="1.5"
        fontSize="md"
        fontWeight="normal"
        color="gray.400"
        mb="6"
        textAlign="justify"
        style={{ textIndent: 20 }}
        {...props}
      >
        {children}
      </Text>
    </MotionBox>
  );
};
