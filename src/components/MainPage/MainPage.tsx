import { useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import TourForm from "../TourForm/TourForm";
import { useSelector } from "react-redux";

import { selectTheme } from "../../store/theme/theme-selector";
import SearchInput from "../shared/elements/SearchInput";
import { useGetAllToursQuery } from "../../store/tours/api";
import Loading from "../../components/shared/Loading/Loading";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

  const theme = useSelector(selectTheme);

  const { data, isLoading, isError, error } = useGetAllToursQuery(searchQuery);

  const handleEditTour = (id: number) => {
    setSelectedTourId(id);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setSelectedTourId(null);
    setIsModalOpen(false);
  };

  return (
    <div className={clsx(styles.light, { [styles.dark]: theme === "isLight" })}>
      <div className={styles.navContainer}>
        <div
          className={clsx(styles.title, {
            [styles.darkTitle]: theme === "isLight",
          })}
        >
          Creative Trails - Exclusive tours
        </div>
        <p
          className={clsx(styles.title, {
            [styles.darkTitle]: theme === "isLight",
          })}
        >
          Total tours: {data?.total_tours}
        </p>
        <div className={styles.left}>
          <SearchInput onChange={setSearchQuery} />
          <div className={styles.listView}>
            <ListViewSwitcher />
          </div>
          <button
            className={styles.addTourButton}
            onClick={() => setIsModalOpen(true)}
          >
            Add New Tour
          </button>
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
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isError ? (
            <div>{error as string}</div>
          ) : (
            <TourList handleEditTour={handleEditTour} data={data.tours} />
          )}
        </>
      )}
    </div>
  );
}

export default MainPage;
