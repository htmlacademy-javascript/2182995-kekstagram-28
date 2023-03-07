const NAMES = [
  'Маша', 'Паша', 'Глаша', 'Даша', 'Наташа', 'Степаша', 'Саша'
];
const AVATAR_COUNT = 6;
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


import { getRandomInteger} from './util';
import { getRandomArrayElement } from './util';
//  Функция создает id для комментариев
const createIDGenerator = () => {
  let lastGeneratedID = 0;


  return () => {
    lastGeneratedID += 1;
    return lastGeneratedID;
  };
};

const createCommentID = createIDGenerator();

// Функция создает содержание комментария
const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENTS_LINES)
  ).join(' ');


// Функция создает комментарий
const createComment = () => ({
  id: createCommentID(),
  avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement (NAMES)
});

export {createComment};
