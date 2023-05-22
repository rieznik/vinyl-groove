import { backButtonListener } from './backButtonListener.js';
import { records } from './sample-record-data.js';
import { renderRecords } from './renderRecords.js';
import { renderPagination } from './renderPagination.js';
import { paginationLinkListener } from './paginationLinkListener.js';
import { favoritesButtonListener } from './favoritesButtonListener.js';
import { windowResizeListener } from './windowResizeListener.js';
import { getCurrentPage } from './utils.js';

const startApp = () => {
  const calculateRecordsPerPage = () => (window.innerWidth < 1200 ? 6 : 8);

  let recordsPerPage = calculateRecordsPerPage();
  const currentPage = getCurrentPage();

  renderRecords(records, recordsPerPage, currentPage);
  renderPagination(records.length, recordsPerPage, currentPage);

  backButtonListener();

  favoritesButtonListener();

  paginationLinkListener((clickedPage) => {
    renderRecords(records, recordsPerPage, clickedPage);
    renderPagination(records.length, recordsPerPage, clickedPage);
  });

  windowResizeListener(() => {
    recordsPerPage = calculateRecordsPerPage();
    renderRecords(records, recordsPerPage, currentPage);
    renderPagination(records.length, recordsPerPage, currentPage);
  });
};

document.addEventListener('DOMContentLoaded', startApp);
