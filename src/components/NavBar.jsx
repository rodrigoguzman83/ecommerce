import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget";

//define options menu
const menu = [
  {
    text: "home",
    link: "/#home",
  },
  {
    text: "products",
    link: "/#products",
  },
  {
    text: "about",
    link: "/#about",
  },
  {
    text: "contact",
    link: "/#contact",
  },
];

const NavBar = (props) => {
  const { backgroundColor, textColor, variant } = props;
  return (
    <Navbar bg={backgroundColor} variant={variant}>
      <Container>
        <Navbar.Brand style={{ color: textColor }} href="#home">
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto">
          {menu.map((item, index) => (
            <Nav.Link key={index} href={item.link}>
              {item.text}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
