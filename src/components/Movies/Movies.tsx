import { FilterBlock } from "../FiltersBlock/FiltersBlock";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


export default function Movies() {


  return (
    <main>
      <FilterBlock />
      <SearchForm />
      <MoviesCardList />
      
    </main>
  );
}
