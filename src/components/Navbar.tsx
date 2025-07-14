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
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

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
      bg={
        isScrolled
          ? useColorModeValue("white", "gray.800")
          : useColorModeValue("transparent", "rgba(26, 32, 44, 0.8)")
      }
      boxShadow={isScrolled ? "sm" : "none"}
      backdropFilter={!isScrolled ? "blur(10px)" : "none"}
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
              color={useColorModeValue("brand.600", "brand.300")}
              fontWeight="bold"
              fontSize="xl"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("brand.700", "brand.200"),
              }}
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
            {/* Navigation Links */}
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              color={
                isActive("/")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              color={
                isActive("/projects")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Projects
            </Button>
            <Button
              as={RouterLink}
              to="/education"
              variant="ghost"
              color={
                isActive("/education")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Education
            </Button>
            <Button
              as={RouterLink}
              to="/skills"
              variant="ghost"
              color={
                isActive("/skills")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Skills
            </Button>
            {/* Dark mode toggle button */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Stack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            color={useColorModeValue("gray.700", "gray.200")}
            _hover={{
              bg: useColorModeValue("gray.100", "gray.700"),
              color: useColorModeValue("gray.800", "gray.100"),
            }}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
          >
            {/* Navigation Links */}
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={
                isActive("/")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={
                isActive("/projects")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Projects
            </Button>
            <Button
              as={RouterLink}
              to="/education"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={
                isActive("/education")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Education
            </Button>
            <Button
              as={RouterLink}
              to="/skills"
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
              color={
                isActive("/skills")
                  ? useColorModeValue("brand.600", "brand.300")
                  : useColorModeValue("gray.700", "gray.100")
              }
              _hover={{
                bg: useColorModeValue("brand.50", "gray.700"),
                color: useColorModeValue("brand.600", "brand.300"),
              }}
            >
              Skills
            </Button>
            {/* Dark mode toggle button for mobile */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              w="100%"
            />
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
