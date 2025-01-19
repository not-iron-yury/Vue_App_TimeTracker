import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, HOURS_IN_DAY, START_OF_THE_DAY } from './constants';

export function isPageValid(page) {
  return [PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(page);
}

export function isTimeLineDataValid({ hour }) {
  return typeof hour === 'number' && hour < HOURS_IN_DAY && hour > -1;
}

export function isOptionValid(options) {
  return options.every(({ label, value }) => typeof label === 'string' && typeof value === 'number');
}

export function isTimeLinesValid(timeLines) {
  return timeLines.every(({ hour }) => typeof hour === 'number' && hour < HOURS_IN_DAY && hour >= START_OF_THE_DAY);
}
