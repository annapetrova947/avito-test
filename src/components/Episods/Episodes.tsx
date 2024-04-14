import { useEffect, useState } from 'react';
import {getEpisodes} from '../../services/api'
import {Season} from '../../utils/types'
import {Pagination} from '../Pagination/Pagination'
import styles from './Episods.module.css';


export function Episods(props: {id: number}){

    const [seasonsArray, setSeasonsArray] = useState<Season[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        getEpisodes(props.id)
        .then(res => {
            if (res) {
                setSeasonsArray((res as any).docs);
                setTotalPages((res as any).docs.length / 4);
            }
    });

    }, [currentPage])
  
  
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    };

    const pageSize = 3;
  
    const indexOfLastActor: number = currentPage * pageSize;
    const indexOfFirstActor: number = indexOfLastActor - pageSize;
    const currentSeasons = seasonsArray.slice(indexOfFirstActor, Math.min(indexOfLastActor, seasonsArray.length));

    return (
        <>
        {seasonsArray.length !== 0 ? 
        <div >
            <h2>Сезоны и серии</h2>
            {currentSeasons.map((season: Season)=>(
                <div key={season.id} className={styles.season}>
                <p  className={styles.name}>{season.name}</p>
                <p  className={styles.episodes}>Количество эпизодов: {season.episodes.length}</p>
                </div>
            ))}
           <Pagination totalPages={Math.ceil(totalPages)}
                        currentPage={currentPage}
                        handlePageClick={paginate}
      />
        </div> : ''}
        </>
    );
}