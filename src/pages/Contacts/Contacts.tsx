import clsx from "clsx";
import { useSelector } from "react-redux";
import styles from "./Contacts.module.css";
import { selectTheme } from "../../store/theme/theme-slices";

import lightLinkedin from "/src/assets/icons/lightLinkedin.svg";
import darkLinkedin from "/src/assets/icons/darkLinkedin.svg";
import lightInstagram from "/src/assets/icons/lightInstagram.svg";
import darkInstagram from "/src/assets/icons/darkInstagram.svg";
import lightGithub from "/src/assets/icons/lightGithub.svg";
import darkGithub from "/src/assets/icons/darkGithub.svg";

function Contacts() {
  const theme = useSelector(selectTheme);
  return (
    <div
      className={clsx(styles.lightContainer, {
        [styles.darkContainer]: theme === "isLight",
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
                src={theme === "isDark" ? lightLinkedin : darkLinkedin}
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
                src={theme === "isDark" ? lightInstagram : darkInstagram}
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
              <img
                src={theme === "isDark" ? lightGithub : darkGithub}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
