import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Box
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex={1000}
          animation="fadeIn 0.3s ease-in-out"
        >
          <IconButton
            aria-label="Scroll to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            colorScheme="brand"
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            transition="all 0.2s"
          />
        </Box>
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
