import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange4: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">2 way data binding in ReactJS</Text>
        <Text as="p">
          Challenge: User should be able to type in any characters on input and
          those character should show in the browser.
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange4;
