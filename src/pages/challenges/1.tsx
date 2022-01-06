import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { ChallengeLayout } from "../../components/layouts/ChallengeLayout";

const Projeto1: NextPage = () => {
  return (
    <ChallengeLayout>
      <Box>
        <Text as="h1">Display simple JSX</Text>
      </Box>
    </ChallengeLayout>
  );
};

export default Projeto1;
