import {getRandomInteger} from './util.js';
import {createRandomIdFromRangeGenerator} from './util';
import {getRandomArrayElement} from './util';
import {createComment} from './create-comment';

const PICTURE_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT = 3;
const DESCRIPTIONS = [
  'Если отдых, то только такой', 'Если ваша вечеринка не похожа на эту, даже не зовите меня.', 'Хотела как лучше, а получилосб как обычно',
  'Наконец-то отпуск!', 'Отлично провели вечер, спасибо'
];

const createPhotoId = createRandomIdFromRangeGenerator (1,PICTURE_COUNT);

const createPhotoDescription = () => {
  const randomID = createPhotoId();
  return ({
    id: randomID,
    url: `photos/${randomID}.jpg `,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments: Array.from({length: getRandomInteger(0, COMMENTS_COUNT)}, createComment),
  });
};

const createPhotos = () => Array.from({length: PICTURE_COUNT}, createPhotoDescription);

export {createPhotos};
