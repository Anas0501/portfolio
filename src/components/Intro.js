import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bgmain from "../assets/bgmain.png";

const Intro = () => {
  const sectionStyle = {
    backgroundColor: "black",
    margin: "0px",
    padding: "150px",
  };

  const centeredTextStyle = {
    textAlign: "left",
    margin: "0 auto",
    color: "white",
    padding: "110px 0px 0px 0px",
  };

  const imageStyle = {
    width: "750px",
    height: "600px",
    marginLeft: "0px",
    marginRight: "0px",
  };

  const textStyle = {
    color: "red",
  };

  return (
    <>
      <div style={sectionStyle}>
        <Container>
          <Row>
            <Col>
              <div style={centeredTextStyle}>
                <h1>
                  Hello! I'm<h1 style={textStyle}>Mohamad Anas,</h1>
                  A highly skilled and dedicated
                  <br />
                  <h1 style={textStyle}> Full Stack Web Developer</h1>
                </h1>
                <p>
                  Where Creativity Meets Code,
                  <br /> We Design Dreams.
                </p>
              </div>
            </Col>
            <Col md={7}>
              <Image src={bgmain} rounded style={imageStyle} />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </>
  );
};

export default Intro;
