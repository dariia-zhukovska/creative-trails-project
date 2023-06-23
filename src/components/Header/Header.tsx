import clsx from "clsx";
import ThemeSwitcher from "../shared/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";
import HeaderNav from "../HeaderNav/HeaderNav";
import { Link } from "react-router-dom";

import lightLogo from "../../assets/icons/light_logo.svg";
import darkLogo from "../../assets/icons/dark_logo.svg";

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
      <div className={styles.logo}>
        <Link to="/">
          <img src={isLight ? lightLogo : darkLogo} />
        </Link>
      </div>
      <HeaderNav />
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle}></ThemeSwitcher>
      </div>
    </header>
  );
}

export default Header;
