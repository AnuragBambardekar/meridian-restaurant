import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    {/*Chef image */}
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='Chef'/>
    </div>

    {/*Chef's word header */}
    <div className='app__wrapper_info'>
      <SubHeading title="Chef&apos;s Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      
      {/*Chef Info */}
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Pan Asian Delicacies is our specialty.</p>
        </div>
        <p className='p__opensans'>Chef Kevin is lead and working under him are Top Chefs from all over Asia cooking authentic, lip-smacking unique regional recipies from their own respective homelands.</p>
      </div>

      {/*Chef Signature */}
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
