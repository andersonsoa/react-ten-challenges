import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange8: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">Sum of Two Numbers</Text>
        <Text as="p">
          Challenge: Make this app work like a calculator that can add two
          numbers. Functionality: When user place numbers on first and second
          input and hit the button. The sum should appear on the `Total: ` as an
          output.
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange8;
