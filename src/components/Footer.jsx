import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = (props) => {
  const { text } = props;
  const infoDate = new Date();
  const currentDate =
    infoDate.getDate() +
    "/" +
    (infoDate.getMonth() + 1) +
    "/" +
    infoDate.getFullYear();
  return (
    <footer className="bg-dark text-center text-white fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p className="p-2">
              {text}
              {currentDate}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
