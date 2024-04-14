import { useEffect, useState } from 'react';
import {getMovieReview} from './../../services/api'
import {ApiResponseReview, Review} from './../../utils/types'
import {Pagination} from './MovieActors'
import styles from './Reviews.module.css'

export function Reviews(props: {id: number}){

    const [reviewArray, setReviewArray] = useState<Review[]>([])

    useEffect(()=>{
        getMovieReview(props.id)
    .then(res => {
        if (res && Array.isArray(res)) {
            setReviewArray(res);
        }
    });
    }, [])
    

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
  
    const indexOfLastActor: number = currentPage * pageSize;
    const indexOfFirstActor: number = indexOfLastActor - pageSize;
    const currentActors = reviewArray.slice(indexOfFirstActor, Math.min(indexOfLastActor, reviewArray.length));
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
        {reviewArray.length !== 0 ? 
        <div className={styles.reviews}>
            {currentActors.map((review: Review)=>(
                <div key={review.id} className={styles.review}>
                <p>{review.author}</p>
                <h3>{review.title}</h3>
                <p>{review.review}</p>
                </div>
            ))}
            <Pagination
            pageSize={pageSize}
            totalItems={reviewArray.length}
            paginate={paginate}
            currentPage={currentPage}
      />
        </div> : ''}
        </>
    );
}