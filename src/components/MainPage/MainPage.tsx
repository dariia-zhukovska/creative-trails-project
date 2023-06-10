import { useState } from "react";

import styles from "./MainPage.module.css";
import TourList from "../TourList/TourList";
import ListViewSwitcher from "../shared/ListViewSwitcher/ListViewSwitcher";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
}
function MainPage({ isLight }: IProps) {
  const [isListView, setListView] = useState(true);

  const handleViewChange = (isList: boolean) => {
    setListView(isList);
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
        </div>
      </div>
      <TourList isLight={isLight} isList={isListView} />
    </div>
  );
}

export default MainPage;
