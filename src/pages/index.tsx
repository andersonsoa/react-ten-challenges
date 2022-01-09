import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Animated } from "../components/Animated";

const Home: NextPage = () => {
  return (
    <Animated>
      <Box pt="10">
        <Text as="h1" fontSize="3xl" align="center">
          10 ReactJS Coding Challenge (💥Coding Interview Prep💥)
        </Text>
      </Box>
    </Animated>
  );
};

export default Home;
