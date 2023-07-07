import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Tour.module.css";

import { ITourListData } from "interfaces";
import { selectTheme } from "../../../store/theme/theme-slices";
import { selectView } from "../../../store/view/view-slices";
import { useDeleteTourMutation } from "../../../store/tours/api";

import imageNotFound from "/public/assets/img/img_not_found.svg";

interface IProps {
  tourItemData: ITourListData;
  handleEditTour: (id: number) => void;
}

function Tour({ tourItemData, handleEditTour }: IProps) {
  const theme = useSelector(selectTheme);
  const view = useSelector(selectView);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [deleteTour] = useDeleteTourMutation();

  const handleDeleteTour = (id: number) => {
    deleteTour(id);
  };

  const openTourPage = async () => {
    navigate(`/tours/${tourItemData.id}`);
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
              className={clsx(styles.gridEditButton, styles.lightEditButton, {
                [styles.darkEditButton]: theme === "isDark",
              })}
              onClick={() => handleEditTour(tourItemData.id)}
            ></button>
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
            {state?.id === tourItemData.id ? (
              <Link
                to={`/tours/${tourItemData.id}`}
                className={styles.tourItemButtonList}
              >
                View
              </Link>
            ) : (
              ""
            )}
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
                  [styles.darkEditButton]: theme === "isDark",
                })}
                onClick={() => handleEditTour(tourItemData.id)}
              ></button>
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
      {state?.id === tourItemData.id ? (
        <Link
          to={`/tours/${tourItemData.id}`}
          className={styles.tourItemButtonList}
          onClick={() => openTourPage}
        >
          View
        </Link>
      ) : (
        ""
      )}
    </li>
  );
}

export default Tour;
