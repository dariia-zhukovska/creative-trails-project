import { useCallback, useEffect, useState } from "react";
import styles from "./NewTourForm.module.css";
import clsx from "clsx";
import CommonInput from "../shared/elements/CommonInputs";
import CommonSelect from "../shared/elements/CommonSelect";
import { useDispatch, useSelector } from "react-redux";
import { editTour } from "../../store/tours/tours-slices";
import {
  selectAllTours,
  selectToursById,
  selectedTour,
} from "../../store/tours/tours-selectors";
import { selectTheme } from "../../store/theme/theme-selector";
import { addTourThunk, editTourThunk } from "../../store/tours/operations";
import { AppDispatch } from "store";
import { useAddTourMutation, useEditTourMutation } from "../../store/tours/api";

interface IProps {
  closeModal: () => void;
  selectedTourId: number | null;
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

function NewTourForm({ closeModal, selectedTourId }: IProps) {
  // const selectedTourItem = useSelector(selectedTour(selectedTourId));
  const selectedTourItem = useSelector((state) =>
    selectToursById(state, selectedTourId)
  ); // with api

  const [newTourData, setNewTourData] = useState(
    selectedTourItem || initialState
  );
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  // const dispatch: AppDispatch = useDispatch();
  const [addNewTour] = useAddTourMutation(); // with api
  const [editTour] = useEditTourMutation(); // with api

  const isEditMode = !!selectedTourId;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isEditMode) {
      // dispatch(
      //   editTourThunk({
      //     tourItemId: selectedTourId,
      //     updatedTourData: newTourData,
      //   })
      // );
      editTour({
        tourItemId: selectedTourId,
        updatedTourData: newTourData,
      }); // with api
      closeModal();
      return;
    }

    const newTourId = Math.floor(Math.random() * 1000000);
    const newTour = {
      ...newTourData,
      id: newTourId,
    };
    // dispatch(addTourThunk(newTour));
    addNewTour(newTour); // with api
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
        <h1>Add new tour of your dream</h1>
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTourForm;
