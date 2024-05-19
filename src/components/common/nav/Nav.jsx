import Link from "next/link";
import styles from "./nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>HOME</Link>
      <Link href={"/about"}>ABOUT US</Link>
      <Link href={"/services"}>SERVICES</Link>
      <Link href={"/PAGES"}>PAGE</Link>
      <Link href={"/contact"}>CONTACT US</Link>
    </nav>
  );
}

export default Nav;
