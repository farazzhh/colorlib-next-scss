import { useState } from "react";
import "animate.css";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import style from "./TestimonialSlider.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialSlider = ({ reviews }) => {
  const [current, setCurrent] = useState(0);
  const lenghtReviews = reviews.length;

  const goToNextPicture = () => {
    setCurrent(current === lenghtReviews - 1 ? 0 : current + 1);
  };

  const goToPrevPicture = () => {
    setCurrent(current === 0 ? lenghtReviews - 1 : current - 1);
  };

  return (
    <div className={style.slider}>
      <LeftArrow className={style.slider_left} onClick={goToPrevPicture} />
      {reviews.map((review, index) => {
        return (
          <>
            {index === current && (
              <div
                key={index}
                className={
                  index === current && "animate__animated animate__fadeIn"
                }
              >
                <div className={style.slider__review}>
                  <p>{review}</p>
                </div>
              </div>
            )}
          </>
        );
      })}
      <RightArrow className={style.slider_right} onClick={goToNextPicture} />
    </div>
  );
};
export default TestimonialSlider;
