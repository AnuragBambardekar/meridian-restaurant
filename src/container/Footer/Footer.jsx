import React from 'react';

import { FooterOverlay,Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>1684 Bloomfield Way, Mercer, Maine-04957</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.meridian} alt="meridian"/>
        <p className='p__opensans'>"Nothing brings people together like good food."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: '15px'}}/>

        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 am</p>
      </div>
    </div>

    <div className='footer__copyright'>
        <p className='p__opensans'>2022 Meridian. All Rights Reserved. Developed by Anurag Bambardekar</p>
        <p className='p__opensans'>Referenced Adrian Hajdin - JavaScript Mastery - project_modern_ui_ux_restaurant</p>
      </div>

  </div>
);

export default Footer;
