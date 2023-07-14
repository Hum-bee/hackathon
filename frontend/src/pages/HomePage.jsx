import Header from "../components/Header";
import Featured from "../components/FeaturedProducts";
import { useEffect, useState } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);

  return (
    <>
    <div style={{ marginTop: "-25px "}}> <Header /> </div>
    <div style={{ marginTop: "-10px "}}> <Featured /> </div>
    </>
  );
}

export default HomePage;
