const createRecordCardElement = ({
  id,
  coverImages,
  title,
  artist,
  year,
  styles,
  country,
}) => {
  const recordCardElement = document.createElement('article');
  recordCardElement.id = id;
  recordCardElement.classList = 'record';
  recordCardElement.innerHTML = `
    <button data-record-id="${id}" class="record__btn-favorite">
      <svg
        class="icon icon_heart"
        role="img"
        height="10"
        width="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
        focusable="false"
      >
        <use xlink:href="#heart"></use>
      </svg>
      <span class="visually-hidden"> Add to Favorites </span>
    </button>
    <a href="#${id}">
      <picture>
        <source
          srcset="
            ${coverImages.avif[0]} 1x,
            ${coverImages.avif[1]} 2x
          "
        />
        <source
          srcset="
            ${coverImages.jpg[0]} 1x,
            ${coverImages.jpg[1]} 2x
          "
        />
        <img
          class="record__cover"
          src="${coverImages.jpg[1]}"
          alt="${title} ${artist} cover"
        />
      </picture>
    </a>
    <h1 class="record__title text-overflow">
      <a href="#${id}">${title}</a>
    </h1>
    <h2 class="record__artist text-overflow">
      <a href="#${id}">${artist}</a>
    </h2>
    <ul>
      <li class="record__info text-overflow">
        <span class="record__info_name">Year :</span>${year}
      </li>
      <li class="record__info text-overflow">
            <span class="record__info_name">Style :</span>${styles.join(', ')}
          </li>
      <li class="record__info text-overflow">
        <span class="record__info_name">Country :</span>${country}
      </li>
    </ul>
    <button class="button button__secondary record__button">
      Add
      <svg
        class="icon"
        role="img"
        height="10"
        width="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
        focusable="false"
      >
        <use xlink:href="#plus"></use>
      </svg>
    </button>
`;

  return recordCardElement;
};

export { createRecordCardElement };
