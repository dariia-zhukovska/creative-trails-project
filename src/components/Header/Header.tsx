import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <a target="_blank" rel="noreferrer" href="#"></a>
      </div>
      <div className={styles.headerThemeToggle}></div>
    </header>
  );
}
