import Image from "next/image";
import styles from "./footer.module.scss";
import FacebookIcon from "@/src/assets/FacebookIcon";
import InstagramIcon from "@/src/assets/InstagramIcon";
import TwitterIcon from "@/src/assets/TwitterIcon";
import PinterestIcon from "@/src/assets/PinterestIcon";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div>
          <div className="info">
            <div className="logo">
              <Image src={"/logo-naylish-light.png"} width={155} height={65} />
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="socials">
              <FacebookIcon width={16} height={16} fill={"#fff"} />
              <InstagramIcon width={16} height={16} fill={"#fff"} />
              <TwitterIcon width={16} height={16} fill={"#fff"} />
              <PinterestIcon width={16} height={16} fill={"#fff"} />
            </div>
          </div>
          <div className="support">
            <h4 className="title">Support</h4>
            <ul>
              <li>FAQ's</li>
              <li>Privacy Policy</li>
              <li>Term & Conditions</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="title">Contact</h4>
            <ul>
              <li>Jl. Pantai Batu Mejan, Canggu, Bali</li>
              <li>naylish@domain.com</li>
              <li>Phone : (+62)81 234 567</li>
            </ul>
          </div>
          <div className="newsletter">
            <h4 className="title">Subscribe Newsletter</h4>
          </div>
        </div>
        <div>
          <div className="author"></div>
          <div className="copyrights"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
