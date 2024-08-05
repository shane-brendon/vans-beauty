import Image from "next/image";
import styles from "./meaAbout.module.scss";
import Button from "../lib/button/ButtonCustom";
import ApprovedIcon from "@/src/assets/ApprovedIcon";
import HappyClientsIcon from "@/src/assets/HappyClientsIcon";
import BtnIcons from "../lib/btnAndIcons/BtnIcons";

function MeaAbout() {
  return (
    <section className={styles.wrapper}>
      <div className="container flex">
        <div className={styles.imgWrapper}>
          <Image
            src={"/woman-having-a-manicure.jpg"}
            width={335}
            height={500}
          ></Image>
          <Image
            src={"/manicure-accessories.jpg"}
            width={185}
            height={280}
            className={styles.img1}
          ></Image>
          <Image
            src={"/woman-using-a-buffer-to-file-nail.jpg"}
            width={255}
            height={170}
            className={styles.img2}
          ></Image>
        </div>
        <div>
          <span className="tags">About Us</span>
          <h2 className="block_title">We Have the Nail Knowledge</h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque.
            </p>
          </div>
          <BtnIcons />
        </div>
      </div>
    </section>
  );
}

export default MeaAbout;
