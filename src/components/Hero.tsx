import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          gap={8}
          minH="80vh"
        >
          {/* Profile Image Section */}
          <VStack spacing={6} flex="1" order={{ base: 1, lg: 2 }}>
            <Box
              position="relative"
              borderRadius="full"
              overflow="hidden"
              boxShadow="2xl"
              border="4px solid"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Image
                src="/profile-image.jpg"
                alt="Abdi Lamu Akuma"
                width={{ base: "200px", md: "250px", lg: "300px" }}
                height={{ base: "200px", md: "250px", lg: "300px" }}
                objectFit="cover"
                borderRadius="full"
                fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233182CE;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232B6CB0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' rx='20' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='80' font-weight='bold' fill='white'%3EAL%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='white'%3ESoftware Engineer%3C/text%3E%3C/svg%3E"
              />
            </Box>
          </VStack>

          {/* Text Content Section */}
          <VStack
            spacing={8}
            flex="1"
            order={{ base: 2, lg: 1 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <VStack spacing={6} align={{ base: "center", lg: "start" }}>
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
                exit exam. I am a Gold medalist. My journey is driven by
                curiosity, hard work, and a commitment to making a difference
                through technology.
              </Text>
            </VStack>
            <HStack spacing={4} justify={{ base: "center", lg: "start" }}>
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
                as="a"
                href="#contact"
                size="lg"
                variant="outline"
                colorScheme="brand"
                rounded="full"
                px={8}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                download
                size="lg"
                variant="ghost"
                colorScheme="brand"
                rounded="full"
                px={8}
                leftIcon={<FaDownload />}
              >
                Download Resume
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
