import { openFullPicture } from './full-picture.js';
import { renderPictures } from './create-pictures.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    debugger;
    const thumbnail = evt.target.closest('[data-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find ((item) => item.id === +thumbnail.dataset.id);
    openFullPicture(picture);
  });
  renderPictures (pictures, container);
};

export {renderGallery};
