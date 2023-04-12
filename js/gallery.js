import { openFullPicture} from './full-picture.js';
import { renderPictures } from './create-pictures.js';

const container = document.querySelector('.pictures');
let pictures = [];


const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-id]');
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = pictures.find ((item) => item.id === Number(thumbnail.dataset.id));
  openFullPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPictures(pictures,container);
  container.addEventListener('click', onContainerClick);
};

export {renderGallery};
