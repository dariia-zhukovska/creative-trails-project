import clsx from "clsx";
import styles from "./About.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme-selector";

function About() {
  const theme = useSelector(selectTheme);
  return (
    <div
      className={clsx(styles.lightContainer, {
        [styles.darkContainer]: theme === "isLight",
      })}
    >
      <div className={styles.content}>
        Authentic tours you've never seen before. Ready to make your dreams come
        true with Creative Trails?
      </div>
    </div>
  );
}

export default About;
