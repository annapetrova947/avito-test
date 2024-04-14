import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getDetails} from './../../services/actions/movieDetails';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './../../index'
import { RootState } from "../../services/reducers/rootReducer";
import styles from './MovieDetails.module.css';
import Preloader from '../Preloader/Preloader';
import {MovieActors} from '../MovieActors/MovieActors'
import { SimilarMovies } from './../SimilarMovies/SimilarMovies'
import {Reviews} from '../Reviews/Reviews';
import {Episods} from '../Episods/Episodes';
import { useNavigate } from 'react-router-dom';


export function MovieDetails() {
   
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };

  const useAppDispatch = useDispatch.withTypes<AppDispatch>()
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    getDetails(Number(id))(dispatch);
  }, [id, dispatch])

  const { item, itemsRequest, itemsFailed }: any = useSelector(
    (store: RootState) => store.movieDetails,
  );

 
  return (
    <>
    <div>
      <button onClick={handleBack} className={styles.back}></button>
    </div>
    {Object.keys(item).length !== 0 ? 
    <div className={styles.info}>
      <div className={styles.details}>
            <img src={item.poster.url} className={styles.image} alt='Постер фильма'/>
            <div className={styles.text_description}>
                <h2 className={styles.title}>{item.name}</h2>
                <p>{item.description}</p>
                <div>
                    <h3>Рейтинг</h3>
                    {Object.keys(item.rating).map((key) => {
                    if (item.rating[key] !== null) {
                    return (
                            <p key={key} className={styles.raiting}>{key}: {item.rating[key]}</p>
                    );
                }
                return null;
            })}
                </div>
            <Episods id={Number(id)}/>
            </div>
            <MovieActors actors={item.persons}/>
            </div>
            <SimilarMovies movies={item.similarMovies} />
            <Reviews id={Number(id)}/>
        
    </div>
         : itemsRequest ?
        <Preloader/> : itemsFailed ? <h3 className={styles.not_found}>Такого фильма нет :(</h3> : ''}
        
    </>
    
    
  );
}

export default MovieDetails;
