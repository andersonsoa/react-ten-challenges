import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/layouts/MainLayout";
import { StoreProvider } from "../contexts/store";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider>
        <MainLayout>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
