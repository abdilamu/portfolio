import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: "#f0f7ff",
      100: "#c6e3ff",
      200: "#8ab4ff",
      300: "#4d85ff",
      400: "#1a56ff",
      500: "#0037ff",
      600: "#002bd9",
      700: "#0020b3",
      800: "#00158c",
      900: "#000b66",
    },
    accent: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
            transform: "translateY(-2px)",
          },
        },
        ghost: {
          _hover: {
            bg: "brand.50",
            color: "brand.600",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "lg",
          boxShadow: "lg",
          bg: "white",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-5px)",
            boxShadow: "xl",
          },
        },
      },
    },
    Heading: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "dark" ? "gray.100" : "gray.900",
        fontWeight: "bold",
      }),
    },
    Text: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "dark" ? "gray.300" : "gray.700",
      }),
    },
  },
});

export default theme;
