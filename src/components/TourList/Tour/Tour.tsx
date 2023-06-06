import clsx from "clsx";
import { ITourListData } from "../../../types";

import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
  view: boolean;
}

function Tour({ tourItemData, isLight, view }: IProps) {
  const liItemClass = clsx(isLight ? styles.tourItem : styles.darkTourItem);
  const tourItemClass = clsx(
    styles.listView,
    isLight ? styles.tourItem : styles.darkTourItem
  );

  return view ? (
    <li className={liItemClass}>
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImage}
        />
      </div>
      <div className={styles.tourDescription}>
        <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
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
        <p className={styles.tourItemShortDescription}>
          {tourItemData.description}
        </p>
      </div>
    </li>
  ) : (
    <li className={tourItemClass}>
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <div className={styles.tourItemPriceLine}>
            <div className={styles.tourItemPrice}>
              {`${tourItemData.price} $`}
            </div>
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
