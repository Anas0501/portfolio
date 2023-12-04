import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Badge
              style={{
                fontSize: "40px",
                marginTop: "70px",
                marginLeft: "410px",
                marginBottom: "120px",
              }}
              bg="dark"
              className="text-white"
            >
              Projects
            </Badge>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-between gap-1">
              <Card className="d-flex flex-column" style={{ width: "40rem" }}>
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                  <Card.Title>
                    ProShop | E-Commerce website with MERN Stack
                  </Card.Title>
                  <Card.Text>
                    Introducing ProShop:
                    <br />
                    Ultimate E-commerce Destination At ProShop, we've redefined
                    online shopping with a feature-rich, user-friendly
                    e-commerce platform that puts the power of choice at your
                    fingertips. Our platform is not just an online store it's an
                    immersive shopping experience designed to make your life
                    easier and more enjoyable.
                    <br />
                    Key Features:
                    <ul>
                      <li>
                        User-Friendly Interface: Navigating our website is a
                        breeze. Find products, add them to your cart, and
                        complete your purchase with ease.
                      </li>
                      <li>
                        Secure Login: Your privacy and security are our top
                        priorities. Our robust login system ensures your
                        personal information is safe.
                      </li>
                      <li>
                        Secure Payments: We offer a range of secure payment
                        options, including credit/debit cards, digital wallets,
                        and more, making your shopping experience hassle-free.
                      </li>
                      <li>
                        Admin Panel: For sellers, our admin panel offers a
                        comprehensive suite of tools to manage products, orders,
                        and customer interactions. Stay in control of your
                        business with ease.
                      </li>
                    </ul>
                  </Card.Text>
                  <Button style={{ marginTop: "10px" }} variant="primary">
                    See Full Projects
                  </Button>
                </Card.Body>
              </Card>

              <Card className="d-flex flex-column" style={{ width: "40rem" }}>
                <Card.Img variant="top" src={project2} />
                <Card.Body>
                  <Card.Title>
                    Shoppy || Professional Dashboard For Business
                  </Card.Title>
                  <Card.Text>
                    Shoppy is a professional business dashboard website that
                    provides a comprehensive suite of tools and features to help
                    businesses of all sizes manage their operations more
                    efficiently and effectively.
                    <br />
                    Features:
                    <ul>
                      <li>
                        Multiple user profiles: Shoppy allows businesses to
                        create and manage multiple user profiles, each with its
                        own permissions and access level. This ensures that team
                        members only have access to the information and features
                        they need to do their jobs.
                      </li>
                      <li>
                        Dashboard: The Shoppy dashboard provides a high-level
                        overview of key business metrics, such as sales, orders,
                        customers, and employees. This allows businesses to
                        quickly and easily identify trends and areas where
                        improvement is needed.
                      </li>
                      <li>
                        Pages: Shoppy includes a variety of pages that provide
                        more detailed information on specific business areas,
                        such as orders, employees, and customer information.
                        These pages allow businesses to drill down into their
                        data and make more informed decisions.
                      </li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary">See Full Projects</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="text-center mt-5">
              <Button size="lg" variant="primary">
                See More Projects
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <hr />
      </Container>
    </>
  );
};

export default Projects;
