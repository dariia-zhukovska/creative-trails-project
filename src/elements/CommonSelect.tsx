
import clsx from "clsx";
import { useSelector } from "react-redux";
import styles from "./CommonInputs.module.css";

import { ISelectProps } from "interfaces";
import { selectTheme } from "../store/theme/theme-slices";

function CommonSelect({
  label,
  id,
  name,
  value,
  options,
  onChange,
  required,
}: ISelectProps) {
  const theme = useSelector(selectTheme);
  return (
    <div
      className={clsx(styles.lightInput, {
        [styles.darkInput]: theme === "isLight",
      })}
    >
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CommonSelect;
