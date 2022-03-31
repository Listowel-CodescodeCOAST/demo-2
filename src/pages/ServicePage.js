import React from 'react'
import { Link } from 'react-router-dom'
import styles from "react-dom"

const ServicePage = () => {
  return (
    <div className='image'>
      <h2 className='style'>We provide quality, afordable
        and ultra-modern solutions for your roofing.</h2>
      <Link to="/contact"> <button className='button'>Contact Us</button></Link>
 </div>
  );
};

export default ServicePage