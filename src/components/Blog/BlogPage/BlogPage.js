import React, { useEffect, useState } from "react";
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
  console.log(blogs);
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
            <div>2</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogPage;