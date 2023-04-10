//import { isEscapeKey } from "./util.js";
const body = document.querySelector ('body');


const showSuccessMessage = () => {
  const templateSuccesss = document.querySelector('#success').content;
  const sectionSuccess = templateSuccesss.querySelector('section');
  const cloneSectionSuccess = sectionSuccess.cloneNode(true);
  body.appendChild(cloneSectionSuccess);
  const succesButton = cloneSectionSuccess.querySelector('.success__button');
  succesButton.addEventListener('click', () => {
    const success = cloneSectionSuccess.querySelector('.success');
    success.classListadd('hidden');
  });
};

const showErrorMessage = () => {
  const templateError = document.querySelector('#error').content;
  const sectionError = templateError.querySelector('section');
  const cloneSectionError = sectionError.cloneNode(true);
  body.appendChild(cloneSectionError);
};

export {showErrorMessage, showSuccessMessage};
