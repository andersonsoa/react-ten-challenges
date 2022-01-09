import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

const Challange5: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">Disable a button</Text>
        <Text as="p">
          Challenge: Make button disabled when there is no character on the
          input field. Enable the `Submit` button (remove button from being
          disabled) when there is at least one character.
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange5;
