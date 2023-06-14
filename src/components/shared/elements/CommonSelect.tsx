import styles from "./CommonInputs.module.css";
import clsx from "clsx";
import { ISelectProps } from "types";

function CommonSelect({
  label,
  id,
  name,
  value,
  options,
  onChange,
  required,
  isLight,
}: ISelectProps) {
  return (
    <div
      className={clsx(styles.lightInput, {
        [styles.darkInput]: !isLight,
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
