import { useState } from "react";
import styles from "./MainPage.module.css";
import TourList from "../TourList/TourList";
import clsx from "clsx";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import { debounce } from "lodash";

interface IProps {
  isLight: boolean;
}

function MainPage({ isLight }: IProps) {
  const [isListView, setListView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewChange = (isList: boolean) => {
    setListView(isList);
  };

  const handleSearchChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    500
  );

  return (
    <div className={`${isLight ? styles.light : styles.dark}`}>
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
            onClick={() => console.log("Button clicked")}
          >
            Add New Tour
          </button>
        </div>
      </div>
      <TourList
        isLight={isLight}
        isList={isListView}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default MainPage;
