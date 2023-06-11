import styles from "./ListViewSwitcher.module.css";

import lightListIcon from "/src/assets/icons/lightListIcon.svg";
import lightGridIcon from "/src/assets/icons/lightGridIcon.svg";
import darkListIcon from "/src/assets/icons/darkListIcon.svg";
import darkGridIcon from "/src/assets/icons/darkGridIcon.svg";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  isList: boolean;
  onViewChange: (isList: boolean) => void;
}
function ListViewSwitcher({ isLight, onViewChange }: IProps) {
  const setListView = () => {
    onViewChange(false);
  };
  const setGridView = () => {
    onViewChange(true);
  };

  return (
    <div className={styles.listButtons}>
      <button className={styles.listButton} onClick={setListView}>
        <img
          src={clsx(darkListIcon, { [lightListIcon]: !isLight })}
          alt="list-icon"
        />
      </button>
      <button className={styles.gridButton} onClick={setGridView}>
        <img
          src={clsx(darkGridIcon, { [lightGridIcon]: !isLight })}
          alt="grid-icon"
        />
      </button>
    </div>
  );
}

export default ListViewSwitcher;
