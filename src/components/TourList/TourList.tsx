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
  onSuccess: () => void;
}

function TourList({ isLight, isList, data, onEditTour, onSuccess }: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
          onSuccess={onSuccess}
        />
      ))}
    </ul>
  );
}

export default TourList;
