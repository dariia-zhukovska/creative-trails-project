import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAllTours } from "../../store/tours/tours-selector";

interface IProps {
  handleEditTour: (id: number) => void;
}

function TourList({ handleEditTour }: IProps) {
  const view = useSelector((state: any) => state.view);
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
