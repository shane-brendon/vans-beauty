"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import FacebookIcon from "@/src/assets/FacebookIcon";
import InstagramIcon from "@/src/assets/InstagramIcon";
import HamburgerMenuIcon from "@/src/assets/HamburgerMenuIcon";
import useScreen from "../../hooks/useScreen";
import Nav from "../lib/nav/Nav";
import { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(false); // Define state for the menu
  const screen = useScreen(); // Use screen dimensions

  const handleHamburgerMenuClick = () => {
    setMenu((menu) => !menu); // Update the menu state on click
  };

  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.header}`}>
        {/* {menu} */}
        <div className="logo">
          <Image
            src={"/logo-naylish-dark.png"}
            width={170}
            height={70}
            alt="this"
          ></Image>
        </div>
        <div className={styles.right}>
          {screen.width > 840 && <Nav />}
          <div className={styles.socials}>
            <FacebookIcon
              width={20}
              height={20}
              fill={"#053543"}
            ></FacebookIcon>
            <InstagramIcon
              width={20}
              height={20}
              fill={"#053543"}
            ></InstagramIcon>
            <HamburgerMenuIcon
              width={24}
              height={24}
              fill={"#053543"}
              onClick={handleHamburgerMenuClick} // Call the handler on click
            />
          </div>
        </div>
      </div>

      {screen.width < 840 && menu && (
        <div className={styles.menuMobileWrapper}>
          <div className={styles.image}>
            <Image
              src={"/logo-naylish-dark.png"}
              width={170}
              height={70}
              alt="this"
            ></Image>
            <span onClick={handleHamburgerMenuClick}>X</span>
          </div>
          <Nav />
        </div>
      )}
    </header>
  );
}

export default Header;
