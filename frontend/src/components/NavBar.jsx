import { useContext } from "react";
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
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <img
              alt=""
              src="https://1000logos.net/wp-content/uploads/2020/09/Travelers-Logo.jpg"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Link>
        </Navbar.Brand>
      </div>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto mx-1">
          <Nav.Link>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <FontAwesomeIcon className="mx-auto" icon={faHome} /> Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/products"
              style={{ color: "black", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="mx-auto" icon={faBookOpen} /> Products
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
