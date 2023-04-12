import { isEscapeKey } from './util.js';

function onDocumentEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
}

const createElementMessage = (selector) => {
  const template = document.querySelector(selector).content;
  const sectionElement = template.querySelector('section');
  const cloneElement = sectionElement.cloneNode(true);
  document.body.appendChild(cloneElement);
};

const showSuccessMessage = () => {
  createElementMessage('#success');
  const successInner = document.querySelector('.success__inner');
  const success = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      success.remove();
    }
  }, {once: true});
  successButton.addEventListener('click',() => success.remove());
  document.addEventListener('click', (evt) => {
    if(evt.target !== successInner) {
      success.remove();
    }
  }, {once: true});
};


const showErrorMessage = () => {
  createElementMessage('#error');
  const errorInner = document.querySelector('.error__inner');
  const error = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  document.removeEventListener('keydown', onDocumentEscapeKeydown);
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      error.remove();
    }
  }, {once: true});
  errorButton.addEventListener('click',() => error.remove());
  document.addEventListener('click',(evt) => {
    if(evt.target !== errorInner) {
      error.remove();
    }
  }, {once: true});
};

export {showErrorMessage, showSuccessMessage};
