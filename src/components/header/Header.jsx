import Nav from "../utils/nav/Nav";
import Image from "next/image";
import styles from "./header.module.css";
import { amiri } from "@/src/utils/fonts";
import { palanquin } from "@/src/utils/fonts";

function Header() {
  console.log(palanquin);
  return (
    <header>
      <div className={`container ${styles.header}`}>
        <div className="logo">
          <Image
            src={"/vercel.svg"}
            width={100}
            height={100}
            alt="this"
          ></Image>
        </div>
        <h1 className={amiri.className}>HELLO WORLD</h1>
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
