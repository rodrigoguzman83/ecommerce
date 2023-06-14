import React from "react";
import { Container } from "react-bootstrap";

const ItemListContainer = (props) => {
  return (
    <Container>
      <h2 className="mt-5">{props.greeting}</h2>
    </Container>
  );
};

export default ItemListContainer;
