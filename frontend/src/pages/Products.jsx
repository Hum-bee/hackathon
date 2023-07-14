import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Products = () => {
  console.log("Products component is rendered!");

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const limit = 4;

  const { setCartItems } = useContext(CartContext); // Use setCartItems from context

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const fetchAllProducts = async () => {
    console.log("fetchAllProducts called");
    try {
      const response = await fetch(
        `http://localhost:5000/products?page=${page}&limit=${limit}&searchTerm=${searchTerm}&filter=${filter}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetchAllProducts();
  }, [page, searchTerm, filter]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Container
            style={{
              backgroundColor: "#E1E1CA",
              padding: "15px",
              marginTop: "20px",
            }}
          >
            <Form style={{ backgroundColor: "f0f0f0" }}>
              <Form.Group controlId="formSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search Products"
                  onChange={handleSearch}
                />
              </Form.Group>
              <Form.Group controlId="formFilter" style={{ marginTop: "5px" }}>
                <Form.Label>Filter by Category</Form.Label>
                <Form.Control as="select" onChange={handleFilter}>
                  <option value="">All</option>
                  <option value="CPU">CPU</option>
                  <option value="Mother Board">Mother Board</option>
                  <option value="Storage">Storage</option>
                  <option value="Video Card">Video Card</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Button
              onClick={prevPage}
              disabled={page === 1}
              style={{ marginRight: "3px", marginTop: "7px" }}
            >
              Previous
            </Button>
            <Button
              onClick={nextPage}
              style={{ marginLeft: "3px", marginTop: "7px" }}
            >
              Next
            </Button>
          </Container>
        </Col>
        <Col md={8}>
          <Row style={{ marginTop: "20px" }}>
            {products.map((product, index) => (
              <Col md={6} key={product._id}>
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
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
