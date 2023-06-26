import Carousel from 'react-bootstrap/Carousel';
import carouselone from './images/carouselone.jpg';
import carouseltwo from './images/carouseltwo.jpg';
import carouselthree from './images/carouselthree.jpg';
import '../components/contentstyle.css';

export default function DetailCarousel() {
  return (
    <Carousel className='carousel slide col-10 offset-1 mt-3'>
      <Carousel.Item>
        <img className='card-img'
          src={carouselone}
          alt="First slide"
        />
        <div className="card-img-overlay">
          <div className="card-body text-light">
            <p className="card-title display-1 ms-5 w-50 text-capitalize p-5">get started with us</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className='card-img'
          src={carouseltwo}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 className="carousel-caption text-capitalize">turning educational dream to reality</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='card-img'
          src={carouselthree}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="carousel-caption d-none d-md-block text-capitalize">
          <h1>empowering the youth</h1>
          <h3>with access to a better tomorrow</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
