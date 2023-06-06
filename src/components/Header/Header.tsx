import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

interface IProps {
  isLight: boolean;
  onThemeChange: (isLight: boolean) => void;
}

export default function Header({ isLight, onThemeChange }: IProps) {
  const handleThemeToggle = () => {
    onThemeChange(!isLight);
  };
  return (
    <header
      className={`${
        isLight ? styles.lightHeaderContainer : styles.darkHeaderContainer
      }`}
    >
      <div
        className={`${
          isLight ? styles.lightHeaderLogo : styles.darkHeaderLogo
        }`}
      >
        <a target="_blank" rel="noreferrer" href="#"></a>
      </div>
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle}></ThemeSwitcher>
      </div>
    </header>
  );
}
