const commentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialListFragment = document.createDocumentFragment();

const createTemplateComments = (comments) => {
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

export {createTemplateComments};
