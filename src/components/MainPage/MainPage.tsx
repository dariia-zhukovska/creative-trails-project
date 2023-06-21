import { useCallback, useEffect, useState } from "react";
import ReactModal from "react-modal";
import styles from "./MainPage.module.css";
import clsx from "clsx";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import TourForm from "../TourForm/TourForm";
import { ITourListData } from "types";
import Loading from "../../components/shared/Loading/Loading";
import { getTours } from "../../api/tours";
import SearchInput from "../shared/elements/SearchInput";

interface IProps {
  isLight: boolean;
}

const initialState = {
  id: 0,
  title: "",
  price: "",
  image: "",
  description: "",
  continent: "",
  adults: false,
};

function MainPage({ isLight }: IProps) {
  const [isListView, setListView] = useState(true);
  const [tourList, setTourList] = useState<ITourListData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tourData, setTourData] = useState(initialState);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const handleViewChange = (isList: boolean) => {
    setListView(isList);
  };

  const requestData = useCallback(async () => {
    setLoading(true);
    const response = await getTours(searchValue);
    setTourList(response);
    setLoading(false);
  }, [searchValue]);

  console.log(searchValue);

  useEffect(() => {
    requestData();
  }, [requestData]);

  const handleModalClose = () => {
    setTourData(initialState);
    setIsModalOpen(false);
  };

  const handleEditTour = (tour: ITourListData) => {
    setIsModalOpen(true);
    setTourData(tour);
  };

  const addNewTour = () => {
    setTourData(initialState);
    setIsModalOpen(true);
  };

  return (
    <div className={clsx(styles.light, { [styles.dark]: !isLight })}>
      <div className={styles.navContainer}>
        <div className={clsx(styles.title, { [styles.darkTitle]: !isLight })}>
          Creative Trails - Exclusive tours
        </div>
        <div className={styles.left}>
          <SearchInput onChange={setSearchValue} />
          <div className={styles.listView}>
            <ListViewSwitcher
              isLight={isLight}
              isList={isListView}
              onViewChange={handleViewChange}
            />
          </div>
          <button className={styles.addTourButton} onClick={addNewTour}>
            Add New Tour
          </button>
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Form Modal"
            className={styles.modalContent}
          >
            {tourList.length > 0 && (
              <TourForm
                isLight={isLight}
                closeModal={handleModalClose}
                tourData={tourData}
                editMode={tourData.id !== 0}
                onSuccess={requestData}
              />
            )}
          </ReactModal>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <TourList
          isLight={isLight}
          isList={isListView}
          data={tourList}
          onEditTour={handleEditTour}
          onSuccess={requestData}
        />
      )}
    </div>
  );
}

export default MainPage;
