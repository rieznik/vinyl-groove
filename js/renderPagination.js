const getPagination = (current, total, delta = 2, gap = '...') => {
  if (total <= 1) return [1];

  const center = [current];

  for (let i = 1; i <= delta; ++i) {
    center.unshift(current - i);
    center.push(current + i);
  }

  const filteredCenter = center.filter((page) => page > 1 && page < total);

  const includeLeftGap = current > 3 + delta;
  const includeLeftPages = current === 3 + delta;
  const includeRightGap = current < total - (2 + delta);
  const includeRightPages = current === total - (2 + delta);

  if (includeLeftPages) filteredCenter.unshift(2);
  if (includeRightPages) filteredCenter.push(total - 1);
  if (includeLeftGap) filteredCenter.unshift(gap);
  if (includeRightGap) filteredCenter.push(gap);

  return [1, ...filteredCenter, total];
};

const renderPagination = (totalRecords, recordsPerPage, currentPage) => {
  const paginationListElement = document.querySelector('.pagination');
  paginationListElement.innerHTML = '';

  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const pagination = getPagination(currentPage, totalPages);

  for (const page of pagination) {
    const pageElement = document.createElement('li');
    pageElement.classList = 'pagination__page';

    if (page === currentPage) {
      pageElement.classList.add('pagination__page_active');
    } else if (page === '...') {
      pageElement.classList.add('pagination__page_more');
    }

    pageElement.innerHTML = `<a href="index.html?page=${page}">${page}</a>`;
    paginationListElement.appendChild(pageElement);
  }
};

export { renderPagination };
