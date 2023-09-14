import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCardCode } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg7 from "../assets/img/project-img7.png";

export const Projects = () => {
  const projects = [
    {
      title: "Flor de Bazar",
      description: "Development of Stock System",
      imgUrl: projImg1,
      projUrl: "https://flor-de-bazar-sistema-de-stock.web.app/",
      codeUrl:
        "https://github.com/LiliTaschini/Flor-de-Bazar--Sistema-de-Stock",
      inscription: "GitHub Project"  
    },
    {
      title: "Expense Tracker",
      description: "Development of Expense Tracker",
      imgUrl: projImg2,
      projUrl: "",
      codeUrl: "https://github.com/LiliTaschini/Expense-tracker",
      inscription: "GitHub Project"
    },
    {
      title: "GIF Expert App",
      description: "Development of GIF search",
      imgUrl: projImg3,
      projUrl: "https://gif-expert-app-bresse.netlify.app/",
      codeUrl: "https://github.com/LiliTaschini/react-gif-expert",
      inscription: "GitHub Project"
    },
    {
      title: "BRESS",
      description: "Development of Videogames App w/API Rawg",
      imgUrl: projImg4,
      projUrl: "https://lilitaschini.github.io/Bress-App/",
      codeUrl: "https://github.com/LiliTaschini/Bress-App",
      inscription: "GitHub Project"
    },
    {
      title: "Videogames",
      description: "Development of Videogames App",
      imgUrl: projImg5,
      projUrl: "https://lilitaschini.github.io/FiltrandoVideojuegos/",
      codeUrl: "https://github.com/LiliTaschini/FiltrandoVideojuegos",
      inscription: "GitHub Project"
    },
    {
      title: "Drums Project",
      description: "Development of drums simulator",
      imgUrl: projImg7,
      projUrl: "https://lilitaschini.github.io/Drums-Proyect/",
      codeUrl: "https://github.com/LiliTaschini/Drums-Proyect",
      inscription: "GitHub Project"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Come and check my projects, click on each one and see.{" "}
              <code>In CODE Tab you can find GitHub URL ;)</code>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Code</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCardCode key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
