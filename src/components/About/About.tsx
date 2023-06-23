import clsx from "clsx";
import styles from "./About.module.css";

interface IProps {
  isLight: boolean;
}

function About({ isLight }: IProps) {
  return (
    <div
      className={clsx(styles.lightContainer, {
        [styles.darkContainer]: !isLight,
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
