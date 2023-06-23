import styles from "./NotFound.module.css";

import notFoundLight from "/public/assets/img/not_found_light.png";
import notFoundDark from "/public/assets/img/not_found_dark.png";

interface IProps {
  isLight: boolean;
}

function NotFound({ isLight }: IProps) {
  return (
    <div className={styles.notFound}>
      <img src={isLight ? notFoundDark : notFoundLight} alt="not found" />
    </div>
  );
}

export default NotFound;
