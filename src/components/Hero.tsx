import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Stack spacing={8} textAlign="center">
          <VStack spacing={6}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Hi, I'm{" "}
              <Text as="span" color="brand.500">
                Abdi Lamu
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              I am a Software Engineering graduate from Haramaya University,
              awarded for academic excellence and a top scorer in the national
              exit exam. My journey is driven by curiosity, hard work, and a
              commitment to making a difference through technology.
            </Text>
          </VStack>
          <HStack spacing={4} justify="center">
            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              colorScheme="brand"
              rounded="full"
              px={8}
            >
              View My Work
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              variant="outline"
              colorScheme="brand"
              rounded="full"
              px={8}
            >
              Get In Touch
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
