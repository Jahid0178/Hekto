import React, { useEffect, useState } from "react";
import Container from "../../Styles/Container.styles";
import TitleHeader from "../../Styles/TitleHeader.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TrendingProducts.css";
import { Pagination } from "swiper";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "/trendingProducts.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="trending-products-container">
      <Container>
        <TitleHeader>Trending Products</TitleHeader>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <TrendingProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default TrendingProducts;
