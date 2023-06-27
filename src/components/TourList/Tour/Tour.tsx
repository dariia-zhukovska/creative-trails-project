import clsx from "clsx";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./Tour.module.css";
import { ITourListData } from "types";
import { useSelector } from "react-redux";

interface IProps {
  tourItemData: ITourListData;
  deleteTour: () => void;
}

function Tour({ tourItemData, deleteTour }: IProps) {
  const theme = useSelector((state: any) => state.theme);
  const view = useSelector((state: any) => state.view);

  const handleDeleteTour = (event: React.FormEvent) => {
    event.preventDefault();
    deleteTour();
  };

  return view !== "isList" ? (
    <li
      className={clsx(styles.tourItem, {
        [styles.darkTourItem]: theme === "isLight",
      })}
    >
      <div>
        <img
          src={tourItemData.image || imageNotFound}
          alt={tourItemData.title}
          className={styles.tourItemImage}
        />
      </div>
      <div className={styles.tourDescription}>
        <div className={styles.titleLine}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <div>
            <button
              className={clsx(
                styles.gridDeleteButton,
                styles.lightDeleteButton,
                {
                  [styles.darkDeleteButton]: theme === "isLight",
                }
              )}
              onClick={handleDeleteTour}
            ></button>
          </div>
        </div>
        <div className={styles.continentAge}>
          <h4 className={styles.tourItemContinent}>{tourItemData.continent}</h4>
          {tourItemData.adults && (
            <span className={styles.tourItemAge}>18+</span>
          )}
        </div>
        <div className={styles.tourItemPriceLine}>
          <div className={styles.tourItemPrice}>
            {`${tourItemData.price} $`}
          </div>
          <div>
            <button
              className={styles.tourItemButton}
              onClick={() => console.log("Button clicked")}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </li>
  ) : (
    <li
      className={clsx(styles.listView, styles.tourItem, {
        [styles.darkTourItem]: theme === "isLight",
      })}
    >
      <div>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <div className={styles.titleLine}>
            <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
            <div>
              <button
                className={clsx(
                  styles.gridDeleteButton,
                  styles.lightDeleteButton,
                  {
                    [styles.darkDeleteButton]: theme === "isLight",
                  }
                )}
                onClick={handleDeleteTour}
              ></button>
            </div>
          </div>
          <div className={styles.continentAge}>
            <h4 className={styles.tourItemContinent}>
              {tourItemData.continent}
            </h4>
            {tourItemData.adults && (
              <span className={styles.tourItemAge}>18+</span>
            )}
          </div>
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
