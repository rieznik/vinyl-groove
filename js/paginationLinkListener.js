import { getCurrentPage } from './utils.js';

const paginationLinkListener = (cb) => {
  const paginationLinks = document.querySelectorAll('.pagination__page a');

  paginationLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const page = parseInt(event.target.innerText);
      cb(page);
    });
  });
};

export { paginationLinkListener };
