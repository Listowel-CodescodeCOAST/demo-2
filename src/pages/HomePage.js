import React from 'react'
import { Link } from 'react-router-dom';
import "./HomePage.css" 

const HomePage = () => {
  return (
    <div className='image'>
     <li>
       <Link to="about" className='style'>About Us</Link>
       </li>
       <li>
       <Link to="service" className='style'>Services</Link>
       </li>
       <li>
       <Link to="archives" className='style'>Archives</Link>
       </li>
     </div>
  );
};

export default HomePage;