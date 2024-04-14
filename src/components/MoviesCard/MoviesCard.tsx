import styles from "./MoviesCard.module.css";
import noLogo from "./../../images/no_logo.jpg";
import {Movie} from '../../utils/types'

export function MoviesCard(props : {movie: Movie}) {

  return (
    <div className={styles.movies_card}>
      
        <img
          className={styles.image}
          src={
            props.movie.logo && props.movie.logo.url
              ? props.movie.logo.url
              : noLogo
          }
          alt="Фото фильма"
        />


      <p className={styles.title}>{
        props.movie.name ? props.movie.name: props.movie.alternativeName}</p>
      
      {props.movie.movieLength ?
      <span className={styles.time}>
      {props.movie.movieLength > 60
        ? `${Math.floor(props.movie.movieLength / 60)}ч ${
            props.movie.movieLength % 60
          }м`
        : `${props.movie.movieLength}м`}
    </span>: ''
      }
      
    </div>
  );
}
