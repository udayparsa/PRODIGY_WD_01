import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop id="background-video">
        <source src="https://cdn.pixabay.com/video/2021/04/12/70796-538877060_large.mp4?width=1920&hash=a2322a0264c76f4785f40ebfdc98ceef3e1c60ee" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Home Content</h1>
        <p>Welcome to the home page.</p>
      </div>
    </div>
  );
};

export default Home;