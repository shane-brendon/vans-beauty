import React from "react";
import styles from "./team.module.scss";
import Image from "next/image";
function TeamGalery() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.text}>
          <h5 className="tags">Meet our Teams</h5>
          <h2 className="block_title">Professional Team</h2>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.pictures}>
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={"/galery1.jpg"} width={355} height={410} alt="" />
            <div className={styles.overlay}>
              <div className={styles.jobTitle}>Nail Expert</div>
              <div className={styles.name}>Gabriella Rose</div>
              <div className={styles.socials}>
                <div>I</div>
                <div>F</div>
                <div>P </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function MeaTeam() {
  return (
    <section>
      <div className="container"></div>
    </section>
  );
}
export default TeamGalery;
