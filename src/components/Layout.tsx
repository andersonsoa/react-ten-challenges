import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { SidebarContainer, SidebarItem } from "./Menu";

import { RiHome3Fill, RiNumber1, RiNumber2 } from "react-icons/ri";
import { useRouter } from "next/router";

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  const routes = [
    { text: "Render simple JSX", path: "/projetos/1", icon: RiNumber1 },
    { text: "Render an Array", path: "/projetos/2", icon: RiNumber2 },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" gap="8" h="100%">
        <Box w={200}>
          <SidebarContainer title="Navegação">
            <SidebarItem
              href="/"
              text="Home"
              icon={RiHome3Fill}
              active={asPath === "/"}
            />
          </SidebarContainer>

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
        <Box flex="1" p="4" overflow="hidden">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
