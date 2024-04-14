import { MoviesCard } from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { RootState } from "./../../services/reducers/rootReducer";
import { Movie } from "./../../utils/types.js";
import { Link } from 'react-router-dom';
import styles from './MoviesCardList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../services/actions/movies";
import { updateCurrentPage } from './../../services/actions/pageOptions';
import { Pagination } from '../Pagination/Pagination';

export default function MoviesCardList() {
  const { items, itemsRequest, itemsFailed }: any = useSelector(
    (store: RootState) => store.movies,
  );

  const dispatch = useDispatch()

  const { totalPages }: any = useSelector(
    (store: RootState) => store.movies,
  );

  const { currentPage }: any = useSelector(
    (store: RootState) => store.pageOptions.options,
  );

  const handlePageClick = (pageNumber: number) => {
  dispatch(updateCurrentPage({
      currentPage: pageNumber
  }))
  getItems()(dispatch);
  };

  return (
    <div>
      {Object.keys(items).length !== 0  ? (
        <>
          <div className={styles.list}>
            {items.map((movie: Movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id} className={styles.link}>
                <MoviesCard movie={movie} />
              </Link>
            ))}
          </div>
          <Pagination totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          />
          </>
      ) : itemsRequest ?(
        <Preloader />
      ): itemsFailed ? <h3>Ничего не найдено</h3> :
      <p className={styles.not_found}>Фильмы не найдены :(</p>
      }
    </div>
  );
}
