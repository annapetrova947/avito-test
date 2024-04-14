import { FilterBlock } from "../FiltersBlock/FiltersBlock";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { Pagination } from '../Pagination/Pagination';

export default function Movies() {

  return (
    <main>
      <FilterBlock />
      <SearchForm />
      <MoviesCardList />
      <Pagination />
    </main>
  );
}
