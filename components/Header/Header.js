import style from "./Header.module.scss";
import { FaSlideshare } from "react-icons/fa";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import "animate.css";
import { useState } from "react";

const images = [
  "/assets/images/header2.jpg",
  "/assets/images/header1.jpg",
  "/assets/images/header3.jpg",
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const imgsLength = images.length - 1;
  const goToNextPicture = () => {
    if (index < imgsLength) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const goToPrevPicture = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex(imgsLength);
    }
  };

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
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
          <div className="animate__animated animate__fadeInUp">
            <img src={images[index]} alt={images[index]} />
          </div>

          <div className={style.header__wrapper_section2_arrows}>
            <div>
              <LeftArrow onClick={goToNextPicture} />
            </div>
            <div>
              <RightArrow onClick={goToPrevPicture} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
