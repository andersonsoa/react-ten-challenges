import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";

function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}

const Challange7: NextPage = () => {
  return (
    <Animated>
      <Box>
        <Text as="h1">Dynamically add child components (React Children)</Text>
        <Text as="p">
          Challenge: Show entire Child component content inside Parent
          component. Only add code on Parent Component below
        </Text>
      </Box>
    </Animated>
  );
};

export default Challange7;
