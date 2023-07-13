import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container w-25">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}>
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
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="mx-auto" icon={faCartShopping} /> Cart
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
