import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Box w="100%" my="6" maxW={1480} mx="auto" px="6" h="100%">
        {children}
      </Box>
    </Flex>
  );
};
