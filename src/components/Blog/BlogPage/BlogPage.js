import React, { useEffect, useState } from "react";
import OurClient from "../../Home/OurClient/OurClient";
import Container from "../../Styles/Container.styles";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const url = "/fakeData/blogData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="page-title">
        <h2>Blog Page</h2>
      </div>
      <div>
        <Container>
          <div className="blogs-container">
            <div>
              {blogs.map((blog) => (
                <SingleBlog key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="blog-side-nav">2</div>
          </div>
          <OurClient />
        </Container>
      </div>
    </div>
  );
};

export default BlogPage;
