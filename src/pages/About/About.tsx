import clsx from "clsx";
import { useSelector } from "react-redux";
import styles from "./About.module.css";
import { selectTheme } from "../../store/theme/theme-slices";

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
