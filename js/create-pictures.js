import { openFullPicture } from './full-picture.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarListFragment = document.createDocumentFragment();


const renderPictures = (pictures) => {
  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.dataset.id = picture.id;
    similarListFragment.append(pictureElement);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openFullPicture(picture);
    });
  });
  pictureList.appendChild(similarListFragment);
};

export {renderPictures};
