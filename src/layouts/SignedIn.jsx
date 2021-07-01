import React from "react";
import { NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../styles/Navi.css";

export default function SignedIn() {
  return (
    <NavDropdown title={
        <Image width="38px" src="https://avatars.githubusercontent.com/u/48068865?v=4" roundedCircle/>
    } id="navbarScrollingDropdown">
      <NavDropdown.Item href="#">Profil</NavDropdown.Item>
      <NavDropdown.Item href="#">Another action</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">Çıkış Yap</NavDropdown.Item>
    </NavDropdown>
  );
}