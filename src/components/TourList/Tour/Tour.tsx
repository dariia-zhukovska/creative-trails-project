import clsx from "clsx";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./Tour.module.css";
import { ITourListData } from "types";
import { deleteTour } from "../../../api/tours";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface IProps {
  tourItemData: ITourListData;
  isLight: boolean;
  isList: boolean;
  onEditTour: (tour: ITourListData) => void;
  onSuccess: () => void;
}

function Tour({
  tourItemData,
  isLight,
  isList,
  onEditTour,
  onSuccess,
}: IProps) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleEditTour = (event: React.FormEvent) => {
    event.preventDefault();
    onEditTour(tourItemData);
  };

  const handleDeleteTour = async (event: React.FormEvent) => {
    event.preventDefault();
    await deleteTour(tourItemData.id);
    onSuccess();
  };

  const openTourPage = async (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/tours/${tourItemData.id}`);
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
        <div className={styles.titleLine}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <div>
            <button
              className={clsx(styles.gridEditButton, styles.lightEditButton, {
                [styles.darkEditButton]: !isLight,
              })}
              onClick={handleEditTour}
            ></button>
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
        <div className={styles.continentAge}>
          <h4 className={styles.tourItemContinent}>{tourItemData.continent}</h4>
          {tourItemData.adults && (
            <span className={styles.tourItemAge}>18+</span>
          )}
          <div>
            <Link
              to="/"
              state={{
                description: tourItemData.description,
                id: tourItemData.id,
              }}
              className={styles.tourMore}
            >
              More
            </Link>
          </div>
        </div>

        <div className={styles.tourItemMoreCard}>
          <p>{state?.id === tourItemData.id ? state.description : ""}</p>
        </div>
        <div className={styles.tourItemPriceLine}>
          <div className={styles.tourItemPrice}>
            {`${tourItemData.price} $`}
          </div>
          <div>
            <button className={styles.tourItemButton} onClick={openTourPage}>
              View
            </button>
          </div>
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
          src={tourItemData.image || imageNotFound}
          alt={tourItemData.title}
          className={styles.tourItemImageList}
        />
        <div className={styles.tourDescriptionList}>
          <div className={styles.titleLine}>
            <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
            <div>
              <button
                className={clsx(styles.gridEditButton, styles.lightEditButton, {
                  [styles.darkEditButton]: !isLight,
                })}
                onClick={handleEditTour}
              ></button>
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
          <div className={styles.continentAge}>
            <h4 className={styles.tourItemContinent}>
              {tourItemData.continent}
            </h4>
            {tourItemData.adults && (
              <span className={styles.tourItemAge}>18+</span>
            )}
            <div>
              <Link
                to="/"
                state={{
                  description: tourItemData.description,
                  id: tourItemData.id,
                }}
                className={styles.tourMore}
              >
                More
              </Link>
            </div>
          </div>
          <div className={styles.tourItemPriceLine}>
            <p className={styles.tourItemPrice}>{`${tourItemData.price} $`}</p>
          </div>
          <div className={styles.tourItemMoreCard}>
            <p>{state?.id === tourItemData.id ? state.description : ""}</p>
          </div>
        </div>
      </div>
      <button className={styles.tourItemButtonList} onClick={openTourPage}>
        View
      </button>
    </li>
  );
}

export default Tour;
