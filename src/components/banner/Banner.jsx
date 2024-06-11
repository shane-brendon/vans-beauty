import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";
import { amiri, palanquin } from "@/src/utils/fonts";

function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1 className={amiri.className}>About Us</h1>
        <div className={`${styles.description} ${palanquin.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        {/* <Image src={'/woman-manicure.jpg'} width={2000} height={1333} alt='' className={styles.banner} /> */}
      </div>
    </section>
  );
}

export default Banner;
