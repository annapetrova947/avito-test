import { MoviesCard } from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./../../services/reducers/rootReducer";
import { Movie } from "./../../utils/types.js";
import { Link } from 'react-router-dom';
import styles from './MoviesCardList.module.css'

export default function MoviesCardList() {
  const { items, itemsRequest, itemsFailed }: any = useSelector(
    (store: RootState) => store.movies,
  );

  return (
    <div>
      {Object.keys(items).length !== 0  ? (
          <div className={styles.list}>
            {items.map((movie: Movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id} className={styles.link}>
                <MoviesCard movie={movie} />
              </Link>
            ))}
          </div>
  
      ) : itemsRequest ?(
        <Preloader />
      ): ''}
    </div>
  );
}
