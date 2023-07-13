import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        className="p-4  bg-light"
        style={{
          //   backgroundImage:
          //     "url(https://img.freepik.com/premium-photo/banner-with-open-book-turning-pages-intelligence-wisdom-education-concept-copy-space_361816-6168.jpg?w=1380)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid py-4 text-center">
          <h1 className="display-5 fw-bold">Welcome to Hardware Galore!</h1>
          <p className="col-md-6 offset-md-3 fs-5">
            An hardware store designed to provide components for all pc building
            needs. We offer a wide range of CPUs, motherboards, video cards and
            storage.
          </p>
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              color: "white",
              display: "inherit",
              alignItems: "center",
            }}
          >
            <button type="button" class="btn btn-dark">
              Search Products
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
