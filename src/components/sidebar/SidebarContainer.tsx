import { Box, Stack, Text } from "@chakra-ui/react";

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
