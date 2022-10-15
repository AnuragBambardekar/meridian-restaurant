import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    {/*Text info */}
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The Taste of Tradition</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Meridian offer aficionados a rich experience of Pan Asian cuisine in an ambiance resembling the culture of Asia. Meridian is designed to give you an authentic experience, its live stations and tepanyaki grills recreate the splendor of Asian cuisine. Savor the mysteries of Asia from China, Thailand, Japan & other parts of South Asia as the restaurant will embark you on a journey that has a high degree of homogeneity and authenticity.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    {/*Header Image */}
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
