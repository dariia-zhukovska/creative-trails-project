import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "../Tour/Tour";

interface IThemeProps {
  isLight: boolean;
}

export default function TourList({ isLight }: IThemeProps) {
  return (
    <div className={`${isLight ? styles.lightMain : styles.darkMain}`}>
      <ul className={styles.tourList}>
        {toursData.tours.map((item: ITourListData) => (
          <Tour key={item.id} tourItemData={item} isLight={isLight} />
        ))}
      </ul>
    </div>
  );
}
