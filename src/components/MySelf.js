import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import profilePic from "../assets/profile-pic.png";

const MySelf = () => {
  const style = {
    body: {
      backgroundColor: "#1c1e21",
      color: "#b9bbbe",
    },
    h1: {
      color: "#000000",
    },
    p: {
      color: "#000000",
    },
    image: {
      maxWidth: "1000%",
      height: "500px",
      alignSelf: "center",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      border: "3px solid grey",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <>
      <Container className="my-5">
        <hr />
        <Row className="justify-content-center">
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center"
            style={style.imageContainer}
          >
            <Image style={style.image} src={profilePic} roundedCircle />
          </Col>
        </Row>
        <Card style={style.card} className="text-right">
          <Card.Body>
            <Card.Title className="display-3">About Me</Card.Title>
            <Card.Text className="font-weight-bold lead">
              <p style={style.p}>
                Hello! I'm Mohamad Anas, a highly skilled and dedicated full
                stack web developer with a specialization in the MERN (MongoDB,
                Express.js, React, Node.js) stack.
              </p>
              <p style={style.p}>
                MERN Stack Expertise: My proficiency in the MERN stack allows me
                to design and develop dynamic, data-driven web applications
                efficiently. I utilize MongoDB for robust database management,
                Express.js for seamless backend development, React for creating
                responsive and interactive user interfaces, and Node.js for
                server-side scripting.
              </p>
              <p style={style.p}>
                Responsive Design: Crafting websites that look and function
                flawlessly across all devices is a hallmark of my work. Ensuring
                a seamless user experience, regardless of the device, is a top
                priority.
              </p>
              <p style={style.p}>
                Languages and Technologies: I am well-versed in a range of
                essential web development languages and technologies, including
                HTML, CSS, JavaScript, and Redux Toolkit. These skills enable me
                to create captivating and feature-rich front-end designs.
              </p>
              <p style={style.p}>
                Backend Mastery: My proficiency extends to the server-side as
                well, where I harness the power of Node.js and Express.js to
                build robust and scalable APIs. MongoDB serves as the
                cornerstone for my data management solutions.
              </p>
              <p style={style.p}>
                My Approach: I approach each project with a passion for
                innovation and a commitment to excellence. Whether it's
                developing a responsive e-commerce site, a dynamic social media
                platform, or a data-driven web application, I'm ready to
                transform your ideas into reality.
              </p>
            </Card.Text>
            <Button variant="primary">Know More</Button>
          </Card.Body>
        </Card>
        <hr />
      </Container>
      <br />
    </>
  );
};

export default MySelf;
