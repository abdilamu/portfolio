import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
  const [newTag, setNewTag] = useState("");
  const toast = useToast();

  const handleAddProject = () => {
    setCurrentProject({});
    onOpen();
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    onOpen();
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    toast({
      title: "Project deleted",
      status: "success",
      duration: 3000,
    });
  };

  const handleSaveProject = () => {
    if (!currentProject.title || !currentProject.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        status: "error",
        duration: 3000,
      });
      return;
    }

    if (currentProject.id) {
      setProjects(
        projects.map((project) =>
          project.id === currentProject.id
            ? { ...project, ...currentProject }
            : project
        )
      );
    } else {
      setProjects([
        ...projects,
        {
          ...currentProject,
          id: Date.now().toString(),
          featured: currentProject.featured || false,
        } as Project,
      ]);
    }

    onClose();
    toast({
      title: "Project saved",
      status: "success",
      duration: 3000,
    });
  };

  const handleAddTag = () => {
    if (newTag && !currentProject.tags?.includes(newTag)) {
      setCurrentProject({
        ...currentProject,
        tags: [...(currentProject.tags || []), newTag],
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setCurrentProject({
      ...currentProject,
      tags: currentProject.tags?.filter((tag) => tag !== tagToRemove),
    });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Heading>Project Dashboard</Heading>
          <Button
            leftIcon={<FaPlus />}
            colorScheme="brand"
            onClick={handleAddProject}
          >
            Add New Project
          </Button>
        </HStack>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Tags</Th>
                <Th>Featured</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects.map((project) => (
                <Tr key={project.id}>
                  <Td>{project.title}</Td>
                  <Td>{project.description.substring(0, 50)}...</Td>
                  <Td>
                    <HStack spacing={2}>
                      {project.tags.map((tag) => (
                        <Tag key={tag} size="sm" colorScheme="brand">
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                  </Td>
                  <Td>{project.featured ? "Yes" : "No"}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        aria-label="Edit project"
                        icon={<FaEdit />}
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      />
                      <IconButton
                        aria-label="Delete project"
                        icon={<FaTrash />}
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDeleteProject(project.id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentProject.id ? "Edit Project" : "Add New Project"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  value={currentProject.title || ""}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      title: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={currentProject.description || ""}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      description: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  value={currentProject.image || ""}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      image: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>GitHub URL</FormLabel>
                <Input
                  value={currentProject.github || ""}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      github: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Live URL</FormLabel>
                <Input
                  value={currentProject.live || ""}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      live: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Flex>
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    mr={2}
                  />
                  <Button onClick={handleAddTag}>Add</Button>
                </Flex>
                <HStack mt={2} spacing={2} wrap="wrap">
                  {currentProject.tags?.map((tag) => (
                    <Tag
                      key={tag}
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      colorScheme="brand"
                    >
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel>Featured</FormLabel>
                <Select
                  value={currentProject.featured ? "true" : "false"}
                  onChange={(e) =>
                    setCurrentProject({
                      ...currentProject,
                      featured: e.target.value === "true",
                    })
                  }
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
              </FormControl>

              <Button
                colorScheme="brand"
                onClick={handleSaveProject}
                width="full"
              >
                Save Project
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Dashboard;
