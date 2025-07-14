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
  SimpleGrid,
  Image,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaUniversity,
  FaDownload,
  FaImage,
  FaEye,
} from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
  certificate?: string;
}

const EducationCard = ({
  degree,
  institution,
  period,
  description,
  achievements,
  certificate,
}: EducationItem) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
          {certificate && (
            <Box>
              <Text
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.300")}
                mb={2}
              >
                Certificate of Academic Achievement
              </Text>
              <Text
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize="sm"
                mb={2}
              >
                Awarded for outstanding academic achievement, scoring a CGPA of
                3.97/4.00 and winning the gold medal while studying for the BSc
                in Software Engineering at Haramaya University.
                <br />
                <b>Date:</b> June 21, 2025
              </Text>
              <HStack spacing={3} align="center">
                <Icon as={FaImage} w={6} h={6} color="blue.500" />
                <Text
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize="sm"
                >
                  Gold Medal Certificate (JPG)
                </Text>
              </HStack>
              <HStack spacing={2} mt={2}>
                <Button
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<FaEye />}
                  onClick={onOpen}
                >
                  View Certificate
                </Button>
                <Button
                  as="a"
                  href={certificate}
                  download
                  size="sm"
                  variant="outline"
                  colorScheme="blue"
                  leftIcon={<FaDownload />}
                >
                  Download
                </Button>
              </HStack>
            </Box>
          )}
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

      {/* Certificate Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Certificate of Academic Achievement - Haramaya University
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              src={certificate}
              alt="Certificate of Academic Achievement - Gold Medal"
              width="100%"
              height="auto"
              borderRadius="md"
              objectFit="contain"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Haramaya University",
      period: "2020 - 2024",
      description:
        "Graduated with distinction, achieving a CGPA of 3.97/4.00. Specialized in software engineering principles, full-stack development, and participated in academic projects and extracurricular activities.",
      achievements: [
        "CGPA: 3.97/4.00 (First Class Honors)",
        "Gold Medalist",
        "Active member of the university's tech community",
        "Completed a capstone project on mobile app development",
      ],
      certificate: "/certificate.jpg", // JPG certificate
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
            color={useColorModeValue("brand.500", "brand.300")}
            mx="auto"
            mb={4}
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={useColorModeValue("brand.600", "brand.300")}
          >
            Education
          </Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.300")}
            fontSize={{ base: "sm", sm: "lg", md: "xl" }}
          >
            My academic journey and achievements
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {educationItems.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Education;
