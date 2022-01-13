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
import { RiMenuFill } from "react-icons/ri";
import { useStore } from "../contexts/store";

export const Header: React.FC = () => {
  const { onOpen } = useStore();

  return (
    <Box as="header" bg="gray.800">
      <Flex
        w="100%"
        py="6"
        maxW={1480}
        mx="auto"
        px="6"
        justifyContent="space-between"
        align="center"
      >
        <Flex align="center">
          <Button
            colorScheme="blackAlpha"
            bg="gray.900"
            display={{ md: "none", base: "block" }}
            onClick={onOpen}
          >
            <Icon as={RiMenuFill} />
          </Button>
          <Box display={{ md: "block", base: "none" }}>
            <NextLink href="/">
              <Text cursor="pointer">10-Challanges!</Text>
            </NextLink>
          </Box>
        </Flex>

        <Stack direction="row" spacing="6">
          <a
            href="https://github.com/andersonsoa/react-ten-challenges"
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
