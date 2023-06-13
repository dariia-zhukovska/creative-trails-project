import styles from "./CommonInputs.module.css";
import clsx from "clsx";
import { IInputProps, ISelectProps } from "~/types";

export function CommonInput({
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

export function CommonSelect({
  label,
  id,
  name,
  value,
  options,
  onChange,
  isLight,
}: ISelectProps) {
  return (
    <div className={clsx(styles.lightInput, { [styles.darkInput]: !isLight })}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
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

export function CommonCheckboxInput({
  label,
  id,
  type,
  name,
  checked,
  onChange,
  isLight,
}: IInputProps) {
  return (
    <div
      className={clsx(styles.checkboxInput, styles.lightInput, {
        [styles.darkInput]: !isLight,
      })}
    >
      <label htmlFor="age">
        {label}
        <input
          id={id}
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
