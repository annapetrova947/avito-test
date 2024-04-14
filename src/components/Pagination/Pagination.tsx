
import {generatePageRange} from './../../utils/functions'
import styles from './Pagination.module.css';

interface PaginationInterface {
    totalPages: number;
    currentPage: number;
    handlePageClick: (pageNumber: number) => void;
}

export function Pagination({totalPages, currentPage, handlePageClick}: PaginationInterface) {
    

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

