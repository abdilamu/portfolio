import { Box, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
      <Navbar />
      <Box as="main" flex="1" pt="60px">
        <Container maxW="container.xl" py={8} px={{ base: 4, md: 8 }}>
          {children}
        </Container>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
