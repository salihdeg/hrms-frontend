import React from "react";
import "../styles/Navi.css";
import {
  Container,
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SignedOut from "./SignedOut";
// import SignedIn from "./SignedIn";

export default function Navi() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">HRMS TEST</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/advertisements">
                İlanlar
              </Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form style={{ marginRight: "15em" }} className="d-flex">
              <FormControl
                type="search"
                placeholder="Pozisyon Ara"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="custom-btn">Search</Button>
            </Form>
            <SignedOut/>
            {/* <SignedIn/> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
