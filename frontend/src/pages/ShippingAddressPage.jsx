import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
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
                      <h1 className="my-3">Shipping Address</h1>
                      <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controllId="fullName">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="address">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="city">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="postalCode">
                          <Form.Label>Postal Code</Form.Label>
                          <Form.Control
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controllId="country">
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <div className="mb-3">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => navigate("/cart/CreditCard")}
                          >
                            Continue
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
