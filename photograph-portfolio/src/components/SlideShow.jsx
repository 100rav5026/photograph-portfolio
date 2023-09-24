import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeSliderOne from '../images/homeSliderOne.PNG'

const Slideshow = () => {
    const slides = [
      {
        image: homeSliderOne,
        caption: 'Slide 1',
      },
      {
        image: homeSliderOne,
        caption: 'Slide 2',
      },
      // Add more slide objects as needed
    ];
  
    return (
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.caption} className="carousel-image"/>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default Slideshow;
  