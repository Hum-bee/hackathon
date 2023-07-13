import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { Store } from "../Store";

const NavBar = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container w-25">
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              alt=""
              src="https://www.argusleader.com/gcdn/-mm-/1cc705747a45cdbf3238b36b25533ae3e300e6ac/c=0-20-550-331/local/-/media/2016/05/16/SiouxFalls/SiouxFalls/635990304118662990-travelers-share.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
              width="50"
              height="40"
              className="d-inline-block align-top"
              style={{ marginRight: "10px" }}
            />{" "}
            Hardware Galore
          </Link>
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto mx-1">
          <Nav.Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="mx-auto" icon={faHome} /> Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/products"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="mx-auto" icon={faBookOpen} /> Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Nav className="me-auto">
              <Link
                to="/cart"
                className="nav-link"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FontAwesomeIcon className="mx-auto" icon={faCartShopping} />{" "}
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
