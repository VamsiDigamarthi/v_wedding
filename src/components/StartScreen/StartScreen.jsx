import { Link } from "react-router-dom";
import "./StartScreen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactPlayer from "react-player";

export const StartScreen = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="start__main">
      <Slider {...settings}>
        <div>
          <img
            className="start__image"
            src="https://vama.app/blog/wp-content/uploads/2022/08/who-was-lord-krishnas-true-love.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="start__image"
            src="https://www.crafttrip.in/image/cache/catalog/radha-krishna/lord-krishna-radha-art-painting-divine-love-wall-canvas-800x534.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="start__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOA9RCkaW6s7xdU8mBatn6shcBzmhZlk3ew&usqp=CAU"
            alt=""
          />
        </div>
      </Slider>

      <div className="color"></div>
      <div className="name__container">
        <h1>Manu & Hanu</h1>
        <h5>We're getting married</h5>
        <h1>Nov 19 2023</h1>
        <h1>09-41 Am </h1>
        <hr />
      </div>
      <div>
        <ReactPlayer url="https://youtu.be/1fTS5rTJzuc" width="100%" />
        {/* <video>
          <source src="https://youtu.be/1fTS5rTJzuc" type="video/mp4" />
        </video> */}
      </div>
      <div className="start__div">
        {/* <h1>vivek weds sneha</h1> */}
        <div>
          <span>Manu</span>
          <span>weds</span>
          <span>Hanu</span>
        </div>
        <img src="images/flower.png" alt="" />
      </div>
      <div className="start_-_name">
        <h1>Ms.Manu</h1>
        <img
          src="https://i.pinimg.com/originals/39/a0/ff/39a0ffcfae6cf74efe08dc6d72d01967.jpg"
          alt=""
        />
      </div>
      <div className="start_-_name dd">
        <img
          src="https://images.firstpost.com/wp-content/uploads/2023/09/Untitled-design-2023-09-04T135920.245.jpg"
          alt=""
        />
        <h1>Mr.Hanu</h1>

        <img
          className="gilr_image"
          src="https://static.vecteezy.com/system/resources/previews/021/048/071/original/toran-marigold-decoration-diwali-karwa-choth-indian-festivals-png.png"
          alt=""
        />
      </div>

      <div className="funtion">
        <h1>Functions</h1>
        <img src="images/cal.png.png" alt="" />
      </div>

      <div className="viwe__map sss">
        <h2>Naandi Punyaha</h2>

        <p>
          Venue : <span>Raj & Sri Convention Hall</span>
        </p>
        <div>
          <span>Thadepalli Gudam</span>
          <Link to="location">
            <button className="location">Location</button>
          </Link>
        </div>
        <img src="images/d.png" alt="" />
      </div>
      <div className="mehendi">
        <img
          src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/615/129/new_medium/movie'ing_moments.jpg?1544101567"
          alt=""
        />
      </div>

      <div className="viwe__map sss">
        <h2>Mehendi</h2>

        <p>
          Venue : <span>jalikakinada</span>
        </p>
        <div>
          <span>At Thadepalli Gudam</span>
          <Link to="location">
            <button className="location">Location</button>
          </Link>
        </div>
        <img src="images/d.png" alt="" />
      </div>
      {/* weddings */}
      <div className="mehendi">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_wedding_Delhi.jpg"
          alt=""
        />
      </div>

      <div className="viwe__map sss">
        <h2>Wedding</h2>
        <p>November 11 2023, Sunday</p>
        <p>09.41 AM</p>
        <p>
          Venue : <span>Raj & Sri Convention Hall</span>
        </p>
        <div>
          <span>Thadepalli Gudam</span>
          <Link to="location">
            <button className="location">Location</button>
          </Link>
        </div>
        <img src="images/d.png" alt="" />
      </div>
      {/* Lunch */}
      <div className="mehendi">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphBvnE93peUmbwfIKaS1smgI7_mbUUfzvRAXobB4gYLG16BEoCQG0k3KeCGd3Jn49q7I&usqp=CAU"
          alt=""
        />
      </div>
      <div className="viwe__map sss">
        <h2>Reception</h2>
        <p>November 11 2023, Sunday</p>
        <p>10.30 AM</p>
        <p>
          Venue : <span>Raj & Sri Convention Hall</span>
        </p>
        <div>
          <span>Thadepalli Gudam</span>
          <Link to="location">
            <button className="location">Location</button>
          </Link>
        </div>
        <img src="images/d.png" alt="" />
      </div>
      <div className="invited">
        <img src="images/inv.jpg" alt="" />
        <div>
          <h2>invited</h2>
          <h2>to</h2>
          <h2>celebrete with</h2>
          <h2>us</h2>
        </div>
      </div>
    </div>
  );
};
