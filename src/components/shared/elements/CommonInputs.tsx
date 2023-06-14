import styles from "./CommonInputs.module.css";
import clsx from "clsx";
import { IInputProps } from "types";

function CommonInput({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  isLight,
}: IInputProps) {
  return (
    <div
      className={clsx(styles.lightInput, {
        [styles.darkInput]: !isLight,
        [styles.checkboxInput]: type == "checkbox",
      })}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default CommonInput;
