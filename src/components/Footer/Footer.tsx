import clsx from "clsx";
import styles from "./Footer.module.css";

import lightLinkedin from "/src/assets/icons/lightLinkedin.svg";
import darkLinkedin from "/src/assets/icons/darkLinkedin.svg";
import lightInstagram from "/src/assets/icons/lightInstagram.svg";
import darkInstagram from "/src/assets/icons/darkInstagram.svg";
import lightGithub from "/src/assets/icons/lightGithub.svg";
import darkGithub from "/src/assets/icons/darkGithub.svg";
import { useSelector } from "react-redux";

function Footer() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <footer
      className={clsx(styles.footerContainer, {
        [styles.darkFooterContainer]: theme === "isLight",
      })}
    >
      <div
        className={clsx(styles.footerLogo, {
          [styles.darkFooterLogo]: theme === "isLight",
        })}
      ></div>
      <div className={styles.socialLinks}>
        <div className={styles.linkedIn}>
          <a
            href="https://www.linkedin.com/in/dariia-zhukovska/"
            role="button"
            target="blank"
          >
            <img
              src={theme === "isLight" ? darkLinkedin : lightLinkedin}
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
              src={theme === "isLight" ? darkInstagram : lightInstagram}
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
              src={theme === "isLight" ? darkGithub : lightGithub}
              alt="github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
