import React, { useContext, useState } from 'react';
import { Card, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  let total = 0;

  cartItems.map((item) => (total += item.LIST_PRICE));

  
  const [formFields, setFormFields] = useState({
    shippingAddressL1: '',
    shippingAddressL2: '',
    shippingCity: '',
    shippingZip: '',
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const { shippingAddressL1, shippingAddressL2, shippingCity, shippingZip, nameOnCard, cardNumber, expirationDate, cvv } = formFields;
    if (!shippingAddressL1 || !shippingCity || !shippingZip || !nameOnCard || !cardNumber || !expirationDate || !cvv) {
      setError('Missing fields!');
      return;
    }

    const order = {
        shippingAddress: formFields.shippingAddressL1 + ' ' + formFields.shippingAddressL2 + ', ' + formFields.shippingCity + ', ' + formFields.shippingZip,
        nameOnCard: formFields.nameOnCard,
        cardNumber: formFields.cardNumber.slice(-4), // We store only the last 4 digits
        subtotal: total.toFixed(2),
    };

    fetch(`http://localhost:5000/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    })
    .then(response => response.json())
    .then(data => {

        console.log("Order created with id:", data.orderId)

        // We reset the fields and clear the cart
        setError(null);
        setFormFields({
        shippingAddressL1: '',
        shippingAddressL2: '',
        shippingCity: '',
        shippingZip: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        });
        clearCart();
        alert("Order has been placed!");
        // We navigate back to the home screen
        navigate("/");
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 
  };

  return (
    <div>
      <Row className="d-flex" style={{ marginTop: "15px"}}>
        <Col md={5} >
        <h3 className="text-center" >Shipping</h3>
          <Card style={{ marginLeft:"10px", marginTop: "20px", backgroundColor: "#E1E1CA" }}>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Street 1</Form.Label>
                  <Form.Control
                    type="text"
                    name="shippingAddressL1"
                    value={formFields.shippingAddressL1}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Street 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="shippingAddressL2"
                    value={formFields.shippingAddressL2}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="shippingCity"
                    value={formFields.shippingCity}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    name="shippingZip"
                    value={formFields.shippingZip}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7} >
        <h3 className="text-center" style={{ marginLeft: "220px" }}>Cart</h3>
          <Card style={{ marginRight:"10px", marginLeft:"220px", marginTop: "20px", backgroundColor: "#E1E1CA" }}>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control
                    type="text"
                    name="nameOnCard"
                    value={formFields.nameOnCard}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={formFields.cardNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expirationDate"
                    value={formFields.expirationDate}
                    onChange={handleChange}
                    placeholder="MM/DD/YR"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    value={formFields.cvv}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center" style={{ marginTop: "15px"}}>
        <Button variant="primary" onClick={handlePlaceOrder} style={{ width: "7rem"}}>
          Place Order
        </Button>
      </Row>
      {error && <Alert variant="danger" style={{ marginTop: "15px" }}>{error}</Alert>}
    </div>
  );
}

export default Checkout;
