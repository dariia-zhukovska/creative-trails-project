import styles from "./CommonInputs.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../store/theme/theme-selector";
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
}: IInputProps) {
  const theme = useSelector(selectTheme);
  return (
    <div
      className={clsx(styles.lightInput, {
        [styles.darkInput]: theme === "isLight",
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
