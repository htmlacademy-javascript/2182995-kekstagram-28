import './create-pictures.js';
import {isEscapeKey} from './util.js';
import { renderComments } from './user-comments.js';
import { createTemplateComments } from './user-comments.js';


const fullPicture = document.querySelector('.big-picture');
const fullPictureCancel = document.querySelector('.big-picture__cancel');
const fullPictureImg = document.querySelector('.big-picture').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const pictureDescription = document.querySelector('.social__caption');
const commentsLoadMoreButton = document.querySelector('.comments-loader');


const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture ();
  }
};

const openFullPicture = (picture) => {
  fullPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fullPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  pictureDescription.textContent = picture.description;
  renderComments();
  createTemplateComments (picture.comments);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const closeFullPicture = () => {
  fullPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

fullPictureCancel.addEventListener('click', () => {
  closeFullPicture();
});

commentsLoadMoreButton.addEventListener('click', () => {
  renderComments();
});

export {openFullPicture};

