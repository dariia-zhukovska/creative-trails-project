import styles from "./ListViewSwitcher.module.css";

import lightListIcon from "/src/assets/icons/lightListIcon.svg";
import lightGridIcon from "/src/assets/icons/lightGridIcon.svg";
import darkListIcon from "/src/assets/icons/darkListIcon.svg";
import darkGridIcon from "/src/assets/icons/darkGridIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../../store/view/view-actions";

function ListViewSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const view = useSelector((state: any) => state.view);

  const handleViewChange = () => {
    const newView = view === "isList" ? "isGrid" : "isList";
    dispatch(setView(newView));
  };

  return (
    <div className={styles.listButtons}>
      <button className={styles.listButton} onClick={handleViewChange}>
        <img
          src={theme == "isLight" ? lightListIcon : darkListIcon}
          alt="list-icon"
        />
      </button>
      <button className={styles.gridButton} onClick={handleViewChange}>
        <img
          src={theme === "isLight" ? lightGridIcon : darkGridIcon}
          alt="grid-icon"
        />
      </button>
    </div>
  );
}

export default ListViewSwitcher;
