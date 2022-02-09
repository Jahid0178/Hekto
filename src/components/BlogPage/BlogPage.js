import React from "react";
import Container from "../Styles/Container.styles";
import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div>
      <div className="page-container">
        <div className="page-title">
          <h2>Blog Page</h2>
        </div>
      </div>
      <Container>
        <div className="blog-inner-container">
          <div>1</div>
          <div>2</div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
