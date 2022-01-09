import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange6: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">Display array of users to browser</Text>
        <Text as="p">
          Challenge: Display all users to the browser Small Hint: Use array map
          with react key
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange6;
