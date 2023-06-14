import React from "react";
import cart from "../assets/cart.png";

const styles = {
  img: {
    height: "2rem",
    with: "auto",
  },
  span: {
    color: "white",
    paddingLeft: 10,
  },
};

export const CartWidget = () => (
  <>
    <img src={cart} alt="cart" style={styles.img} />{" "}
    <span style={styles.span}>0</span>
  </>
);
