const getCurrentPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('page')) || 1;
};

export { getCurrentPage };
