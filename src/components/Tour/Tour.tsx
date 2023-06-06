import { ITourListData } from "../../types";

import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
}

export default function Tour({ tourItemData, isLight }: IProps) {
  return (
    <li className={`${isLight ? styles.tourItem : styles.darkTourItem}`}>
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImage}
        />
      </div>
      <div className={styles.tourDescription}>
        <div className={styles.tourItemTitle}>{tourItemData.title}</div>
        <div className={styles.tourItemPriceLine}>
          <div className={styles.tourItemPrice}>
            {`${tourItemData.price} $`}
          </div>
          <button
            className={styles.tourItemButton}
            onClick={() => console.log("Button clicked")}
          >
            View
          </button>
        </div>
        <div className={styles.tourItemShortDescription}>
          {tourItemData.description}
        </div>
      </div>
    </li>
  );
}
