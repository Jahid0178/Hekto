import React from "react";
import { Link } from "react-router-dom";
import "./SingleLatestBlog.css";

const SingleLatestBlog = (props) => {
  const { blogImage, author, blogDate, blogTitle, blogDesc } = props.blog;
  return (
    <div className="single-blog-container">
      <div className="single-blog-content">
        <img className="blog-img" src={blogImage} alt="" />
        <div className="blog-header">
          <p className="author">{author}</p>
          <p>{blogDate}</p>
        </div>
        <div>
          <h3 className="blog-title">{blogTitle}</h3>
          <p className="blog-desc">{blogDesc}</p>
          <Link className="read-more-link" to="#">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleLatestBlog;
