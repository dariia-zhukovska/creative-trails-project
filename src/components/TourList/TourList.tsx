import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "../Tour/Tour";

export default function TourList() {
  return (
    <main>
      <ul className={styles.tourList}>
        {toursData.tours.map((item: ITourListData) => (
          <Tour key={item.id} tourItemData={item} />
        ))}
      </ul>
    </main>
  );
}
