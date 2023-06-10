import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  isList: boolean;
}

function TourList({ isLight, isList }: IProps) {
  return (
    <ul className={clsx(styles.gridView, { [styles.listView]: !isList })}>
      {toursData.tours.map((item: ITourListData) => (
        <Tour
          key={item.id}
          tourItemData={item}
          isLight={isLight}
          isList={isList}
        />
      ))}
    </ul>
  );
}

export default TourList;
