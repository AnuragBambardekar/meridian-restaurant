import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>{/*position relative to background */}

    {/*overlay(japanese theme enzo) position absolute:relative to app_aboutus */}
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.M} alt="faint themed background"/>
    </div>
    
    {/*Now I want AboutUs,Knife,OurHistory on top of overlay(japanese theme enzo) */}
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Open 7 days a week, our guests enjoy authentic taste and cooking from across Asia lovingly prepared from age-old treasured family recipes alongside a selective cocktail menu that has been thoughtfully crafted to intrigue and delight; completing an exceptional culinary experience</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Since its inception in 2022 at Mumbai, Meridian has grown to become a favoured brand for foodies to get their hands on flavorful adventures that the Asian cuisine offers; reflecting a history inspired by surrounding countries and ancient traditions and cultures within Asia.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
