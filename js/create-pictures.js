import { createPhotos } from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const arrayPictures = createPhotos();
const similarListFragment = document.createDocumentFragment();

arrayPictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarListFragment.append(pictureElement);
});


pictureList.appendChild(similarListFragment);
