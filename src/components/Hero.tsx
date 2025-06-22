import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        w="500px"
        h="500px"
        bg="brand.100"
        borderRadius="full"
        filter="blur(100px)"
        opacity="0.5"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        w="500px"
        h="500px"
        bg="accent.100"
        borderRadius="full"
        filter="blur(100px)"
        opacity="0.5"
      />

      <Container maxW="container.xl" py={20} position="relative">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Stack
            spacing={6}
            flex="1"
            textAlign={{ base: "center", lg: "left" }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                color="brand.500"
                fontWeight="semibold"
                fontSize="lg"
                mb={2}
              >
                Welcome to my portfolio
              </Text>
              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                bgGradient="linear(to-r, brand.500, accent.500)"
                bgClip="text"
              >
                Hi, I'm{" "}
                <Text as="span" color="brand.500">
                  Abdi Lamu
                </Text>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue("gray.600", "gray.400")}
                maxW="2xl"
              >
                A passionate full-stack developer crafting beautiful and
                functional web experiences. I specialize in building modern,
                responsive, and user-friendly applications.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                justify={{ base: "center", lg: "flex-start" }}
              >
                <Button
                  size="lg"
                  colorScheme="brand"
                  px={8}
                  onClick={() => (window.location.href = "#projects")}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  px={8}
                  onClick={() => (window.location.href = "#contact")}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  Contact Me
                </Button>
              </Stack>
            </MotionBox>
          </Stack>

          <MotionBox
            flex="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            display={{ base: "none", lg: "block" }}
          >
            <Box
              position="relative"
              w="full"
              h="400px"
              bg="white"
              borderRadius="2xl"
              boxShadow="2xl"
              overflow="hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt="Developer workspace"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
