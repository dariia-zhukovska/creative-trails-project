import clsx from "clsx";
import ThemeSwitcher from "../shared/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

interface IProps {
  isLight: boolean;
  onThemeChange: (isLight: boolean) => void;
}

function Header({ isLight, onThemeChange }: IProps) {
  const handleThemeToggle = () => {
    onThemeChange(!isLight);
  };

  return (
    <header
      className={clsx(styles.lightHeaderContainer, {
        [styles.darkHeaderContainer]: !isLight,
      })}
    >
      <div
        className={clsx(styles.lightHeaderLogo, {
          [styles.darkHeaderLogo]: !isLight,
        })}
      >
        <a target="_blank" rel="noreferrer" href="#"></a>
      </div>
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle}></ThemeSwitcher>
      </div>
    </header>
  );
}

export default Header;
