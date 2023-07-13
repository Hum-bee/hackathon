import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Store } from "../Store";

function ProductPage() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...ProductPage, quantity: 1 },
    });
  };
  return (
    <div>
      <Button onClick={addToCartHandler} variant="primary">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductPage;
