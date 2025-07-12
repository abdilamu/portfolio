import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Progress,
  Badge,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaCode,
  FaTools,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiFlutter,
  SiFirebase,
  SiDart,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaReact,
      skills: [
        { name: "React", level: 90, icon: FaReact },
        { name: "TypeScript", level: 85, icon: SiTypescript },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "Chakra UI", level: 80, icon: SiChakraui },
        { name: "HTML/CSS", level: 95, icon: FaCode },
      ],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Node.js", level: 85, icon: FaNodeJs },
        { name: "Express.js", level: 80, icon: SiExpress },
        { name: "REST APIs", level: 85, icon: FaCode },
        { name: "GraphQL", level: 70, icon: FaCode },
      ],
    },
    {
      title: "Database & Cloud",
      icon: FaDatabase,
      skills: [
        { name: "Firebase", level: 85, icon: SiFirebase },
        { name: "Cloud Firestore", level: 80, icon: SiFirebase },
        { name: "MongoDB", level: 80, icon: SiMongodb },
        { name: "PostgreSQL", level: 75, icon: FaDatabase },
        { name: "AWS/Cloud", level: 70, icon: FaCloud },
      ],
    },
    {
      title: "Mobile & Tools",
      icon: FaMobile,
      skills: [
        { name: "Flutter", level: 85, icon: SiFlutter },
        { name: "Dart", level: 80, icon: SiDart },
        { name: "React Native", level: 75, icon: FaMobile },
        { name: "Git/GitHub", level: 90, icon: FaTools },
        { name: "Docker", level: 70, icon: FaTools },
        { name: "CI/CD", level: 75, icon: FaTools },
      ],
    },
  ];

  const additionalSkills = [
    "Payment Gateway Integration",
    "AI/ML Integration",
    "Multi-language Support",
    "Responsive Design",
    "Performance Optimization",
    "Security Best Practices",
    "Agile/Scrum",
    "API Design",
    "Testing (Jest, Cypress)",
    "State Management (Redux, Zustand)",
  ];

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={16} minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              color={useColorModeValue("gray.800", "white")}
            >
              Skills & Technologies
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              I specialize in full-stack development with expertise in modern
              web technologies, mobile development, and cloud solutions. Here's
              a breakdown of my technical skills.
            </Text>
          </VStack>

          {/* Skill Categories */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {skillCategories.map((category, categoryIndex) => (
              <Box
                key={categoryIndex}
                bg={useColorModeValue("white", "gray.800")}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <HStack spacing={3} mb={6}>
                  <Icon as={category.icon} boxSize={6} color="brand.500" />
                  <Heading
                    size="md"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    {category.title}
                  </Heading>
                </HStack>
                <VStack spacing={4} align="stretch">
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Flex justify="space-between" align="center" mb={2}>
                        <HStack spacing={2}>
                          <Icon
                            as={skill.icon}
                            boxSize={4}
                            color={useColorModeValue("gray.600", "gray.400")}
                          />
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color={useColorModeValue("gray.700", "gray.200")}
                          >
                            {skill.name}
                          </Text>
                        </HStack>
                        <Text
                          fontSize="sm"
                          color={useColorModeValue("gray.500", "gray.400")}
                          fontWeight="medium"
                        >
                          {skill.level}%
                        </Text>
                      </Flex>
                      <Progress
                        value={skill.level}
                        colorScheme="brand"
                        size="sm"
                        borderRadius="full"
                        bg={useColorModeValue("gray.200", "gray.700")}
                      />
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Additional Skills */}
          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={8}
            borderRadius="lg"
            boxShadow="lg"
            w="full"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <VStack spacing={6} align="stretch">
              <Heading
                size="lg"
                color={useColorModeValue("gray.800", "white")}
                textAlign="center"
              >
                Additional Skills & Expertise
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                {additionalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    colorScheme="brand"
                    variant="subtle"
                    p={3}
                    borderRadius="md"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Experience Summary */}
          <Box
            bg={useColorModeValue("brand.50", "brand.900")}
            p={8}
            borderRadius="lg"
            textAlign="center"
            w="full"
          >
            <VStack spacing={4}>
              <Heading
                size="md"
                color={useColorModeValue("brand.800", "brand.200")}
              >
                Why Choose Me?
              </Heading>
              <Text
                color={useColorModeValue("brand.700", "brand.300")}
                fontSize="lg"
                maxW="3xl"
              >
                I combine strong technical skills with a passion for creating
                impactful solutions. My experience includes building scalable
                applications, integrating complex systems, and delivering
                projects that exceed expectations. I'm always learning and
                adapting to new technologies to provide the best solutions for
                your needs.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
