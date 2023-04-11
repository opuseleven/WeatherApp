import { FC, Dispatch, SetStateAction, useState, FormEvent, ChangeEvent } from 'react';
import styles from '../styles/Components.module.css';

interface SearchFormProps {
  setCitySearch: Dispatch<SetStateAction<string>>,
  zip: boolean,
  setZip: Dispatch<SetStateAction<boolean>>
}

const SearchForm: FC<SearchFormProps> = ({ setCitySearch, zip, setZip }) => {

  const [search, setSearch] = useState('');
  const [zipSearch, setZipSearch] = useState(zip);

  function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setZip(zipSearch);
    setCitySearch(search);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleDropdownChange(e: ChangeEvent<HTMLSelectElement>) {
    let status = false;
    if (e.target.value == 'Zip Code Search') {
      status = true;
    }
    setZipSearch(status);
  }

  return (
    <div className={styles.searchformcontainer}>
      <form onSubmit={(e) => handleClick(e)}>
        <input type="text" value={search} onChange={(e) => handleChange(e)}
          className={styles.searchinput}
         />
        <button className={styles.searchbutton}>
          Search
        </button>
        <select defaultValue={zip ? "Zip Code Search" : "City Search"}
          onChange={(e) => handleDropdownChange(e)} className={styles.dropdown}
        >
          <option value="City Search">City Search</option>
          <option value="Zip Code Search">Zip Code Search</option>
        </select>
      </form>
    </div>
  )
}
export { SearchForm };
