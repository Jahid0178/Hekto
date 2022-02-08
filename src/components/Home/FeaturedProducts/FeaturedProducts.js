import React, { useEffect, useState } from "react";
import Container from "../../Styles/Container.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import "./FeaturedProducts.css";
import TitleHeader from "../../Styles/TitleHeader.styles";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "featuredProduct.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Container>
        <TitleHeader>Featured Product</TitleHeader>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <FeaturedProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default FeaturedProducts;
