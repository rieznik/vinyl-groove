const artistInputListener = () => {
  const artistInputElement = document.getElementById('artist');
  const characterWarningElement = document.querySelector('.warning-message');
  const maxCharacterLimit = 30;

  artistInputElement.addEventListener('input', () => {
    const currentCharacterCount = artistInputElement.value.length;
    if (currentCharacterCount <= maxCharacterLimit) {
      characterWarningElement.classList.add('hidden');
    } else {
      characterWarningElement.classList.remove('hidden');
    }
  });
};
export { artistInputListener };
