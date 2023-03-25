import { openFullPicture } from './full-picture.js';
import { renderPictures } from './create-pictures.js';
import { createTemplateComments } from './user-comments.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find ((item) => item.id === Number(thumbnail.dataset.id));
    openFullPicture(picture);
    createTemplateComments(picture.comments);
  });
  renderPictures (pictures, container);
};

export {renderGallery};
