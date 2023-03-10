import React from 'react';
import logo from '../../../assets/logo132.png'
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
         
          <img src={logo} className="w-16" alt="" />
          <h2 className='text-3xl text-green-400'>Alpha Mobile</h2>
          <p>Providing used mobile buying and selling service since 2022</p>
        </div> 
        <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">

      <a href='https://github.com/Sizan75' rel='noreferrer' target='_blank'>
        <FaGithubSquare className='text-3xl hover:text-blue-600'></ FaGithubSquare>
      </a> 
      <a href='https://www.facebook.com/sakiuz.zaman.1/' rel='noreferrer' target='_blank'>
        <FaFacebookSquare className='text-3xl hover:text-blue-600'></FaFacebookSquare>
      </a> 
      <a href='https://www.linkedin.com/in/md-saki-uz-zaman/' rel='noreferrer' target='_blank'>
      <FaLinkedin className='text-3xl hover:text-blue-600'></FaLinkedin>
      </a>
    </div>
  <div className=' mt-6'>
      <h4 className='text-base'>Email: sakiuzzaman26@gmail.com</h4>
    </div>
  </div>
      </footer>
    );
};

export default Footer;