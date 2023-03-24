// Функция генерирует случайное целое число

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция генерирует случайное целое число без повтора

const createRandomIdFromRangeGenerator = (min, max) => {
  const lastGeneratedID = [];

  return function() {
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

const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция извлекает случайный элемент из массива

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];


export {getRandomArrayElement};
export {getRandomInteger};
export {createRandomIdFromRangeGenerator};
export {isEscapeKey};

