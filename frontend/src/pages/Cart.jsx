import React, { useContext, useState } from "react";
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCirclePlus,
  // faCircleMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  var total = 0;

  cartItems.map((item) => (total += item.LIST_PRICE));

  return (
    <div>
      <Row className="d-flex" style={{marginTop: "15px" }}>
        <Col md={6} style={{ marginLeft: "10px"}}>
          <h3>Shopping Cart</h3>
          <Card style={{ height: '50vh', overflowY: 'scroll', backgroundColor: "#E1E1CA" }}>
            <Card.Body>
              <ListGroup>
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row className="align-items-center">
                      <Col md={9}>
                        <h5>
                          <b>{item.PRODUCT_NAME}</b>
                        </h5>
                      </Col>
                      <Col md={3} className="d-flex justify-content-end">
                        <Button
                          variant="light"
                          onClick={() => removeFromCart(item)}
                        >
                          <FontAwesomeIcon className="mx-auto" icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                    <Row className="align-item-center">
                      <Col md={3}>Price: ${item.LIST_PRICE}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card style={{ marginRight: "35px", marginTop: "40px", float: "right", backgroundColor: "#DAF1F5", }}>
            <Card.Body>
              <ListGroup variant="flush">
                <h3>Subtotal: ${total.toFixed(2)}</h3>
              </ListGroup>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    disabled={cartItems.length === 0}
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
