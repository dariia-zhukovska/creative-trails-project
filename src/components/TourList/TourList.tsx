import { ITourListData } from "../../types";
import toursData from "../../data/tours.json";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  isList: boolean;
  searchQuery: string;
}

function TourList({ isLight, isList, searchQuery }: IProps) {
  const filteredTours = toursData.tours.filter((item: ITourListData) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className={clsx(styles.gridView, { [styles.listView]: !isList })}>
      {filteredTours.map((item: ITourListData) => (
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
