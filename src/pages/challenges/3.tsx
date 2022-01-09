import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange3: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">Show/Hide Element on Screen</Text>
        <Text as="p">
          Challenge: Make the button functional A click on button should toggle
          (show/hide) the string `Toggle Challenge` each time it is pressed
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange3;
