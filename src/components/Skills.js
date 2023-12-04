import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

import mernStack from "../assets/mernStack.png";
import frontEnd from "../assets/frontEnd.jpg";
import backEnd from "../assets/backEnd.jpg";

const Skills = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Badge
              style={{
                fontSize: "40px",
                marginLeft: "100px",
                marginBottom: "135px",
              }}
              bg="dark"
              className="text-white"
            >
              Skills
            </Badge>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Card
              className="h-100 d-flex flex-column"
              style={{ width: "25rem" }}
            >
              <Card.Img variant="top" src={mernStack} />
              <Card.Body>
                <Card.Title>MERN Stack Web Development</Card.Title>
                <Card.Text>
                  MERN stands for MongoDB, Express, React, Node, after the four
                  key technologies that make up the stack.
                  <ul>
                    <li>MongoDB — document database</li>
                    <li>Express(.js) — Node.js web framework</li>
                    <li>React(.js) — a client-side JavaScript framework</li>
                    <li>Node(.js) — the premier JavaScript web server</li>
                  </ul>
                </Card.Text>
                <Button style={{ marginTop: "20px" }} variant="primary">
                  Know More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card
              className="h-100 d-flex flex-column"
              style={{ width: "25rem" }}
            >
              <Card.Img variant="top" src={frontEnd} />
              <Card.Body>
                <Card.Title>Front-End Web Development</Card.Title>
                <Card.Text>
                  Front-end web development is the process of creating the user
                  interface and user experience of a website or application. It
                  involves:
                  <ul>
                    <li>HTML (Hypertext Markup Language):</li>
                    <li>CSS (Cascading Style Sheets):</li>
                    <li>JavaScript</li>
                    <li>
                      React (This is a library for JavaScript which makes the
                      work easy)
                    </li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card
              className="h-100 d-flex flex-column"
              style={{ width: "25rem" }}
            >
              <Card.Img variant="top" src={backEnd} />
              <Card.Body>
                <Card.Title>Back-End Web Development</Card.Title>
                <Card.Text>
                  Back-end development means working on server-side, which
                  focuses on everything you can't see on a website. Back-end
                  developers ensure the website performs correctly
                  <ul>
                    <li>Node(.js) — the premier JavaScript web server</li>
                    <li>Express(.js) — Node.js web framework</li>
                    <li>MongoDB — document database</li>
                  </ul>
                </Card.Text>
                <Button style={{ marginTop: "50px" }} variant="primary">
                  Know More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <hr />
      </Container>
    </>
  );
};

export default Skills;
