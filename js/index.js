import { backButtonListener } from './backButtonListener.js';
import { records } from './sample-record-data.js';
import { renderRecords } from './renderRecords.js';
import { renderPagination } from './renderPagination.js';
import { paginationLinkListener } from './paginationLinkListener.js';
import { addToFavoritesListener } from './addToFavoritesListener.js';
import { getCurrentPage } from './utils.js';

const startApp = () => {
  const recordsPerPage = 6;
  const currentPage = getCurrentPage();

  backButtonListener();

  renderRecords(records, recordsPerPage, currentPage);
  renderPagination(records.length, recordsPerPage, currentPage);

  paginationLinkListener((clickedPage) => {
    renderRecords(records, recordsPerPage, clickedPage);
    renderPagination(records.length, recordsPerPage, clickedPage);
  });

  addToFavoritesListener();
};

document.addEventListener('DOMContentLoaded', startApp);
