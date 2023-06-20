import { debounce } from "lodash";
import styles from "./CommonInputs.module.css";

interface IProps {
  onChange: (value: string) => void;
}



function SearchInput({ onChange }: IProps) {

  const handleSearchChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    500
  );

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Search tour by name"
          className={styles.searchInput}
          onChange={handleSearchChange}
        />
        <i className={styles.search}></i>
      </div>
    </div>
  );
}

export default SearchInput;
