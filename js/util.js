const ALERT_SHOW_TIME = 5000;

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


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
  };
};


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomArrayElement};
export {getRandomInteger};
export {createRandomIdFromRangeGenerator};
export {isEscapeKey};
export {showAlert, debounce};

