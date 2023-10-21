import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostCard } from '../../Components/Blog/PostCard';
import './Blog.css'; // Import the CSS file for Blog component styles
import image1 from '/post-images/aidan-hancock-dA0SA67EgOQ-unsplash.jpg'
import image2 from '/post-images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg'
import image3 from '/post-images/douglas-lopes-ehyV_XOZ4iA-unsplash.jpg'
import image4 from '/post-images/fahim-muntashir-OqOhYRjn_JY-unsplash.jpg'
import image5 from '/post-images/fernando-hernandez-efzwcMRM6j4-unsplash.jpg'
import image6 from '/post-images/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg'

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = [
    image1
    ,image2
    ,image3
    ,image4
    ,image5
    ,image6
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/posts');
        if(response){          
          setPosts(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-grid">
      {!loading &&
        posts.map((post,index) => (
          <div key={post.id} className="post-card-container">
            <PostCard post={post.attributes} image={images[index]}/>
          </div>
        ))}
    </div>
  );
};

export default Blog;
