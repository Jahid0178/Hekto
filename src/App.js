import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Error from "./components/Error/Error";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Shared/Footer/Footer";
import HeadingNav from "./components/Shared/HeadingNav/HeadingNav";
import Navigation from "./components/Shared/Navigation/Navigation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeadingNav />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
