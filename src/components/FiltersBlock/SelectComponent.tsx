import React from "react";
import styles from "./SelectComponent.module.css"
import { useSelector } from "react-redux";
import { RootState } from "../../services/reducers/rootReducer";

interface SelectProps {
  label: string;
  options: string[] | number[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectComponent({
  label,
  options,
  value,
  onChange,
}: SelectProps) {

  const {name} = useSelector(
    (store: RootState) => store.serchedMovie,
  );

  return (
    <div className={styles.select_component}>
      <label htmlFor={label} className={styles.label}>
        {label}:
      </label>
      <select
        id={label}
        onChange={onChange}
        value={value}
        className={styles.select}
        disabled={name==='' ? false : true}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
