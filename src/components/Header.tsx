import { Box, Flex, Text } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box as="header" bg="gray.800">
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Text>10-Challanges!</Text>
      </Flex>
    </Box>
  );
};
