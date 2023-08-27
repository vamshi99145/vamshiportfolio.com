import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">vamshi krishna </span>
            from <span className="purple"> Hyderabad, Telangana, India</span>
            <br /> I am a 2023 Graduate student in Computer Science and Engineering
            <br />
            Additionally, I am currently working as a software Engineer at
            Nova Module.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Create a content on all social Media Platform
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creator -Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtuber
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">vamshi krishna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
