import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import { debounce } from "lodash";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import NewTourForm from "../NewTourForm/NewTourForm";
import { ITourListData } from "types";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTours } from "../../store/tours/tours-selector";
import { SET_TOURS, fetchTours } from "../../store/tours/tours-actions";

interface IProps {
  data: ITourListData[];
}

function MainPage({ data }: IProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toursData, setToursData] = useState(data);

  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const { total_tours } = useSelector(selectAllTours);
  useEffect(() => {
    console.log("fetch works", searchQuery);
    dispatch(fetchTours(searchQuery));
  }, [searchQuery, dispatch]);

  const handleSearchChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    500
  );

  const addNewTour = (newTour: ITourListData) => {
    setToursData((prevState) => [...prevState, newTour]);
  };

  const deleteTour = (tourId: number) => {
    setToursData((prevState) => prevState.filter((item) => item.id !== tourId));
  };

  const handleModalClose = () => {
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
              addNewTour={addNewTour}
            />
          </ReactModal>
        </div>
      </div>
      <TourList deleteTour={deleteTour} />
    </div>
  );
}

export default MainPage;
