import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./../../services/reducers/rootReducer";
import { getItems } from "../../services/actions/movies";
import { updateCurrentPage } from './../../services/actions/pageOptions';
import {generatePageRange} from './../../utils/functions'
import styles from './Pagination.module.css';

export function Pagination() {

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
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
          Предыдущая
        </button>
        {
        generatePageRange(currentPage, totalPages).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={pageNumber === currentPage ? `${styles.active}` : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Следующая
        </button>
      </div>
    </div>
  );
};

