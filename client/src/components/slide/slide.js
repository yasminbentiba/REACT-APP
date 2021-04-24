import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const Slideshow = () => {
    return (
      <div className="divslide">
        <Slide easing="ease">
          <div className="divslide each-slide">
            <div className="divslide"style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span classname="spanslide">Slide 1</span>
            </div>
          </div>
          <div className="divslide each-slide">
            <div className="divslide"style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span classname="spanslide">Slide 2</span>
            </div>
          </div>
          <div className="divslide each-slide">
            <div className="divslide"style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span classname="spanslide">Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;