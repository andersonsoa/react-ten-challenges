import { Box, Grid, Flex, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiHome7Fill } from "react-icons/ri";
import { Header } from "../Header";
import { SidebarContainer } from "../sidebar/SidebarContainer";
import { SidebarItem } from "../sidebar/SidebarItem";

export const MainLayout: React.FC = ({ children }) => {
  const { asPath } = useRouter();

  const routes = [
    { id: 1, text: "Render simple JSX", path: "/challenges/1" },
    { id: 2, text: "Render an Array", path: "/challenges/2" },
    { id: 3, text: "Show/Hide Elements", path: "/challenges/3" },
    { id: 4, text: "2 way data binding", path: "/challenges/4" },
    { id: 5, text: "Disable a button", path: "/challenges/5" },
    { id: 6, text: "Update the parent state", path: "/challenges/6" },
    { id: 7, text: "Dynamically add child", path: "/challenges/7" },
    { id: 8, text: "Sum of Two Numbers", path: "/challenges/8" },
    { id: 9, text: "Create Counter App", path: "/challenges/9" },
    { id: 10, text: "Fetch data from an API", path: "/challenges/10" },
  ];

  const scrollBarCss = {
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#0000",
      borderRadius: "24px",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      background: "#111a",
    },
  };

  return (
    <Flex h="100vh" direction="column">
      <Header />

      <Flex
        flex="1"
        w="100%"
        maxW={1480}
        mx="auto"
        px="6"
        py="4"
        gap="8"
        h="100%"
        overflow="hidden"
      >
        <Box minW={300}>
          <SidebarContainer title="Sobre o Desafio">
            <SidebarItem
              id={1}
              href="/"
              text="Inicio"
              icon={RiHome7Fill}
              active={asPath === "/"}
            />
          </SidebarContainer>

          <SidebarContainer title="Desafios">
            {routes.map((route, i) => (
              <SidebarItem
                key={route.path}
                href={route.path}
                text={route.text}
                id={route.id}
                enterDelay={i * 0.1}
                active={asPath === route.path}
              />
            ))}
          </SidebarContainer>
        </Box>

        <Box flex="1" overflowY="scroll" css={scrollBarCss}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
