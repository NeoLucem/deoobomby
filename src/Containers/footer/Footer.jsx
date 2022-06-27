import React from 'react'
import './Footer.css'
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    let iconStyle = { color : '#64ffda'}
  return (
    <div>
        <div className='footer'>
            <div className='footer-description'>
                Designed & built by Deo Obomby
            </div>
            <div className='footer-links'>
                <li><a href="https://github.com/NeoLucem"><FaGithub style={iconStyle} /></a></li>
                <li><a href="mailto:deoobomby@gmail.com"><FaGoogle style={iconStyle} /></a></li>
                <li><a href="http://instagram.com/_neo.lucem_?igshid=YmMyMTA2M2Y="><FaInstagram style={iconStyle} /></a></li>
                <li><a href="https://linkedin.com/in/deo-gerard-obomby-ondaye-36a334227"><FaLinkedin style={iconStyle} /></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+2330561160094"><BsWhatsapp style={iconStyle} /></a></li>
            </div>
            <div className='footer-copy'>Copyright &copy; 2019</div>
        </div>
    </div>
  )
}

export default Footer