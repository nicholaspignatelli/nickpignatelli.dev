import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import StyledSidebar from "./components/Sidebar/styled/StyledSidebar";
import StyledNavBar from "./components/NavBar/styled/StyledNavBar.styled";

import StyledGridContainer from "./components/GridContainer/styled/StyledGridContainer";

// Data
import projects from "./data/projects";
import jobs from "./data/jobs";

function App() {
  return (
    <>
      <StyledGridContainer>
        <StyledNavBar
          name="Nick Pignatelli"
          menuOptions={[
            { label: "About", url: "/about", id: "About" },
            { label: "Experience", url: "/experience", id: "Experience" },
            { label: "Projects", url: "/projects", id: "Projects" },
            { label: "Contact", url: "/contact", id: "Contact" },
          ]}
        />

        <StyledSidebar />

        <Home
          beforeText={"Hi, I am"}
          title={"Nick Pignatelli"}
          headline={"A Software Engineer"}
        />

        <About />

        <Experience jobs={jobs} />

        <Projects projects={projects} />

        <Contact />
      </StyledGridContainer>
    </>
  );
}

export default App;
