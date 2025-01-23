import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, HOURS_IN_DAY, START_OF_THE_DAY } from './constants';

// валидация url имени страницы
export function isPageValid(page) {
  return [PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(page);
}

// валидация дневного таймлайна
export function isTimeLinesValid(timeLines) {
  return timeLines.every(isTimeLineDataValid); // timeLines.every(obj => isTimeLineDataValid(obj))
}

// валидация данных таймлайна
export function isTimeLineDataValid({ hour }) {
  return isHourValid(hour);
}

// валидация значения hour
export function isHourValid(hour) {
  return isNumber(hour) && hour < HOURS_IN_DAY && hour >= START_OF_THE_DAY;
}

// валидация конкретного элемента options (из списка опций для компонента BaseSelect)
export function isOptionValid(options) {
  return options.every(({ label, value }) => isTaskNameValid(label) && (isString(value) || isNumber(value)));
}

// валидация массива тасков
export function validateTasks(arr) {
  return arr.every(isObject);
}

// валидация конекретного таска
export function isTaskValid(task) {
  return isObject(task) && isTaskNameValid(task.name);
}

// валидация имени конекретного таска
export function isTaskNameValid(name) {
  return isString(name) && name.length > 0;
}

// ------------------------------------- //
function isNumber(value) {
  return typeof value === 'number';
}

function isString(value) {
  return typeof value === 'string';
}

function isObject(value) {
  return typeof value === 'object';
}
function isNull(value) {
  return value === null;
}
