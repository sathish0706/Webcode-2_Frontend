import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider ()  {
    return(
  <Carousel autoPlay className="slider">
    <div>
      <img
        alt="Loading"
        src="https://i.ytimg.com/vi/fV2vcFWinDc/maxresdefault.jpg"
      />
      <p className="legend">Wellcome To My App</p>
    </div>
    
    <div>
      <img 
      alt="Loading" 
      src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/double-treat-box.ae27af4e8fdf6f9122a9b4062398b823.1.jpg" />
      <p className="legend">Wellcome To My App</p>
    </div>
    
    <div>
      <img 
      alt="Loading" 
      src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?w=2000" />
      <p className="legend">Wellcome To My App</p>
    </div>
    
  </Carousel>
)};
