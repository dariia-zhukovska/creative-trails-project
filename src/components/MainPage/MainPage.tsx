import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import { debounce } from "lodash";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import NewTourForm from "../NewTourForm/NewTourForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getToursIsError,
  getToursIsErrorMessage,
  getToursIsLoading,
  selectVisibleTours,
  selectVisibleToursCount,
} from "../../store/tours/tours-selectors";
import { selectTheme } from "../../store/theme/theme-selector";
import { fetchToursThunk } from "../../store/tours/operations";
import { AppDispatch } from "../../store/index";

// import { fetchTours } from "../../store/tours/tours-slices";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const tours = useSelector(selectVisibleTours(searchQuery));
  const total_tours = useSelector(selectVisibleToursCount(searchQuery));
  const isLoading = useSelector(getToursIsLoading);
  const isError = useSelector(getToursIsError);
  const errorMessage = useSelector(getToursIsErrorMessage);

  useEffect(() => {
    dispatch(fetchToursThunk(searchQuery));
  }, [dispatch, searchQuery]);

  const handleSearchChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    500
  );

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
          Total tours: {total_tours}
        </p>
        <div className={styles.left}>
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Search tour by name"
                className={styles.searchInput}
                onChange={handleSearchChange}
              />
              <i className={styles.search}></i>
            </div>
          </div>
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
            <NewTourForm
              closeModal={handleModalClose}
              selectedTourId={selectedTourId}
            />
          </ReactModal>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isError ? (
            <div>{errorMessage}</div>
          ) : (
            <TourList handleEditTour={handleEditTour} data={tours} />
          )}
        </>
      )}
    </div>
  );
}

export default MainPage;
