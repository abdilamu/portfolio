import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

interface Skill {
  name: string;
  icon: any;
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Building modern, responsive user interfaces with React and its ecosystem",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Writing type-safe, maintainable code with TypeScript",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "Developing scalable backend services and APIs",
  },
  {
    name: "Databases",
    icon: FaDatabase,
    description: "Working with SQL and NoSQL databases",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description: "Version control and collaborative development",
  },
  {
    name: "Docker",
    icon: FaDocker,
    description: "Containerization and deployment",
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Box
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      rounded="lg"
      shadow="md"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="all 0.2s"
    >
      <Icon as={skill.icon} w={10} h={10} color="blue.500" mb={4} />
      <Heading size="md" mb={2}>
        {skill.name}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>
        {skill.description}
      </Text>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box id="skills" py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Stack spacing={4} textAlign="center">
            <Heading>Skills & Technologies</Heading>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              Here are some of the technologies I work with
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

const AboutSection = () => (
  <Box id="about" py={16}>
    <VStack spacing={4} align="start">
      <Heading size="lg">About Me</Heading>
      <Text>
        I am a passionate developer with experience in building modern web
        applications. I love working with React, TypeScript, and UI frameworks
        to create beautiful and functional user experiences.
      </Text>
    </VStack>
  </Box>
);

const Home = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box>
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
    </Box>
  );
};

export default Home;
