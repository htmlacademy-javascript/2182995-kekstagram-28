const commentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialListFragment = document.createDocumentFragment();
const commentsLoaded = document.querySelector('.social__comment-count');
const commentsLoadMoreButton = document.querySelector('.social__comments-loader');


const COMMENTS_STEP = 5;
let commentsShown = 0;
let currentComments = [];


// Возвращает шаблон элемента .social__comment с данными comment

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

// Создает комментарий

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


export {renderComments};
export {createTemplateComments};

