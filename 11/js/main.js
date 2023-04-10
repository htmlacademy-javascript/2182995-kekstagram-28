import './form.js';
import './full-picture.js';
import {showAlert, debounce} from './util.js';
import { renderGallery } from './gallery.js';
import { setOnFormSubmit} from './form.js';
import { getData} from './api.js';
//import {loadLocalFile} from './load-picture.js';
import { init, getFilter } from './filter.js';

//loadLocalFile();
setOnFormSubmit();


getData()
  .then((data) => {
    const debounceRenderGallery = debounce(renderGallery);
    init(data, debounceRenderGallery);
    renderGallery(getFilter());
  })
  .catch ((err) => {
    showAlert(err.message);
  }
  );
