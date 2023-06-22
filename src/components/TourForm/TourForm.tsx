import { useCallback, useEffect, useState } from "react";
import styles from "./TourForm.module.css";
import clsx from "clsx";
import CommonInput from "../shared/elements/CommonInputs";
import CommonSelect from "../shared/elements/CommonSelect";
import { addTour, editTour } from "../../api/tours";
import { ITourListData } from "types";

interface IProps {
  isLight: boolean;
  closeModal: () => void;
  editMode: boolean;
  tourData: ITourListData;
  onSuccess: () => void;
}

function TourForm({
  isLight,
  closeModal,
  editMode,
  tourData,
  onSuccess,
}: IProps) {
  const [formTourData, setFormTourData] = useState(tourData);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const validateForm = useCallback(() => {
    const { title, price, description, continent } = formTourData;
    return title && price && description && continent;
  }, [formTourData]);

  useEffect(() => {
    const isFormValid = validateForm();
    setIsSaveDisabled(!isFormValid);
  }, [formTourData, validateForm]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const inputValue = type === "checkbox" ? checked : value;
    setFormTourData({ ...formTourData, [name]: inputValue });
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (editMode && tourData.id) {
      await editTour(tourData.id, formTourData);
    } else {
      await addTour(formTourData);
    }
    onSuccess();
    closeModal();
  };
  return (
    <div
      className={clsx(styles.formContainer, {
        [styles.darkFormContainer]: !isLight,
      })}
    >
      <form onSubmit={handleSubmit} className={styles.tourForm}>
        <h1> {`${editMode ? "Edit" : "Add"} tour of your dream`} </h1>
        <CommonInput
          label="Title"
          id="title"
          type="text"
          name="title"
          value={formTourData.title}
          placeholder="Lviv, Ukraine"
          onChange={handleInputChange}
          required
          isLight={isLight}
        />
        <CommonInput
          label="Price"
          id="price"
          type="text"
          name="price"
          value={formTourData.price}
          placeholder="500 $"
          onChange={handleInputChange}
          required
          isLight={isLight}
        />
        <CommonInput
          label="Image URL"
          id="imgUrl"
          type="text"
          name="image"
          value={formTourData.image}
          placeholder="/assets/img/Lviv.png"
          onChange={handleInputChange}
          isLight={isLight}
        />
        <CommonInput
          label="Description"
          id="description"
          type="text"
          name="description"
          value={formTourData.description}
          placeholder={
            "Experience the rich history and vibrant cultural scene of Lviv."
          }
          onChange={handleInputChange}
          required
          isLight={isLight}
        />
        <CommonSelect
          label="Continent"
          id="continent"
          name="continent"
          value={formTourData.continent}
          options={continentOptions}
          onChange={handleInputChange}
          isLight={isLight}
          required
        />
        <CommonInput
          label="Tour is only for adults"
          id="age"
          type="checkbox"
          name="adults"
          onChange={handleInputChange}
          checked={formTourData.adults}
          isLight={isLight}
        />
        <div className={styles.buttonsGroup}>
          <button onClick={closeModal}>Cancel</button>
          <button type="submit" disabled={isSaveDisabled}>
            {editMode ? "Edit" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TourForm;
