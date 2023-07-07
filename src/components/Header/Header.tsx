import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import ThemeSwitcher from "../../shared/ThemeSwitcher/ThemeSwitcher";
import HeaderNav from "../HeaderNav/HeaderNav";

import { setTheme, selectTheme } from "../../store/theme/theme-slices";

import lightLogo from "../../assets/icons/light_logo.svg";
import darkLogo from "../../assets/icons/dark_logo.svg";

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const handleThemeToggle = () => {
    const newTheme = theme === "isLight" ? "isDark" : "isLight";
    dispatch(setTheme(newTheme));
  };

  return (
    <header
      className={clsx(styles.lightHeaderContainer, {
        [styles.darkHeaderContainer]: theme === "isLight",
      })}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img src={theme === "isDark" ? lightLogo : darkLogo} />
        </Link>
      </div>
      <HeaderNav />
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle} />
      </div>
    </header>
  );
}

export default Header;
