import React from "react";
import Banner from "../components/Home/Banner/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import LatestProduct from "../components/Home/LatestProduct/LatestProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LatestProduct />
    </div>
  );
};

export default Home;
