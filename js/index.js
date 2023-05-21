import { backButtonListener } from './backButtonListener.js';

const startApp = () => {
  console.log('start');
  backButtonListener();
};

document.addEventListener('DOMContentLoaded', startApp);
