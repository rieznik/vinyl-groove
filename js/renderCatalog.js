import { records } from './sample-record-data.js';
import { createRecordCardElement } from './createRecordCardHTML.js';

const recordsPerPage = 2;
const currentPage = 1;

const renderRecords = () => {
  const recordsCatalogElement = document.querySelector('.records-grid');
  recordsCatalogElement.innerHTML = ``;

  const currentPageRecords = records.slice(currentPage - 1, recordsPerPage);
  currentPageRecords.forEach((record) => {
    recordsCatalogElement.appendChild(createRecordCardElement(record));
  });
};

const renderPagination = () => {
  const paginationListElement = document.querySelector('.pagination');
  paginationListElement.innerHTML = '';
  const totalPages = Math.ceil(records.length / recordsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageElement = document.createElement('li');
    pageElement.classList = 'pagination__page';

    pageElement.innerHTML = `<a href="index.html?page=${i}">${i}</a>`;

    if (i === currentPage) {
      pageElement.classList.add('pagination__page_active');
    }
    paginationListElement.appendChild(pageElement);
  }
};

export { renderRecords, renderPagination };
