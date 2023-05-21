import { backButtonListener } from './backButtonListener.js';
import { renderRecords, renderPagination } from './renderCatalog.js';

const startApp = () => {
  console.log('start');
  backButtonListener();
  renderRecords();
  renderPagination();
};

document.addEventListener('DOMContentLoaded', startApp);
