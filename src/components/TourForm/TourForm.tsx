import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import styles from "./TourForm.module.css";

import CommonInput from "../../elements/CommonInputs";
import CommonSelect from "../../elements/CommonSelect";

import { selectTheme } from "../../store/theme/theme-slices";
import {
  useAddTourMutation,
  useEditTourMutation,
  selectToursById,
} from "../../store/tours/api";

interface IProps {
  closeModal: () => void;
  selectedTourId: any;
}

const initialState = {
  id: 0,
  title: "",
  price: "",
  image: "",
  description: "",
  continent: "",
  adults: false,
};

function TourForm({ closeModal, selectedTourId }: IProps) {
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const selectedTourItem = useSelector((state) =>
    selectToursById(state, selectedTourId)
  );
  const [newTourData, setNewTourData] = useState(
    selectedTourItem || initialState
  );

  const [addNewTour] = useAddTourMutation();
  const [editTour] = useEditTourMutation();

  const isEditMode = !!selectedTourId;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isEditMode) {
      editTour({
        tourItemId: selectedTourId,
        updatedTourData: newTourData,
      });
      closeModal();
      return;
    }
    const newTourId = Math.floor(Math.random() * 1000000);
    const newTour = {
      ...newTourData,
      id: newTourId,
    };
    addNewTour(newTour);
    closeModal();
  };

  const theme = useSelector(selectTheme);

  const validateForm = useCallback(() => {
    const { title, price, description, continent } = newTourData;
    return title && price && description && continent;
  }, [newTourData]);

  useEffect(() => {
    const isFormValid = validateForm();
    setIsSaveDisabled(!isFormValid);
  }, [newTourData, validateForm]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const inputValue = type === "checkbox" ? checked : value;
    setNewTourData({ ...newTourData, [name]: inputValue });
  };

  const continentOptions = [
    { value: "Africa", label: "Africa" },
    { value: "Asia", label: "Asia" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Australia", label: "Australia" },
    { value: "Europe", label: "Europe" },
    { value: "North America", label: "North America" },
    { value: "South America", label: "South America" },
  ];

  return (
    <div
      className={clsx(styles.formContainer, {
        [styles.darkFormContainer]: theme === "isLight",
      })}
    >
      <form onSubmit={handleSubmit} className={styles.tourForm}>
        <h1> {`${isEditMode ? "Edit" : "Add"} tour of your dream`}</h1>
        <CommonInput
          label="Title"
          id="title"
          type="text"
          name="title"
          value={newTourData.title}
          placeholder="Lviv, Ukraine"
          onChange={handleInputChange}
          required
        />
        <CommonInput
          label="Price"
          id="price"
          type="text"
          name="price"
          value={newTourData.price}
          placeholder="500 $"
          onChange={handleInputChange}
          required
        />
        <CommonInput
          label="Image URL"
          id="imgUrl"
          type="text"
          name="image"
          value={newTourData.image}
          placeholder="/assets/img/Lviv.png"
          onChange={handleInputChange}
        />
        <CommonInput
          label="Description"
          id="description"
          type="text"
          name="description"
          value={newTourData.description}
          placeholder={
            "Experience the rich history and vibrant cultural scene of Lviv."
          }
          onChange={handleInputChange}
          required
        />
        <CommonSelect
          label="Continent"
          id="continent"
          name="continent"
          value={newTourData.continent}
          options={continentOptions}
          onChange={handleInputChange}
          required
        />
        <CommonInput
          label="Tour is only for adults"
          id="age"
          type="checkbox"
          name="adults"
          onChange={handleInputChange}
          checked={newTourData.adults}
        />
        <div className={styles.buttonsGroup}>
          <button onClick={closeModal}>Cancel</button>
          <button type="submit" disabled={isSaveDisabled}>
            {isEditMode ? "Edit" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TourForm;
