import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Article } from "../components/Article";

const Home: NextPage = () => {
  return (
    <Article>
      <Flex direction="column" justifyContent="center" mt="12">
        <Text as="h1" fontSize="3xl" align="center">
          10 ReactJS Coding Challenge (💥Coding Interview Prep💥)
        </Text>

        <Box p="2" borderRadius="md" bg="gray.800" my="6">
          <Text as="h2" fontSize="2xl" align="center">
            Inspired on a blog post from{" "}
            <a href="https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7?signin=true">
              Dev.to
            </a>{" "}
          </Text>
        </Box>
      </Flex>
    </Article>
  );
};

export default Home;
