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
  HStack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaHtml5,
  FaJs,
  FaPhp,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaImages,
} from "react-icons/fa";
import {
  SiTypescript,
  SiChakraui,
  SiFlutter,
  SiFirebase,
  SiDart,
  SiBootstrap,
  SiJquery,
  SiMysql,
} from "react-icons/si";
import screenshot1 from "../assets/visit-ethiopia/screenshot1.jpg";
import screenshot2 from "../assets/visit-ethiopia/screenshot2.jpg";
import screenshot3 from "../assets/visit-ethiopia/screenshot3.jpg";
import screenshot4 from "../assets/visit-ethiopia/screenshot4.jpg";
import screenshot5 from "../assets/visit-ethiopia/screenshot5.jpg";
import screenshot6 from "../assets/visit-ethiopia/screenshot6.jpg";
import screenshot7 from "../assets/visit-ethiopia/screenshot7.jpg";
import screenshot8 from "../assets/visit-ethiopia/screenshot8.jpg";
import screenshot9 from "../assets/visit-ethiopia/screenshot9.jpg";
import screenshot10 from "../assets/visit-ethiopia/screenshot10.jpg";
import screenshot11 from "../assets/visit-ethiopia/screenshot11.jpg";
import screenshot12 from "../assets/visit-ethiopia/screenshot12.jpg";
import screenshot13 from "../assets/visit-ethiopia/screenshot13.jpg";
import screenshot14 from "../assets/visit-ethiopia/screenshot14.jpg";
import screenshot15 from "../assets/visit-ethiopia/screenshot15.jpg";
import screenshot16 from "../assets/visit-ethiopia/screenshot16.jpg";
import screenshot17 from "../assets/visit-ethiopia/screenshot17.jpg";
import screenshot18 from "../assets/visit-ethiopia/screenshot18.jpg";
import screenshot19 from "../assets/visit-ethiopia/screenshot19.jpg";
import screenshot20 from "../assets/visit-ethiopia/screenshot20.jpg";
import screenshot21 from "../assets/visit-ethiopia/screenshot21.jpg";
import screenshot22 from "../assets/visit-ethiopia/screenshot22.jpg";
import screenshot23 from "../assets/visit-ethiopia/screenshot23.jpg";
import screenshot24 from "../assets/visit-ethiopia/screenshot24.jpg";
// Remove the video import since the file was removed from git
// import demoVideo from "../assets/visit-ethiopia/demo-video.mp4";
import { useState } from "react";

const MotionBox = motion(Box);

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  screenshots?: string[]; // Added for screenshots
  videoDemo?: string; // Added for video demo
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  screenshots, // Added screenshots prop
  videoDemo, // Added videoDemo prop
}: Project) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      rounded={"xl"}
      shadow={"lg"}
      overflow={"hidden"}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        shadow: "2xl",
      }}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      {/* Header with Image */}
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          w="100%"
          h="250px"
          objectFit="cover"
          cursor="pointer"
          onClick={() => {
            console.log("Image clicked!");
            onOpen();
          }}
          transition="opacity 0.2s ease"
          _hover={{ opacity: 0.8 }}
          zIndex={1}
          position="relative"
        />

        {/* Gallery Indicator */}
        {Array.isArray(screenshots) && screenshots.length > 0 && (
          <Box
            position="absolute"
            top={3}
            right={3}
            bg="blackAlpha.700"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap={1}
            backdropFilter="blur(10px)"
            zIndex={4}
            pointerEvents="none"
          >
            <Icon as={FaImages} size="sm" />
            {screenshots.length} images
          </Box>
        )}

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)"
          zIndex={2}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom={4}
          left={4}
          right={4}
          zIndex={3}
          pointerEvents="none"
        >
          <Text color="white" fontSize="xl" fontWeight="bold" mb={1}>
            {title}
          </Text>
          <HStack spacing={2}>
            {technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                px={2}
                py={1}
                bg="whiteAlpha.200"
                color="white"
                fontSize="xs"
                borderRadius="full"
                backdropFilter="blur(10px)"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge
                px={2}
                py={1}
                bg="whiteAlpha.200"
                color="white"
                fontSize="xs"
                borderRadius="full"
                backdropFilter="blur(10px)"
              >
                +{technologies.length - 3} more
              </Badge>
            )}
          </HStack>
        </Box>
      </Box>

      {/* Content */}
      <Box p={6}>
        <Text
          color={useColorModeValue("gray.600", "gray.300")}
          fontSize="sm"
          lineHeight="tall"
          mb={4}
        >
          {description}
        </Text>

        {/* Video Demo */}
        {videoDemo && (
          <Box mb={4}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.700", "gray.200")}
              mb={3}
            >
              Demo Video
            </Text>
            <Box borderRadius="lg" overflow="hidden">
              {videoDemo.endsWith(".mp4") ? (
                <video width="100%" height="150" controls>
                  <source src={videoDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  width="100%"
                  height="150"
                  src={videoDemo}
                  title="Video Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </Box>
          </Box>
        )}

        {/* Action Buttons */}
        <HStack spacing={3} mt={6}>
          {title === "Visit Ethiopia Mobile Application" ? (
            <>
              <Button
                size="sm"
                colorScheme="brand"
                variant="solid"
                flex={1}
                leftIcon={<Icon as={FaExternalLinkAlt} />}
                isDisabled={true}
                opacity={0.6}
                cursor="not-allowed"
              >
                Live Demo
              </Button>
              <Button
                size="sm"
                variant="outline"
                colorScheme="gray"
                flex={1}
                leftIcon={<Icon as={FaGithub} />}
                isDisabled={true}
                opacity={0.6}
                cursor="not-allowed"
              >
                Code
              </Button>
            </>
          ) : (
            <>
              {liveUrl && (
                <Button
                  as="a"
                  href={liveUrl}
                  target="_blank"
                  size="sm"
                  colorScheme="brand"
                  variant="solid"
                  flex={1}
                  leftIcon={<Icon as={FaExternalLinkAlt} />}
                >
                  Live Demo
                </Button>
              )}
              {githubUrl && (
                <Button
                  as="a"
                  href={githubUrl}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  colorScheme="gray"
                  flex={1}
                  leftIcon={<Icon as={FaGithub} />}
                >
                  Code
                </Button>
              )}
            </>
          )}
        </HStack>
      </Box>

      {/* Image Gallery Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton
            color="white"
            bg="blackAlpha.500"
            borderRadius="full"
            zIndex={10}
          />
          <ModalBody p={0} position="relative">
            {/* Main Image */}
            <Box position="relative" h="80vh">
              {Array.isArray(screenshots) && screenshots.length > 0 ? (
                <Image
                  src={screenshots[currentImageIndex]}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  bg={useColorModeValue("gray.900", "black")}
                />
              ) : (
                <Box
                  w="100%"
                  h="100%"
                  bg={useColorModeValue("gray.900", "black")}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="lg"
                >
                  No screenshots available for this project
                </Box>
              )}

              {/* Navigation Arrows */}
              {Array.isArray(screenshots) && screenshots.length > 1 && (
                <>
                  <IconButton
                    aria-label="Previous image"
                    icon={<Icon as={FaChevronLeft} />}
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    variant="ghost"
                    color="white"
                    bg="blackAlpha.500"
                    borderRadius="full"
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? screenshots.length - 1 : prev - 1
                      )
                    }
                    _hover={{ bg: "blackAlpha.700" }}
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<Icon as={FaChevronRight} />}
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    variant="ghost"
                    color="white"
                    bg="blackAlpha.500"
                    borderRadius="full"
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === screenshots.length - 1 ? 0 : prev + 1
                      )
                    }
                    _hover={{ bg: "blackAlpha.700" }}
                  />
                </>
              )}

              {/* Image Counter */}
              {Array.isArray(screenshots) && screenshots.length > 0 && (
                <Box
                  position="absolute"
                  bottom={4}
                  left="50%"
                  transform="translateX(-50%)"
                  bg="blackAlpha.700"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {currentImageIndex + 1} / {screenshots.length}
                </Box>
              )}
            </Box>

            {/* Dots Navigation */}
            {Array.isArray(screenshots) && screenshots.length > 1 && (
              <Box
                position="absolute"
                bottom={20}
                left="50%"
                transform="translateX(-50%)"
                bg="blackAlpha.500"
                px={4}
                py={2}
                borderRadius="full"
              >
                <HStack spacing={2}>
                  {screenshots.map((_, index) => (
                    <Box
                      key={index}
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg={
                        index === currentImageIndex ? "white" : "whiteAlpha.500"
                      }
                      cursor="pointer"
                      onClick={() => setCurrentImageIndex(index)}
                      transition="all 0.2s ease"
                      _hover={{
                        bg:
                          index === currentImageIndex
                            ? "white"
                            : "whiteAlpha.700",
                      }}
                    />
                  ))}
                </HStack>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Visit Ethiopia Mobile Application",
      description:
        "A comprehensive mobile application developed as my final academic project at Haramaya University. The app serves as a complete travel companion for tourists visiting Ethiopia, featuring local attractions, cultural information, payment integrations, multi-language support, and an AI assistant. This project demonstrates full-stack development skills, mobile app development, API integration, and database management. Achieved 95% user satisfaction in testing phase.\n\nDemo not publicly available. See screenshots and video below.",
      image: screenshot1,
      screenshots: [
        screenshot1,
        screenshot2,
        screenshot3,
        screenshot4,
        screenshot5,
        screenshot6,
        screenshot7,
        screenshot8,
        screenshot9,
        screenshot10,
        screenshot11,
        screenshot12,
        screenshot13,
        screenshot14,
        screenshot15,
        screenshot16,
        screenshot17,
        screenshot18,
        screenshot19,
        screenshot20,
        screenshot21,
        screenshot22,
        screenshot23,
        screenshot24,
      ],
      videoDemo: undefined, // Remove video since file was removed from git
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "Cloud Firestore",
        "Firebase Auth",
        "Payment Gateway",
        "AI Integration",
      ],
      featured: true,
    },
    {
      title: "Payroll Management System",
      description:
        "A comprehensive payroll management system for businesses to handle employee salaries, benefits, and tax calculations. Features user authentication, role-based access control, and automated calculations. Successfully deployed on InfinityFree hosting with MySQL database integration.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80",
      technologies: [
        "HTML",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "jQuery",
        "MySQL",
      ],
      liveUrl: "https://abdi-lamu-payroll.infinityfreeapp.com",
      githubUrl: "https://github.com/abdilamu/payroll-system",
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
