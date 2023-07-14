import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import Recommended from "../components/Recommended";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => (
        <Card key={index} style={{ marginBottom: "10px" }}>
          <Card.Body>
            <Card.Title>{item.PRODUCT_NAME}</Card.Title>
            <Card.Text>Price: {item.LIST_PRICE}</Card.Text>
            <Button variant="danger" onClick={() => removeFromCart(item)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Recommended />
    </div>
  );
}

export default Cart;
