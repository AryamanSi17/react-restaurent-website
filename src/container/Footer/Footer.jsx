import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import shambhavi from '../../assets/shambhavi.png'
const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Tender Heart School , Nahar Road , Adhaar Khera , Kursi Road , Lucknow</p>
        <p className="p__opensans">+91 92354 23789</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={shambhavi} alt="footer_logo" />
        <p className="p__opensans">&quot;Some line will go here !.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt=''/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 SRB. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
