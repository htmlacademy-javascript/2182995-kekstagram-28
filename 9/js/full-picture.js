import './create-pictures.js';
import {isEscapeKey} from './util.js';


const fullPicture = document.querySelector('.big-picture');
const fullPictureCancel = document.querySelector('.big-picture__cancel');
const fullPictureImg = document.querySelector('.big-picture').querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const pictureDescription = document.querySelector('.social__caption');
const commentsLoadMoreButton = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialListFragment = document.createDocumentFragment();
const commentsLoaded = document.querySelector('.social__comment-count');

const COMMENTS_STEP = 5;
let commentsShown = 0;
let currentComments = [];

const createTemplateComments = (comments) => {
  currentComments = comments;
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const userComment = socialComment.cloneNode(true);
    userComment.querySelector('.social__picture').src = comment.avatar;
    userComment.querySelector('.social__picture').alt = comment.alt;
    userComment.querySelector('.social__text').textContent = comment.message;

    socialListFragment.appendChild(userComment);

  });
  commentsList.appendChild(socialListFragment);
};

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35">';
  comment.classList.add('social__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_STEP;
  if (commentsShown >= currentComments.length) {
    commentsLoadMoreButton.classList.add('hidden');
    commentsShown = currentComments.length;
  } else {
    commentsLoadMoreButton.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(currentComments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentsLoaded.innerHTML = `${commentsShown}из <span class="comments-count">${currentComments.length}</span> комментариев</div>`;

};


const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    //closeFullPicture ();
  }
};

const openFullPicture = (picture) => {
  fullPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fullPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  pictureDescription.textContent = picture.description;
  renderComments(picture.comments);
  createTemplateComments (picture.comments);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const closeFullPicture = () => {
  fullPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

fullPictureCancel.addEventListener('click', () => {
  closeFullPicture();
});

commentsLoadMoreButton.addEventListener('click', () => {
  renderComments();
});

export {openFullPicture};

export {renderComments};
export {createTemplateComments};


