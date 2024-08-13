import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer'; 
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="BlogPage">
      {/* <Navbar /> */}
      
      <div className="blog-container">
        <div className="blog-content">
          <h1>Welcome to the Blog</h1>
          <div className="blog-post">
            <h2>Blog Post Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.
            </p>
          </div>

          <div className="blog-post">
            <h2>Second Blog Post</h2>
            <p>
              Phasellus non felis malesuada, faucibus turpis eu, gravida sapien. Nullam in magna quis augue ultrices viverra.
            </p>
          </div>
        </div>
        
        <div className="blog-sidebar">
          <h3>About Me</h3>
          <p>Short bio about the author of the blog.</p>
          
          <h3>Recent Posts</h3>
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
          </ul>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default BlogPage;

   
