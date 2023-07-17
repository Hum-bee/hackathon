import { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [id]);
 
  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <Card
        style={{
          width: "20rem",
          backgroundColor: "#95C9BF",
          justifyContent: "center",
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
            {product.DESCRIPTION &&
              product.DESCRIPTION.split(",").map((item, key) => {
                let formattedItem = item.replace(":", ": ");
                return (
                  <span key={key}>
                    {formattedItem}
                    <br />
                  </span>
                );
              })}
            Quantity: {product.QUANTITY}
            <br />
            City: {product.CITY}
            <br />
            Country: {product.COUNTRY_NAME}
            <br />
            Warehouse: {product.WAREHOUSE_NAME}
            <br />
            Warehouse ID: {product.WAREHOUSE_ID}
            <br />
            Location ID: {product.LOCATION_ID}
            <br />
            Address: {product.ADDRESS}
            <br />
            Postal Code: {product.POSTAL_CODE}
            <br />
            State: {product.STATE}
          </Card.Text>
          <Button variant="dark" onClick={addToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductPage;
