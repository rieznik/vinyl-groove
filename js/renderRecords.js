import { createRecordCardElement } from './createRecordCardHTML.js';
import { getFavoriteRecords } from './utils.js';

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

  const favoriteRecords = getFavoriteRecords();
  if (!!favoriteRecords) {
    const currentPageFavoriteRecords = currentPageRecords.filter((record) =>
      favoriteRecords.includes(record.id)
    );

    currentPageFavoriteRecords.forEach(({ id }) => {
      const favoriteRecordElement = document.querySelector(
        `button[data-record_id="${id}"]`
      );
      favoriteRecordElement.classList.add('record__btn-favorite_active');
    });
  }
};

export { renderRecords };
