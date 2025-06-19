import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import padmatImg1 from "../assets/Extra img/pad1.jpg";
import padmatImg2 from "../assets/Extra img/pad2.jpg";
import padmatImg3 from "../assets/Extra img/pad3.png";
import padmatImg4 from "../assets/Extra img/pad3.1.png";
import padmatImg5 from "../assets/Extra img/pad3.2.png";
import padmatImg6 from "../assets/Extra img/pad3.3.png";
import padmatImg7 from "../assets/Extra img/pad4.1.png";
import padmatImg8 from "../assets/Extra img/pad4.2.png";
import padmatImg9 from "../assets/Extra img/pad4.3.png";
import padmatImg10 from "../assets/Extra img/pad5.1.png";
import padmatImg11 from "../assets/Extra img/pad5.2.png";
import padmatImg12 from "../assets/Extra img/pad6.png";
import padmatImg13 from "../assets/Extra img/pad6.1.png";
import padmatImg14 from "../assets/Extra img/pad6.2.png";
import padmatImg15 from "../assets/Extra img/pad6.3.png";
import padmatImg16 from "../assets/Extra img/padfi.png";
import projImg1 from "../assets/Best Graphic Ddesign/Img1.jpg";
import projImg2 from "../assets/Best Graphic Ddesign/img2.png";
import projImg3 from "../assets/Best Graphic Ddesign/img3.jpg";
import projImg4 from "../assets/Best Graphic Ddesign/img4.png";
import projImg5 from "../assets/Best Graphic Ddesign/img5.png";
import projImg6 from "../assets/Best Graphic Ddesign/img6.png";
import projImg7 from "../assets/Best Graphic Ddesign/img7.png";
import projImg8 from "../assets/Best Graphic Ddesign/img8.png";
import projImg9 from "../assets/Best Graphic Ddesign/img9.png";
import modImg1 from "../assets/3D Model/model1.png";
import modImg2 from "../assets/3D Model/model2.png";
import modImg3 from "../assets/3D Model/model3.png";
import modImg4 from "../assets/3D Model/model4.png";
import modImg5 from "../assets/3D Model/model5.png";
import modImg6 from "../assets/3D Model/model6.png";
import photoImg1 from "../assets/Photography/photo1.png";
import photoImg2 from "../assets/Photography/photo2.png";
import photoImg3 from "../assets/Photography/photo3.png";
import photoImg4 from "../assets/Photography/photo4.jpg";
import photoImg5 from "../assets/Photography/photo5.png";
import photoImg6 from "../assets/Photography/photo6.png";
import photoImg7 from "../assets/Photography/photo7.png";
import photoImg8 from "../assets/Photography/photo8.png";
import photoImg9 from "../assets/Photography/photo9.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const padmat = [
    {
      title: "Prelim",
      description: "Packaging",
      imgUrl: padmatImg1,
    },
    {
      title: "Prelim",
      description: "Envelope, Business Card, Cover Letter",
      imgUrl: padmatImg2,
    },
    {
      title: "Prelim",
      description: "Clickn'Stitch Logo",
      imgUrl: padmatImg3,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg4,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg5,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg6,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg7,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg8,
    },
    {
      title: "Prelim",
      description: "Stylescapes",
      imgUrl: padmatImg9,
    },
    {
      title: "Midterm",
      description: "E-Newsletter Cover",
      imgUrl: padmatImg10,
    },
    {
      title: "Midterm",
      description: "E-Newsletter Content",
      imgUrl: padmatImg11,
    },
    {
      title: "Pre-Finals",
      description: "Annual Report",
      imgUrl: padmatImg15,
    },
     {
      title: "Pre-Finals",
      description: "E-Magazine",
      imgUrl: padmatImg13,
    },
    {
      title: "Pre-Finals",
      description: "E-Catalogue",
      imgUrl: padmatImg14,
    },
    {
      title: "Finals",
      description: "Clickn'Stitch Website",
      imgUrl: padmatImg12,
    },
    {
      title: "Midterms",
      description: "Infographics",
      imgUrl: padmatImg16,
    },
  ];


  const projects = [
    {
      title: "Zus Watermelon Frappe",
      description: "Academic Project STI College",
      imgUrl: projImg1,
    },
    {
      title: "Love is in the Air",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg2,
    },
    {
      title: "Fujin Shoes",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg3,
    },
    {
      title: "Saludo Kabataan 2024",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg4,
    },
    {
      title: "2024 Binibini at Ginoong San Juan",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg5,
    },
    {
      title: "Interpurok Volleyball League",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg6,
    },
    {
      title: "SK Feeding Program",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg7,
    },
    {
      title: "Scholarship Program",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg8,
    },
    {
      title: "Katipunan ng Kabataan",
      description: "SK San Juan Graphic Design Commission",
      imgUrl: projImg9,
    },
  ];

const photograph = [
    {
      title: "Mezzy Buszy",
      description: "Portrait|Academic Project STI College",
      imgUrl: photoImg1,
    },
    {
      title: "Feel da Beat",
      description: "Light Painting|Academic Project STI College",
      imgUrl: photoImg2,
    },
    {
      title: "Small Land",
      description: "Micro Photography|Academic Project STI College",
      imgUrl: photoImg3,
    },
    {
      title: "Looking at the Sky",
      description: "Frame within the Frame|Academic Project STI College",
      imgUrl: photoImg4,
    },
    {
      title: "'Not Hungry",
      description: "Manual Focus|Academic Project STI College",
      imgUrl: photoImg5,
    },
    {
      title: "Light Beauty Glow Booster",
      description: "Product Shot|Academic Project STI College",
      imgUrl: photoImg6,
    },
    {
      title: "Smiley",
      description: "Portrait|Academic Project STI College",
      imgUrl: photoImg7,
    },
    {
      title: "Yumeko",
      description: "Personal Project",
      imgUrl: photoImg8,
    },
    {
      title: "Jealousy",
      description: "Rule of Odds|Academic Project STI College",
      imgUrl: photoImg9,
    },
  ];


const model = [
    {
      title: "STI BMMA Student",
      description: "Clickn'Stitch 3D Character",
      imgUrl: modImg1,
    },
    {
      title: "Medieval Era Streetlight",
      description: "Academic 3D Project STI College",
      imgUrl: modImg2,
    },
    {
      title: "Futuristic Space Arc",
      description: "Academic 3D Project STI College",
      imgUrl: modImg3,
    },
    {
      title: "Futuristic Space Arc",
      description: "Academic 3D Project STI College",
      imgUrl: modImg4,
    },
    {
      title: "Low-poly Nature",
      description: "Personal Project",
      imgUrl: modImg5,
    },
    {
      title: "Street Vending Machine",
      description: "Personal Project",
      imgUrl: modImg6,
    },
  ];



  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                      <Nav.Link eventKey="padmat">Collaterals</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                      <Nav.Link eventKey="first">Graphic Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D Model</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                      <Nav.Link eventKey="third">Photography</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="padmat">
                      <Row>
                        {
                          padmat.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          model.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row>
                        {
                          photograph.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
