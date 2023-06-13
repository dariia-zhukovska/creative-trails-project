import clsx from "clsx";
import { ITourListData } from "~/types";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./Tour.module.css";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
  isList: boolean;
  deleteTour: () => void;
}

function Tour({ tourItemData, isLight, isList, deleteTour }: IProps) {
  // Async code with API usage (saved for later)

  // const handleDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:3001/tours/${tourItemData.id}`
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleDeleteTour = (event: React.FormEvent) => {
    event.preventDefault();
    deleteTour();
  };

  return isList ? (
    <li className={clsx(styles.tourItem, { [styles.darkTourItem]: !isLight })}>
      <div>
        <img
          src={tourItemData.image || imageNotFound}
          alt={tourItemData.title}
          className={styles.tourItemImage}
        />
      </div>
      <div className={styles.tourDescription}>
        <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
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
            <button
              className={clsx(
                styles.gridDeleteButton,
                styles.lightDeleteButton,
                {
                  [styles.darkDeleteButton]: !isLight,
                }
              )}
              onClick={handleDeleteTour}
            ></button>
          </div>
        </div>
        <p className={styles.tourItemShortDescription}>
          {tourItemData.description}
        </p>
      </div>
    </li>
  ) : (
    <li
      className={clsx(styles.listView, styles.tourItem, {
        [styles.darkTourItem]: !isLight,
      })}
    >
      <div>
        <button
          className={clsx(styles.lightDeleteButton, {
            [styles.darkDeleteButton]: !isLight,
          })}
          onClick={handleDeleteTour}
        ></button>
        <img
          src={tourItemData.image}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <div className={styles.continentAge}>
            <h4 className={styles.tourItemContinent}>
              {tourItemData.continent}
            </h4>
            {tourItemData.adults && (
              <span className={styles.tourItemAge}>18+</span>
            )}
          </div>
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
