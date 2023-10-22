import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const Post = () => {
  const [post, setPost] = useState(null);
  const router = useRouter()
  const { id:postId } = router.query;

  useEffect(() => {

    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/posts/${postId}`);
        const data = await response.json();
        setPost(data.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };    
    if(postId) fetchPost();    
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const {
    createdAt,
    title,
    introduction,
    description_overview,
    use_cases,
    key_features,
    benefits_impact,
    integration_implementation,
    challenges_limitations,
    future_trends_developments,
    conclusion,
  } = post;

  return (
    <div className="post-container">
      <h1 className="post-title">{title}</h1>
      <p className="post-date">Published on: {new Date(createdAt).toDateString()}</p>
      <div className="post-content">
        <p className="post-intro">{introduction}</p>
        <h2>Description Overview</h2>
        <p>{description_overview}</p>
        <h2>Use Cases</h2>
        <p>{use_cases}</p>
        <h2>Key Features</h2>
        <p>{key_features}</p>
        <h2>Benefits and Impact</h2>
        <p>{benefits_impact}</p>
        <h2>Integration and Implementation</h2>
        <p>{integration_implementation}</p>
        <h2>Challenges and Limitations</h2>
        <p>{challenges_limitations}</p>
        <h2>Future Trends and Developments</h2>
        <p>{future_trends_developments}</p>
        <h2>Conclusion</h2>
        <p>{conclusion}</p>
      </div>
    </div>
  );
};

