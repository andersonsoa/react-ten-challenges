import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange10: NextPage = () => {
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
      </Box>
    </Animated>
  );
};

export default Challange10;
