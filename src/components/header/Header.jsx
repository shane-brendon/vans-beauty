import Nav from "../lib/nav/Nav";
import Image from "next/image";
import styles from "./header.module.scss";
import FacebookIcon from "@/src/assets/FacebookIcon";
import InstagramIcon from "@/src/assets/InstagramIcon";
import HamburgerMenuIcon from "@/src/assets/HamburgerMenuIcon";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.header}`}>
        <div className="logo">
          <Image
            src={"/logo-naylish-dark.png"}
            width={170}
            height={70}
            alt="this"
          ></Image>
        </div>
        <div className={styles.right}>
          <Nav></Nav>
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
            ></HamburgerMenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
