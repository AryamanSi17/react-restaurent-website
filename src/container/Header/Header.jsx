import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Memorable Events</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Experience elegance and sophistication in every detail. Our banquet hall offers the perfect setting for your special occasions, with exceptional service and ambiance.</p>
      <button type="button" className="custom__button">Discover Our Packages</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header