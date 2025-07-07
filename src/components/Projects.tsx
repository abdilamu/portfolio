import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Badge,
  Icon,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaMobile } from "react-icons/fa";
import { SiTypescript, SiChakraui } from "react-icons/si";

const MotionBox = motion(Box);

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: Project) => {
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return FaReact;
      case "typescript":
        return SiTypescript;
      case "node.js":
        return FaNodeJs;
      case "mongodb":
        return FaDatabase;
      case "chakra ui":
        return SiChakraui;
      case "react native":
        return FaMobile;
      default:
        return FaReact;
    }
  };

  return (
    <Box
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
      </Box>
      <Stack>
        <Text
          color={useColorModeValue("brand.600", "brand.400")}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          Project
        </Text>
        <Text
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        {technologies.map((tech) => (
          <Badge
            key={tech}
            px={2}
            py={1}
            bg={useColorModeValue("brand.50", "brand.900")}
            color={useColorModeValue("brand.600", "brand.400")}
            fontWeight={"400"}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Icon as={getTechIcon(tech)} />
            {tech}
          </Badge>
        ))}
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4}>
        {liveUrl && (
          <Button
            as="a"
            href={liveUrl}
            target="_blank"
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"brand.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "brand.500",
            }}
            _focus={{
              bg: "brand.500",
            }}
          >
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button
            as="a"
            href={githubUrl}
            target="_blank"
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"gray.200"}
            color={"gray.800"}
            _hover={{
              bg: "gray.300",
            }}
            _focus={{
              bg: "gray.300",
            }}
          >
            GitHub
          </Button>
        )}
      </Stack>
    </Box>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Ethiopia Travel Guide App",
      description:
        "A mobile application that helps tourists explore Ethiopia, featuring local attractions, cultural information, and travel tips.",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80",
      technologies: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "https://ethiopia-travel-app.com",
      githubUrl: "https://github.com/yourusername/ethiopia-travel-app",
    },
    {
      title: "Payroll Management System",
      description:
        "A comprehensive payroll management system for businesses to handle employee salaries, benefits, and tax calculations.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://payroll-system.com",
      githubUrl: "https://github.com/yourusername/payroll-system",
    },
  ];

  return (
    <Box id="projects" py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Stack spacing={4} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading>Featured Projects</Heading>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                Here are some of the projects I've worked on
              </Text>
            </MotionBox>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
