import './data.js';
import './form.js';
//import { createPhotos } from './data.js';
import './full-picture.js';
import {showAlert} from './util.js';
import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal} from './form.js';
import { getData, sendData } from './api.js';
//renderGallery(createPhotos());
import {showErrorMessage, showSuccessMessage} from './message.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);

} catch (err) {
  showAlert(err.message);
}
