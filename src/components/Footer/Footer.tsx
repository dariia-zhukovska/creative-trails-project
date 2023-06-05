import styles from "./Footer.module.css";
import { ReactComponent as LightLinkedin } from "../../assets/icons/lightlinkedin.svg";
import { ReactComponent as LightInstagram } from "../../assets/icons/lightInstagram.svg";
import { ReactComponent as LightGithub } from "../../assets/icons/lightGithub.svg";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}></div>
      <div className={styles.socialLinks}>
        <div className={styles.linkedIn}>
          <a
            href="https://www.linkedin.com/in/dariia-zhukovska/"
            role="button"
            target="blank"
          >
            <LightLinkedin />
          </a>
        </div>
        <div className={styles.instagram}>
          <a
            href="http://instagram.com/dr_acula_x_x"
            role="button"
            target="blank"
          >
            <LightInstagram />
          </a>
        </div>
        <div className={styles.gitHub}>
          <a
            href="https://github.com/dariia-zhukovska"
            role="button"
            target="blank"
          >
            <LightGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
