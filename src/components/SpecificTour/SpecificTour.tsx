import clsx from "clsx";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./SpecificTour.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TourForm from "../TourForm/TourForm";
import ReactModal from "react-modal";
import NotFound from "../NotFound/NotFound";
import Loading from "../../components/shared/Loading/Loading";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme-selector";
import {
  useDeleteTourMutation,
  useGetAllToursQuery,
  useGetSpecificTourQuery,
} from "../../store/tours/api";


function SpecificTour() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useSelector(selectTheme);
  const { id } = useParams();
  const selectedTourId = Number(id);

  const navigate = useNavigate();

  const { isLoading } = useGetAllToursQuery("");
  const { data: tour } = useGetSpecificTourQuery(selectedTourId);

  const [deleteTour] = useDeleteTourMutation();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditTour = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteTour = () => {
    deleteTour(selectedTourId);
    navigate("/tours");
  };

  return isLoading ? (
    <Loading />
  ) : !selectedTourId ? (
    <NotFound />
  ) : (
    <div
      className={clsx(styles.tourItem, {
        [styles.darkTourItem]: theme === "isLight",
      })}
    >
      <img
        src={tour?.image || imageNotFound}
        alt={tour?.title}
        className={styles.tourItemImage}
      />
      <div className={styles.tourDescription}>
        <div className={styles.titleLine}>
          <h2 className={styles.tourItemTitle}>{tour?.title}</h2>
          <button
            className={clsx(styles.gridEditButton, styles.lightEditButton, {
              [styles.darkEditButton]: theme === "isLight",
            })}
            onClick={handleEditTour}
          ></button>
          <button
            className={clsx(styles.gridDeleteButton, styles.lightDeleteButton, {
              [styles.darkDeleteButton]: theme === "isLight",
            })}
            onClick={handleDeleteTour}
          ></button>
        </div>
        <div className={styles.continentAge}>
          <h4 className={styles.tourItemContinent}>{tour?.continent}</h4>
          {tour?.adults && <span className={styles.tourItemAge}>18+</span>}
        </div>
        <div className={styles.tourItemPriceLine}>
          <p className={styles.tourItemPrice}>{`${tour?.price} $`}</p>
        </div>

        <div className={styles.tourItemMoreCard}>
          <p>
            {isExpanded ? tour?.description : tour?.fullDescription}
            <div className={styles.tourItemMore} onClick={handleToggle}>
              {isExpanded ? "More about book" : "Less about book"}
            </div>
          </p>
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Form Modal"
        className={styles.modalContent}
      >
        <TourForm
          closeModal={handleModalClose}
          selectedTourId={selectedTourId}
        />
      </ReactModal>
    </div>
  );
}

export default SpecificTour;
