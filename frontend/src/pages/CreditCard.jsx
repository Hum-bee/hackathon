import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ShippingAddressScreen() {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [CVC, setCVC] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="container small-container">
        <div className="container small-container">
          <div className="container small-container">
            <div className="container small-container">
              <div className="container small-container">
                <div className="container small-container">
                  <div className="container small-container">
                    <div className="container small-container">
                      <h1 className="my-3">Credit Card Information</h1>
                      <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controllId="cardNumber">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="name">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="validThru">
                          <Form.Label>Valid Thru</Form.Label>
                          <Form.Control
                            value={validThru}
                            onChange={(e) => setValidThru(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="CVC">
                          <Form.Label>CVC</Form.Label>
                          <Form.Control
                            value={CVC}
                            onChange={(e) => setCVC(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <div className="mb-3">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => navigate("/cart/ThankYou")}
                          >
                            Make Payment
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
