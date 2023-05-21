const backButtonElement = document.querySelector('button.header__btn');

const backButtonListener = () => {
  backButtonElement.addEventListener('click', () => {
    history.back();
  });
};

export { backButtonListener };
