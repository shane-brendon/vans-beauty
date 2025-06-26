import Link from "next/link";
import styles from "./button.module.scss";

function ButtonCustom({ isFill, text, type = "btn " }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${isFill ? styles.fill : ""}`}
    >
      {text}
    </button>
  );
}

export function LinkCustom({ isFill, text, path }) {
  return (
    <Link href={path} className={`${styles.btn} ${isFill ? styles.fill : ""}`}>{text}</Link>
  );
}
export default ButtonCustom;
