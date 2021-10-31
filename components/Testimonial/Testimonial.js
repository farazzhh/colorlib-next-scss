import style from "./Testimonial.module.scss";
import TestimonialSlider from "./TestimonialSlider";

const reviews = [
  "  Discover our spaces that defines a new dimension of luxury. Anessential aspect of creativity is not being.",
  "Marlyn said   Discover our spaces that defines a new dimension of luxury. Anessential aspect of creativity is not being.",
];

const Testimonial = () => {
  return (
    <section className={style.testiMo}>
      <div className={style.testiMo__wrapper}>
        <div className={style.testiMo__wrapper_titlePart}>
          <h3>Spaces that you`d love</h3>
        </div>

        <div className={style.testiMo__wrapper_slidePart}>
          <TestimonialSlider reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
