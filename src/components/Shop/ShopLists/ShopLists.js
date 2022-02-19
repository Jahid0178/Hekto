import React, { useEffect, useState } from "react";
import Container from "../../Styles/Container.styles";
import ShopList from "../ShopList/ShopList";
import "./ShopLists.css";

const ShopLists = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "/fakeData/allProducts.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="page-title">
        <h2>Shop List</h2>
      </div>
      <Container>
        {products.map((product) => (
          <ShopList key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default ShopLists;
