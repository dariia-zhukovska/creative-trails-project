import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.ring}>
      Loading
      <span></span>
    </div>
  );
}

export default Loading;
