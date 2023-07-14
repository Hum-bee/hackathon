import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../pages/CartContext";
import { Link } from "react-router-dom";

const Recommended = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const [recProducts, setRecProducts] = useState([]);
  const [category, setCategory] = useState(1);
  const [warehouse, setWarehouse] = useState(2);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const fetchSimilarProducts = async () => {
    console.log("fetchSimilarProducts called");
    try {
      const response = await fetch(
        `http://localhost:5000/products/${category}/${warehouse}`
      );
      const data = await response.json();
      setRecProducts(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    fetchSimilarProducts();
  }, [category, warehouse]);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleWarehouse = (event) => {
    setWarehouse(event.target.value);
  };

  return (
    <Container fluid>
      <h4 className="display-8 fw-bold">Recommended Products</h4>

      {recProducts.map((product, index) => (
        <Card
          key={index}
          style={{
            width: "25rem",
            marginBottom: "20px",
            backgroundColor: "#E99292",
          }}
        >
          <Card.Body>
            <Card.Title>{product.PRODUCT_NAME}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {product.CATEGORY_NAME}
            </Card.Subtitle>
            <Card.Text>
              List Price: {product.LIST_PRICE}
              <br />
              {product.DESCRIPTION.split(",").map((item, key) => {
                let formattedItem = item.replace(":", ": ");
                return (
                  <span key={key}>
                    {formattedItem}
                    <br />
                  </span>
                );
              })}
              <br />
            </Card.Text>
          </Card.Body>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-50px", marginLeft: "10px" }}
          >
            <Link to={`/products/${product.PRODUCT_ID}`}>
              <Button
                variant="light"
                className="mt-3"
                style={{ marginRight: "5px", marginBottom: "5px" }}
              >
                View
              </Button>
            </Link>
            <Button
              variant="dark"
              className="mt-3"
              style={{ marginLeft: "5px", marginBottom: "5px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Recommended;
