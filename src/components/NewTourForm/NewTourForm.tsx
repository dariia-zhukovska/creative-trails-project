import { useCallback, useEffect, useState } from "react";
import styles from "./NewTourForm.module.css";
import clsx from "clsx";
import CommonInput from "../shared/elements/Common/CommonInputs";
import CommonSelect from "../shared/elements/Common/CommonSelect";
import { ITourListData } from "types";

interface IProps {
  isLight: boolean;
  closeModal: () => void;
  addNewTour: (newTour: ITourListData) => void;
}

function NewTourForm({ isLight, closeModal, addNewTour }: IProps) {
  const [newTourData, setNewTourData] = useState({
    id: 0,
    title: "",
    price: "",
    image: "",
    description: "",
    continent: "",
    adults: false,
  });
  const [selectedContinent, setSelectedContinent] = useState("");
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const validateForm = useCallback(() => {
    const { title, price, description } = newTourData;
    return title && price && description && selectedContinent;
  }, [newTourData, selectedContinent]);

  useEffect(() => {
    const isFormValid = validateForm();
    setIsSaveDisabled(!isFormValid);
  }, [newTourData, selectedContinent, validateForm]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const inputValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setNewTourData({ ...newTourData, [name]: inputValue });
  };

  const handleContinentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedContinent = event.target.value;
    setSelectedContinent(selectedContinent);
    setNewTourData({ ...newTourData, continent: selectedContinent });
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
  // Async code with API usage (saved for later)

  //  const handleSubmit = async (event: React.FormEvent) => {
  //    event.preventDefault();

  //    try {
  //      const responce = await axios.post(
  //        "http://localhost:3001/tours",
  //        newTourData
  //      );
  //      console.log(responce.data);
  //      closeModal();
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTourId = Math.floor(Math.random() * 1000000);
    const newTour = {
      ...newTourData,
      id: newTourId,
    };

    addNewTour(newTour);
    closeModal();
  };

  return (
    <div
      className={clsx(styles.formContainer, {
        [styles.darkFormContainer]: !isLight,
      })}
    >
      <form onSubmit={handleSubmit} className={styles.tourForm}>
        <h1>Add new tour of your dream</h1>
        <CommonInput
          label={"Title"}
          id={"title"}
          type={"text"}
          name={"title"}
          value={newTourData.title}
          placeholder={"Lviv, Ukraine"}
          onChange={handleInputChange}
          required
          isLight={isLight}
        />
        <CommonInput
          label={"Price"}
          id={"price"}
          type={"text"}
          name={"price"}
          value={newTourData.price}
          placeholder={"500 $"}
          onChange={handleInputChange}
          required
          isLight={isLight}
        />
        <CommonInput
          label={"Image URL"}
          id={"imgUrl"}
          type={"text"}
          name={"image"}
          value={newTourData.image}
          placeholder={"/assets/img/Lviv.png"}
          onChange={handleInputChange}
          isLight={isLight}
        />
        <CommonInput
          label={"Description"}
          id={"description"}
          type={""}
          name={"description"}
          value={newTourData.description}
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
          value={selectedContinent}
          options={continentOptions}
          onChange={handleContinentChange}
          isLight={isLight}
        />
        <CommonInput
          label={"Tour is only for adults"}
          id={"age"}
          type={"checkbox"}
          name={"adults"}
          onChange={handleInputChange}
          checked={newTourData.adults}
          isLight={isLight}
        />
        <div className={styles.buttonsGroup}>
          <button onClick={closeModal}>Cancel</button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSaveDisabled}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTourForm;
