import { Box, Text } from "@chakra-ui/react";
import Higlight from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { MotionBox } from "./motion/MotionBox";

interface CodeProps {
  children: React.ReactNode;
  language: string;
  delay?: number;
}

export default function Code({ children, language, delay = 0.2 }: CodeProps) {
  const variants = {
    hidden: { opacity: 0, y: 0, x: -20 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      border="1px"
      borderColor="gray.800"
      p="4"
      rounded="lg"
    >
      <Text mb="2">{language}</Text>

      <Box rounded="lg" overflow="hidden">
        <Higlight language={language.toLowerCase()} style={atomOneDark}>
          {children}
        </Higlight>
      </Box>
    </MotionBox>
  );
}
