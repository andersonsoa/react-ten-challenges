import { Box, Flex } from "@chakra-ui/react";

import { RiNumber1, RiNumber2 } from "react-icons/ri";
import { useRouter } from "next/router";
import { SidebarContainer, SidebarItem } from "../Menu";
import { Article } from "../Article";

export const ChallengeLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  const routes = [
    { text: "Render simple JSX", path: "/challenges/1", icon: RiNumber1 },
    { text: "Render an Array", path: "/challenges/2", icon: RiNumber2 },
  ];

  return (
    <Flex gap="8" h="100%">
      <Box w={200}>
        <SidebarContainer title="Projetos">
          {routes.map((route) => (
            <SidebarItem
              key={route.path}
              href={route.path}
              text={route.text}
              icon={route.icon}
              active={asPath === route.path}
            />
          ))}
        </SidebarContainer>
      </Box>
      <Box flex="1" overflow="hidden">
        <Article>{children}</Article>
      </Box>
    </Flex>
  );
};
