import Nav from "../common/nav/Nav";
import Image from "next/image";
import styles from "./header.module.css";
import { amiri } from "@/src/utils/fonts";
import { palanquin } from "@/src/utils/fonts";

function Header() {
  return (
    <header>
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
            <div className="facebook">F</div>
            <div className="instagram">I</div>
            <div className="hamburger-menu">-</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
