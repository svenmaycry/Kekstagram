import { openFullImage, closeFullImage } from './show-full-image.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const thumbnailListFragment = document.createDocumentFragment();
const imgFiltersElement = document.querySelector('.img-filters');

const renderThumbnails = (thumbnail) => {
  thumbnail.forEach((element) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').setAttribute('src', element.url);
    thumbnailElement.querySelector('.picture__img').setAttribute('alt', element.description);
    thumbnailElement.querySelector('.picture__likes').textContent = element.likes;
    thumbnailElement.querySelector('.picture__comments').textContent = element.comments.length;
    thumbnailListFragment.append(thumbnailElement);
    openFullImage(thumbnailElement, element);
    closeFullImage();
  });

  pictures.querySelectorAll('.picture').forEach((element) => { //!--------------------------------------------------NEW---------------------------------------//
    element.remove();
  });
  pictures.append(thumbnailListFragment);
  imgFiltersElement.classList.remove('img-filters--inactive'); //!--------------------------------------------------NEW---------------------------------------//
};

export { renderThumbnails };
