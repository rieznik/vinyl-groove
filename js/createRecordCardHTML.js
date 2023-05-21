const getRecordStylesLinks = (styles) => {
  const stylesLinksElement = document.createElement('li');
  stylesLinksElement.classList = 'record__info text-overflow';
  stylesLinksElement.innerHTML =
    '<span class="record__info_name">Style :</span>';

  styles.forEach((style) => {
    const styleLinkElement = document.createElement('a');
    styleLinkElement.href = `#${style}`;
    styleLinkElement.innerText = `${style}`;
    stylesLinksElement.appendChild(styleLinkElement);
  });

  return `${stylesLinksElement}`;
};

const createRecordCardElement = ({
  id,
  coverImages,
  title,
  artist,
  year,
  styles,
}) => {
  const recordCardElement = document.createElement('article');
  recordCardElement.id = id;
  recordCardElement.classList = 'record';
  recordCardElement.innerHTML = `
    <button class="record__btn-favorite">
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
        <span class="record__info_name">Year :</span><a href="#${id}">${year}</a>
      </li>
      ${getRecordStylesLinks(styles)}
      <li class="record__info text-overflow">
        <span class="record__info_name">Country :</span
        ><a href="">The Netherlands</a>
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
