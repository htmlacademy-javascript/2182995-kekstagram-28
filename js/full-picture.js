import {isEscapeKey} from './util.js';

const COMMENT_SHOW_COUNT = 5;
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentListItem = bigPicture.querySelector('.social__comment');
const body = document.querySelector('body');
commentListItem.classList.add('hidden');


function showComments (hiddenComments, count) {
  for (let i = 0; i < count; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  commentsCount.textContent = `${commentList.children.length - commentList.querySelectorAll('.hidden').length} из ${commentList.children.length} комментариев`;
}


function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}


const loadComments = () => {
  const hiddenComments = commentList.querySelectorAll('.hidden');
  if (hiddenComments.length > COMMENT_SHOW_COUNT) {
    showComments(hiddenComments, COMMENT_SHOW_COUNT);
  } else if(hiddenComments.length <= COMMENT_SHOW_COUNT) {
    showComments(hiddenComments,hiddenComments.length);
    commentsLoader.classList.add('hidden');
  }
};


const renderComments = (comments) => {
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = commentListItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentList.append(newComment);
  });
};


const renderPictureComments = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

const userModalCloseElement = bigPicture.querySelector('.cancel');


const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

userModalCloseElement.addEventListener('click', () => closeUserModal ());

const onLoadButtonClick = () => {
  commentsLoader.addEventListener('click', loadComments);
};


const openFullPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  onLoadButtonClick();
  renderPictureComments(data);
  renderComments(data.comments);
  loadComments();
};

export {openFullPicture};

