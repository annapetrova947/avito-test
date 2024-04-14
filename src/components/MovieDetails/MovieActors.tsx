import {useState} from 'react';
import {Actor} from './../../utils/types'
import styles from './MovieActors.module.css'

export function MovieActors(props: {actors: Actor[]}){

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
  
    const indexOfLastActor: number = currentPage * pageSize;
    const indexOfFirstActor: number = indexOfLastActor - pageSize;
    const currentActors = props.actors.slice(indexOfFirstActor, Math.min(indexOfLastActor, props.actors.length));
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <div className={styles.actors}>
      <h2 className={styles.title}>Список актеров</h2>
      <ul className={styles.list}>
        {currentActors.map((actor, index) => (
          <div key={index} className={styles.actor}>
                <img src={actor.photo} className={styles.photo} alt='Фото актера'/>
            <div>
            <p className={styles.text_name}>{actor.name}</p>
            <p>{actor.description}</p>
          </div>
          </div>
        ))}
      </ul>
      {
        props.actors.length > 10 ?
        <Pagination
        pageSize={pageSize}
        totalItems={props.actors.length}
        paginate={paginate}
        currentPage={currentPage}
      /> : ''
      }
      
    </div>

        
    );

}

interface PaginationProps {
    pageSize: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
  }

export const Pagination = ({ pageSize, totalItems, paginate, currentPage }: PaginationProps) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
      pageNumbers.push(i);
    }
  
    return (
        <nav className={styles.pagination}>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ?  `${styles.page_item} ${styles.active}` : `${styles.page_item}`}>
              <a onClick={() => paginate(number)} className={styles.page_link}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };