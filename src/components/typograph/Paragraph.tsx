import { Text, TextProps } from "@chakra-ui/react";

export const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text
      as="p"
      lineHeight="1.5"
      fontSize="lg"
      fontWeight="normal"
      color="gray.600"
      style={{ textIndent: 20 }}
      {...props}
    >
      {children}
    </Text>
  );
};
