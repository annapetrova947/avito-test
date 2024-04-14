import { useEffect, useState } from 'react';
import {getMovieReview} from '../../services/api'
import {ApiResponseReview, Review} from '../../utils/types'
import {Pagination} from '../Pagination/Pagination'
import styles from './Reviews.module.css'


export function Reviews(props: {id: number}){

    const [reviewArray, setReviewArray] = useState<Review[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)


    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        getMovieReview(props.id, currentPage)
        .then(res => {
            if (res) {
                setReviewArray((res as any).docs);
                setTotalPages((res as any).pages);
            }
    });

    }, [currentPage])
  
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)

    };

    return (
        <>
        <h2 className={styles.title}>Отзывы</h2>
        {reviewArray.length !== 0 ? 
        <div>
            {reviewArray.map((review: Review)=>(
                <div key={review.id} className={styles.review}>
                <p>{review.author}</p>
                <h3>{review.title}</h3>
                <p>{review.review}</p>
                </div>
            ))}
           <Pagination totalPages={totalPages}
      currentPage={currentPage}
      handlePageClick={paginate}
      />
        </div> : <p>Отзывов нет</p>}
        </>
    );
}