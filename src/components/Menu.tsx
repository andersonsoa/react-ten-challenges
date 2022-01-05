import NextLink, { LinkProps } from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { RiArrowRightLine } from "react-icons/ri";
import { Box, Icon, Stack, Text, Flex } from "@chakra-ui/react";

interface SidebarContainerProps {
  title: string;
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Box mb="6" p="2">
      <Text color="gray.500" fontSize="sm" mb="2">
        {title}
      </Text>
      <Stack>{children}</Stack>
    </Box>
  );
};

interface SidebarItemProps extends LinkProps {
  text: string;
  path?: string;
  active?: boolean;
  icon: IconType;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  text,
  active,
  icon,
}) => {
  return (
    <NextLink href={href}>
      <Flex
        alignItems="center"
        gap="2"
        py="2"
        px="4"
        borderRadius="md"
        cursor="pointer"
        color="gray.300"
        bg={active ? "gray.800" : "transparent"}
        _hover={{
          bg: "gray.800",
          color: "pink.300",
        }}
      >
        <Icon as={icon} fontSize="sm" />
        <Text flex="1" fontSize="sm">
          {text}
        </Text>
      </Flex>
    </NextLink>
  );
};
