import { createRecordCardElement } from './createRecordCardHTML.js';

const recordsCatalogElement = document.querySelector('.records-grid');
const recordsPerPage = 4;
const currentPage = 1;

const renderRecords = (records) => {
  recordsCatalogElement.innerHTML = ``;

  const currentPageRecords = records.slice(currentPage - 1, recordsPerPage);
  currentPageRecords.forEach((record) => {
    recordsCatalogElement.appendChild(createRecordCardElement(record));
  });
};

export { renderRecords };
