const LS_FAV_KEY = 'favorites';

const getFavoriteRecords = () => JSON.parse(localStorage.getItem(LS_FAV_KEY));

const addFavoriteRecord = (id) => {
  const favoriteRecords = getFavoriteRecords() || [];

  favoriteRecords.push(id);

  localStorage.setItem(LS_FAV_KEY, JSON.stringify(favoriteRecords));
};

const getCurrentPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('page')) || 1;
};

export { getCurrentPage, addFavoriteRecord, getFavoriteRecords };
