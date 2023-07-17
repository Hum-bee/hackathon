import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/CartContext";

const Featured = () => {
  const { setCartItems } = useContext(CartContext); // Use setCartItems from context

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const fetchAllProducts = async () => {
    console.log("fetchAllProducts called");
    try {
      const response = await fetch("http://localhost:5000/randomProducts");
      const products = await response.json();
      setProducts(products.slice(0, 3)); // currently set to only display 10 products
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.PRODUCT_NAME.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.CATEGORY_NAME.includes(filter)
    );
  });

  return (
    <Container fluid>
      <h4 className="display-8 fw-bold">Featured Products</h4>
      <Row>
        <Col md={12}>
          <Row style={{ marginTop: "10px" }}>
            {filteredProducts.map((product, index) => (
              <Col md={4} key={product._id}>
                <Card
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
                    <Link to={`/products/${product._id}`}>
                      <Button
                        variant="light"
                        className="mt-3"
                        style={{ marginRight: "5px", marginBottom: "5px" }}
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
