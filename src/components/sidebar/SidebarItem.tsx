import NextLink, { LinkProps } from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { RiArrowRightLine } from "react-icons/ri";
import { Box, Icon, Stack, Text, Flex } from "@chakra-ui/react";

import { motion } from "framer-motion";

interface SidebarItemProps extends LinkProps {
  text: string;
  id: number;
  path?: string;
  enterDelay?: number;
  active?: boolean;
  icon?: IconType;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  text,
  active,
  id,
  enterDelay = 0.2,
  icon,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const iconVariant = {
    hidden: { opacity: 0, x: -15 },
    hover: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -15 },
  };

  return (
    <NextLink href={href}>
      <motion.div
        whileHover="hover"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delay: enterDelay }}
      >
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
          {icon ? <Icon as={icon} fontSize="sm" /> : <Box>{id}</Box>}

          <Text flex="1" fontSize="sm">
            {text}
          </Text>
          <motion.div variants={iconVariant} transition={{ duration: 0.2 }}>
            <RiArrowRightLine />
          </motion.div>
        </Flex>
      </motion.div>
    </NextLink>
  );
};
