import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/layouts/MainLayout";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
