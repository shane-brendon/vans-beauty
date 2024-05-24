import styles from "./button.module.scss";

function Button({ isFill, text }) {
  return (
    <button className={`${styles.btn} ${isFill ? styles.fill : ""}`}>
      {text}
    </button>
  );
}

export default Button;
