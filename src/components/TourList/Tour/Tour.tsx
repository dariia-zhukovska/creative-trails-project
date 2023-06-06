import { ITourListData } from "../../../types";

import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
  view: boolean;
}

function Tour({ tourItemData, isLight, view }: IProps) {
  return view ? (
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
  ) : (
    <li
      className={`${styles.listView} ${
        isLight ? styles.tourItem : styles.darkTourItem
      } `}
    >
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <div className={styles.tourItemTitle}>{tourItemData.title}</div>
          <div className={styles.tourItemPriceLine}>
            <div className={styles.tourItemPrice}>
              {`${tourItemData.price} $`}
            </div>
          </div>
          <div className={styles.tourItemShortDescription}>
            {tourItemData.description}
          </div>
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
