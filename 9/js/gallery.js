import { openFullPicture } from './full-picture.js';
import { renderPictures } from './create-pictures.js';
import { renderComments } from './full-picture.js';


const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find ((item) => item.id === Number(thumbnail.dataset.id));
    openFullPicture(picture);
  });
  renderPictures (pictures, container);
};

export {renderGallery};
