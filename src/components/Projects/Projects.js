import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import project_1 from "../../Assets/Projects/project_1.png";
import project_2 from "../../Assets/Projects/project_2.png";
import project_3 from "../../Assets/Projects/project_3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_1}
              isBlog={false}
              title="DBOperator AI"
              description="A conversational AI tool that lets users query a PostgreSQL DB in plain English and receive human-readable results."
              ghLink="https://github.com/mayurbhat22/DBOperatorAI"
              demoLink="https://querybuddy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_2}
              isBlog={false}
              title="Secure bank: Online Banking System"
              description="An online banking system supporting secure transactions, user roles, and authorization workflows"
              ghLink="https://github.com/mayurbhat22/Bank-Management-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_3}
              isBlog={false}
              title="Nouveau Health"
              description="A health insurance and patient management platform with distinct portals for patients, doctors, and providers."
              ghLink="https://github.com/mayurbhat22/nouveau_react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
