import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Article } from "../../components/Article";

const Projeto1: NextPage = () => {
  return (
    <Article>
      <Box>
        <Text as="h1">Display simple JSX</Text>
      </Box>
    </Article>
  );
};

export default Projeto1;
