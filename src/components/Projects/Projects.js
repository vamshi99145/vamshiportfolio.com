import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import crypto from "../../Assets/Projects/crypto.png";
import location from "../../Assets/Projects/location.png";
import threads from "../../Assets/Projects/threads.png";
import active from "../../Assets/Projects/active.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={threads}
              isBlog={false}
              title="Threads-App"
              description="Designed a dynamic thread app, leveraging React, Next.js, TypeScript, and MongoDB. Bolstered security with Clerk's authentication, while introducing an inventive user-driven communities feature. This app redefines social interaction, offering an immersive and secure platform for meaningful discussions and connections."
              ghLink="https://github.com/vamshi99145/threads_app"
              demoLink="https://threads-app-jade.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptoverse"
              description="Developed a fast and efficient web app on GitHub using HTML, CSS, React JS, Redux, and JavaScript. Integrated Rapid API for seamless user experience, including ranking, daily change, top 100 cryptos, social media links, and news. Leveraged Axios, Chart JS, Millify, and React Router Dom for real-time data from Rapid API. Met client's needs with top-notch problem-solving and web development skills.

              "
              ghLink="https://github.com/vamshi99145/cryptoverse"
              demoLink="https://vamshi99145.github.io/cryptoverse/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={active}
              isBlog={false}
              title="Active-coders"
              description="A coding resource hub featuring Data Structures, Open Source, Projects, Computer Fundamentals, Competitive Programming, Languages, Coding Contests, System Design, LinkedIn Influencers, and job-related YouTube channels. Aided 50+ students in adopting correct learning paths. Tech: HTML, CSS, Bootstrap."
              ghLink="https://github.com/vamshi99145/Active-coders"
              demoLink="https://vamshi99145.github.io/Active-coders/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="Location-privacy-using-data-structures"
              description=". Designed privacy solutions for database-based cognitive radio networks (CRNs), maintaining spectrum access. Leveraged probabilistic set membership data structures for efficient spectrum DB management, safeguarding SUs' location privacy. Devised a secure two-party protocol with low communication overhead. Also, introduced an alternate scheme, minimizing overhead through an extra entity for spectrum data retrieval. Tech: Java, MySQL."
              ghLink="https://github.com/vamshi99145/location-privacy-using-data-structures"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
