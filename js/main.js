import './data.js';
import { createPhotos } from './data.js';
import './create-pictures.js';
import './full-picture.js';

import { renderGallery } from './gallery.js';

renderGallery(createPhotos());
console.log(createPhotos());
