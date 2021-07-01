import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {NavLink} from "react-router-dom"

export default function SignedOut() {
  return (
    <Nav>
      <NavDropdown
        style={{
          marginRight: "1em",
          borderRadius: "8px",
          backgroundColor: "#ff8928",
        }}
        title="İş Arayan"
        id="navbarScrollingDropdown"
      >
        <NavDropdown.Item as={NavLink} to="/login">Giriş Yap</NavDropdown.Item>
        <NavDropdown.Item href="#">Üye Ol</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        style={{ borderRadius: "8px", backgroundColor: "#ff8928" }}
        title="İşveren"
        id="navbarScrollingDropdown"
      >
        <NavDropdown.Item href="#">Giriş Yap</NavDropdown.Item>
        <NavDropdown.Item href="#">Üye Ol</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Bilgi Al</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
