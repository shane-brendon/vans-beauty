import styles from "./button.module.scss";

function ButtonCustom({ isFill, text }) {
  return (
    <button className={`${styles.btn} ${isFill ? styles.fill : ""}`}>
      {text}
    </button>
  );
}

export default ButtonCustom;
