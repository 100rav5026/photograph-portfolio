import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slideshow = () => {
    const slides = [
      {
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Slide 1',
      },
      {
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Slide 2',
      },
      // Add more slide objects as needed
    ];
  
    return (
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.caption} className="carousel-image"/>
            <p className="legend">{slide.caption}</p>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default Slideshow;
  