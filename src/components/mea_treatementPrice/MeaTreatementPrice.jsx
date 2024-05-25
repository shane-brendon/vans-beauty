import React from "react";
import styles from "./mwaTreamentPrice.module.scss";
import Image from "next/image";
function MeaTreatementPrice() {
  return (
    <section className={styles.wrapper}>
      <div className="container flex">
        <div className={styles.priceWrapper}>
          <div className={`${styles.tag} tags`}>Treatment & price</div>
          <h2 className="block_title">It’s Time to Get Trimmed.</h2>
          <ul>
            <li>
              <div className={styles.item}>
                <div className={styles.name}>Manicure</div>
                <div className={styles.separator}></div>
                <div className="item__price">
                  <span className="currency">$</span>
                  12.00
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <div className={styles.name}>Manicure</div>
                <div className={styles.separator}></div>
                <div className="item__price">
                  <span className="currency">$</span>
                  12.00
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <div className={styles.name}>Manicure</div>
                <div className={styles.separator}></div>
                <div className="item__price">
                  <span className="currency">$</span>
                  12.00
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <div className={styles.name}>Manicure</div>
                <div className={styles.separator}></div>
                <div className="item__price">
                  <span className="currency">$</span>
                  12.00
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <div className={styles.name}>Manicure</div>
                <div className={styles.separator}></div>
                <div className="item__price">
                  <span className="currency">$</span>
                  12.00
                </div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.imgWrapper}>
          <Image src={"/person-nail.jpg"} width={550} height={800} />
        </div>
      </div>
    </section>
  );
}

export default MeaTreatementPrice;
