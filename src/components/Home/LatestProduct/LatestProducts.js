import React, { useEffect, useState } from "react";
import Container from "../../Styles/Container.styles";
import TitleHeader from "../../Styles/TitleHeader.styles";
import LatestProduct from "../LatestProducts/LatestProduct";
import "./LatestProducts.css";

const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    const url = "latestProduct.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLatestProducts(data));
  }, []);
  return (
    <div className="latest-products-container">
      <Container>
        <TitleHeader>Latest Product</TitleHeader>
        <div className="latest-products-content">
          {latestProducts.map((product) => (
            <LatestProduct key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestProducts;
