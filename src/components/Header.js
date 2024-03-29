import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="#" className="mr-auto">
          <img
            src={logo}
            alt="Logo"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <NavDropdown title="Contact Me" id="collapsible-nav-dropdown">
              <NavDropdown.Item>Mail Me</NavDropdown.Item>
              <NavDropdown.Item>Whatsapp Me</NavDropdown.Item>
              <NavDropdown.Item>Call Me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>View UpWork Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <DropdownButton variant="dark" as={ButtonGroup} title="Projects">
            <Dropdown.Item>See Projects Overview</Dropdown.Item>
            <Dropdown.Item>All Projects In Details</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
        <Button variant="dark" className="ms-2">
          Social Link
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
