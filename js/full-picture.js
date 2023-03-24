import './create-pictures.js';
import {isEscapeKey} from './util.js';

const fullPicture = document.querySelector('.big-picture');
const fullPictureCancel = document.querySelector('.big-picture__cancel');
//const fullPictureImg = document.querySelector('.big-picture__img');


const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture ();
  }
};
const openFullPicture = () => {
  fullPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

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

export {openFullPicture, closeFullPicture};

