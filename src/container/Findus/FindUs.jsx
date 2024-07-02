import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const handleVisitUsClick = () => {
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position)=>{
    const latitude=position.coords.latitude;
    const longitude = position.coords.longitude;
    const destination = "26.95274,80.9843452";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
    window.open(googleMapsUrl, "_blank");
  });
} 
  else {
    alert("Geolocation is not supported by this browser");
  }
};
return (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Tender Heart School , Nahar Road , Adhaar Khera , Kursi Road , Lucknow</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={handleVisitUsClick}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
    );
};

export default FindUs;