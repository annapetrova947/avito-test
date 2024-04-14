import React, {useState} from "react";
import styles from "./SearchForm.module.css";
import findIcon from "./../../images/find-icon-min.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/reducers/rootReducer";
import { updateSerchedMovie } from './../../services/actions/searchedMovieName';
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';
import { getItems } from './../../services/actions/movies'
import { useDebounce } from "@uidotdev/usehooks";


export default function SearchForm() {

 
  const dispatch = useDispatch();
  const {searchHistory} = useSelector(
    (store: RootState) => store.serchedMovie,
  );

  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const debouncedSearchTerm = useDebounce(query, 1000);

  React.useEffect(() => {
    if (debouncedSearchTerm !== '') {
      dispatch(updateSerchedMovie(debouncedSearchTerm))
      getItems()(dispatch);
    }
    
  }, [debouncedSearchTerm]);


  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value)

  const filteredSuggestions = searchHistory.filter((query) =>
      query.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setSuggestions([]);

  };

  function submitFrom(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateSerchedMovie(query))
    getItems()(dispatch);
    setSuggestions([]);
  }

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={submitFrom}>
        <img alt="Логотип поиска" src={findIcon} className={styles.logo} />
        <div className={styles.form_input}>
        <input
          placeholder="Фильм"
          className={styles.input}
          name="query"
          id="search-input"
          type="text"
          onChange={handleChangeQuery}
          value={query || ""}
        />{suggestions.length > 0 && (
          <ul className={styles.suggestions_list}> 
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={styles.suggestion_item}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            dispatch(updateSerchedMovie(query))
            getItems()(dispatch);
          }}
        >
          Найти
        </button>
      </form>
    </div>
  );
}
