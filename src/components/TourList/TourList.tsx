import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";
import { useSelector } from "react-redux";

interface IProps {
  handleEditTour: (id: number) => void;
  data: ITourListData[];
}

function TourList({ handleEditTour, data }: IProps) {
  const view = useSelector((state: any) => state.view);

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
