import clsx from "clsx";
import ThemeSwitcher from "../shared/ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectTheme } from "../../store/theme/theme-selector";
import { setTheme } from "../../store/theme/theme-slices";

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
      <div
        className={clsx(styles.lightHeaderLogo, {
          [styles.darkHeaderLogo]: theme === "isLight",
        })}
      >
        <a target="_blank" rel="noreferrer" href="#"></a>
      </div>
      <div className={styles.headerThemeToggle}>
        <ThemeSwitcher onToggleTheme={handleThemeToggle} />
      </div>
    </header>
  );
}

export default Header;
