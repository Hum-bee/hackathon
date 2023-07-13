import Header from "../components/Header";
import Featured from "../components/FeaturedProducts";
import { useEffect, useState } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);

  return (
    <>
      <Header />
      <Featured />
    </>
  );
}

export default HomePage;
