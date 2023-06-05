import { ITourListData } from "../../types";
import img from "../../assets/img/lisbon.jpg";

import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
}

export default function Tour({ tourItemData }: IProps) {
  return (
    <li className={styles.tourItem}>
      <div>
        <img
          src={tourItemData.image}
          // src={img}
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
