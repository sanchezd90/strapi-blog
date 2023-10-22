import React from "react";
import Image from 'next/image';

export const PostCard = ({ post, image }) => {
  const cardStyle = {
    border: "1px solid #eaeaea",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    height: '100vh', // Set the fixed height,
    display:'flex',
    flexDirection:"column"
  };

  const titleStyle = {
    fontSize: "1.5rem",
    marginBottom: "10px",
  };

  const contentStyle = {
    fontSize: "1rem",
    marginBottom: "10px"    
  };

  const strongStyle = {
    fontWeight: "bold",
  };

  const imageStyle = {
    width: '100%',
    height: '40vh',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{post?.title}</h2>
      {<Image src={image} alt="Post" style={imageStyle} />}
      <p style={contentStyle}>
        {post?.introduction} {post?.description_overview}
      </p>
      <p style={contentStyle}>
        <strong style={strongStyle}>Published At: </strong>
        {post?.publishedAt}
      </p>
    </div>
  );
};
