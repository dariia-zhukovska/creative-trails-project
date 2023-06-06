import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  view: boolean;
}

function TourList({ isLight, view }: IProps) {
  const ulClasname = clsx(view ? styles.gridView : styles.listView);
  return (
    <ul className={ulClasname}>
      {toursData.tours.map((item: ITourListData) => (
        <Tour key={item.id} tourItemData={item} isLight={isLight} view={view} />
      ))}
    </ul>
  );
}

export default TourList;
