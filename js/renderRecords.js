import { createRecordCardElement } from './createRecordCardHTML.js';

const renderRecords = (records, recordsPerPage, currentPage) => {
  const recordsCatalogElement = document.querySelector('.records-grid');
  recordsCatalogElement.innerHTML = ``;

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex =
    startIndex + recordsPerPage < records.length
      ? startIndex + recordsPerPage
      : records.length;

  const currentPageRecords = records.slice(startIndex, endIndex);

  currentPageRecords.forEach((record) => {
    recordsCatalogElement.appendChild(createRecordCardElement(record));
  });
};

export { renderRecords };
