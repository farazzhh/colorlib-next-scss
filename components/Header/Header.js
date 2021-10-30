import style from "./Header.module.scss";
import { FaSlideshare } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "../Slider/Slider";

// Path of Images of Slider
const images = [
  "/assets/images/header2.jpg",
  "/assets/images/header1.jpg",
  "/assets/images/header3.jpg",
];

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <header className={style.header} data>
      <div className={style.header__wrapper} data-aos="fade-left">
        <div className={style.header__wrapper_section1}>
          <div className={style.header__wrapper_section1_content}>
            <FaSlideshare />
            <h1 className="animate__animated animate__fadeInUp ">
              Amazing workspace you will love
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Discover our spaces that defines a new dimension of luxury.
            </p>
            <a href="#">Explore Oure Spaces</a>
          </div>
        </div>

        <div className={style.header__wrapper_section2}>
          {/* images slider */}
          <Slider images={images} />

          {/* review Label on image */}
          <div className={style.header__wrapper_section2_reviewLabel}>
              <div>
            <div className={style.header__wrapper_section2_reviewLabel_score}>
              <span>4.8</span>
            </div>
            <div className={style.header__wrapper_section2_reviewLabel_review}>
                <p>Rating based on 500+ reviews</p>
                <div
                  className={style.header__wrapper_section2_reviewLabel_star}
                >
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
