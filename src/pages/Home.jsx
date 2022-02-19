import React from "react";
import Banner from "../components/Home/Banner/Banner";
import DiscountProduct from "../components/Home/DiscountProduct/DiscountProduct";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import LatestBlog from "../components/Home/LatestBlog/LatestBlog";
import LatestProducts from "../components/Home/LatestProduct/LatestProducts";
import Newsletter from "../components/Home/Newsletter/Newsletter";
import OurClient from "../components/Home/OurClient/OurClient";
import ShopexOffer from "../components/Home/ShopexOffer/ShopexOffer";
import TopCategories from "../components/Home/TopCategories/TopCategories";
import TrendingProducts from "../components/Home/TrendingProducts/TrendingProducts";
import TrendingProductsBanner from "../components/Home/TrendingProductsBanner/TrendingProductsBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <TrendingProductsBanner />
      <TrendingProducts />
      <DiscountProduct />
      <TopCategories />
      <Newsletter />
      <OurClient />
      <LatestBlog />
    </div>
  );
};

export default Home;
