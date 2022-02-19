import React from "react";
import "./SingleBlog.css";

const SingleBlog = (props) => {
  const { blogImage, author, blogDate, blogTitle, blogDesc } = props.blog;
  return (
    <div className="blog-container">
      <div className="blog-content">
        <img className="blogImage" src={blogImage} alt={blogTitle} />
        <div className="blog-body">
          <div className="blog-header">
            <span className="author">{author}</span>
            <span className="blog-date">{blogDate}</span>
          </div>
          <div className="blog-content">
            <h2>{blogTitle}</h2>
            <p>{blogDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
