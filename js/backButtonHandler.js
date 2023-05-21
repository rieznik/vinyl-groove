const backButtonElement = document.querySelector('button.header__btn');

const backButtonHandler = () => {
  backButtonElement.addEventListener('click', () => {
    history.back();
  });
};

export { backButtonHandler };
