import styles from "./NotFound.module.css";

import notFoundLight from "/public/assets/img/not_found_light.png";
import notFoundDark from "/public/assets/img/not_found_dark.png";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme-selector";

function NotFound() {
  const theme = useSelector(selectTheme);

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFound}>
        <img
          src={theme === "isLight" ? notFoundDark : notFoundLight}
          alt="not found"
        />
      </div>
    </div>
  );
}

export default NotFound;
