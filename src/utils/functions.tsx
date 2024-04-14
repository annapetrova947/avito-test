export const generatePageRange = (currentPage: number, totalPages: number) => {
    const range = [];
    const maxPagesToShow = 5;

    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (totalPages <= maxPagesToShow) {
      start = 1;
      end = totalPages;
    } else if (end === totalPages) {
      start = totalPages - maxPagesToShow + 1;
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };