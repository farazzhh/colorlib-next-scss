import style from "./Header.module.scss";
import { FaSlideshare } from "react-icons/fa";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__wrapper_section1}>
          <div className={style.header__wrapper_section1_content}>
            <FaSlideshare />
            <h1>Amazing workspace you will love</h1>
            <p>Discover our spaces that defines a new dimension of luxury.</p>
          </div>
          <a href="#">Explore Oure Spaces</a>
        </div>
        <div className={style.header__wrapper_section2}>
          <img src="/assets/images/header1.png" alt="header image" />

          <div className={style.header__wrapper_section2_arrows}>
            <div>
              <LeftArrow />
            </div>
            <div>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
