import clsx from "clsx";
import styles from "./Contacts.module.css";

import lightLinkedin from "/src/assets/icons/lightLinkedin.svg";
import darkLinkedin from "/src/assets/icons/darkLinkedin.svg";
import lightInstagram from "/src/assets/icons/lightInstagram.svg";
import darkInstagram from "/src/assets/icons/darkInstagram.svg";
import lightGithub from "/src/assets/icons/lightGithub.svg";
import darkGithub from "/src/assets/icons/darkGithub.svg";

interface IProps {
  isLight: boolean;
}

function Contacts({ isLight }: IProps) {
  return (
    <div
      className={clsx(styles.lightContainer, {
        [styles.darkContainer]: !isLight,
      })}
    >
      <div className={styles.content}>
        <p>Follow me</p>
        <div className={styles.socialLinks}>
          <div className={styles.linkedIn}>
            <a
              href="https://www.linkedin.com/in/dariia-zhukovska/"
              role="button"
              target="blank"
            >
              <img
                src={isLight ? lightLinkedin : darkLinkedin}
                alt="linkedin"
              />
            </a>
          </div>
          <div className={styles.instagram}>
            <a
              href="http://instagram.com/dr_acula_x_x"
              role="button"
              target="blank"
            >
              <img
                src={isLight ? lightInstagram : darkInstagram}
                alt="instagram"
              />
            </a>
          </div>
          <div className={styles.gitHub}>
            <a
              href="https://github.com/dariia-zhukovska"
              role="button"
              target="blank"
            >
              <img src={isLight ? lightGithub : darkGithub} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
