import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <VStack spacing={2} align={{ base: "center", md: "start" }}>
          <Text fontWeight="bold" fontSize="lg">
            Abdi Lamu Akuma
          </Text>
          <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
            Software Engineer & Full-Stack Developer
          </Text>
          <Text fontSize="xs" color={useColorModeValue("gray.400", "gray.500")}>
            © 2024 Abdi Lamu. All rights reserved
          </Text>
        </VStack>
        <Stack direction={"row"} spacing={6}>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            size="sm"
            as="a"
            href="https://github.com/abdilamu"
            target="_blank"
            _hover={{ bg: "brand.50", color: "brand.600" }}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            size="sm"
            as="a"
            href="https://www.linkedin.com/in/abdi-lamu-8b7a25259/"
            target="_blank"
            _hover={{ bg: "brand.50", color: "brand.600" }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
