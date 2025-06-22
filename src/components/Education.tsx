import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const EducationCard = ({
  degree,
  institution,
  period,
  description,
  achievements,
}: EducationItem) => {
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
      <Stack spacing={4}>
        <Flex align="center" gap={2}>
          <Icon as={FaUniversity} w={6} h={6} color="brand.500" />
          <Text
            color={useColorModeValue("brand.600", "brand.400")}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {institution}
          </Text>
        </Flex>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {degree}
        </Heading>
        <Badge
          alignSelf="start"
          px={2}
          py={1}
          bg={useColorModeValue("brand.50", "brand.900")}
          color={useColorModeValue("brand.600", "brand.400")}
          fontWeight={"400"}
        >
          {period}
        </Badge>
        <Text color={"gray.500"}>{description}</Text>
        {achievements && achievements.length > 0 && (
          <Stack spacing={2}>
            <Text
              fontWeight="bold"
              color={useColorModeValue("gray.700", "gray.300")}
            >
              Key Achievements:
            </Text>
            {achievements.map((achievement, index) => (
              <Text key={index} color={"gray.500"} fontSize="sm">
                • {achievement}
              </Text>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Addis Ababa University",
      period: "2018 - 2022",
      description:
        "Focused on software development, algorithms, and data structures. Graduated with an outstanding CGPA of 3.97.",
      achievements: [
        "Graduated with First Class Honors (CGPA: 3.97)",
        "Led the Computer Science Student Association",
        "Won 2nd place in National Programming Competition",
        "Completed research project on AI applications in healthcare",
      ],
    },
    {
      degree: "Advanced Diploma in Software Engineering",
      institution: "Ethiopian Technical University",
      period: "2016 - 2018",
      description:
        "Specialized in web development and software architecture. Gained practical experience through industry projects.",
      achievements: [
        "Developed and deployed 3 full-stack applications",
        "Received Best Student Award",
        "Completed internship at leading tech company",
      ],
    },
  ];

  return (
    <Box py={12} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"7xl"}>
        <Stack spacing={4} as={Box} textAlign={"center"} mb={10}>
          <Icon
            as={FaGraduationCap}
            w={10}
            h={10}
            color="brand.500"
            mx="auto"
            mb={4}
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={useColorModeValue("brand.600", "brand.400")}
          >
            Education
          </Heading>
          <Text
            color={"gray.600"}
            fontSize={{ base: "sm", sm: "lg", md: "xl" }}
          >
            My academic journey and achievements
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          align="center"
          justify="center"
        >
          {educationItems.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;
