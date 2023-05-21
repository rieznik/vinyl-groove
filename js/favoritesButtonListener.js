import { addFavoriteRecord, removeFavoriteRecord } from './utils.js';

const favoritesButtonListener = () => {
  const favoriteButtonElements = document.querySelectorAll(
    '.record__btn-favorite'
  );

  favoriteButtonElements.forEach((button) => {
    button.addEventListener('click', ({ target }) => {
      const id = target.closest('button').dataset.record_id;
      const isFavorite = target
        .closest('button')
        .classList.toggle('record__btn-favorite_active');

      if (isFavorite) {
        addFavoriteRecord(id);
      }
      if (!isFavorite) {
        removeFavoriteRecord(id);
      }
    });
  });
};

export { favoritesButtonListener };
