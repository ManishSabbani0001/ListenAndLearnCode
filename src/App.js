import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from './Carousel_Images/img13.jpg';
import pic2 from './Carousel_Images/img7.jpg'
import pic3 from './Carousel_Images/img5.jpg'
import './App.css'


  const settings1 = {
    dots: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000
  };
  const settings2 = {
    dots: false,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000
  };
  const settings3 = {
    dots: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true
  };
  const App = () => {
  return (
    <div className = "Container">
      <h2>Carousel Component</h2>
      <Slider {...settings1}>
        <div>
          <div className="imgDiv">
        <img src={pic1} alt="img13" id="cc" height='100' width='300'></img> </div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic2} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic3} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>THIRD SLIDE</h3>
        </div>
      </Slider>
      <h2>Carousel Component</h2>
      <Slider {...settings2}>
        <div>
          <div className="imgDiv">
        <img src={pic1} alt="img13" id="cc" height='100' width='300'></img> </div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic2} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic3} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>THIRD SLIDE</h3>
        </div>
      </Slider>
      <h2>Carousel Component</h2>
      <Slider {...settings3}>
        <div>
          <div className="imgDiv">
        <img src={pic1} alt="img13" id="cc" height='100' width='300'></img> </div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic2} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <div className="imgDiv">
        <img src={pic3} alt="img13" id="cc" height='250' width='300'></img></div>
          <h3>THIRD SLIDE</h3>
        </div>
      </Slider>
    </div>
  );
};

export default App;
