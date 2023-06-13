import { useEffect, useState } from "react";
import styles from "./NewTourForm.module.css";
import clsx from "clsx";
import axios from "axios";
import {
  CommonCheckboxInput,
  CommonInput,
  CommonSelect,
} from "./Common/CommonInputs";

interface IProps {
  isLight: boolean;
  closeModal: () => void;
}

function NewTourForm({ isLight, closeModal }: IProps) {
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

  useEffect(() => {
    const isFormValid = validateForm();
    setIsSaveDisabled(!isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTourData, selectedContinent]);

  const validateForm = () => {
    const { title, price, description } = newTourData;
    return (
      title !== "" &&
      price !== "" &&
      description !== "" &&
      selectedContinent !== ""
    );
  };

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
    setSelectedContinent(event.target.value);
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
  // Asyncronous code with API

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:3001/tours",
        newTourData
      );
      console.log(responce.data);
      closeModal();
    } catch (error) {
      console.log(error);
    }
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
        <CommonCheckboxInput
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
