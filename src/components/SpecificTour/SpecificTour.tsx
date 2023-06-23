import clsx from "clsx";
import imageNotFound from "/public/assets/img/img_not_found.svg";
import styles from "./SpecificTour.module.css";
import { useCallback, useEffect, useState } from "react";
import { getSpecificTour } from "../../api/tours";
import { ITourListData } from "types/index";
import { useParams } from "react-router-dom";
import TourForm from "../TourForm/TourForm";
import ReactModal from "react-modal";

interface IProps {
  isLight: boolean;
}

function SpecificTour({ isLight }: IProps) {
  const [tourItemData, setTourItemData] = useState<ITourListData | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id: tourId } = useParams();

  const requestTourData = useCallback(async () => {
    if (tourId) {
      const response = await getSpecificTour(tourId);

      console.log("work");
      setTourItemData(response);
    }
  }, [tourId]);

  useEffect(() => {
    requestTourData();
  }, [requestTourData]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (!tourItemData?.id) {
    return <div>No tour found.</div>;
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEditTour = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className={clsx(styles.tourItem, {
        [styles.darkTourItem]: !isLight,
      })}
    >
      <img
        src={tourItemData.image || imageNotFound}
        alt={tourItemData.title}
        className={styles.tourItemImage}
      />
      <div className={styles.tourDescription}>
        <div className={styles.titleLine}>
          <h2 className={styles.tourItemTitle}>{tourItemData.title}</h2>
          <button
            className={clsx(styles.gridEditButton, styles.lightEditButton, {
              [styles.darkEditButton]: !isLight,
            })}
            onClick={handleEditTour}
          ></button>
        </div>
        <div className={styles.continentAge}>
          <h4 className={styles.tourItemContinent}>{tourItemData.continent}</h4>
          {tourItemData.adults && (
            <span className={styles.tourItemAge}>18+</span>
          )}
        </div>
        <div className={styles.tourItemPriceLine}>
          <p className={styles.tourItemPrice}>{`${tourItemData.price} $`}</p>
        </div>

        <div className={styles.tourItemMoreCard}>
          <p>
            {isExpanded
              ? tourItemData.description
              : tourItemData.fullDescription}
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
          isLight={isLight}
          closeModal={handleModalClose}
          tourData={tourItemData}
          editMode={true}
          onSuccess={requestTourData}
        />
      </ReactModal>
    </div>
  );
}

export default SpecificTour;
