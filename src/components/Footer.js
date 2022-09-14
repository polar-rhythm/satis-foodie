import React from 'react'
import '../styles/Footer.css'
import { FaWhatsapp, FaTwitter,FaReddit } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='foot'>
      <div className='footCon'>
        <div className='list'>
          
          <ul>
            <li><h1> Satis-Foodie</h1></li>
            <li><h2>Tasty 3square</h2></li>
          </ul>
          <ul>
            <li>Company</li>
            <li>pre-sale FAQ</li>
            <li>Submit a ticket</li>
          </ul>
          <ul>
            <li>Service</li>
            <li>Theme tweak</li>
          </ul>
          <ul>
            <li>Showcase</li>
            <li>Widgit kit</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Affiliates</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className='iconsCon'>
          <div className='icons'>
            <RiFacebookCircleLine color='white' />
            <FaWhatsapp color='white' />
            <FaTwitter color='white' />
            <FaReddit color='white' />
          </div>
        </div>
      </div>
      <div>
        you can visit our other websites at
      </div>
    </div>
  )
}

export default Footer;