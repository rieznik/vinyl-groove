import { backButtonHandler } from './backButtonHandler.js';
import { records } from './sample-record-data.js';
import { renderRecords } from './renderRecords.js';
import { renderPagination } from './renderPagination.js';

const startApp = () => {
  const recordsPerPage = 2;
  const currentPage = 1;

  backButtonHandler();
  renderRecords(records, recordsPerPage, currentPage);
  renderPagination(records.length, recordsPerPage, currentPage);
};

document.addEventListener('DOMContentLoaded', startApp);
