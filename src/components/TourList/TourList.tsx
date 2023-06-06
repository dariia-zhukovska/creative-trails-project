import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "../Tour/Tour";

interface IProps {
  isLight: boolean;
  view: boolean;
}

export default function TourList({ isLight, view }: IProps) {
  return (
    <ul className={`${view ? styles.gridView : styles.listView}`}>
      {toursData.tours.map((item: ITourListData) => (
        <Tour key={item.id} tourItemData={item} isLight={isLight} view={view} />
      ))}
    </ul>
  );
}
