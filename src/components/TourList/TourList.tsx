import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  isList: boolean;
  searchQuery: string;
  data: ITourListData[];
  onEditTour: (tour: ITourListData) => void;
}

function TourList({ isLight, isList, searchQuery, data, onEditTour }: IProps) {
  const filteredTours = data.filter((item: ITourListData) =>
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
          onEditTour={onEditTour}
        />
      ))}
    </ul>
  );
}

export default TourList;
