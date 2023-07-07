import { useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./TourList.module.css";

import { ITourListData } from "../../interfaces";
import Tour from "./Tour/Tour";

import { selectView } from "../../store/view/view-slices";

interface IProps {
  handleEditTour: (id: number) => void;
  data: ITourListData[];
}

function TourList({ handleEditTour, data }: IProps) {
  const view = useSelector(selectView);

  return (
    <ul
      className={clsx(styles.gridView, {
        [styles.listView]: view === "isList",
      })}
    >
      {data?.map((item: ITourListData) => (
        <Tour
          key={item.id}
          tourItemData={item}
          handleEditTour={handleEditTour}
        />
      ))}
    </ul>
  );
}

export default TourList;
