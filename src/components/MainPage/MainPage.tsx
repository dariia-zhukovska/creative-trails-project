import { useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import { debounce } from "lodash";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import NewTourForm from "../NewTourForm/NewTourForm";
import toursData from "../../data/tours.json";
import { ITourListData } from "types";

interface IProps {
  isLight: boolean;
}

function MainPage({ isLight }: IProps) {
  const [isListView, setListView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<ITourListData | undefined>(
    undefined
  );
  const [initialTourData, setInitialTourData] = useState<
    ITourListData | undefined
  >(undefined);

  const data = toursData.tours;

  const handleViewChange = (isList: boolean) => {
    setListView(isList);
  };

  const handleSearchChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    500
  );

  const handleModalClose = () => {
    setSelectedTour(initialTourData);
    setIsModalOpen(false);
  };

  const handleEditTour = (tour: ITourListData) => {
    setSelectedTour(tour);
    setInitialTourData(tour);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setInitialTourData(undefined);
  };

  const handleAddNewTour = () => {
    resetForm();
    setIsModalOpen(true);
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
          <button className={styles.addTourButton} onClick={handleAddNewTour}>
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
            {toursData.tours.length > 0 && (
              <NewTourForm
                isLight={isLight}
                closeModal={handleModalClose}
                tourData={selectedTour}
                editMode={!!initialTourData}
              />
            )}
          </ReactModal>
        </div>
      </div>
      <TourList
        isLight={isLight}
        isList={isListView}
        searchQuery={searchQuery}
        data={data}
        onEditTour={handleEditTour}
      />
    </div>
  );
}

export default MainPage;
