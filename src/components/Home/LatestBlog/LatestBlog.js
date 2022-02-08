import React, { useEffect, useState } from "react";
import Container from "../../Styles/Container.styles";
import TitleHeader from "../../Styles/TitleHeader.styles";
import SingleLatestBlog from "../SingleLatestBlog/SingleLatestBlog";
import "./LatestBlog.css";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const url = "/latestBlog.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <Container>
        <TitleHeader>Latest Blog</TitleHeader>
        <div className="latest-blog-container">
          {blogs.map((blog) => (
            <SingleLatestBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default LatestBlog;
