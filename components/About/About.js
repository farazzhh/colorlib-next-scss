import style from "./About.module.scss";
const About = () => {
  return (
    <section className={style.about}>
      <div className="container mx-auto">
        <div className={style.about__imageWrapper}>
          <img
            src="/assets/images/about.jpg"
            className={style.about__imageWrapper_img}
            alt="about us image"
          />
        </div>

        <div className={style.about__textContent}>

          <span className={style.about__textContent_sectionName}>About Us</span>
          <h2 className={style.about__textContent_title}>
            Premium quality spaces for agency and personal
          </h2>
          <p className={style.about__textContent_describe}>
            Discover our spaces that defines a new dimension of luxury. An
            essential aspect of creativity is not being afraid to fail. Design
            like you are absolutely right, then optimize like you were wrong.
            Cultivating market leadership from the inside out.
          </p>
          <a href="#" className={style.about__textContent_button}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
