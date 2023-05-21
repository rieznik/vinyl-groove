import { addFavoriteRecord } from './utils.js';

const addToFavoritesListener = () => {
  const favoriteButtonElements = document.querySelectorAll(
    '.record__btn-favorite'
  );

  favoriteButtonElements.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.parentElement.dataset.record_id;
      if (!!id) {
        button.classList.add('record__btn-favorite_active');
        addFavoriteRecord(id);
      }
    });
  });
};

export { addToFavoritesListener };
