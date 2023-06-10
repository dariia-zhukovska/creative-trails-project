import clsx from "clsx";
import { ITourListData } from "../../../types";

import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
  isList: boolean;
}

function Tour({ tourItemData, isLight, isList }: IProps) {
  return isList ? (
    <li className={clsx(styles.tourItem, { [styles.darkTourItem]: !isLight })}>
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImage}
        />
      </div>
      <div className={styles.tourDescription}>
        <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
        <p className={styles.tourItemShortDescription}>
          {tourItemData.description}
        </p>
        <div className={styles.tourItemPriceLine}>
          <p className={styles.tourItemPrice}>{`${tourItemData.price} $`}</p>
          <button
            className={styles.tourItemButton}
            onClick={() => console.log("Button clicked")}
          >
            View
          </button>
        </div>
      </div>
    </li>
  ) : (
    <li
      className={clsx(styles.listView, styles.tourItem, {
        [styles.darkTourItem]: !isLight,
      })}
    >
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <div className={styles.tourItemPriceLine}>
            <p className={styles.tourItemPrice}>{`${tourItemData.price} $`}</p>
          </div>
          <p className={styles.tourItemShortDescription}>
            {tourItemData.description}
          </p>
        </div>
      </div>
      <button
        className={styles.tourItemButtonList}
        onClick={() => console.log("Button clicked")}
      >
        View
      </button>
    </li>
  );
}

export default Tour;
