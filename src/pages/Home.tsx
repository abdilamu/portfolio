import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFlutter,
  SiFirebase,
  SiLaravel,
  SiDjango,
} from "react-icons/si";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

interface Skill {
  name: string;
  icon: any;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Flutter",
    icon: SiFlutter,
    description:
      "Building cross-platform mobile applications with Flutter and Dart",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    description: "Backend services, authentication, and real-time database",
  },
  {
    name: "API Integration",
    icon: FaCode,
    description: "Integrating third-party APIs and building RESTful services",
  },
  {
    name: "Payment Gateway",
    icon: FaCode,
    description: "Integrating payment systems and secure transactions",
  },
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
  {
    name: "MERN Stack",
    icon: FaCode,
    description: "Full-stack development with MongoDB, Express, React, Node.js",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    description: "PHP web application framework with elegant syntax",
  },
  {
    name: "Django",
    icon: SiDjango,
    description: "Python web framework for rapid development",
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
  <Box id="about" py={16} bg={useColorModeValue("white", "gray.800")}>
    <Container maxW="container.xl">
      <VStack spacing={8} align="start">
        <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
          About Me
        </Heading>
        <Text
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          lineHeight="tall"
        >
          I am a Software Engineering graduate from Haramaya University with a
          passion for creating innovative solutions that make a difference. My
          journey in technology is driven by curiosity, continuous learning, and
          a commitment to excellence.
        </Text>
        <Text
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          lineHeight="tall"
        >
          I specialize in full-stack development, with expertise in React,
          Node.js, and mobile development. My experience includes building
          scalable applications, integrating complex systems, and delivering
          projects that exceed expectations. I'm always exploring new
          technologies and methodologies to stay at the forefront of software
          development.
        </Text>
        <Text
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          lineHeight="tall"
        >
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community. I believe in the power of technology to solve
          real-world problems and create positive impact.
        </Text>
      </VStack>
    </Container>
  </Box>
);

const Home = () => {
  return (
    <Box>
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
