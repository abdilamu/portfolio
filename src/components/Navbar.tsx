import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Container,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex={1000}
      transition="all 0.3s ease"
      bg={isScrolled ? "white" : "transparent"}
      boxShadow={isScrolled ? "sm" : "none"}
      top={0}
    >
      <Container maxW="container.xl">
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justify={"space-between"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              as={RouterLink}
              to="/"
              textAlign={useColorModeValue("left", "center")}
              fontFamily={"heading"}
              color={useColorModeValue("brand.600", "white")}
              fontWeight="bold"
              fontSize="xl"
              _hover={{ textDecoration: "none" }}
            >
              Abdi Lamu
            </Text>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              color={isActive("/") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              color={isActive("/projects") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Projects
            </Button>
            <Button
              as={RouterLink}
              to="/education"
              variant="ghost"
              color={isActive("/education") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Education
            </Button>
            <Button
              as={RouterLink}
              to="/dashboard"
              variant="ghost"
              color={isActive("/dashboard") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Dashboard
            </Button>
          </Stack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
          >
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={isActive("/") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={isActive("/projects") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Projects
            </Button>
            <Button
              as={RouterLink}
              to="/education"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={isActive("/education") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Education
            </Button>
            <Button
              as={RouterLink}
              to="/dashboard"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={isActive("/dashboard") ? "brand.600" : undefined}
              _hover={{ bg: "brand.50", color: "brand.600" }}
            >
              Dashboard
            </Button>
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
