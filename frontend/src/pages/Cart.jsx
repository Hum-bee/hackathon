import React, { useContext, useState } from "react";
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  var total = 0;

  cartItems.map((item) => (total += item.LIST_PRICE));

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Col md={10}>
        <ListGroup>
          <Col md={4}>
            <p> please work</p>
          </Col>
          <Col md={4}>
            <h2> please</h2>
          </Col>
        </ListGroup>
      </Col>

      <Row>
        <ListGroup>
          {cartItems.map((item, index) => (
            <Col md={6}>
              <ListGroup.Item>
                <Row className="align-items-center">
                  <Col md={9}>
                    <h4>
                      <b>{item.PRODUCT_NAME}</b>
                    </h4>
                  </Col>
                  {/* <Col md={4}>
                    <Button
                      variant="light"
                      onClick={handleClickMinus}
                      disabled={count === 1}
                    >
                      {" "}
                      <FontAwesomeIcon
                        className="mx-auto"
                        icon={faCircleMinus}
                      />
                    </Button>
                    <span>{count}</span>{" "}
                    <Button
                      variant="light"
                      onClick={handleClickPlus}
                      disabled={count === item.QUANTITY}
                    >
                      <FontAwesomeIcon
                        className="mx-auto"
                        icon={faCirclePlus}
                      />
                    </Button>
                  </Col> */}
                  <Col md={3}>
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
            </Col>
          ))}
        </ListGroup>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <h3>Subtotal: ${total}</h3>
              </ListGroup>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    disabled={cartItems.length === 0}
                    onClick={() => navigate("/cart/ShippingAddress")}
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
