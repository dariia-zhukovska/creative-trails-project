import styles from "./ListViewSwitcher.module.css";

import lightListIcon from "/src/assets/icons/lightListIcon.svg";
import lightGridIcon from "/src/assets/icons/lightGridIcon.svg";
import darkListIcon from "/src/assets/icons/darkListIcon.svg";
import darkGridIcon from "/src/assets/icons/darkGridIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../store/theme/theme-selector";
import { selectView } from "../../../store/view/view-selector";
import { setView } from "../../../store/view/view-slices";

function ListViewSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const view = useSelector(selectView);

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
