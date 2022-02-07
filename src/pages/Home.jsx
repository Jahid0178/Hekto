import React from "react";
import Banner from "../components/Home/Banner/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../components/Home/LatestProduct/LatestProducts";
import ShopexOffer from "../components/Home/ShopexOffer/ShopexOffer";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
    </div>
  );
};

export default Home;
