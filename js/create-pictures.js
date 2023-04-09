const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPictures = ({url, description, comments, likes, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').textContent = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.id = id;
  return pictureElement;
};

const renderPictures = (pictures, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const similarListFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPictures(picture);
    similarListFragment.appendChild(pictureElement);
  });
  container.append(similarListFragment);
};


export {renderPictures};
