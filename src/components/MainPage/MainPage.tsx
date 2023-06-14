import { useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import { debounce } from "lodash";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import NewTourForm from "../NewTourForm/NewTourForm";
import { ITourListData } from "types";
import toursData from "../../data/tours.json";

interface IProps {
  isLight: boolean;
}

const data = toursData.tours;

function MainPage({ isLight }: IProps) {
  const [isListView, setListView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [toursData, setToursData] = useState(data);

  const handleViewChange = (isList: boolean) => {
    setListView(isList);
  };

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
    <div className={clsx(styles.light, { [styles.dark]: !isLight })}>
      <div className={styles.navContainer}>
        <div className={clsx(styles.title, { [styles.darkTitle]: !isLight })}>
          Creative Trails - Exclusive tours
        </div>
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
            <ListViewSwitcher
              isLight={isLight}
              isList={isListView}
              onViewChange={handleViewChange}
            />
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
            // Doesn't work
            // overlayClassName={clsx(styles.overlayLight, {
            //   [styles.overlayDark]: !isLight,
            // })}
          >
            <NewTourForm
              isLight={isLight}
              closeModal={handleModalClose}
              addNewTour={addNewTour}
            />
          </ReactModal>
        </div>
      </div>
      <TourList
        isLight={isLight}
        isList={isListView}
        searchQuery={searchQuery}
        data={toursData}
        deleteTour={deleteTour}
      />
    </div>
  );
}

export default MainPage;
