// import clsx from "clsx";

import clsx from "clsx";
import styles from "./NewTourForm.module.css";
import { useState } from "react";

interface IProps {
  isLight: boolean;
}

function NewTourForm({ isLight }: IProps) {
  const [newTourData, setNewTourData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    continent: "",
    adults: false,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const inputValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setNewTourData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(newTourData); // Do something with the new tour data
  };

  const { title, price, description, image, continent, adults } = newTourData;

  return (
    <div
      className={clsx(styles.formContainer, {
        [styles.darkFormContainer]: !isLight,
      })}
    >
      <form onSubmit={handleSubmit} className={styles.tourForm}>
        <h1>Add new tour of your dream</h1>
        <div className={styles.formGroupWrap}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            placeholder="Lviv, Ukraine"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroupWrap}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            name="price"
            value={price}
            placeholder="500 $"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroupWrap}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            value={description}
            placeholder="Experience the rich history and vibrant cultural scene of Lviv."
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroupWrap}>
          <label htmlFor="imgUrl">Image URL</label>
          <input
            id="imgUrl"
            type="text"
            name="image"
            value={image}
            placeholder="/assets/img/Lviv.png"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroupWrap}>
          <label htmlFor="continent">Continent</label>
          <select
            id="continent"
            name="continent"
            value={continent}
            onChange={handleInputChange}
          >
            <option value="">Select Continent</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Australia">Australia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div className={clsx(styles.formGroupWrap, styles.checkboxInput)}>
          <label htmlFor="age">
            Tour is only for adults
            <input
              id="age"
              type="checkbox"
              name="adults"
              checked={adults}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.buttonsGroup}>
          <button>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewTourForm;