import { useRef, useState } from "react";
import { FaFacebookF as FIcon } from "react-icons/fa";
import { BsTwitter as TIcon } from "react-icons/bs";
import { FaLinkedinIn as LIcon } from "react-icons/fa";
import { AiOutlineBlock as Logo } from "react-icons/ai";
import { CgMenu as MobileMenu } from "react-icons/cg";
import { IoCloseCircle as Close } from "react-icons/io5";
import styles from "./Nav.module.scss";
const Nav = () => {
  const refMobileMenu = useRef(null);

  const toggleMobileMenu = () => {
    if (refMobileMenu.current.style.width == "100vw") {
      refMobileMenu.current.style.width = "0";
    } else {
      refMobileMenu.current.style.width = "100vw";
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__Container}>
        {/* <!-- left - logo wrapper --> */}
        <div className={styles.nav__logo_wrapper}>
          <Logo />
          <span>Share</span>
        </div>

        {/* <!-- right - items on larg screen --> */}
        <div className={styles.nav__menu}>
          {/* <!-- menu items - larg screen --> */}
          <ul className={styles.nav__menu_list}>
            <li>Home</li>
            <li>Spaces</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          {/* <!-- Social Icons on Larg screen --> */}
          <div className={styles.nav__menu_social}>
            <div>
              <FIcon />
            </div>
            <div>
              <TIcon />
            </div>
            <div>
              <LIcon />
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <MobileMenu
          className={styles.nav__mobileMenuIcon}
          onClick={toggleMobileMenu}
        />

        <div className={styles.nav__mobileMenu} ref={refMobileMenu}>
          <Close onClick={toggleMobileMenu} />
          <ul>
            <li onClick={toggleMobileMenu}>Home</li>
            <li onClick={toggleMobileMenu}>Spaces</li>
            <li onClick={toggleMobileMenu}>About</li>
            <li onClick={toggleMobileMenu}>Blog</li>
            <li onClick={toggleMobileMenu}>Contact</li>

            {/* social icons on mobile screen */}
          </ul>
          <div className={styles.nav__menu_social}>
            <div>
              <FIcon onClick={toggleMobileMenu} />
            </div>
            <div>
              <TIcon onClick={toggleMobileMenu} />
            </div>
            <div>
              <LIcon onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
