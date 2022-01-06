import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { ChallengeLayout } from "../../components/layouts/ChallengeLayout";

const Challenges: NextPage = () => {
  return (
    <ChallengeLayout>
      <Flex justifyContent="center" align="center" mt="20">
        <Text fontSize="3xl">Selecione um Desafio</Text>
      </Flex>
    </ChallengeLayout>
  );
};

export default Challenges;
