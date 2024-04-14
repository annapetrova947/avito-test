import { SelectComponent } from "./SelectComponent";
import React, { useState } from "react";
import { countries, ages, years, itemsPerPage } from "./../../const/const";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../services/reducers/rootReducer";
import { updateFilters } from "./../../services/actions/filters";
import { updatePageOptions } from "./../../services/actions/pageOptions";
import {getItems} from './../../services/actions/movies'
import { Dispatch } from 'redux';
import {FiltersState} from './../../services/reducers/filtersReducer'
import styles from './FilterBlock.module.css'

interface SelectProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountrySelect = (props: SelectProps) => (
  <SelectComponent label="Страна" options={countries} {...props} />
);

const AgeSelect = (props: SelectProps) => (
  <SelectComponent label="Возраст" options={ages} {...props} />
);

const YearSelect = (props: SelectProps) => (
  <SelectComponent label="Год выпуска" options={years} {...props} />
);

const ItemsPerPageSelect = (props: SelectProps) => (
  <SelectComponent
    label="Фильмов на странице"
    options={itemsPerPage}
    {...props}
  />
);

export function FilterBlock() {
  const { filters }: FiltersState = useSelector((store: RootState) => store.filters);
  const { itemsPerPage }: any = useSelector((store: RootState) => store.pageOptions.options);
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState(filters.country);
  const [selectedAge, setSelectedAge] = useState(filters.age);
  const [selectedYear, setSelectedYear] = useState(filters.year);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);

  function updateFiltersAndItems(country: string, age: string, year: string, dispatch: Dispatch) {
    dispatch(updateFilters({ country, age, year }));
    getItems()(dispatch);
  }

  const handleCountryChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setSelectedCountry(e.target.value);
    updateFiltersAndItems(e.target.value, selectedAge, selectedYear, dispatch);
  };

  const handleAgeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedAge(e.target.value);
    updateFiltersAndItems(selectedCountry, e.target.value, selectedYear, dispatch);
  };

  const handleYearChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedYear(e.target.value);
    updateFiltersAndItems(selectedCountry, selectedAge, e.target.value, dispatch);
  };

  const handleItemsPerPageChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = (e) => {
    setSelectedItemsPerPage(Number(e.target.value));
    dispatch(
      updatePageOptions({
        itemsPerPage: Number(e.target.value)
      }),
    );
    getItems()(dispatch);
  };

  return (
    <div className={styles.filter_block}>
      <CountrySelect onChange={handleCountryChange} value={selectedCountry} />
      <AgeSelect onChange={handleAgeChange} value={selectedAge} />
      <YearSelect onChange={handleYearChange} value={selectedYear} />
      <ItemsPerPageSelect
        onChange={handleItemsPerPageChange}
        value={selectedItemsPerPage}
      />
    </div>
  );
}
