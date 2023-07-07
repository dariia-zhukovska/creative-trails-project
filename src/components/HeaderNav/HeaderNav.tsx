// import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <div className={styles.headerNav}>
      <Link to="about" className={styles.navItem}>
        About
      </Link>
      <Link to="whytravel" className={styles.navItem}>
        Why do we travel
      </Link>
      <Link to="contacts" className={styles.navItem}>
        Contacts
      </Link>
    </div>
  );
}

export default HeaderNav;
