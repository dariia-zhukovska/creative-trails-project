import clsx from "clsx";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./Tour.module.css";
import { ITourListData } from "types";
import { useSelector, useDispatch } from "react-redux";
import { deleteTour } from "../../../store/tours/tours-actions";
import { selectTheme } from "../../../store/theme/theme-selector";
import { selectView } from "../../../store/view/view-selector";

interface IProps {
  tourItemData: ITourListData;
  handleEditTour: (id: number) => void;
}

function Tour({ tourItemData, handleEditTour }: IProps) {
  const theme = useSelector(selectTheme);
  const view = useSelector(selectView);
  const dispatch = useDispatch();

  const handleDeleteTour = (id: number) => {
    dispatch(deleteTour(id));
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
              onClick={() => handleDeleteTour(tourItemData.id)}
            ></button>
            <button
              className={clsx(styles.gridEditButton, styles.lightEditButton, {
                [styles.darkEditButton]: theme === "isLight",
              })}
              onClick={() => handleEditTour(tourItemData.id)}
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
                onClick={() => handleDeleteTour(tourItemData.id)}
              ></button>
              <button
                className={clsx(styles.gridEditButton, styles.lightEditButton, {
                  [styles.darkEditButton]: theme === "isLight",
                })}
                onClick={() => handleEditTour(tourItemData.id)}
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
