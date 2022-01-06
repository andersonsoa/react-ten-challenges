import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <Box as="header" bg="gray.800">
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
        justifyContent="space-between"
        align="center"
      >
        <NextLink href="/">
          <Text cursor="pointer">10-Challanges!</Text>
        </NextLink>

        <Stack direction="row" spacing="6">
          <NextLink href="/challenges">
            <Button size="sm" colorScheme="blackAlpha">
              Desafios
            </Button>
          </NextLink>
          <a
            href="https://github.com/andersonsoa"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              aria-label="GitHub"
              size="sm"
              colorScheme="blackAlpha"
              icon={<Icon as={FaGithub} />}
            />
          </a>
        </Stack>
      </Flex>
    </Box>
  );
};
