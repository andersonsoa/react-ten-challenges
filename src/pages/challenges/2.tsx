import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { ChallengeLayout } from "../../components/layouts/ChallengeLayout";

const Projeto2: NextPage = () => {
  return (
    <ChallengeLayout>
      <Box>
        <Text as="h1">Display array of users to browser</Text>
      </Box>
    </ChallengeLayout>
  );
};

export default Projeto2;
