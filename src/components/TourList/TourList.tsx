import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";

interface IProps {
  isLight: boolean;
  isList: boolean;
  data: ITourListData[];
  onEditTour: (tour: ITourListData) => void;
  onSuccess: () => void;
}

function TourList({ isLight, isList, data, onEditTour, onSuccess }: IProps) {
  return (
    <ul className={clsx(styles.gridView, { [styles.listView]: !isList })}>
      {data.map((item: ITourListData) => (
        <Tour
          key={item.id}
          tourItemData={item}
          isLight={isLight}
          isList={isList}
          onEditTour={onEditTour}
          onSuccess={onSuccess}
        />
      ))}
    </ul>
  );
}

export default TourList;
