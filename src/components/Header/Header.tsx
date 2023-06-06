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

  const headerClass = clsx(
    isLight ? styles.lightHeaderContainer : styles.darkHeaderContainer
  );

  const headerLogo = clsx(
    isLight ? styles.lightHeaderLogo : styles.darkHeaderLogo
  );
  return (
    <header className={headerClass}>
      <div className={headerLogo}>
        <a target="_blank" rel="noreferrer" href="#"></a>
      </div>
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle}></ThemeSwitcher>
      </div>
    </header>
  );
}

export default Header;
