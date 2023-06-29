import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectView } from "../../store/view/view-selector";
import { selectAllTours } from "../../store/tours/tours-selectors";

interface IProps {
  handleEditTour: (id: number) => void;
  // data: ITourListData[];
}

function TourList({ handleEditTour }: IProps) {
  const view = useSelector(selectView);
  const { tours } = useSelector(selectAllTours);
  return (
    <ul
      className={clsx(styles.gridView, {
        [styles.listView]: view === "isList",
      })}
    >
      {tours?.map((item: ITourListData) => (
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
