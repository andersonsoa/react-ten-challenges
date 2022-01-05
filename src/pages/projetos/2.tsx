import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Article } from "../../components/Article";

const Projeto2: NextPage = () => {
  return (
    <Article>
      <Box>
        <Text as="h1">Display array of users to browser</Text>
      </Box>
    </Article>
  );
};

export default Projeto2;
