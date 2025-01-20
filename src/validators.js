import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, HOURS_IN_DAY, START_OF_THE_DAY } from './constants';

export function isPageValid(page) {
  return [PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(page);
}

export function isTimeLineDataValid({ hour }) {
  return isHourValid(hour);
}

export function isHourValid(hour) {
  return isNumber(hour) && hour < HOURS_IN_DAY && hour >= START_OF_THE_DAY;
}

export function isTimeLinesValid(timeLines) {
  return timeLines.every(isTimeLineDataValid); // timeLines.every(obj => isTimeLineDataValid(obj))
}

export function isOptionValid(options) {
  return options.every(({ label, value }) => isString(label) && isNumber(value));
}

export function validateTasks(arr) {
  return arr.every(isTaskValid);
}

export function isTaskValid(task) {
  return isString(task) && task.length > 0;
}

function isNumber(value) {
  return typeof value === 'number';
}

function isString(value) {
  return typeof value === 'string';
}
