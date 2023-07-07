import styles from "./ThemeSwitcher.module.css";

interface IToggleThemeProps {
  onToggleTheme: () => void;
}

function ThemeSwitcher({ onToggleTheme }: IToggleThemeProps) {
  return (
    <button className={styles.themeButton} onClick={onToggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeSwitcher;
