import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import theme from "./theme";
// import DashboardPage from "./pages/DashboardPage";
import EducationPage from "./pages/EducationPage";
import Projects from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

// Placeholder components - we'll create these next
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          </Routes>
        </MainLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
