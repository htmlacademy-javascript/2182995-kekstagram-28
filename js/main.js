const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT = 3;
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Если отдых, то только такой', 'Если ваша вечеринка не похожа на эту, даже не зовите меня.', 'Хотела как лучше, а получилосб как обычно',
  'Наконец-то отпуск!', 'Отлично провели вечер, спасибо'
];
const NAMES = [
  'Маша', 'Паша', 'Глаша', 'Даша', 'Наташа', 'Степаша', 'Саша'
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const creatIDGenerator = () => {
  let lastGeneratedID = 0;


  return () => {
    lastGeneratedID += 1;
    return lastGeneratedID;
  };
};

const creatCommentID = creatIDGenerator();

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const creatMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENTS_LINES)
  ).join(' ');

const creatComment = () => ({
  id: creatCommentID (),
  avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
  message: creatMessage(),
  name: getRandomArrayElement (NAMES)
});

const createRandomIdFromRangeGenerator = function (min, max) {
  const lastGeneratedID = [];

  return function () {
    let currentID = getRandomInteger(min, max);
    if (lastGeneratedID.length >= (max - min + 1)) {
      return null;
    }
    while (lastGeneratedID.includes(currentID)) {
      currentID = getRandomInteger(min, max);
    }
    lastGeneratedID.push(currentID);
    return currentID;
  };
};
const creatPhotoId = createRandomIdFromRangeGenerator (1,PICTURE_COUNT);

const creatPhotoDescription = () => {
  const randomID = creatPhotoId();
  return ({
    id: randomID,
    URL: 'photos/' + randomID + ' .jpg ',
    Description: getRandomArrayElement(DESCRIPTIONS),
    Likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    Comments: creatComment ()
  });
};

const similarPhotoDescriptions = Array.from({length: PICTURE_COUNT}, creatPhotoDescription);

