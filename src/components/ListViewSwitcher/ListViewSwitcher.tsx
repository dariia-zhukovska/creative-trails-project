import styles from "./ListViewSwitcher.module.css";

import lightListIcon from "../../../public/assets/icons/lightListIcon.svg";
import lightGridIcon from "../../../public/assets/icons/lightGridIcon.svg";
import darkListIcon from "../../../public/assets/icons/darkListIcon.svg";
import darkGridIcon from "../../../public/assets/icons/darkGridIcon.svg";

interface IProps {
  isLight: boolean;
  isList: boolean;
  onViewChange: (isList: boolean) => void;
}

export default function ListViewSwitcher({ isLight, onViewChange }: IProps) {
  const setListView = () => {
    onViewChange(false);
  };
  const setGridView = () => {
    onViewChange(true);
  };

  return (
    <div className={styles.listButtons}>
      <button className={styles.listButton} onClick={setListView}>
        <img src={!isLight ? lightListIcon : darkListIcon} alt="list-icon" />
      </button>
      <button className={styles.gridButton} onClick={setGridView}>
        <img src={!isLight ? lightGridIcon : darkGridIcon} alt="grid-icon" />
      </button>
    </div>
  );
}
