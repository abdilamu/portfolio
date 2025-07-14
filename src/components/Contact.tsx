import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useColorModeValue,
  Icon,
  Link,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "abdilamu1@gmail.com",
      href: "mailto:abdilamu1@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+251-979-5975-97",
      href: "tel:+251979597597",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdi-lamu-8b7a25259/",
      color: "blue.500",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/abdilamu",
      color: "gray.700",
    },
  ];

  return (
    <Box
      id="contact"
      bg={useColorModeValue("gray.50", "gray.900")}
      minH="100vh"
      py={16}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              color={useColorModeValue("gray.800", "white")}
            >
              Get In Touch
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and innovation.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
            {/* Contact Form */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
            >
              <Heading
                size="lg"
                mb={6}
                color={useColorModeValue("gray.800", "white")}
              >
                Send a Message
              </Heading>
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                    <FormControl isRequired>
                      <FormLabel
                        color={useColorModeValue("gray.700", "gray.200")}
                      >
                        Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                        _focus={{
                          borderColor: "brand.500",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                        }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel
                        color={useColorModeValue("gray.700", "gray.200")}
                      >
                        Email
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                        _focus={{
                          borderColor: "brand.500",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                        }}
                      />
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired>
                    <FormLabel
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      Subject
                    </FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
                      }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>

            {/* Contact Information */}
            <VStack spacing={8} align="stretch">
              {/* Contact Details */}
              <Box
                bg={useColorModeValue("white", "gray.800")}
                p={8}
                borderRadius="lg"
                boxShadow="lg"
              >
                <Heading
                  size="lg"
                  mb={6}
                  color={useColorModeValue("gray.800", "white")}
                >
                  Contact Information
                </Heading>
                <VStack spacing={4} align="stretch">
                  {contactInfo.map((info, index) => (
                    <HStack key={index} spacing={4}>
                      <Box
                        p={3}
                        borderRadius="full"
                        bg={useColorModeValue("brand.50", "brand.900")}
                        color="brand.500"
                      >
                        <Icon as={info.icon} boxSize={5} />
                      </Box>
                      <VStack align="start" spacing={1}>
                        <Text
                          fontSize="sm"
                          color={useColorModeValue("gray.500", "gray.400")}
                          fontWeight="medium"
                        >
                          {info.label}
                        </Text>
                        <Link
                          href={info.href}
                          color={useColorModeValue("gray.700", "gray.200")}
                          _hover={{ color: "brand.500" }}
                          textDecoration="none"
                        >
                          {info.value}
                        </Link>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* Social Links */}
              <Box
                bg={useColorModeValue("white", "gray.800")}
                p={8}
                borderRadius="lg"
                boxShadow="lg"
              >
                <Heading
                  size="lg"
                  mb={6}
                  color={useColorModeValue("gray.800", "white")}
                >
                  Follow Me
                </Heading>
                <HStack spacing={4} justify="center">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      isExternal
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.2s"
                    >
                      <Button
                        as="div"
                        size="lg"
                        variant="ghost"
                        color={social.color}
                        _hover={{
                          bg: useColorModeValue("gray.100", "gray.700"),
                        }}
                      >
                        <Icon as={social.icon} boxSize={6} />
                      </Button>
                    </Link>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
