import { Box, Stack, Text } from "@chakra-ui/react";

interface AnswerProps {
  title: string;
  exercise: string;
}

export const Answer: React.FC<AnswerProps> = ({
  children,
  title,
  exercise,
}) => {
  return (
    <Box p="4">
      <Text as="h1" fontSize="2xl" mb="4">
        {title}
      </Text>

      <Text as="p" mb="6" style={{ textIndent: 20 }}>
        {exercise}
      </Text>

      <Stack spacing="6">{children}</Stack>
    </Box>
  );
};
