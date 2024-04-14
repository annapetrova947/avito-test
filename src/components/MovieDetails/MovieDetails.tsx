import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getDetails} from './../../services/actions/movieDetails';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './../../index'
import { RootState } from "../../services/reducers/rootReducer";
import styles from './MovieDetails.module.css';
import Preloader from '../Preloader/Preloader';
import {MovieActors} from './MovieActors'
import { SimilarMovies } from './SimilarMovies'
import {Reviews} from './Reviews';


export function MovieDetails() {
   
  const { id } = useParams();

  const useAppDispatch = useDispatch.withTypes<AppDispatch>()
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    getDetails(Number(id))(dispatch);
  }, [id, dispatch])

  const { item, itemsRequest, itemsFailed }: any = useSelector(
    (store: RootState) => store.movieDetails,
  );


  if (itemsFailed) return <div>Movie not found</div>;

  return (
    <>
    {Object.keys(item).length !== 0 ? 
    <div className={styles.info}>
      <div className={styles.details}>
            <img src={item.poster.url} className={styles.image} alt='Постер фильма'/>
            <div className={styles.text_description}>
                <h2 className={styles.title}>{item.name}</h2>
                <p>{item.description}</p>
                <div>
                    <p>Рейтинг</p>
                    {Object.keys(item.rating).map((key) => {
                    if (item.rating[key] !== null) {
                    return (
                            <p key={key} className={styles.raiting}>{key}: {item.rating[key]}</p>
                    );
                }
                return null;
            })}
                </div>
                {item.seasonsInfo.length !== 0 ? 
            <div>
                <p>Сезоны и серии</p>
                <p>Сезонов: {item.seasonsInfo.length}</p>
                <p>Серии по {item.seriesLength} м.</p>
            </div> : ''}
            </div>
            <MovieActors actors={item.persons}/>
            </div>
            <SimilarMovies movies={item.similarMovies} />
            <Reviews id={Number(id)}/>
        
    </div>
         : itemsRequest ?
        <Preloader/> : ''}
        
    </>
    
    
  );
}

export default MovieDetails;
