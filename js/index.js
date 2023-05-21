import { backButtonListener } from './backButtonListener.js';
import { records } from './sample-record-data.js';
import { renderRecords } from './renderRecords.js';

const startApp = () => {
  console.log('start');
  backButtonListener();
  renderRecords(records);
};

document.addEventListener('DOMContentLoaded', startApp);
