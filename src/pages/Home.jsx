import React from "react";
import Banner from "../components/Home/Banner/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../components/Home/LatestProduct/LatestProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
    </div>
  );
};

export default Home;
