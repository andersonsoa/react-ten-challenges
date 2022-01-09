import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

interface RowProps {
  preco: number;
  quantidade: number;
  total: number;
  porcentagem: string;
}

const Row: React.FC<RowProps> = ({ preco, quantidade, total, porcentagem }) => {
  return (
    <Box position="relative" px="4">
      <Flex fontSize="sm" justify="space-between">
        <Box color="red.500">{preco}</Box>
        <Box>{quantidade}</Box>
        <Box>{total}</Box>
      </Flex>
      <Box
        position="absolute"
        style={{ backgroundColor: "#ff000012  " }}
        top="0"
        right="0"
        w={porcentagem}
        h="full"
        zIndex="-1"
      />
    </Box>
  );
};

const Challange11: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1" fontSize="3xl">
          Display array of users to browser
        </Text>

        <Text as="p" style={{ textIndent: 20 }}>
          Challenge: Display all users to the browser Small Hint: Use array map
          with react key
        </Text>

        <Box maxW={360} mt="20">
          <Row preco={20203} quantidade={203} total={2033} porcentagem="30%" />
          <Row preco={20203} quantidade={203} total={2033} porcentagem="23%" />
          <Row preco={20203} quantidade={203} total={2033} porcentagem="57%" />
          <Row preco={20203} quantidade={203} total={2033} porcentagem="0%" />
          <Row preco={20203} quantidade={203} total={2033} porcentagem="90%" />
          <Row preco={20203} quantidade={203} total={2033} porcentagem="100%" />
        </Box>
      </Box>
    </Animated>
  );
};

export default Challange11;
