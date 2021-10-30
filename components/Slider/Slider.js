import { useState } from "react";
import "animate.css";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import style from "./Slider.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const imgsLength = images.length;

  const goToNextPicture = () => {
    setCurrent(current === imgsLength - 1 ? 0 : current + 1);
  };

  const goToPrevPicture = () => {
    setCurrent(current === 0 ? imgsLength - 1 : current - 1);
  };

  return (
    <div className={style.slider}>
      <LeftArrow className={style.slider_left} onClick={goToPrevPicture} />
      <RightArrow className={style.slider_right} onClick={goToNextPicture} />
      {images.map((img, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "animate__animated animate__fadeIn"
                : "animate__animated animate__zoomOut"
            }
          >
            {index === current && (
              <img
                src={images[index]}
                alt="image slider"
                data-aos="zoom-in"
                data-aos-duration="500"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
