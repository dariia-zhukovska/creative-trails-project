import { ITourListData } from "../../types";
import styles from "./TourList.module.css";
import Tour from "./Tour/Tour";
import clsx from "clsx";
import Loading from "../../components/shared/Loading/Loading";
import { useState, useEffect } from "react";

interface IProps {
  isLight: boolean;
  isList: boolean;
  data: ITourListData[];
  onEditTour: (tour: ITourListData) => void;
}

function TourList({ isLight, isList, data, onEditTour }: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // const filteredTours = data.filter((item: ITourListData) => {
  //   return searchQuery.some((query: ITourListData) =>
  //     item.title.toLowerCase().includes(query.title.toLowerCase())
  //   );
  // });

  return isLoading ? (
    <Loading />
  ) : (
    <ul className={clsx(styles.gridView, { [styles.listView]: !isList })}>
      {data.map((item: ITourListData) => (
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
