import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Medicosconnect App",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://medicosconnect.com/",
    },
    {
      title: "12u12",
      description: "Development for Web & Mobile",
      imgUrl: projImg3,
      link: "https://app-dev.12u12.com/",
    },
    {
      title: "IMDb Website (clone)",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://clon-imdb1.netlify.app/",
    },
  ];

  const projects2 = [
    {
      title: "Online Shoes Store",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://online-shoes-store.netlify.app/",
    },
    {
      title: "Food Delivery (clone)",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://food-delivery-using-tailwind.vercel.app/",
    },
    {
      title: "Feed-U Mobile App",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://play.google.com/store/apps/details?id=com.feedu",
    },
  ];

  const projects3 = [
    {
      title: "Stride Up Real estate",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://www.strideup.co/",
    },
    {
      title: "Vidly Movie App",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://vidlymovvies.netlify.app/movies",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My Project showcases a collection of my React app projects,
                    highlighting my expertise in building dynamic and
                    interactive web and mobile applications. Explore the
                    projects to see how I leverage React's powerful features to
                    create engaging user experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      style={{ cursor: "pointer" }}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
