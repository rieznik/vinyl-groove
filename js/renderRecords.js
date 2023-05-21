import { createRecordCardElement } from './createRecordCardHTML.js';

const renderRecords = (records, recordsPerPage, currentPage) => {
  const recordsCatalogElement = document.querySelector('.records-grid');
  recordsCatalogElement.innerHTML = ``;

  const currentPageRecords = records.slice(currentPage - 1, recordsPerPage);
  currentPageRecords.forEach((record) => {
    recordsCatalogElement.appendChild(createRecordCardElement(record));
  });
};

export { renderRecords };
