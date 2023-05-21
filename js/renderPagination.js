const renderPagination = (totalRecords, recordsPerPage, currentPage) => {
  const paginationListElement = document.querySelector('.pagination');
  paginationListElement.innerHTML = '';
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageElement = document.createElement('li');
    pageElement.classList = 'pagination__page';

    if (i === currentPage) {
      pageElement.classList.add('pagination__page_active');
    }

    pageElement.innerHTML = `<a href="index.html?page=${i}">${i}</a>`;

    paginationListElement.appendChild(pageElement);
  }
};

export { renderPagination };
